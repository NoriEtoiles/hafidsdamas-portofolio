# Log Keputusan — Website Portofolio damas.my.id

Status: draf, menunggu persetujuan pemilik. Diperbarui 2026-11-24.

Dokumen ini mencatat keputusan penting beserta alasan dan alternatif yang ditolak. Tanggal berasal dari percakapan proyek. Alasan yang pemilik sendiri nyatakan ditulis apa adanya. Alasan yang berasal dari usulan Claude yang kemudian disetujui diberi tanda "(usulan Claude)". Bila alasan atau alternatif tidak pernah dicatat, ditulis "tidak tercatat" dan tidak dikarang. Pemilik bebas mengoreksi.

Status: **Disetujui** (sudah disetujui pemilik pada tanggal tertentu), **Usulan** (belum disetujui), **Tertunda** (menunggu keputusan).

Format entri: ID, tanggal, status, keputusan, alasan, alternatif yang ditolak, sumber.

---

## D-01 Stack tanpa React: HTML, CSS, JavaScript murni plus GSAP, ScrollTrigger, dan Lenis
- **Tanggal dan status:** 2026-11-17 Disetujui (situs statis tanpa build dengan GSAP, ScrollTrigger, Lenis dari CDN). 2026-11-18 Disetujui (tanpa React, asalkan hasilnya setara referensi).
- **Keputusan:** Situs statis tanpa proses build. GSAP, ScrollTrigger, dan Lenis dimuat lewat CDN. Versi dipatok.
- **Alasan:** Syarat dari pemilik: hasilnya harus setara situs referensi. Sejalan dengan Damas Cell yang juga statis, di Vercel, dan dikelola lewat GitHub. Tanpa build, jadi lebih sederhana dikelola dan di-deploy (usulan Claude). GSAP bersama ScrollTrigger dan Lenis cukup untuk gerak yang diinginkan (usulan Claude).
- **Alternatif ditolak atau tidak diambil:**
  - Next.js + Tailwind + Motion + Lenis: rekomendasi awal Claude pada 2026-11-17, tidak disetujui.
  - React: pemilik membolehkan framework apa pun asal dikonfirmasi dulu, lalu memilih tanpa React.
  - Anime.js: tidak dipakai.
  - Spline dan Three.js: hanya bila ada alasan, mulai tanpa 3D.
  - Barba.js: hanya bila nanti multi-halaman.
- **Catatan:** Pemilihan CDN, nomor versi, dan pemeriksaan lisensi belum diputuskan (PRD Q-11). Penyematan nomor versi dan SRI adalah usulan.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18.

## D-02 Palet krem-emas (terang) dan abu-perak (gelap)
- **Tanggal dan status:** 2026-11-17 usulan, 2026-11-18 Disetujui (palet tetap krem-emas dan abu-perak).
- **Keputusan:** Tema terang bernuansa krem dengan aksen emas. Tema gelap bernuansa arang abu-abu dengan aksen perak. Nilai di `DESIGN.md` bagian 3.
- **Alasan:** Pemilik menyukai palet A dengan putih krem dan sedikit keemasan pada tulisan ITSC, menganggap hijau aneh, dan meminta mode gelap abu-abu atau silver.
- **Alternatif ditolak:** Palet bernuansa hijau (dianggap aneh oleh pemilik). Palet B tidak dipilih, meski pemilik sempat menyatakan palet A atau B cocok keduanya.
- **Konsekuensi:** Teks emas terang diubah menjadi `#7A5813` demi kontras (5,77:1), sedangkan `#C9A24B` (2,13:1) hanya untuk isian dan dekorasi.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18, board Versi 3.

## D-03 Konsep editorial dengan interaksi bergaya Swiss
- **Tanggal dan status:** 2026-11-17 Disetujui. Pelaksanaannya di Versi 3 menunggu konfirmasi (PRD Q-12).
- **Keputusan:** Dari tiga konsep mockup, pemilik memilih A (Editorial) dengan interaksi dari B (Indeks Swiss: baris proyek bernomor, hover membalik warna dan menampilkan pratinjau).
- **Alasan:** Pilihan pemilik. Alasan rinci tidak tercatat.
- **Alternatif ditolak:** Konsep B secara utuh dan konsep C (Belah Atelier).
- **Catatan perbedaan:** Pengaruh Swiss yang tampak di Versi 3: huruf display kapital, penomoran (01, 02, 03 pada kartu Skills dan lini masa), dan kisi tegas. Baris proyek bernomor dengan hover pembalik warna tidak ada di Versi 3, yang memakai kartu dengan hover naik. Tata letak Projects mengacu pada rinlayheang.me atas ide pemilik pada 2026-11-18. Perlu konfirmasi bahwa kartu Versi 3 menggantikan keputusan baris Swiss.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18.

