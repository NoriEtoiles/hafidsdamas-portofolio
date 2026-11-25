// Dipasang di <head> tanpa defer supaya tema sudah benar sebelum render pertama (tidak berkedip).
// Urutan pilihan: tema yang disimpan pengunjung, lalu pengaturan sistem, lalu terang (D-23, Q-03).
(function () {
  var STORAGE_KEY = "portofolio-tema";
  var theme = null;

  // localStorage bisa melempar galat bila diblokir (mode privat, kebijakan peramban), jadi dibungkus try/catch
  try {
    theme = window.localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    theme = null;
  }

  if (theme !== "light" && theme !== "dark") {
    theme = "light";
    try {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
    } catch (err) {
      theme = "light";
    }
  }

  document.documentElement.setAttribute("data-theme", theme);
})();
