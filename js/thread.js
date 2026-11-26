// Benang latar: garis tipis di gutter kiri dan kanan yang menyeberang lewat celah antar section.
// Ujung garis aksen mengikuti scroll (DESIGN.md bagian 9, FR-10). Murni dekoratif.
// Di bawah 1180 px benang disembunyikan CSS dan tidak dihitung. Dengan reduced motion garis tergambar penuh tanpa titik.
//
// Performa: jalur digambar sekali di build(). Saat scroll hanya dua nilai yang berubah per frame:
// tinggi pembungkus aksen (menyingkap garis dari atas, jalur selalu turun sehingga setara dengan menggambar sepanjang jalur)
// dan transform titik. Tidak ada getPointAtLength atau penulisan atribut SVG di jalur scroll.

const GUTTER = 44; // jarak jalur dari tepi halaman
const START_Y = 96;
const GAP_BEFORE = 100; // celah sebelum tiap section tempat jalur menyeberang
const END_GAP = 160; // jalur berakhir sekian px sebelum dasar halaman
const SAMPLES = 360;
const LINE_AT = 0.62; // ujung berada di titik jalur setinggi scrollY + 0,62 × tinggi viewport
const MIN_WIDTH = 1180;
const DOT_HALF = 8; // setengah lebar .thread-dot

export function initThread() {
  const base = document.querySelector(".js-thread-base");
  const line = document.querySelector(".js-thread-line");
  const dot = document.querySelector(".js-thread-dot");
  const reveal = document.querySelector(".js-thread-reveal");
  if (!base || !line || !dot || !reveal) return;
  const accent = line.ownerSVGElement;
  const baseSvg = base.ownerSVGElement;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const wide = window.matchMedia("(min-width: " + MIN_WIDTH + "px)");
  const crossIds = ["sec-skills", "sec-karya", "sec-about", "sec-contact"];

  let samples = null; // { ys, xs, top, bottom }
  let signature = "";
  let shown = -1; // tinggi pembungkus yang sudah dipasang
  let frame = 0;
  let rebuildFrame = 0;

  function build() {
    if (!wide.matches) {
      samples = null;
      signature = "";
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
    // Ukuran yang sama berarti jalur yang sama: lewati kerja ulang (ResizeObserver sering menyala tanpa perubahan berarti)
    const sig = width + "x" + height + ":" + gaps.join(",");
    if (sig === signature && samples) return;
    signature = sig;

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
    baseSvg.style.height = height + "px";
    accent.style.height = height + "px";

    // Titik-titik contoh sepanjang jalur (y selalu naik), supaya x ujung dicari cepat saat scroll tanpa getPointAtLength
    const total = line.getTotalLength();
    const ys = [];
    const xs = [];
    for (let i = 0; i <= SAMPLES; i++) {
      const p = line.getPointAtLength((total * i) / SAMPLES);
      ys.push(p.y);
      xs.push(p.x);
    }
    samples = { ys, xs, top: ys[0], bottom: ys[SAMPLES] };
    shown = -1;
  }

  function draw() {
    frame = 0;
    if (!samples) return;
    if (reduce.matches) {
      // Tergambar penuh, tanpa animasi, dan titik disembunyikan
      if (shown !== -2) {
        reveal.style.height = Math.ceil(samples.bottom + 2) + "px";
        dot.style.transform = "translate3d(-40px, -40px, 0)";
        shown = -2;
      }
      return;
    }
    const y = Math.min(Math.max(window.scrollY + window.innerHeight * LINE_AT, samples.top), samples.bottom);
    const ys = samples.ys;
    let lo = 0;
    let hi = SAMPLES;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (ys[mid] < y) lo = mid + 1;
      else hi = mid;
    }
    const i1 = Math.max(lo, 1);
    const i0 = i1 - 1;
    const span = ys[i1] - ys[i0];
    const t = span > 0 ? (y - ys[i0]) / span : 0;
    const x = samples.xs[i0] + (samples.xs[i1] - samples.xs[i0]) * t;
    const h = Math.round(y);
    if (h !== shown) {
      shown = h;
      reveal.style.height = h + "px";
      dot.style.transform = "translate3d(" + (x - DOT_HALF).toFixed(1) + "px, " + (y - DOT_HALF).toFixed(1) + "px, 0)";
    }
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(draw);
  }

  // Beberapa pemicu (resize, ResizeObserver, font, load) digabung menjadi satu build per frame
  function rebuild() {
    if (rebuildFrame) return;
    rebuildFrame = requestAnimationFrame(() => {
      rebuildFrame = 0;
      build();
      schedule();
    });
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", rebuild);
  reduce.addEventListener("change", () => {
    shown = -1;
    schedule();
  });
  wide.addEventListener("change", rebuild);
  // Tinggi halaman berubah saat font dan gambar termuat atau isi bergeser
  if ("ResizeObserver" in window) new ResizeObserver(rebuild).observe(document.body);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
  window.addEventListener("load", rebuild);
  build();
  schedule();
}