## D-04 Satu halaman dengan section berjangkar
- **Tanggal dan status:** 2026-11-17 Disetujui sebagai default.
- **Keputusan:** Satu halaman berisi Beranda, Skills, Karya, Tentang, dan Kontak.
- **Alasan:** Tidak tercatat dari pemilik. Konten saat ini ringkas (satu karya) sehingga tidak butuh halaman terpisah (usulan Claude).
- **Alternatif ditolak:** Multi-halaman dengan transisi Barba.js.
- **Sumber:** percakapan 2026-11-17, board Versi 3.

## D-05 Dial ENERGY 3 / RHYTHM 3 / MOTION 3
- **Tanggal dan status:** 2026-11-17 Disetujui ENERGY 3 / RHYTHM 3 / MOTION 2. 2026-11-19 pemilik menetapkan MOTION 3 untuk dokumen proyek.
- **Keputusan:** ENERGY 3, RHYTHM 3, MOTION 3.
- **Alasan:** Tujuan pemilik adalah kesan pertama yang takjub tetapi tetap elegan. Versi 3 memuat koreografi: navbar berubah bentuk, benang latar mengikuti scroll, nama naik per baris, judul terisi, dan transisi tema lingkaran, yang melampaui sekadar scroll-reveal. Rinciannya di `DESIGN.md` bagian 2.
- **Alternatif ditolak:** MOTION 2 (scroll-reveal dan transisi saja).
- **Catatan:** MOTION 3 di Versi 3 belum memakai parallax atau pin. Semua gerak punya pemicu dan tidak ada yang berulang tanpa henti.
- **Sumber:** percakapan 2026-11-17, instruksi 2026-11-19.

## D-06 Navbar kaca yang ikut scroll, menyatu di hero lalu berpisah
- **Tanggal dan status:** Ide 2026-11-18, Disetujui lewat Versi 3 pada 2026-11-18.
- **Keputusan:** Navbar sticky berbahan kaca bergaya liquid glass. Di hero menyatu dalam satu kapsul, saat di-scroll berpisah menjadi logo, nav, dan tombol. Ada sorotan section aktif yang berpindah.
- **Alasan:** Pemilik meminta navbar pil mengambang bergaya richardmiculob dengan bahan liquid glass ala iOS (referensi ekawahyu-portofolio.vercel.app dan rinlayheang.me) dan nav yang interaktif dengan sorotan section aktif. Perubahan menyatu-lalu-berpisah dirancang di Versi 3 dan disetujui.
- **Alternatif ditolak:** Tidak tercatat.
- **Catatan:** Kaca dibatasi hanya di navbar (antislop membatasi glassmorphism). Kontras teks di atas kaca harus diuji.
- **Sumber:** percakapan 2026-11-18, `DESIGN.md` bagian 7.

## D-07 Transisi tema berbentuk lingkaran dengan fallback langsung
- **Tanggal dan status:** Disetujui 2026-11-18 (lewat Versi 3).
- **Keputusan:** Klik tombol matahari atau bulan memicu lingkaran meluas dari tombol. Peramban tanpa dukungan atau pengguna reduced motion berganti langsung.
- **Alasan:** Permintaan pemilik: terkesan smooth, mengikuti Malaka dan richardmiculob-portfolio.
- **Alternatif ditolak:** Tidak tercatat selain perilaku fallback langsung.
- **Catatan:** Menurut catatan pemilik efek ini hanya berjalan di Chromium. Diuji ulang lintas-peramban (PRD Q-16).
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18.

## D-08 Scroll mulus dengan Lenis di halaman penuh
- **Tanggal dan status:** Disetujui 2026-11-18 (scroll mulus ke section di Versi 3), Lenis disetujui dalam D-01.
- **Keputusan:** Situs asli memakai scroll halaman penuh dengan Lenis. Mockup memakai scroll di dalam bingkai dan scroll buatan hanya untuk pratinjau.
- **Alasan:** Lenis adalah bagian dari stack yang disetujui dan dibutuhkan untuk scroll yang terasa halus.
- **Alternatif ditolak:** Scroll buatan seperti di mockup tidak dibawa ke situs asli.
- **Sumber:** percakapan 2026-11-18, `DESIGN.md` bagian 8.

