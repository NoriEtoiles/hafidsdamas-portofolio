// Tombol ganti tema. Untuk potongan ini perpindahannya langsung; transisi lingkaran
// (View Transitions) ditambahkan di potongan 4.4 dengan fallback langsung ini.
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

export function initTheme() {
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      saveTheme(next);
    });
  });
}
