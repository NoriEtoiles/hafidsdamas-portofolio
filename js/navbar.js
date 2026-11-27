// Navbar: menyatu dan berpisah menurut scroll, serta sorotan section aktif (DESIGN.md bagian 7).
// Di lebar HP (640 px ke bawah) juga mengatur menu buka-tutup di dalam kartu navbar (DESIGN.md bagian 15).
// Tanpa skrip ini navbar tetap berfungsi sebagai tautan jangkar biasa, dalam keadaan menyatu.

const SPLIT_ABOVE = 40; // berpisah bila scroll melebihi ini (px)
const MERGE_BELOW = 12; // menyatu lagi hanya bila scroll di bawah ini (px)
const ACTIVE_LINE = 0.4; // tepi atas section melewati 40% tinggi viewport
const LOCK_IDLE_MS = 160; // jeda tanpa scroll sebelum kunci tujuan klik dilepas
const MOBILE_MAX = 640; // lebar HP; harus sama dengan media query di css/components.css

export function initNavbar() {
  const bar = document.querySelector(".js-nav-bar");
  const group = document.querySelector(".nav-links");
  const links = Array.from(document.querySelectorAll(".js-nav-link"));
  const contacts = Array.from(document.querySelectorAll(".js-nav-contact"));
  const contact = contacts[0] || null;
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".js-nav-toggle");
  const scrim = document.querySelector(".js-nav-scrim");
  const mobile = window.matchMedia("(max-width: " + MOBILE_MAX + "px)");
  if (!bar || !group || links.length === 0) return;

  // Penanda aktif dibuat di sini: tanpa skrip tidak ada sorotan, dan tidak ada elemen kosong di HTML
  const pill = document.createElement("span");
  pill.className = "nav-pill";
  pill.setAttribute("aria-hidden", "true");
  group.prepend(pill);

  const idOf = (a) => a.getAttribute("href").slice(1);
  const navIds = links.map(idOf);
  const contactId = contact ? idOf(contact) : null;
  const sectionIds = contactId ? [...navIds, contactId] : navIds;

  let split = false;
  let activeId = null;
  let lockedId = null;
  let lockTimer = 0;

  // ---- Menyatu dan berpisah, dengan histeresis ----
  function updateSplit() {
    const y = window.scrollY;
    if (!split && y > SPLIT_ABOVE) split = true;
    else if (split && y < MERGE_BELOW) split = false;
    bar.classList.toggle("is-split", split);
  }

  // ---- Sorotan aktif ----
  function placePill() {
    const link = links.find((a) => idOf(a) === activeId);
    if (!link) {
      pill.classList.remove("is-visible");
      return;
    }
    pill.style.width = link.offsetWidth + "px";
    pill.style.height = link.offsetHeight + "px";
    pill.style.transform = "translate(" + link.offsetLeft + "px," + link.offsetTop + "px)";
    pill.classList.add("is-visible");
  }

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    for (const a of links) {
      if (idOf(a) === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    }
    for (const c of contacts) {
      c.dataset.on = id === contactId ? "true" : "false";
      if (id === contactId) c.setAttribute("aria-current", "true");
      else c.removeAttribute("aria-current");
    }
    placePill();
    syncToggleLabel();
  }

  // ---- Menu HP ----
  function sectionName(id) {
    const a = links.find((l) => idOf(l) === id) || contacts.find((c) => idOf(c) === id);
    return a ? a.textContent.trim() : "";
  }
  function syncToggleLabel() {
    if (!toggle) return;
    const open = toggle.getAttribute("aria-expanded") === "true";
    const name = sectionName(activeId);
    toggle.setAttribute("aria-label", (open ? "Tutup menu" : "Buka menu") + (name ? ", bagian saat ini: " + name : ""));
  }
  function setMenu(open) {
    if (!toggle) return;
    bar.classList.toggle("is-open", open);
    if (header) header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    syncToggleLabel();
  }
  const isOpen = () => bar.classList.contains("is-open");
  if (toggle) {
    toggle.addEventListener("click", (e) => {
      const opening = !isOpen();
      setMenu(opening);
      // Dibuka dengan keyboard: fokus pindah ke tautan pertama (e.detail === 0 untuk Enter dan Spasi)
      if (opening && e.detail === 0) {
        const first = bar.querySelector(".nav-link");
        if (first) first.focus();
      }
    });
    if (scrim) scrim.addEventListener("click", () => setMenu(false));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });
    // Layar melebar ke desktop: menu tertutup supaya keadaan HP tidak terbawa
    mobile.addEventListener("change", () => setMenu(false));
  }

  function detectActive() {
    const doc = document.documentElement;
    if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) return contactId || sectionIds[sectionIds.length - 1];
    const line = window.innerHeight * ACTIVE_LINE;
    let found = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) found = id;
    }
    return found;
  }

  function onScroll() {
    updateSplit();
    if (lockedId) {
      // Selama perpindahan ke tujuan klik, sorotan tetap di tujuan; kunci lepas setelah scroll berhenti
      clearTimeout(lockTimer);
      lockTimer = setTimeout(release, LOCK_IDLE_MS);
      return;
    }
    setActive(detectActive());
  }

  function release() {
    lockedId = null;
    setActive(detectActive());
  }

  // Klik tautan jangkar ke section: sorotan langsung ke tujuan
  document.addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest('a[href^="#sec-"]') : null;
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!sectionIds.includes(id)) return;
    if (isOpen()) setMenu(false); // mengetuk tautan di menu HP menutup menu, lalu scroll berjalan
    lockedId = id;
    setActive(id);
    clearTimeout(lockTimer);
    lockTimer = setTimeout(release, LOCK_IDLE_MS * 4);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateSplit();
    placePill();
  });
  // Ukuran tautan bisa berubah saat font termuat atau zoom berganti
  if ("ResizeObserver" in window) new ResizeObserver(placePill).observe(group);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placePill);

  // Keadaan awal tanpa transisi, lalu aktifkan transisi pil
  updateSplit();
  setActive(detectActive());
  placePill();
  requestAnimationFrame(() => requestAnimationFrame(() => pill.classList.add("is-ready")));
}