## D-09 Benang latar yang tergambar mengikuti scroll, disembunyikan di bawah 1180 px
- **Tanggal dan status:** Disetujui 2026-11-18 (benang latar di Versi 3). Perilaku di bawah 1180 px tertunda.
- **Keputusan:** Garis tipis di gutter yang tergambar mengikuti scroll sebagai motif identitas. Disembunyikan di bawah 1180 px.
- **Alasan:** Menuntun mata melewati lima section dan menjadi bagian identitas desain. Alasan menyembunyikannya di bawah 1180 px tidak tercatat (PRD Q-02).
- **Alternatif ditolak:** Latar grid atau titik (antislop melarang tanpa alasan identitas).
- **Sumber:** percakapan 2026-11-18, `DESIGN.md` bagian 9.

## D-10 Font Big Shoulders Display dan Familjen Grotesk (OFL)
- **Tanggal dan status:** Disetujui 2026-11-18 (Versi 3).
- **Keputusan:** Big Shoulders Display (bobot 900, kapital) untuk nama dan judul. Familjen Grotesk untuk teks isi. Keduanya berlisensi OFL.
- **Alasan:** Antislop melarang font default (Inter, Geist, Space Grotesk) tanpa alasan merek. Huruf display yang ramping dan tegas cocok dengan tujuan kesan pertama yang kuat, sedangkan Familjen Grotesk terbaca baik untuk isi (usulan Claude).
- **Alternatif ditolak:** Font default tersebut, dan font sebelumnya di versi awal (tidak tercatat).
- **Catatan:** Sumber berkas font (Google Fonts atau dilayani sendiri) belum diputuskan (PRD Q-04).
- **Sumber:** percakapan 2026-11-18, `DESIGN.md` bagian 4.

## D-11 Ikon skill dari Simple Icons, SQL digambar sendiri (warna ikon digantikan D-21, usulan)
- **Tanggal dan status:** Disetujui 2026-11-18 (Versi 3).
- **Keputusan:** Ikon teknologi dari Simple Icons. SQL digambar sendiri. Ikon matahari dan bulan digambar sendiri.
- **Alasan:** Ikon teknologi membantu pengenalan cepat dan Simple Icons berlisensi CC0 (usulan Claude). SQL tidak memakai ikon merek basis data tertentu.
- **Alternatif ditolak:** Ikon generik AI (dilarang antislop), emoji, dan pustaka ikon seragam tanpa keputusan.
- **Sumber:** percakapan 2026-11-18, `DESIGN.md` bagian 5.

## D-12 Motif identitas sudut terpotong
- **Tanggal dan status:** Disetujui 2026-11-18 (Versi 3).
- **Keputusan:** Sudut kanan bawah dipotong miring 28 px pada foto, kartu Skills, dan tangkapan layar Karya.
- **Alasan:** Antislop meminta satu motif identitas yang spesifik dan berulang agar desain tidak hampa.
- **Alternatif ditolak:** Tidak tercatat.
- **Sumber:** `DESIGN.md` bagian 6.

## D-13 Konten dan tata letak section
- **Tanggal dan status:** Disetujui 2026-11-17 dan 2026-11-18.
- **Keputusan:** Hero menampilkan nama lengkap dengan "Front-end web developer". Skills: 14 skill dalam tiga kelompok. Karya: sementara hanya Damas Cell, proyek lain berupa slot kosong. Tentang: Pendidikan di kiri dan Pengalaman di kanan (referensi ekawahyu-portofolio.vercel.app), dengan pengalaman awal Sekretaris 1 ITSC 2024–2025. Kontak: email dan GitHub.
- **Alasan:** Itu data yang tersedia dan diberikan pemilik. Isi bahasa Indonesia.
- **Alternatif ditolak:** Menampilkan proyek, logo, atau angka karangan sebagai pengisi.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18, `docs/PRD.md` bagian 8.

