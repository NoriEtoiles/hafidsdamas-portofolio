# Changelog — Website Portofolio damas.my.id

Status: format awal. Diperbarui 2026-11-24.

Format mengacu pada Keep a Changelog. Belum ada rilis, jadi entri dikelompokkan di bagian "Belum dirilis" dan diberi tanggal. Setelah rilis pertama, bagian itu diganti dengan judul berisi nomor versi dan tanggal, misalnya `## [1.0.0] — 2026-12-01`. Pemilik yang memutuskan nomor versi dan kapan rilis.

Aturan penulisan:
- Hanya pemilik yang commit dan push. Entri ditulis agent atau pemilik, dan baru berlaku setelah pemilik commit.
- Satu butir per perubahan, dalam kalimat utuh bahasa Indonesia, dengan ID kebutuhan (FR atau NFR) atau keputusan (D) bila ada.
- Jenis: **Ditambahkan**, **Diubah**, **Diperbaiki**, **Dihapus**, **Catatan selisih dari mockup**.
- Hal yang belum selesai atau berbeda dari mockup dicatat di "Catatan selisih dari mockup", tidak disembunyikan. Daftar lengkapnya ada di `docs/PRD.md` bagian 5.
- Penggantian placeholder dengan materi asli (foto, tangkapan layar, logo, proyek) dicatat sebagai "Diubah".

## [Belum dirilis]

### Ditambahkan
- 2026-11-25: Potongan 4.5 (FR-03). Scroll mulus ke section dengan Lenis 1.3.27 yang dihubungkan ke GSAP 3.15.0 dan ScrollTrigger (jsDelivr, versi dipatok, SRI), offset 88 px, durasi 550 sampai 1200 ms, fokus pindah ke section setelah tiba, berhenti saat roda diputar, dimatikan pada `prefers-reduced-motion: reduce`, dan fallback ke scroll bawaan bila pustaka gagal (`js/scroll.js`, `index.html`, `css/motion.css`).
- 2026-11-25: Status hover dan active untuk logo dan tombol tema (Q-13, mockup disetujui pemilik): `css/components.css`, `css/motion.css`, `DESIGN.md` bagian 12.
- 2026-11-25: Potongan 4.4 (FR-09). Transisi tema berbentuk lingkaran dengan View Transitions dari pusat tombol, 0,7 detik, fallback langsung bila API tidak ada atau gerak dikurangi (`js/theme.js`, `css/motion.css`).
- 2026-11-25: Potongan 4.3 (FR-01). Navbar sticky dengan bahan kaca (`backdrop-filter: blur(20px) saturate(1.7)`), kapsul tunggal saat menyatu (`min(744px,100%)`) dan bagian-bagian terpisah saat scroll melebihi 40 px (`min(1144px,100%)`, kembali menyatu di bawah 12 px), penanda aktif berpindah yang diukur dari ukuran tautan, `aria-current="true"`, dan `data-on` pada Kontak (`js/navbar.js`, `css/components.css`, `css/layout.css`, `css/motion.css`). Transisi dimatikan pada `prefers-reduced-motion: reduce`.
- 2026-11-25: Potongan 4.1 dan 4.2. Kerangka HTML semantik (`index.html`), token warna terang dan gelap serta token struktural (`css/tokens.css`, `DESIGN.md` bagian 3.5), font Big Shoulders Display 900 dan Familjen Grotesk 400, 500, 600 dilayani sendiri (`assets/fonts/`, lisensi OFL disertakan), gaya dasar, lima section statis dengan teks dari PRD bagian 8, ganti tema langsung dengan penyimpanan `localStorage` yang aman (`js/theme-init.js`, `js/theme.js`), dan tombol "Salin email" dengan umpan balik jujur (`js/contact.js`). Foto, tangkapan layar, dan proyek berikutnya tetap placeholder berlabel. Diuji di Chrome tanpa kepala (FR-08, FR-09, FR-13, D-23). Selisih dari mockup di `docs/PRD.md` bagian 5 butir 19 sampai 26.
- 2026-11-24: Board "Versi 4c" di kanvas dengan tiga usulan perbaikan kontras (lini masa, gradasi ITSC, penanda navbar aktif di tema terang). Disetujui pemilik pada hari yang sama dan diterapkan ke Versi 4 dan keempat board HP (PRD Q-05 sampai Q-07, `DESIGN.md` bagian 3.4). Selisih kecil: baris aktif menu HP tema terang berisian aksen `#7A5813`, bukan tinta.
- 2026-11-24: D-23 (keputusan teknis: tema awal, font sendiri, CDN dan versi pustaka, metadata, alur repo) dan jawaban Q-01, Q-02, Q-03, Q-04, Q-08, Q-09, Q-10, Q-11, dan Q-15 di PRD.
- 2026-11-19: Revisi Versi 4 di kanvas: sorotan kontur yang mengikuti kursor, cahaya kiri ke kanan pada nama "Hafids" di footer, kotak skill yang mengikuti tema, dan penghapusan kartu pembungkus kelompok Skills. Empat board HP disamakan. Belum disetujui (FR-05, FR-16, FR-17, D-22, `DESIGN.md` bagian 5, 9b, 9c).
- 2026-11-19: Board Versi 4 di kanvas (di bawah Versi 3, yang tidak diubah): latar kontur topografi dan warna ikon skill yang sama di terang dan gelap. Empat board HP disamakan. Belum disetujui (FR-16, D-21, `DESIGN.md` bagian 5 dan 9b).
- 2026-11-19: Usulan tampilan HP di kanvas mockup sebagai empat board terpisah (lebar 390: terang, menu terbuka, gelap, halaman penuh), di sebelah kanan Versi 3 yang tidak diubah. Belum disetujui (FR-14, D-20, Q-01). Rincian di `DESIGN.md` bagian 15. Diuji di Chromium tanpa kepala: tanpa scroll horizontal di 320, 360, 390 px dan menu berfungsi.
- 2026-11-19: Enam dokumen awal proyek: `docs/PRD.md`, `docs/SOP-CODING.md`, `DESIGN.md`, `AGENTS.md`, `docs/DECISIONS.md`, dan `docs/CHANGELOG.md`. Semuanya berstatus draf dan menunggu persetujuan pemilik. Belum ada kode situs.

