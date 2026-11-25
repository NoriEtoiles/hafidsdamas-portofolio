// Navbar: menyatu dan berpisah menurut scroll, serta sorotan section aktif (DESIGN.md bagian 7).
// Tanpa skrip ini navbar tetap berfungsi sebagai tautan jangkar biasa, dalam keadaan menyatu.

const SPLIT_ABOVE = 40; // berpisah bila scroll melebihi ini (px)
const MERGE_BELOW = 12; // menyatu lagi hanya bila scroll di bawah ini (px)
const ACTIVE_LINE = 0.4; // tepi atas section melewati 40% tinggi viewport
const LOCK_IDLE_MS = 160; // jeda tanpa scroll sebelum kunci tujuan klik dilepas

export function initNavbar() {
  const bar = document.querySelector(".js-nav-bar");
  const group = document.querySelector(".nav-links");
  const links = Array.from(document.querySelectorAll(".js-nav-link"));
  const contact = document.querySelector(".js-nav-contact");
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
    if (contact) contact.dataset.on = id === contactId ? "true" : "false";
    placePill();
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
