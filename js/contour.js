// Sorotan kontur di bawah kursor (DESIGN.md bagian 9b, D-22). Hanya untuk perangkat dengan hover dan penunjuk halus;
// di layar sentuh lapisan sorotan tidak dipasang. Posisi dihitung terhadap dokumen supaya tetap di bawah kursor saat scroll.

export function initContour() {
  const layer = document.querySelector(".js-contour-highlight");
  if (!layer) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let x = null;
  let y = null; // koordinat kursor di viewport
  let frame = 0;

  function place() {
    frame = 0;
    if (x === null) return;
    layer.style.setProperty("--mx", x + "px");
    layer.style.setProperty("--my", y + window.scrollY + "px");
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(place);
  }

  document.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType === "touch") return;
      x = e.clientX;
      y = e.clientY;
      layer.classList.add("is-on");
      schedule();
    },
    { passive: true }
  );
  // Saat halaman bergulir tanpa kursor bergerak, sorotan tetap di bawah kursor
  window.addEventListener("scroll", schedule, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => layer.classList.remove("is-on"));
}