## D-14 Tidak ada data karangan, materi yang belum ada berupa placeholder berlabel
- **Tanggal dan status:** Disetujui (aturan kerja pemilik), ditegaskan pada 2026-11-19.
- **Keputusan:** Foto, tangkapan layar, logo sekolah dan organisasi, dan proyek berikutnya tetap placeholder berlabel sampai materi asli diserahkan.
- **Alasan:** Situs ini adalah bukti kemampuan dan kejujuran pemilik. Data karangan merusak kepercayaan dan melanggar antislop.
- **Alternatif ditolak:** Foto stok, ilustrasi pengganti, atau proyek contoh.
- **Sumber:** instruksi 2026-11-19, `AGENTS.md`.

## D-15 Set dokumen repo, hanya pemilik yang commit, persetujuan sebelum kerja
- **Tanggal dan status:** 2026-11-17 Disetujui set dokumen. 2026-11-18 Disetujui aturan commit dan persetujuan.
- **Keputusan:** Enam dokumen: `docs/PRD.md`, `docs/SOP-CODING.md`, `DESIGN.md`, `AGENTS.md`, `docs/DECISIONS.md`, `docs/CHANGELOG.md`. Setiap commit ke repo hanya boleh dilakukan pemilik. Agent wajib meminta persetujuan pemilik sebelum perubahan atau pekerjaan terkait proyek.
- **Alasan:** Pemilik ingin PRD yang jelas seperti pada Damas Cell dan SOP coding yang terstruktur, serta mengendalikan riwayat repo dan arah pekerjaan.
- **Alternatif ditolak:** Agent yang commit atau push sendiri, dan kerja tanpa persetujuan.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18.

## D-16 Mockup lebih dulu, Versi 3 sebagai sumber kebenaran
- **Tanggal dan status:** Disetujui 2026-11-18. Ditegaskan 2026-11-19.
- **Keputusan:** Rencana dan mockup ditunjukkan dulu, situs dibangun setelah disetujui. Board "Versi 3" adalah sumber kebenaran desain. Board lain hanya riwayat. Catatan 2026-11-24: sumber kebenaran desain kini board "Versi 4" dan empat board HP (D-22).
- **Alasan:** Aturan kerja pemilik, sama seperti pada proyek Damas Cell.
- **Alternatif ditolak:** Membangun langsung tanpa mockup.
- **Sumber:** percakapan 2026-11-18, instruksi 2026-11-19.

## D-17 Skill agent: antislop wajib, find-skills-checked untuk mencari skill
- **Tanggal dan status:** Disetujui 2026-11-17 dan 2026-11-18.
- **Keputusan:** Skill antislop dipakai dan disimpan agar aktif di sesi berikutnya. `find-skills-checked` dipakai untuk mencari skill pada tiap tugas. Skill baru hanya dipasang setelah pemindaian keamanan dan persetujuan eksplisit pemilik.
- **Alasan:** Pemilik meminta perhatian pada micro-interaction agar tidak terkesan AI slop dan ingin skill baru diperiksa keamanannya.
- **Alternatif ditolak:** Memasang skill tanpa pemindaian atau dengan konfirmasi dilewati.
- **Sumber:** percakapan 2026-11-17 dan 2026-11-18.

## D-18 Tempat kerja: dokumen dan versi pertama di Claude web, boleh pindah ke editor lokal
- **Tanggal dan status:** Disetujui 2026-11-17.
- **Keputusan:** Dokumen dan versi pertama dikerjakan di Claude web. Pemilik boleh pindah ke editor lokal bila poles gerak yang lambat membutuhkannya.
- **Alasan:** Pendekatan gabungan yang diusulkan Claude dan disetujui pemilik. Pemilik sedang menimbang antara Claude web dan Antigravity.
- **Alternatif ditolak:** Tidak ada yang ditolak, hanya dipilih pendekatan gabungan.
- **Sumber:** percakapan 2026-11-17.

## D-19 Teks emas di tema terang memakai `#7A5813`
- **Tanggal dan status:** Disetujui lewat Versi 3, dicatat 2026-11-19.
- **Keputusan:** Warna teks beraksen emas di tema terang diubah dari `#C9A24B` menjadi `#7A5813`.
- **Alasan:** Kontras. `#C9A24B` di atas `#F6F1E6` hanya 2,13:1, sedangkan `#7A5813` mencapai 5,77:1. (Latar kini `#FAF7F0`, lihat D-24: 2,24:1 dan 6,07:1.)
- **Alternatif ditolak:** `#C9A24B` sebagai teks.
- **Sumber:** instruksi 2026-11-19, `DESIGN.md` bagian 3.3.