### Diubah
- 2026-11-25: Alfa `--glass` tema gelap dinaikkan dari 0,55 ke 0,70 atas persetujuan pemilik, supaya teks navbar mencapai 4,5:1 (4,62:1) di atas latar terburuk (`css/tokens.css`, `DESIGN.md` bagian 3).
- 2026-11-25: Tinggi tautan nav diubah dari 44 px ke 40 px sesuai `DESIGN.md` bagian 7.1; header berubah dari statis ke sticky.
- 2026-11-25: `DESIGN.md` bagian 3.5 ditambahkan untuk mencatat token struktural (`--font-display`, `--font-body`, `--gutter`, `--page-max`, `--cut`, `--nav-offset`, `--hover-wash`) sesuai aturan token di `docs/SOP-CODING.md` bagian 3. Tidak ada nilai desain yang berubah.
- 2026-11-24: Pemilik menyetujui board Versi 4 dan empat board HP. Versi 4 menggantikan Versi 3 sebagai sumber kebenaran desain (diperbarui di `AGENTS.md`, `DESIGN.md`, `docs/PRD.md`, `docs/SOP-CODING.md`, `docs/DECISIONS.md`). FR-14 (bagian HP), FR-16, dan FR-17 menjadi kebutuhan wajib. Pemilik memverifikasi data pendidikan dan pengalaman (Q-08).
- 2026-11-23: Pemilik mengonfirmasi sapuan cahaya footer tetap seperti mockup (sekali saat terlihat, sekali per hover). Q-19 ditutup.
- 2026-11-23: Tiga ikon kuning di Versi 4 dan empat board HP diganti emas tua (`#A29006`, `#B78A03`, `#C18400`) atas keputusan pemilik setelah membandingkan Versi 4 dan 4b. Lolos 3:1 di kedua tema (D-22, `DESIGN.md` bagian 5).
- 2026-11-19: Warna ikon skill di Versi 4 direvisi: kotak mengikuti tema, bukan warna tetap per ikon (D-22 merevisi D-21). GitHub, Vercel, dan MikroTik memakai warna tinta tema. CSS dan C++ dicerahkan agar terbaca di kotak gelap. Kartu besar pembungkus kelompok Skills dihapus.
- 2026-11-19: Paragraf hero di `docs/PRD.md` bagian 8.1 diganti menjadi lebih santai dan personal atas komentar tinjauan pemilik (FR-04, PRD bagian 5 butir 17). Board Versi 3 belum diperbarui.

### Diperbaiki
- Belum ada.

### Dihapus
- Belum ada.

