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

  // Kelas "js" menyembunyikan elemen animasi masuk sampai skrip utama siap (DESIGN.md bagian 10).
  // Dipasang di sini, sebelum render pertama, supaya elemen tidak berkedip tampil lalu hilang.
  // Tidak dipasang bila pengguna meminta kurangi gerak, jadi semua konten langsung tampil.
  var root = document.documentElement;
  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (err) {
    reduce = false;
  }
  if (!reduce) {
    root.classList.add("js");
    // Pengaman: bila skrip utama tidak jalan (galat, berkas gagal dimuat), konten tidak boleh tetap tersembunyi
    setTimeout(function () {
      if (root.getAttribute("data-motion") !== "ready") root.classList.remove("js");
    }, 3000);
  }
})();