---

## D-20 Tampilan HP: menu berupa tombol yang membuka panel kaca (disetujui 2026-11-24)
- **Tanggal dan status:** 2026-11-19 Usulan. Disetujui pemilik 2026-11-24.
- **Keputusan yang diusulkan:** Di lebar 390 px, tautan nav diganti satu tombol menu yang menampilkan bagian saat ini dan membuka panel kaca berisi lima tautan. Logo di kiri, tombol tema dan tombol menu di kanan. Benang latar tidak ada. Semua section menjadi satu kolom. Tema, font, palet, motif sudut terpotong, dan animasi tidak berubah.
- **Alasan:** Empat tautan dan tombol Kontak setinggi 40 sampai 48 px tidak muat di satu baris 350 px. Sorotan geser tidak mungkin dipertahankan di lebar itu, jadi bagian aktif ditunjukkan lewat teks pada tombol menu dan penanda di panel. Panel memakai bahan kaca yang sama dengan navbar desktop agar konsisten, dan itu masih dalam batas kaca di navbar saja (`DESIGN.md` bagian 7.3).
- **Alternatif yang tidak diambil:** Bilah tab di bawah layar (tidak sesuai navbar atas yang sudah disetujui). Menu layar penuh (menutup konten, lebih berat). Tautan yang digulir mendatar di navbar (target sentuh sempit dan bagian terpotong).
- **Catatan:** Usulan ini mengikuti pembacaan Claude, bukan permintaan eksplisit pemilik. Rinciannya di PRD FR-14 dan `DESIGN.md` bagian 15. Tablet belum dirancang (Q-18).
- **Sumber:** permintaan pemilik 2026-11-19 untuk mengerjakan mockup HP, board `hp-*.dc.html`.

## D-21 Latar kontur topografi dan warna ikon skill yang tetap di kedua tema (disetujui, direvisi D-22)
- **Tanggal dan status:** 2026-11-19 Usulan atas permintaan pemilik. Disetujui 2026-11-24 bersama revisi D-22. Bagian kotak ikon berwarna tetap digantikan D-22 pada hari yang sama.
- **Keputusan yang diusulkan:** (1) Latar halaman diberi tekstur garis kontur topografi halus, bukan polos. (2) Ikon skill memakai warna merek yang sama di terang dan gelap, di dalam kotak kecil berwarna tetap. Menggantikan pengaturan warna ikon yang berpindah per tema pada D-11 dan Versi 3. Pembuatan di board Versi 4 dan empat board HP. Versi 3 tidak diubah.
- **Alasan:** Pemilik menilai latar terlalu polos dan ingin tekstur seperti referensi (foto 1: kontur topografi, ekawahyu-portofolio). Pemilik juga ingin warna ikon tidak berpindah saat tema berganti, seperti pada referensi richardmiculob-portfolio. Dipilih kontur (foto 1) karena garisnya selaras dengan benang latar. Kotak berwarna tetap dipakai karena warna merek tidak selalu terbaca di kedua latar (kuning JavaScript di atas krem hanya sekitar 1,3:1), sehingga tiap ikon mendapat kotak terang atau gelap sesuai kontras tertinggi.
- **Alternatif yang tidak diambil:** Garis mengalir halus seperti foto 2 dan 3 (bisa dipilih bila kontur kurang pas). Menjadikan semua kotak ikon seragam terang atau seragam gelap (ada ikon yang tidak terbaca). Memberi tekstur dengan grid atau titik (antislop melarang tanpa alasan identitas). Menghilangkan kotak dan mengganti ikon gelap dengan warna netral per tema (itu yang membuat warna berpindah).
- **Konsekuensi:** Di tema gelap sebagian kotak ikon berwarna terang dan menonjol. Kerapatan kontur dan ketebalannya adalah tebakan pertama. `--line` dipakai tanpa token baru karena `--mut` di atas garis tetap lolos 4,5:1.
- **Sumber:** permintaan pemilik 2026-11-19, `DESIGN.md` bagian 5 dan 9b, `docs/PRD.md` FR-16.