### Catatan selisih dari mockup
- 2026-11-25: Butir 22 dan 30 ditutup; butir 32 (hash SRI dihitung dari paket npm, belum dicocokkan ke jsDelivr) dan 33 (nilai scroll belum dinilai pemilik) ditambahkan di `docs/PRD.md` bagian 5.
- 2026-11-25: Butir 31 di `docs/PRD.md` bagian 5 (lingkaran hanya diuji di Chromium); butir 29 ditutup; butir 30 (Q-13) menunggu persetujuan mockup.
- 2026-11-25: Potongan 4.3 menambah butir 27 sampai 30 di `docs/PRD.md` bagian 5 (posisi penanda diukur, kontras navbar gelap terbuka, Q-13).
- 2026-11-23: Warna tiga ikon kuning (JavaScript, Linux, Google Colab) di Versi 4 berbeda dari logo resminya, dipilih pemilik demi kontras. Perilaku micro-interaction situs referensi tidak diverifikasi karena situsnya tidak bisa dibuka dari lingkungan kerja.
- 2026-11-19 (diselesaikan 2026-11-24, Versi 4 disetujui): Versi 4 menyimpang dari Versi 3 yang disetujui dalam dua hal (latar kontur, warna ikon tetap) sampai pemilik menyetujuinya. Sampai itu terjadi, sumber kebenaran desain tetap Versi 3 (D-21).
- 2026-11-19 (HP disetujui 2026-11-24): Tampilan HP dan responsif tidak ada di Versi 3. Rancangan HP ada di board terpisah. Tablet belum dirancang (PRD FR-14, Q-01, Q-18).
- 2026-11-19: Benang latar disembunyikan di bawah 1180 px (FR-10, Q-02).
- 2026-11-19: Efek lingkaran pada ganti tema hanya di Chromium, peramban lain berganti langsung (FR-09, Q-16).
- 2026-11-19: Warna teks emas terang diubah menjadi `#7A5813` demi kontras (D-19).
- 2026-11-19: Mockup memakai scroll di dalam bingkai dan scroll buatan, situs asli memakai scroll halaman dan Lenis (FR-03, FR-10).
- 2026-11-19: Foto, tangkapan layar, logo sekolah dan organisasi, serta proyek berikutnya masih placeholder (FR-13).
- 2026-11-19: Tiga temuan kontras pada mockup belum diputuskan: lini masa yang diredupkan, gradasi ITSC, dan sorotan navbar aktif di tema terang (Q-05 sampai Q-07).
- 2026-11-19: Paragraf hero di PRD sudah berbeda dari teks board Versi 3 sampai board diperbarui (Q-17).

## Riwayat desain sebelum ada kode

Dicatat dari percakapan proyek, bukan dari commit.

- 2026-11-17: Tiga mockup konsep dibuat: A (Editorial), B (Indeks Swiss), C (Belah Atelier). Pemilik memilih konsep A dengan interaksi dari B. Dial awal ENERGY 3 / RHYTHM 3 / MOTION 2 dan stack statis dengan GSAP, ScrollTrigger, dan Lenis disetujui (D-01, D-03, D-05).
- 2026-11-17: Usulan palet krem-emas dan arang-perak diajukan di kanvas mockup, dengan revisi: hijau dihilangkan, mode gelap abu-abu atau silver (D-02).
- 2026-11-18: Ide desain baru dari pemilik: transisi tema lingkaran, navbar kaca dengan sorotan aktif, hero dan layout Skills dan Projects mengacu pada referensi (D-06, D-07).
- 2026-11-18: Artboard mockup Versi 2 disetujui. Palet krem-emas dan abu-perak ditegaskan, stack tanpa React disetujui (D-01, D-02).
- 2026-11-18: Desain Versi 3 disetujui: navbar kaca yang menyatu lalu berpisah, scroll mulus, benang latar, font Big Shoulders Display dan Familjen Grotesk, ikon skill Simple Icons, motif sudut terpotong (D-06 sampai D-12).
- 2026-11-19: Enam dokumen dasar ditulis (lihat bagian "Ditambahkan").

## Templat entri berikutnya

```
## [Belum dirilis]

### Ditambahkan
- YYYY-MM-DD: <apa yang ditambahkan> (FR-xx).

### Diubah
- YYYY-MM-DD: <apa yang berubah dan alasannya> (D-xx).

### Diperbaiki
- YYYY-MM-DD: <apa yang diperbaiki> (FR-xx).

### Catatan selisih dari mockup
- YYYY-MM-DD: <hal yang belum selesai atau berbeda dari mockup>.
```
