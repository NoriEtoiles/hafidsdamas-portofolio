// Tombol "Salin email". Pesan sukses hanya muncul bila penyalinan benar berhasil (FR-08).
const FEEDBACK_MS = 2000;

async function copyToClipboard(text) {
  // Jalur utama: Clipboard API (butuh konteks aman dan izin)
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      /* lanjut ke cadangan */
    }
  }
  // Cadangan: execCommand pada elemen sementara. Hasilnya boolean yang jujur.
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.setAttribute("aria-hidden", "true");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (err) {
    ok = false;
  }
  document.body.removeChild(field);
  return ok;
}

export function initContact() {
  const button = document.querySelector("[data-copy-email]");
  const status = document.querySelector("[data-copy-status]");
  if (!button) return;

  const idleLabel = button.textContent;
  let timer = 0;

  button.addEventListener("click", async () => {
    const ok = await copyToClipboard(button.getAttribute("data-copy-email"));
    button.textContent = ok ? "Tersalin" : "Gagal menyalin";
    if (status) {
      status.textContent = ok
        ? "Email tersalin"
        : "Gagal menyalin. Salin alamat email secara manual.";
    }
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      button.textContent = idleLabel;
      if (status) status.textContent = "";
    }, FEEDBACK_MS);
  });
}