## D-22 Revisi Versi 4: kotak skill mengikuti tema, tanpa kartu pembungkus, sorotan kontur, cahaya footer (disetujui 2026-11-24)
- **Tanggal dan status:** 2026-11-19 Usulan atas umpan balik pemilik pada Versi 4. Disetujui pemilik 2026-11-24 (Versi 4 dan empat board HP). Merevisi D-21.
- **Keputusan yang diusulkan:** (1) Latar kontur dipertahankan (pemilik menyatakan sudah sesuai) dan diberi micro-interaction: sorotan kontur berwarna aksen mengikuti kursor. (2) Nama "Hafids" besar di footer diberi sapuan cahaya kiri ke kanan, sekali saat terlihat dan sekali per hover. (3) Kotak ikon skill tidak lagi berwarna tetap terang atau gelap per ikon, tetapi mengikuti tema (terang di tema terang, gelap di tema gelap), dan warna ikon tetap sama. (4) Kartu besar yang membungkus tiap kelompok Skills dihapus, kotak skill langsung di latar halaman. Pembuatan di board Versi 4 dan empat board HP. Versi 3 tidak diubah.
- **Alasan:** Pemilik menilai kotak ikon berlatar berbeda-beda terlihat aneh walaupun tujuannya kontras, dan memberi dua gambar referensi: kotak ikon polos yang mengikuti tema tanpa panel pembungkus. Pemilik juga mengingatkan bahwa latar kontur pada referensi punya micro-interaction saat kursor mendekat, sedangkan Versi 4 awal statis. Ide cahaya pada nama berasal dari pemilik.
- **Alternatif yang tidak diambil:** Mempertahankan kotak berwarna per ikon (ditolak pemilik). Kotak seragam yang tidak mengikuti tema (ikon hitam tidak terbaca di tema gelap, dan tidak sesuai referensi). Sapuan cahaya footer yang berulang tiap beberapa detik (melanggar aturan gerak harus punya pemicu). Pemilik mengonfirmasi 2026-11-23 bahwa sapuan sekali per kemunculan dan per hover sudah cocok (Q-19). Sorotan kontur yang berjalan sendiri tanpa kursor. Menggelapkan ikon kuning supaya lolos 3:1 (mengubah warna logo, ditunda ke Q-19).
- **Konsekuensi:** (a) GitHub, Vercel, dan MikroTik memakai warna tinta tema, jadi tiga ikon itu satu-satunya yang warnanya berpindah antar tema. CSS dan C++ dicerahkan sedikit dari warna merek supaya terbaca di kotak gelap. (b) Tiga ikon kuning (JavaScript, Linux, Google Colab) awalnya di bawah 3:1 di kotak terang. Pemilik membandingkan Versi 4 dan 4b pada 2026-11-23 dan memilih 4b: emas tua `#A29006`, `#B78A03`, `#C18400`, yang lolos 3:1 di kedua kotak. Warna ketiganya tidak lagi sama dengan logo resmi. (c) Radius 16 px pada kotak kecil menyimpang dari motif sudut terpotong. (d) Perilaku persis micro-interaction situs referensi tidak bisa diperiksa dari lingkungan kerja (jaringan diblokir), jadi efeknya dirancang dari deskripsi, bukan disalin. (e) Tinggi tampilan HP berkurang karena panel dihapus.
- **Sumber:** umpan balik pemilik 2026-11-19, `DESIGN.md` bagian 5, 9b, 9c, `docs/PRD.md` FR-05, FR-16, FR-17, Q-19.

