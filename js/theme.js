// Tombol ganti tema. Di peramban yang mendukung View Transitions dan bila pengguna tidak meminta
// kurangi gerak, tampilan baru terungkap sebagai lingkaran dari pusat tombol (DESIGN.md bagian 11).
// Selain itu tema berganti langsung. Gaya lingkarannya ada di css/motion.css.
const STORAGE_KEY = "portofolio-tema";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function saveTheme(theme) {
  // Bila penyimpanan diblokir, situs tetap berfungsi dan tiap kunjungan memakai tema sistem
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (err) {
    /* sengaja diabaikan */
  }
}

function applyTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  saveTheme(next);
}

export function initTheme() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  let switching = false; // klik saat transisi masih berjalan diabaikan
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (switching) return;
      const next = currentTheme() === "dark" ? "light" : "dark";
      // Preferensi dibaca saat klik, jadi perubahan saat halaman terbuka tetap dihormati
      if (typeof document.startViewTransition !== "function" || reduce.matches) {
        applyTheme(next);
        return;
      }
      // Asal lingkaran = pusat tombol yang diklik (juga saat diaktifkan dengan keyboard). Jari-jari = jarak ke sudut
      // terjauh layar dalam piksel, supaya lingkaran pasti menutup seluruh layar di HP maupun desktop.
      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const root = document.documentElement;
      root.style.setProperty("--ox", x + "px");
      root.style.setProperty("--oy", y + "px");
      root.style.setProperty("--or", radius + "px");
      // Selama transisi semua transisi CSS dimatikan (kelas ini), agar tangkapan "baru" tidak merekam warna setengah
      // jalan atau navbar yang sedang bergerak. Pola ini dipelajari dari richardmiculob-portfolio (2026-11-28).
      root.classList.add("is-theme-switching");
      switching = true;
      const transition = document.startViewTransition(() => applyTheme(next));
      const done = () => {
        root.classList.remove("is-theme-switching");
        switching = false;
      };
      transition.finished.then(done, done);
    });
  });
}
