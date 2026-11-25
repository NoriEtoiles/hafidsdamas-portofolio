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
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      // Preferensi dibaca saat klik, jadi perubahan saat halaman terbuka tetap dihormati
      if (typeof document.startViewTransition !== "function" || reduce.matches) {
        applyTheme(next);
        return;
      }
      // Asal lingkaran = pusat tombol yang diklik, juga saat diaktifkan dengan keyboard
      const rect = button.getBoundingClientRect();
      const root = document.documentElement;
      root.style.setProperty("--ox", rect.left + rect.width / 2 + "px");
      root.style.setProperty("--oy", rect.top + rect.height / 2 + "px");
      document.startViewTransition(() => applyTheme(next));
    });
  });
}
