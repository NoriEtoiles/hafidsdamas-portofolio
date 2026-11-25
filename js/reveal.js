// Animasi masuk: dipicu sekali per elemen oleh IntersectionObserver (ambang 0,12), lalu elemen dilepas
// dari pengamatan (DESIGN.md bagian 10, FR-11). Gaya awalnya ada di css/motion.css dan hanya aktif
// bila kelas "js" terpasang di akar halaman (js/theme-init.js) dan gerak tidak dikurangi.
// Tanpa skrip, atau dengan reduced motion, semua konten langsung tampil penuh.

const THRESHOLD = 0.12;
const SETTLE_MS = 1300; // lebih lama dari animasi terlama (1,1 detik + jeda)

export function initReveal() {
  const root = document.documentElement;
  const targets = Array.from(document.querySelectorAll(".js-hero-name, .js-reveal, .js-fill"));

  // Tanpa kelas "js" (reduced motion atau pengaman) tidak ada yang disembunyikan, jadi tidak ada yang perlu dipicu
  if (!root.classList.contains("js") || targets.length === 0) {
    root.setAttribute("data-motion", "ready");
    return;
  }

  function show(el) {
    el.classList.add("is-in");
    // Setelah selesai, gaya sembunyi dilepas supaya hover bawaan elemen (mis. tombol) bekerja lagi
    setTimeout(() => el.classList.add("is-done"), SETTLE_MS);
  }

  if (!("IntersectionObserver" in window)) {
    targets.forEach(show);
    root.setAttribute("data-motion", "ready");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { threshold: THRESHOLD }
  );
  targets.forEach((el) => observer.observe(el));
  root.setAttribute("data-motion", "ready");
}
