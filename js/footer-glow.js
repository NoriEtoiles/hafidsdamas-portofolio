// Cahaya "Hafids" di footer: satu sapuan saat footer terlihat (separuh kata), lalu sapuan ulang oleh hover (CSS).
// Dengan reduced motion tidak ada yang dijalankan: kata tampil statis.

export function initFooterGlow() {
  const word = document.querySelector(".js-footer-glow");
  const clip = word && word.parentElement;
  if (!word || !clip || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  word.addEventListener("animationend", () => word.classList.remove("is-go"));
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        word.classList.add("is-go");
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(clip);
}
