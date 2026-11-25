// Scroll mulus ke section dengan Lenis, dihubungkan ke ScrollTrigger (DESIGN.md bagian 8, FR-03).
// Pustaka (window.Lenis, window.gsap, window.ScrollTrigger) datang dari CDN. Bila gagal dimuat atau pengguna
// meminta kurangi gerak, tidak ada yang dijalankan di sini dan tautan jangkar bawaan peramban tetap bekerja.

const NAV_OFFSET = 88; // sama dengan --nav-offset
const MS_PER_PX = 0.42;
const MIN_MS = 550;
const MAX_MS = 1200;

// Kubik masuk-keluar
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function initScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lenis = null;
  let tick = null;

  function libsReady() {
    return typeof window.Lenis === "function" && window.gsap && window.ScrollTrigger;
  }

  function start() {
    if (lenis || reduce.matches || !libsReady()) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    lenis = new window.Lenis({ autoRaf: false });
    // Pola standar: ScrollTrigger diperbarui tiap scroll Lenis, Lenis digerakkan ticker GSAP, lag smoothing mati
    lenis.on("scroll", ScrollTrigger.update);
    tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
  }

  function stop() {
    if (!lenis) return;
    window.gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
    tick = null;
  }

  function targetY(id) {
    if (id === "sec-home") return 0;
    const el = document.getElementById(id);
    if (!el) return null;
    return Math.round(el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET);
  }

  document.addEventListener("click", (e) => {
    if (!lenis || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target instanceof Element ? e.target.closest('a[href^="#sec-"]') : null;
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const y = targetY(id);
    if (!el || y === null) return;
    e.preventDefault();
    const distance = Math.abs(y - window.scrollY);
    const duration = Math.min(MAX_MS, Math.max(MIN_MS, distance * MS_PER_PX)) / 1000;
    lenis.scrollTo(y, {
      duration,
      easing: easeInOutCubic,
      onComplete: () => {
        // Fokus pindah ke section tanpa menggulir lagi
        el.focus({ preventScroll: true });
      },
    });
    // Alamat ikut berubah seperti tautan jangkar biasa
    if (window.location.hash !== "#" + id) history.pushState(null, "", "#" + id);
  });

  // Preferensi dibaca ulang bila berubah saat halaman terbuka
  reduce.addEventListener("change", () => (reduce.matches ? stop() : start()));
  start();
}
