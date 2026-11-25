// Benang latar: garis tipis di gutter kiri dan kanan yang menyeberang lewat celah antar section.
// Ujung garis aksen mengikuti scroll (DESIGN.md bagian 9, FR-10). Murni dekoratif.
// Di bawah 1180 px benang disembunyikan CSS dan tidak dihitung. Dengan reduced motion garis tergambar penuh tanpa titik.

const GUTTER = 44; // jarak jalur dari tepi halaman
const START_Y = 96;
const GAP_BEFORE = 100; // celah sebelum tiap section tempat jalur menyeberang
const END_GAP = 160; // jalur berakhir sekian px sebelum dasar halaman
const SAMPLES = 360;
const LINE_AT = 0.62; // ujung berada di titik jalur setinggi scrollY + 0,62 × tinggi viewport
const MIN_WIDTH = 1180;

export function initThread() {
  const svg = document.querySelector(".thread");
  const base = document.querySelector(".js-thread-base");
  const line = document.querySelector(".js-thread-line");
  const dot = document.querySelector(".js-thread-dot");
  if (!svg || !base || !line || !dot) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wide = window.matchMedia("(min-width: " + MIN_WIDTH + "px)");
  const crossIds = ["sec-skills", "sec-karya", "sec-about", "sec-contact"];

  let samples = null; // { total, ys, ls }
  let frame = 0;

  function build() {
    if (!wide.matches) {
      samples = null;
      return;
    }
    const width = document.documentElement.clientWidth;
    const height = document.body.offsetHeight;
    const left = GUTTER;
    const right = width - GUTTER;
    const gaps = [];
    for (const id of crossIds) {
      const el = document.getElementById(id);
      if (el) gaps.push(Math.round(el.getBoundingClientRect().top + window.scrollY - GAP_BEFORE));
    }
    let d = "M" + right + " " + START_Y;
    let side = right;
    for (const g of gaps) {
      const to = side === right ? left : right;
      d += " L" + side + " " + (g - 50) + " C" + side + " " + g + " " + to + " " + g + " " + to + " " + (g + 50);
      side = to;
    }
    d += " L" + side + " " + (height - END_GAP);
    base.setAttribute("d", d);
    line.setAttribute("d", d);

    // Titik-titik contoh sepanjang jalur, supaya posisi ujung dicari cepat saat scroll
    const total = line.getTotalLength();
    const ys = [];
    const ls = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const l = (total * i) / SAMPLES;
      ls.push(l);
      ys.push(line.getPointAtLength(l).y);
    }
    samples = { total, ys, ls };
  }

  function draw() {
    frame = 0;
    if (!samples) return;
    if (reduce.matches) {
      // Tergambar penuh, tanpa animasi, dan titik disembunyikan
      line.setAttribute("stroke-dashoffset", "0");
      dot.setAttribute("cx", "-20");
      dot.setAttribute("cy", "-20");
      return;
    }
    const y = window.scrollY + window.innerHeight * LINE_AT;
    let lo = 0;
    let hi = SAMPLES;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (samples.ys[mid] < y) lo = mid + 1;
      else hi = mid;
    }
    const length = samples.ls[Math.min(lo, SAMPLES)];
    line.setAttribute("stroke-dashoffset", String(1000 - (1000 * length) / samples.total));
    const p = line.getPointAtLength(length);
    dot.setAttribute("cx", String(p.x));
    dot.setAttribute("cy", String(p.y));
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(draw);
  }

  function rebuild() {
    build();
    schedule();
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", rebuild);
  reduce.addEventListener("change", schedule);
  wide.addEventListener("change", rebuild);
  // Tinggi halaman berubah saat font dan gambar termuat atau isi bergeser
  if ("ResizeObserver" in window) new ResizeObserver(rebuild).observe(document.body);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
  window.addEventListener("load", rebuild);
  rebuild();
}