## D-23 Keputusan teknis dan alur kerja setelah persetujuan Versi 4 (2026-11-24)
- **Tanggal dan status:** 2026-11-24. Q-15 diputuskan pemilik. Q-03, Q-04, Q-09, Q-10, dan Q-11 dipilih Claude atas arahan pemilik "pilih opsi yang paling cocok", jadi pemilik boleh menggantinya. Q-05 sampai Q-07 (perbaikan kontras Versi 4c) disetujui pemilik pada hari yang sama.
- **Keputusan:** (1) Tema awal mengikuti sistem pengunjung, cadangan terang, pilihan disimpan di `localStorage` dengan `try/catch`. (2) Font dilayani sendiri (woff2 di repo). (3) CDN jsDelivr dengan `gsap@3.15.0` dan `lenis@1.3.27` dipatok persis plus SRI. (4) Judul dan deskripsi meta serta Open Graph tanpa gambar sampai ada gambar asli. (5) Audiens utama: pihak kampus, lalu perekrut magang atau calon klien. (6) Repo https://github.com/NoriEtoiles/hafidsdamas-portofolio, cabang `fitur/<nama>`, pratinjau Vercel, hanya pemilik yang commit, push, dan menggabungkan. (7) Data pendidikan dan pengalaman diverifikasi pemilik (Q-08).
- **Alasan:** Mengikuti sistem menghormati preferensi pengunjung dan menghindari mode gelap tanpa alasan (antislop). Font sendiri menghapus satu pihak ketiga. Versi pustaka yang berumur lebih dari dua minggu menghindari rilis yang baru keluar. SRI mencegah berkas CDN berubah diam-diam.
- **Alternatif yang tidak diambil:** Selalu terang tanpa mengikuti sistem. Google Fonts. Versi terbaru (3.15.1 dan 1.3.28, kurang dari tiga minggu). cdnjs (Lenis tidak dijamin ada di sana). Gambar OG karangan.
- **Konsekuensi:** Lisensi GSAP ("Standard no charge license") perlu dibaca pemilik sebelum rilis. Versi pustaka dicek ulang saat membangun. Tema harus dipasang sebelum render pertama agar tidak berkedip.
- **Sumber:** percakapan 2026-11-24, `docs/PRD.md` Q-03 sampai Q-11 dan Q-15.

---

## D-25 Navbar HP menjadi satu kartu yang menyatu dengan menunya (menggantikan sebagian D-20)
- **Tanggal dan status:** Diminta pemilik 2026-11-27, berdasarkan dua gambar acuan (kartu navbar bersih, dan menu yang terbuka sebagai bagian dari kartu yang sama).
- **Keputusan:** Di HP (640 px ke bawah) navbar berupa satu kartu kaca yang selalu tampil. Menu membuka ke bawah di dalam kartu itu, dengan baris tautan berpemisah garis tipis dan tombol Kontak di dasar. Tombol menu tidak lagi menampilkan nama bagian saat ini (nama itu tetap ada di `aria-label`). Perilaku menyatu dan berpisah saat scroll tidak berlaku di HP.
- **Alasan:** Lebih bersih dan terbaca sebagai satu objek, sesuai acuan pemilik. Empat board HP lainnya (hero, skills, karya, tentang, kontak) disetujui apa adanya, dengan warna terang mengikuti D-24.
- **Yang diganti dari D-20:** panel kaca terpisah di bawah navbar, nama bagian di tombol menu, dan lebur di puncak.
- **Tidak ada logo ubin:** acuan memakai ubin berinisial di samping nama; situs ini tetap memakai kata "HAFIDS" saja. Ubin berhuruf H bisa dipertimbangkan setelah ikon tab selesai (4.10).
- **Sumber:** instruksi 2026-11-27, `DESIGN.md` bagian 15.

## Keputusan tertunda

- **Tampilan HP dan responsif:** HP disetujui (D-20, 2026-11-24). Tablet dan lebar menengah belum dirancang (Q-18). Benang latar di bawah 1180 px mengikuti D-09 sampai ada keputusan.
- **Tema awal dan penyimpanan pilihan** (Q-03), **sumber font** (Q-04), **CDN dan versi pustaka** (Q-11), **alur cabang dan nama repo** (Q-15).

## D-24 Tema terang dibuat lebih pucat (opsi A)
- **Tanggal dan status:** Disetujui pemilik 2026-11-26, setelah membandingkan tiga mockup (krem sekarang, A, B).
- **Keputusan:** Di tema terang `--bg` diubah dari `#F6F1E6` menjadi `#FAF7F0`, `--g1` dari `#E8DFCB` menjadi `#F0E9D8`, dan `--line` dari `#D9D0BC` menjadi `#E0D7C3`. Emas, tinta, token tema gelap, dan semua bentuk tidak berubah.
- **Alasan:** Pemilik ingin tampilan terang yang lebih bersih tanpa kehilangan nuansa hangat krem-emas. Semua kontras tetap lolos dan sedikit membaik (teks isi 16,26:1, teks sekunder 6,62:1, teks emas gelap 6,07:1).
- **Alternatif ditolak:** Putih netral (kehilangan identitas, emas terasa datar, biaya perubahan besar) dan opsi B `#FCFAF5` (kehangatan terlalu tipis).
- **Sumber:** instruksi 2026-11-26, `DESIGN.md` bagian 3.
