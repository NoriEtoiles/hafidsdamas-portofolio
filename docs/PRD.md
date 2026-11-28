# PRD — Website Portofolio damas.my.id

Status: draf, menunggu persetujuan pemilik. Diperbarui 2026-11-24.
Pemilik: Hafids Damas Arya Sutha Ramadhan.
Sumber kebenaran desain: board "Versi 4" (`project/v4.dc.html`) dan empat board HP, disetujui pemilik 2026-11-24, di https://claude.ai/artifact/R3aTqZWsbnFhEifaUp4zoX, dirinci di `DESIGN.md`. Perbaikan kontras Versi 4c disetujui 2026-11-24 dan sudah menjadi isi Versi 4 dan board HP. Board lain hanya riwayat. Repo kode: https://github.com/NoriEtoiles/hafidsdamas-portofolio.

Cara membaca: label **[Wajib]** berarti kebutuhan inti dari mockup yang disetujui. **[Menunggu desain]** berarti belum bisa dibangun karena belum dirancang. **[Usulan]** berarti tidak ada di mockup dan baru usulan, jadi butuh persetujuan pemilik. Hal yang belum selesai atau berbeda dari mockup dicatat apa adanya di bagian 5.

## 1. Ringkasan

Satu halaman portofolio pribadi dalam bahasa Indonesia dengan lima section berjangkar: Beranda, Skills, Karya, Tentang, dan Kontak. Dibangun dengan HTML, CSS, dan JavaScript murni plus GSAP, ScrollTrigger, dan Lenis dari CDN dengan versi dipatok, tanpa React dan tanpa proses build. Dipublikasikan di Vercel dengan domain damas.my.id (terdaftar di IDwebhost, aktif sampai 09/10/2027). Situs ini terpisah dari website Damas Cell (damascell.vercel.app), yang justru menjadi karya pertama yang ditampilkan.

## 2. Tujuan

1. Membuat kesan pertama pengunjung "takjub" dan membuat mereka menganggap Hafids front-end web developer yang mahir.
2. Memamerkan kemampuan lewat situs itu sendiri: gerak yang dinamis tetapi tetap elegan, micro-interaction yang teliti, dan tampilan yang tidak terkesan "AI slop".
3. Menampilkan data yang benar: skill, satu karya (Damas Cell), pendidikan, dan pengalaman (Sekretaris 1 ITSC).
4. Memberi jalan kontak yang jelas lewat email dan GitHub.

Ukuran keberhasilan: semua kebutuhan di bagian 6 dan 7 memenuhi kriteria penerimaannya, Delivery Gate antislop PASS dengan bukti, dan pemilik menilai kesan pertama sesuai tujuan 1. Tidak ada target angka kunjungan karena pemilik belum menetapkannya.

## 3. Audiens

Audiens utama adalah orang yang menilai kemampuan front-end Hafids dari kesan pertama dan penelusuran singkat. Ini diambil dari tujuan yang dinyatakan pemilik. Segmen yang lebih spesifik (misalnya panitia seleksi kampus atau beasiswa, perekrut, atau calon klien) belum ditetapkan pemilik dan menjadi Q-09. Konsekuensi untuk desain: pengunjung biasanya membuka dari laptop atau HP, memindai cepat, dan hanya membaca lebih lama bila tertarik. Konten harus ringkas, mudah dipindai, dan jujur.

## 4. Ruang lingkup

### 4.1 Dalam lingkup

- Satu halaman dengan section berjangkar (Beranda, Skills, Karya, Tentang, Kontak) dan navbar kaca interaktif.
- Tema terang (krem dan emas) dan tema gelap (arang dan perak) dengan tombol ganti tema.
- Scroll mulus (Lenis), animasi masuk, benang latar, dan transisi tema berbentuk lingkaran.
- Aksesibilitas dan penghormatan terhadap `prefers-reduced-motion`.
- Deploy ke Vercel dan domain damas.my.id.
- Enam dokumen proyek: `docs/PRD.md`, `docs/SOP-CODING.md`, `DESIGN.md`, `AGENTS.md`, `docs/DECISIONS.md`, `docs/CHANGELOG.md`.
- Tampilan HP dan responsif, setelah dirancang (FR-14).

### 4.2 Di luar lingkup

Butir 1 sampai 3 berasal dari keputusan pemilik. Butir sisanya adalah usulan batas dan bisa diubah pemilik.

1. Framework JavaScript seperti React. Setiap penambahan harus dikonfirmasi dulu.
2. Anime.js, Barba.js, Three.js, dan Spline. Mulai tanpa 3D. Barba hanya bila suatu saat jadi multi-halaman.
3. Mengarang data: foto, tangkapan layar, logo sekolah dan organisasi, serta proyek berikutnya tetap placeholder berlabel sampai materi aslinya ada.
4. Multi-halaman, halaman detail per proyek, blog, dan CMS.
5. Form kontak dengan server, analitik, dan pelacak.
6. Versi bahasa selain bahasa Indonesia.
7. Unduhan CV, sertifikat, dan tautan media sosial lain, karena tidak ada di mockup.

## 5. Selisih dari mockup dan hal yang belum selesai

Dicatat apa adanya agar tidak ada yang tersembunyi. Butir 1 sampai 6 disampaikan pemilik. Butir 7 sampai 16 ditemukan saat membaca berkas board dan menghitung ulang kontras pada 2026-11-19. Butir 17 berasal dari komentar tinjauan pemilik pada 2026-11-19.

| No | Butir | Keadaan di mockup | Rencana atau tindak lanjut |
|---|---|---|---|
| 1 | Tampilan HP dan responsif | Board Versi 3 belum merancang HP: dipratinjau pada lebar 1440 px dan navbarnya berlebar tetap (744 atau 1144 px). Sejak 2026-11-19 ada rancangan terpisah di kanvas (empat board HP lebar 390, lihat FR-14), disetujui pemilik 2026-11-24, sudah diuji di Chromium tanpa kepala (320 sampai 390 px, menu, tema), belum diuji di perangkat nyata, dan belum mencakup tablet. | Kebutuhan FR-14 dan pertanyaan Q-01. Tablet dan lebar menengah belum dirancang (Q-18). HP boleh dibangun. |
| 2 | Benang latar | Disembunyikan pada lebar di bawah 1180 px. | Dicatat di FR-10. Alasan belum tercatat dan apakah perlu versi HP menjadi Q-02. |
| 3 | Efek lingkaran pada ganti tema | Hanya berjalan di Chromium. Peramban lain berganti langsung. | FR-09 mewajibkan fallback langsung. Dukungan diuji ulang lintas-peramban (Q-16). |
| 4 | Warna teks emas terang | Diubah menjadi `#7A5813` demi kontras (5,77:1 di `--bg`). `#C9A24B` hanya 2,13:1. | Sudah tercermin di `DESIGN.md` bagian 3. |
| 5 | Cara scroll | Mockup menggulir di dalam bingkai 900 px dengan scroll buatan. Situs asli menggulir halaman penuh dengan Lenis. | FR-03 dan FR-10. Penentuan section aktif dan posisi benang harus dihitung ulang dari scroll halaman dan diuji. |
| 6 | Foto, tangkapan layar, logo sekolah dan organisasi, proyek berikutnya | Semuanya placeholder. Lini masa memakai lingkaran bernomor, bukan logo. | FR-13. Tetap placeholder sampai pemilik menyerahkan materi asli. |
| 7 | Item lini masa tidak aktif (opasitas 0,55) | Teks sekunder 15 px efektif 2,40:1 (terang) dan 3,15:1 (gelap). | Diperbaiki di mockup (Q-05, disetujui 2026-11-24). Wajib dibangun sesuai perbaikan itu. |
| 8 | Gradasi teks "ITSC" | Ujung `#C9A24B` hanya 2,13:1 untuk teks 56 px di tema terang. | Diperbaiki di mockup (Q-06, disetujui 2026-11-24). |
| 9 | Sorotan navbar aktif, tema terang | Isian emas terhadap latar 2,13:1 dan warna teks aktif sama dengan tidak aktif. | Diperbaiki di mockup (Q-07, disetujui 2026-11-24). Di menu HP tema terang, baris aktif berisian aksen `#7A5813`, bukan tinta, supaya berbeda dari baris Kontak. |
| 10 | Status interaksi | Logo, tombol tema, dan tautan nav tidak punya status hover atau active yang berbeda. Tidak ada status nonaktif. | Q-13. Ditutup saat membangun. |
| 11 | Tombol "Salin email" | Menampilkan "Tersalin" walau penyalinan ke clipboard gagal. | FR-08 mewajibkan umpan balik yang jujur. |
| 12 | Penanda sorotan nav | Memakai lebar tetap 104 px sebagai konstanta. | Dihitung dari ukuran tautan nyata saat dibangun. |
| 13 | Sumber font | Board memuat dari Google Fonts. Keputusan 2026-11-24: situs melayani font sendiri (woff2 di repo). | Q-04 tertutup. |
| 14 | Interaksi Karya | Keputusan 2026-11-17 mengambil baris proyek bernomor dengan hover pembalik warna dari konsep B. Board Versi 3 memakai kartu dengan hover naik. | Q-12. Dicatat di `docs/DECISIONS.md` (D-03). |
| 15 | Metadata halaman | Board tidak berisi tag meta, deskripsi, atau Open Graph. Judul dan deskripsi diputuskan 2026-11-24 (Q-10). | FR-15. |
| 16 | Data pendidikan | Nama sekolah dan tahun (SMKN 2 Klaten 2023–2027, SMPN 1 Klaten 2020–2023) tampil di board. Pemilik memverifikasinya pada 2026-11-24. | Tertutup (Q-08). |
| 17 | Paragraf hero | Board berbunyi "Saya membangun situs yang cepat, rapi, dan nyaman dipakai. Karya terbaru: katalog online untuk konter HP keluarga." Pemilik minta yang lebih menarik dan tidak kaku, bergaya "someone interested in web design and machine learning". | PRD bagian 8.1 sudah memakai kalimat baru. Board belum diperbarui, jadi sampai board diubah teks ini berbeda dari mockup. Minat yang disebut harus benar menurut pemilik (Q-17). |
| 18 | Revisi Versi 4 (2026-11-19) | Board Versi 4 menyimpang dari Versi 3 yang disetujui: latar kontur dengan sorotan kursor, ikon skill berwarna tetap di kotak yang mengikuti tema, tanpa kartu pembungkus kelompok Skills, dan cahaya pada nama "Hafids" di footer. Empat board HP disamakan. | FR-05, FR-16, FR-17, D-21, D-22, Q-19. Sampai disetujui, sumber kebenaran tetap Versi 3. |
| 19 | Potongan 4.1 dan 4.2 (2026-11-25): navbar hanya kerangka | Navbar di situs berupa struktur dan gaya dasar yang statis. Belum ada kaca, menyatu dan berpisah, penanda aktif berpindah, dan `data-on` Kontak tidak pernah menyala. Penanda aktif belum dipasang di tautan mana pun. | Potongan 4.3 (FR-01, FR-02). Kelas `js-nav-bar`, `js-nav-link`, `js-nav-contact` sudah disiapkan sebagai kait.  Diperbarui 2026-11-25 (potongan 4.3): kaca, menyatu dan berpisah, penanda aktif, dan `data-on` Kontak sudah dibangun; lihat butir 27 sampai 30. |
| 20 | Potongan 4.1 dan 4.2: tanpa gerak selain hover | Ganti tema langsung tanpa lingkaran (FR-09 fallback; lingkaran dibangun di 4.4 pada 2026-11-25). Tanpa Lenis (dibangun di 4.5), animasi masuk (dibangun di 4.6), benang (dibangun di 4.7), kontur dan cahaya footer (dibangun di 4.7b). Kait `js-hero-name`, `js-reveal`, `js-fill`, `js-footer-glow` sudah ada di HTML. Judul H1 sudah dipecah per baris (`.hero-line`) untuk animasi masuk. | Potongan 4.4 sampai 4.8. |
| 21 | Zoom 200% pada layar 390 px | Lebar efektif 195 px menghasilkan scroll horizontal (scrollWidth 342 px). Lolos di 1440, 390, dan 640 px (zoom 200% dari 1280 px) di kedua tema. Tampilan HP belum dibangun (FR-14); hanya gutter yang mengecil menjadi 20 px di 640 px ke bawah. | Ditutup di potongan 4.9: lolos di 390, 360, 320, dan 195 px (setara zoom 200% pada 390 px) di kedua tema, diuji di Chrome headless dengan pengukur elemen keluar layar dan teks terpotong. |
| 22 | Status interaksi (Q-13) | Logo dan tombol tema tidak punya hover atau active sendiri di board. | Ditutup 2026-11-25: pemilik menyetujui mockup, dibangun di potongan 4.5 (`DESIGN.md` bagian 12). Tidak ada kontrol nonaktif di halaman. |
| 23 | Ikon Cisco di kotak terang | 2,97:1 terhadap kotak `#FFFDF8` (di bawah 3:1 secara ketat). Sudah tercatat di `DESIGN.md` bagian 5 sebagai batas yang disetujui; nama skill tetap tampil sebagai teks. | Tidak diubah. Pemilik yang menentukan bila ingin menggelapkan sedikit. |
| 24 | Ikon favicon dan metadata | `<link rel="icon" href="data:,">` sementara agar konsol tidak memuat galat 404 `/favicon.ico`. `<title>` dipasang sesuai Q-10; deskripsi meta dan Open Graph belum. | Potongan 4.10 (FR-15) mengganti ikon sementara. |
| 25 | Karya (Q-12) | Mengikuti board Versi 4 apa adanya: kartu dengan hover naik, bukan baris bernomor. | Q-12 tetap terbuka sampai pemilik menjawab. |
| 26 | Cara membuka situs | `js/main.js` dimuat sebagai modul ES, jadi situs harus dilayani lewat server (Vercel atau `python3 -m http.server`); membuka `index.html` langsung dari berkas (`file://`) tidak menjalankan skrip modul. Konten dan tema tetap terbaca tanpa skrip. | Sesuai NFR-08 (deploy Vercel). |
| 27 | Potongan 4.3 dan 4.5: sorotan dan scroll | Penanda aktif berpindah dengan `transform` dari posisi dan ukuran tautan yang diukur, bukan `translateX(indeks × 104px)`, sesuai catatan DESIGN.md 7.5. Penentuan section aktif memakai `getBoundingClientRect` saat scroll, bukan ScrollTrigger (ScrollTrigger dimuat dan terhubung ke Lenis di 4.5 untuk animasi 4.6 dan 4.7). Klik tautan mengunci sorotan di tujuan sampai scroll berhenti 160 ms. | Tertutup untuk 4.3. ScrollTrigger dipakai mulai 4.6. |
| 28 | Tinggi tautan nav | Skrip potongan 4.1 memakai tinggi 44 px; spesifikasi (DESIGN.md 7.1) 40 px, dengan padding kelompok 4 px sehingga kelompok setinggi 48 px. Sudah disesuaikan menjadi 40 px. | Tertutup. |
| 29 | Kontras teks navbar di atas kaca (FR-01) | Dengan `--glass` gelap 0,55 batas bawah tanpa blur hanya 3,10:1 untuk teks 15 px. Pemilik menyetujui kenaikan alfa menjadi 0,70 pada 2026-11-25; batas bawah kini 4,62:1 (diuji dengan blok `--fg` penuh di belakang kaca). Tema terang 5,88:1 dengan alfa 0,55 (tidak diubah). Diukur di peramban dengan judul "SKILLS" di belakang navbar: terang 11,8:1 (median); gelap 4,83:1 sebelum dan 5,79:1 sesudah perubahan alfa (median tautan "Beranda"). | Tertutup. Diuji ulang di peramban setelah perubahan. |
| 30 | Status logo dan tombol tema (Q-13) | Mockup disetujui pemilik 2026-11-25. Hover: `--hover-wash`; active: wash yang sama dan mengecil (logo 0,96, tombol tema 0,92); ikon tema berputar 18 derajat saat hover. | Tertutup, dibangun di 4.5. |
| 31 | Potongan 4.4: lingkaran ganti tema | Dibangun sesuai `DESIGN.md` bagian 11: `startViewTransition`, lingkaran 0,7 detik `ease-in-out` dari pusat tombol (`--ox`, `--oy`), animasi bawaan dimatikan. Diuji hanya di Chromium (Chrome). Firefox dan Safari belum diuji; jalur fallback (tanpa `startViewTransition`) diuji lewat simulasi, bukan peramban sungguhan. | Q-16 (uji lintas-peramban) tetap terbuka. |
| 32 | Potongan 4.5: pustaka CDN dan SRI | `gsap@3.15.0` (gsap.min.js, ScrollTrigger.min.js) dan `lenis@1.3.27` (lenis.min.js) dari jsDelivr, versi persis, `defer`, `crossorigin="anonymous"`, hash SRI sha384. Hash dihitung dari berkas di paket npm resmi versi yang sama karena sandbox tidak bisa membuka jsDelivr; jsDelivr menyajikan berkas paket apa adanya, tetapi kecocokan hash belum diperiksa langsung terhadap jsDelivr. Bila hash tidak cocok, peramban memblokir pustaka dan situs memakai scroll bawaan (diuji dengan berkas dirusak dan dengan CDN diblokir: konten tampil dan tautan jangkar berfungsi). | Pemilik memeriksa konsol di damas.my.id setelah deploy: harus tidak ada galat "integrity" dan `document.documentElement.classList.contains("lenis")` bernilai `true`. Lisensi GSAP ("Standard no charge license") perlu dibaca pemilik sebelum rilis (D-23). |
| 33 | Potongan 4.5: nilai scroll | Durasi 0,42 ms per piksel (minimum 550 ms, maksimum 1200 ms), easing kubik masuk-keluar, offset 88 px, sesuai DESIGN.md bagian 8. Scroll roda memakai pengaturan bawaan Lenis (halus). Pemilik belum menilai rasa scroll di peramban. | Dinilai pemilik setelah deploy; nilai diubah bila terasa tidak pas. |
| 34 | Potongan 4.6: animasi masuk | Sesuai `DESIGN.md` bagian 10, dipicu `IntersectionObserver` (ambang 0,12) sekali per elemen, bukan ScrollTrigger. Kelas gaya `reveal` dan `fill-title` ditambahkan di HTML di samping kait `js-reveal` dan `js-fill`, supaya kait `js-` tetap tidak bergaya. Kelas `js` dipasang di `js/theme-init.js` sebelum render pertama dan dilepas otomatis setelah 3 detik bila skrip utama tidak menandai siap (`data-motion="ready"`), supaya konten tidak tersembunyi selamanya. Setelah selesai tiap elemen mendapat `is-done` agar hover bawaan (mis. tombol "Lihat karya") tidak tertimpa. Foto hero dan kotak skill tidak dianimasikan (tidak tercantum di bagian 10). | Berpindah ke reduced motion saat halaman terbuka langsung menampilkan semua konten. Berpindah kembali ke gerak penuh tidak menyembunyikan ulang konten; berlaku setelah muat ulang. |
| 35 | Potongan 4.7: benang latar | Dibangun sesuai `DESIGN.md` bagian 9 dan 9b: jalur dasar `--mut` opasitas 0,3 (bukan `--line`, mengikuti catatan 9b), jalur aksen `--acc`, titik radius 6. Karena jalur berakhir 160 px sebelum dasar halaman dan ujungnya berada di scrollY + 0,62 × tinggi viewport, di dasar halaman garis belum tergambar sepenuhnya (selisih sekitar 17 dari 1000 unit). Pada lebar 1181 px jalur (x = 44) hanya 4 px dari tepi isi (gutter 48). Benang tidak tampil di bawah 1180 px. Sejak perbaikan lag (butir 43) jalur aksen disingkap dengan tinggi pembungkus, bukan `stroke-dashoffset`; ujung bulat garis tidak lagi bulat di titik singkap (tertutup titik bulat), tidak terlihat. | Tampilan HP menunggu 4.9. |
| 36 | Tombol CV | Atas permintaan pemilik 2026-11-25: tombol CV di baris tautan Kontak. File CV belum ada, jadi tombol berupa `<button disabled>` berlabel "[CV menyusul]" bergaris putus seperti placeholder lain, bukan tautan mati. | Setelah file CV diberikan: ganti dengan `<a class="btn btn-secondary btn-small" href="..." download>` ke file di repo. |
| 37 | Kontur latar dan cahaya footer | Tidak termasuk satu pun dari 10 potongan SOP bagian 4; diusulkan dan disetujui pemilik sebagai potongan 4.7b (2026-11-26). | Tertutup, dibangun di 4.7b (butir 38). |
| 38 | Potongan 4.7b: kontur dan cahaya footer | Kontur: ubin SVG 1200 × 1200 dari board (D-21), garis `--line`, diulang di seluruh latar dan berada di bawah benang. Sorotan kursor (D-22): lapisan kedua dengan warna `--hi` 2,2 px dan `mask-image` lingkaran 230 px, hanya `(hover: hover) and (pointer: fine)`, memudar 0,4 detik, tetap mengikuti kursor dengan reduced motion. Cahaya footer (D-22): satu sapuan 2,4 detik saat separuh kata terlihat, satu lagi saat hover; dimatikan dengan reduced motion. Penyimpangan teknis dari board: gaya garis dipasang pada `<use>` (bukan pada `<path>`) karena aturan CSS pada `<path>` asli tidak terbawa ke salinan di dalam `<pattern>`. | Kinerja `mask-image` sudah ditangani di butir 43 (jendela kecil); belum diukur di perangkat lambat sungguhan. Satu hal belum diukur: kontras teks sekunder di atas garis sorotan. Kontras teks di atas garis sorotan `--hi` (garis 2,2 px di belakang huruf, sementara dan memudar): terang `--mut` 2,95:1 dan `--fg` 7,25:1; gelap `--mut` 1,51:1 dan `--fg` 1,35:1. Di tema gelap huruf terang yang tepat bersilangan dengan garis perak sulit terbaca selama sorotan di sana. Ini sifat dari desain D-22 yang disetujui; diputuskan pemilik bila ingin sorotan dikurangi di atas teks. |
| 39 | Gambar Open Graph | Pemilik memilih versi gelap (abu-perak) pada 2026-11-26. Belum dipasang; mockup `mockup-og-dark.png` (1200 × 630, tipografi nama, peran, damas.my.id, kontur identitas, tanpa data karangan). Latar versi gelap tidak terpengaruh D-24. | Dipasang di potongan 4.10 (FR-15) bersama metadata. |
| 40 | Warna tema terang lebih pucat (D-24) | Atas permintaan pemilik 2026-11-26 (opsi A): `--bg` `#FAF7F0`, `--g1` `#F0E9D8`, `--line` `#E0D7C3`. Audit kontras diulang: semua lolos kecuali ikon Cisco 2,97:1 (batas yang sudah disetujui, butir 25). Perubahan hanya di token; tidak ada nilai warna lain yang tertulis langsung di CSS atau HTML. | Tertutup. Mockup HP tema terang (board `hp-terang`) masih memakai warna lama; diperbarui saat 4.9. |
| 41 | Potongan 4.8: reduced motion dan fallback | Audit menyeluruh (28 uji Chrome): reduced motion dari awal dan saat halaman terbuka (kedua arah), tanpa CDN, tanpa JavaScript, lebar 1440, 1280, dan 1181. Satu celah ditemukan dan ditutup: tanpa JavaScript tombol ganti tema dan salin email tampil tetapi tidak berfungsi; kini disembunyikan lewat `<noscript><style>` (tema mengikuti pengaturan sistem lewat CSS). Bila JavaScript aktif tetapi `js/main.js` gagal dimuat, kedua tombol masih tampil dan tidak berfungsi (kasus langka, tidak ditangani). | Tertutup untuk kasus utama. |
| 42 | Ikon tab (favicon) | Permintaan pemilik 2026-11-26: ganti bola dunia abu-abu bawaan. Arah terakhir pemilik: tile kaca transparan seperti navbar, huruf "H" hitam atau putih di tengah, tanpa elemen unik tambahan. Peringatan yang sudah disampaikan: favicon tidak bisa memburamkan latar, sehingga "kaca" hanya berupa gradasi tembus pandang dan tampilannya bergantung warna tab browser. | Menunggu persetujuan mockup; dibangun di 4.10 (SVG, PNG 32, apple-touch 180) menggantikan `data:,` (butir 24). |
| 43 | Lag scroll dan kursor (perbaikan) | Pemilik melaporkan situs lebih lambat setelah 4.7b. Diukur di Chrome headless (rata-rata / p95 / maks ms per frame, layar 1440 × 900): scroll 20,7 / 33,4 / 50,1 dan kursor 25,3 / 33,4 / 33,4. Penyebab: sorotan memakai `mask-image` pada SVG setinggi seluruh halaman (dihitung ulang tiap gerak kursor) dan benang memanggil `getPointAtLength` serta menulis atribut SVG pada SVG setinggi halaman tiap frame scroll. Perbaikan: sorotan menjadi jendela 460 px yang dipindah dengan `transform` dengan mask ubin `assets/contour-hi.svg`; benang digambar sekali, saat scroll hanya tinggi pembungkus dan `transform` titik yang berubah, posisi x titik dari tabel contoh. Rebuild digabung per frame dan dilewati bila ukuran halaman tidak berubah. Hasil: scroll 16,7 / 16,8 / 16,8 dan kursor 17,4 / 16,8 / 33,4 (satu frame terlambat sesekali). | Angka dari Chrome headless di sandbox, bukan perangkat pemilik; angka relatif lama vs baru yang bermakna. Data garis kontur kini ada di dua tempat (`index.html` dan `assets/contour-hi.svg`). Bila pemilik masih merasa lambat, kirim jenis perangkat dan browser. |
| 44 | Potongan 4.9: tampilan HP | Dibangun sesuai empat board HP yang disetujui pemilik 2026-11-27, dengan revisi navbar (D-25) dan warna terang D-24. Satu kolom di 640 px ke bawah; ukuran huruf `clamp()`; tombol "Lihat karya", "Salin email", dan "[CV menyusul]" selebar kolom; kata "Hafids" di footer selebar kolom (rasio lebar 2,568 × ukuran huruf, diukur di 380 px). Tinggi header HP tetap 60 px supaya menu terbuka tidak menggeser halaman (ditemukan lewat uji: tanpa itu, mengetuk tautan menu mendarat 160 px terlalu jauh). Gutter 12 px dan bayangan foto lebih kecil di 260 px ke bawah. | Diuji di Chrome headless (emulasi sentuh): 390, 360, 320, 195 px, kedua tema, menu (buka, tutup, Escape, ketuk selubung, ketuk tautan, Kontak, tema, melebar ke desktop), reduced motion, tanpa JavaScript. Belum diuji: perangkat sentuh nyata, Safari iOS dan Firefox, Lighthouse HP (NFR-04), jalur sukses "Salin email". Jarak antarkartu dan ukuran huruf di HP berasal dari tebakan pada board yang berukuran tetap; periksa di HP sungguhan. Urutan Tab: tautan menu berada sebelum tombol tema dan tombol menu di DOM (keyboard membuka menu memindahkan fokus ke tautan pertama). |
| 45 | Navbar 641 sampai 1180 px | Tidak dirancang (Q-18): di 641 px sampai sekitar 740 px kartu navbar desktop membungkus ke dua atau tiga baris; tanpa scroll horizontal. | Tunggu keputusan Q-18 (tablet). |
| 46 | Sorotan kontur berbentuk kotak | Pemilik melaporkan 2026-11-27. Penyebab: perbaikan lag (butir 43) menulis `radial-gradient(circle at center, …)` yang berjari-jari sampai sudut elemen, sehingga tepi jendela 460 px masih tampak. Diperbaiki menjadi `circle 230px`: lingkaran memudar ke nol di tepi jendela. | Dicek lewat tangkapan layar di dua tema; belum dinilai pemilik. Bila ingin bentuk lain (oval, bergerigi), cukup ganti mask di `css/layout.css`. |
| 47 | Lingkaran kaca lonjong di menu HP | Dilaporkan pemilik 2026-11-27 lewat rekaman layar: saat halaman sudah melewati Beranda, menu terbuka menampilkan kapsul kaca lonjong besar di belakang tautan. Penyebab: keadaan `.is-split` (navbar berpisah) memberi `.nav-links` bahan kaca sendiri, dan aturan HP tidak menimpanya. Tes 4.9 hanya membuka menu di puncak halaman, jadi tidak menangkapnya. Diperbaiki: daftar tautan di panel tanpa latar, blur, garis, dan bayangan. Tes baru membuka menu di section Skills di dua tema. | Selesai. |
| 48 | Navbar HP hilang saat ganti tema | Dilaporkan pemilik 2026-11-27 (Brave Android): kadang navbar naik keluar layar saat tombol tema ditekan. Perbaikan pertama (tema langsung tanpa lingkaran di HP) DITOLAK pemilik 2026-11-28: lingkaran wajib ada di HP, dan situs acuan richardmiculob-portfolio membuktikan aman di HP. Perbaikan final, dipelajari dari repo acuan: (1) jari-jari lingkaran dalam piksel ke sudut terjauh layar (`--or`), (2) semua transisi CSS dimatikan selama transisi lewat kelas `is-theme-switching` (agar tangkapan baru tidak merekam navbar atau warna setengah jalan), (3) klik saat transisi berjalan diabaikan, (4) header HP memakai `position: fixed` (bukan sticky) seperti navbar acuan, dengan ruang diganti padding atas `<main>`. | Dugaan penyebab belum terbukti (tidak bisa direproduksi di Chrome headless); tes headless membuktikan lingkaran berjalan di HP dan desktop, navbar tetap di layar. Pemilik perlu menguji ulang di HP yang sama; bila masih terjadi, kirim rekaman baru. |
| 49 | Tombol menu mepet tepi kanan kartu | Dilaporkan pemilik 2026-11-27 (terlihat di tema gelap). Padding kanan kartu naik dari 8 ke 14 px (10 px di 360 px ke bawah), berlaku di kedua tema; garis pemisah menu tetap simetris. | Selesai. |
| 50 | Tombol Kontak navbar berbahan kaca | Diminta pemilik 2026-11-28 (D-26). Desktop: tembus pandang saat menyatu, kaca saat berpisah, hover dan active seperti logo, aktif berisian tinta atau perak. HP: tombol di menu berbingkai, berisian saat aktif. Dicek lewat tangkapan layar di dua tema pada puncak, tengah, dan dasar halaman; tes HP (M11) lolos. | Kontak tak lagi menonjol di navbar (lihat D-26). |

## 6. Kebutuhan fungsional

### FR-01 Navbar kaca yang menyatu lalu berpisah [Wajib]

Navbar menempel 16 px dari atas. Di puncak halaman, logo, tautan, tombol tema, dan Kontak menyatu dalam satu kapsul kaca selebar `min(744px, 100%)`. Setelah scroll, kapsul lebur dan bagian-bagiannya berdiri sendiri berbahan kaca dalam lebar `min(1144px, 100%)`. Detail di `DESIGN.md` bagian 7.

Kriteria penerimaan:
- Dari puncak, navbar berpisah ketika scroll lebih dari 40 px. Dari posisi terpisah, navbar menyatu kembali hanya ketika scroll kurang dari 12 px.
- Lebar berubah dalam 0,7 detik dan kapsul memudar dalam 0,5 detik. Tidak ada lompatan atau kedipan di sekitar ambang.
- Bahan kaca memakai `backdrop-filter: blur(20px) saturate(1.7)`. Kaca tidak dipakai di luar navbar.
- Teks navbar mencapai kontras 4,5:1 di atas bagian halaman dengan latar terburuk, di tema terang dan gelap. Diuji, bukan dihitung dari token.
- Dengan `prefers-reduced-motion: reduce`, perubahan terjadi langsung tanpa transisi.

### FR-02 Navigasi berjangkar dan sorotan section aktif [Wajib]

Kriteria penerimaan:
- Ada empat tautan (Beranda, Skills, Karya, Tentang) dan satu tombol Kontak, masing-masing ke id section nyata (`#sec-home`, `#sec-skills`, `#sec-karya`, `#sec-about`, `#sec-contact`). Tidak ada tautan mati.
- Penanda sorotan berpindah di belakang tautan aktif dalam 0,5 detik dengan sedikit melampaui lalu kembali.
- Section aktif ditentukan saat tepi atasnya melewati 40% tinggi viewport. Di dasar halaman, Kontak aktif: penanda nav menghilang dan tombol Kontak berisi tinta (terang) atau perak (gelap), sama seperti penanda tautan nav (D-26).
- Tautan aktif membawa `aria-current`. Status aktif tidak hanya dibedakan oleh warna (Q-07).
- Seluruh navbar bisa dioperasikan dengan keyboard (Tab, Enter) dan fokusnya terlihat.

### FR-03 Scroll mulus ke section [Wajib]

Kriteria penerimaan:
- Klik tautan nav atau tombol "Lihat karya" menggulir halaman dengan animasi ke tujuan, dengan offset 88 px. Beranda menuju puncak.
- Durasi 550 sampai 1200 ms sebanding dengan jarak dan memakai easing kubik masuk-keluar.
- Animasi berhenti ketika pengguna memutar roda atau menyentuh layar.
- Setelah tiba, fokus pindah ke section tanpa menggulir tambahan.
- Tanpa JavaScript atau bila pustaka gagal dimuat, tautan berjangkar bawaan tetap berfungsi.
- Dengan reduced motion, halaman langsung melompat dan Lenis tidak dijalankan.

### FR-04 Section Beranda [Wajib]

Isi pada bagian 8.1.

Kriteria penerimaan:
- Satu `<h1>` berisi nama lengkap dalam tiga baris. Pembaca layar membacanya sebagai satu nama utuh.
- Tombol "Lihat karya" menggulir ke Karya.
- Tempat foto berbentuk potret 4:5 dengan sudut terpotong dan blok aksen bergeser, berlabel "[Foto menyusul]" dan punya `role="img"` dengan `aria-label`.
- Tidak ada foto atau ilustrasi pengganti.

### FR-05 Section Skills [Wajib]

Kriteria penerimaan:
- Tiga kelompok (Web, Jaringan, Kode dan data) berisi total 14 skill sesuai bagian 9, dalam urutan dan pengelompokan yang sama dengan mockup. Tidak ada kartu besar yang membungkus kelompok: kotak skill langsung di atas latar halaman.
- Setiap skill menampilkan ikon dan nama sebagai teks. Ikon `aria-hidden`.
- Tidak ada tingkat kemahiran, persentase, atau bilangan lain yang tidak diberikan pemilik.
- Warna tiap ikon sama di tema terang dan gelap, kecuali GitHub, Vercel, dan MikroTik yang memakai warna tinta tema (`DESIGN.md` bagian 5). Kotak skill mengikuti tema (`--tile`), bukan warna tetap. Tiga ikon kuning memakai emas tua agar lolos 3:1 di kedua tema (keputusan pemilik 2026-11-23). Menunggu persetujuan Versi 4 (D-21, D-22).

### FR-16 Latar kontur topografi [Wajib]

Latar halaman bertekstur garis kontur halus (`DESIGN.md` bagian 9b), atas permintaan pemilik 2026-11-19. Ada di board Versi 4 dan empat board HP, disetujui pemilik 2026-11-24.

Kriteria penerimaan:
- Satu pola SVG yang disambung mulus memenuhi seluruh latar halaman dan tidak menimbulkan scroll horizontal.
- Memakai token `--line` di kedua tema. Teks `--mut` di atas garis tetap minimal 4,5:1.
- Tekstur berada di bawah semua konten, tidak menangkap klik, dan `aria-hidden`.
- Lapisan dasar statis. Di perangkat dengan hover dan penunjuk halus, sorotan kontur berwarna `--hi` muncul di sekitar kursor (jari-jari sekitar 230 px) dan memudar saat kursor keluar. Di layar sentuh sorotan tidak ada. Dengan reduced motion transisi pudarnya dimatikan.
- Tidak membuat halaman lambat dimuat secara terasa (ukuran pola sekitar 44 KB per halaman dan diukur saat membangun).

### FR-17 Cahaya pada nama "Hafids" di footer [Wajib]

Atas ide pemilik 2026-11-19 (`DESIGN.md` bagian 9c). Ada di board Versi 4 dan empat board HP, disetujui pemilik 2026-11-24 (perilaku sekali per kemunculan dan sekali per hover dikonfirmasi).

Kriteria penerimaan:
- Pita cahaya bergerak dari kiri ke kanan melewati kata "Hafids" besar di footer, satu kali saat footer masuk ke layar dan satu kali tiap kursor masuk ke kata itu.
- Tidak berulang sendiri. Kata itu `aria-hidden`.
- Dengan `prefers-reduced-motion: reduce` kata tampil statis tanpa sapuan.
- Warna cahaya emas di tema terang dan perak di tema gelap. Tidak ada glow lain di halaman selain pada kaca navbar.

### FR-06 Section Karya [Wajib]

Kriteria penerimaan:
- Satu kartu proyek Damas Cell yang menuju https://damascell.vercel.app/ di tab baru dengan `rel="noopener"`.
- Tangkapan layar berupa placeholder berlabel "[Tangkapan layar Damas Cell menyusul]".
- Satu slot putus-putus berlabel "[Proyek berikutnya menyusul]" yang bukan tautan.
- Hover kartu: gambar naik 6 px dan garis bawah 3 px tumbuh di judul. Fokus keyboard terlihat.
- Deskripsi hanya memuat hal yang benar tentang Damas Cell (lihat 8.3).

### FR-07 Section Tentang [Wajib]

Kriteria penerimaan:
- Dua kolom berdampingan: Pendidikan di kiri, Pengalaman di kanan. Isi pada bagian 8.4.
- Item aktif tampil penuh, item lain diredupkan, dengan teks tetap memenuhi kontras 4,5:1 (Q-05).
- Tidak ada logo karangan. Logo sekolah dan ITSC tetap placeholder sampai ada materi asli.
- Data sesuai yang diverifikasi pemilik (Q-08).

### FR-08 Section Kontak dan footer [Wajib]

Kriteria penerimaan:
- Tautan `mailto:` ke damasaryasutharamadhan@gmail.com dan tautan GitHub ke https://github.com/NoriEtoiles di tab baru dengan `rel="noopener"`.
- Tombol "Salin email" mengubah teksnya menjadi "Tersalin" selama 2 detik hanya bila penyalinan ke clipboard benar berhasil. Kalau gagal, tombol tidak menyatakan sukses dan alamat email tetap bisa disalin manual. Pengumuman `aria-live="polite"` sesuai hasilnya.
- Footer berisi hak cipta "© 2026 Hafids Damas Arya Sutha Ramadhan", tautan "Kembali ke atas", dan kata "Hafids" raksasa yang dihias (`aria-hidden`) dan terpotong.

### FR-09 Tema terang dan gelap [Wajib]

Kriteria penerimaan:
- Tombol tema punya `aria-label` dan berfungsi lewat mouse dan keyboard. Nilai warna kedua tema persis sesuai `DESIGN.md` bagian 3.
- Di peramban yang mendukung View Transitions, tema berganti dengan lingkaran yang meluas dari pusat tombol (0,7 detik). Di peramban yang tidak mendukung, tema berganti langsung. Dua-duanya tanpa galat di konsol.
- Dengan reduced motion, tema berganti langsung.
- Tema awal dan penyimpanan pilihan mengikuti keputusan Q-03. Pelajaran dari proyek Damas Cell: sebagian peramban HP memaksa mode gelap, jadi `color-scheme` harus dinyatakan selaras dengan tema aktif.

### FR-10 Benang latar [Wajib]

Kriteria penerimaan:
- Dua jalur SVG (garis dasar dan garis aksen) turun di gutter dan menyeberang lewat celah antar section. Garis aksen tergambar mengikuti scroll dan titik di ujungnya mengikuti.
- Jalur dihitung ulang saat ukuran berubah dan setelah font selesai dimuat, dari posisi halaman sebenarnya (bukan bingkai seperti di mockup).
- Pada lebar di bawah 1180 px, benang tidak tampil. Tidak menimbulkan scroll horizontal.
- Dengan reduced motion, jalur tergambar penuh tanpa animasi dan titik tidak tampil.
- Benang tidak menutupi atau menghalangi konten dan tidak menangkap klik (`pointer-events: none`, `aria-hidden`).

### FR-11 Animasi masuk [Wajib]

Kriteria penerimaan:
- Nama di hero naik per baris, elemen `.rv` muncul bertahap, dan judul besar terisi dari kiri ke kanan, dengan durasi sesuai `DESIGN.md` bagian 10. Masing-masing berjalan satu kali.
- Konten tetap tampil penuh tanpa JavaScript, dengan reduced motion, dan bila pustaka dari CDN gagal dimuat. Penyembunyian awal hanya aktif setelah JavaScript siap.
- Tidak ada gerak yang berjalan terus-menerus.

### FR-12 Penghormatan reduced motion [Wajib]

Kriteria penerimaan:
- Semua perilaku di `DESIGN.md` bagian 13 berlaku.
- Mengubah preferensi sistem saat halaman terbuka tetap dihormati.
- Pengujian dilakukan dengan preferensi aktif dan tidak aktif.

### FR-13 Placeholder berlabel [Wajib]

Kriteria penerimaan:
- Foto, tangkapan layar Damas Cell, logo sekolah dan organisasi, serta proyek berikutnya tampil sebagai placeholder dengan label terlihat (mis. "[Foto menyusul]").
- Tidak ada foto stok, gambar unduhan, atau logo gambaran sendiri.
- Saat materi asli diserahkan pemilik, penggantian dicatat di `docs/CHANGELOG.md`.

### FR-14 Tampilan HP dan responsif [Wajib untuk HP; tablet menunggu desain]

Board Versi 3 tidak merancang tampilan HP. Usulan HP dibuat pada 2026-11-19 sebagai empat board terpisah di kanvas yang sama, di sebelah kanan Versi 3 (lebar 390 px): terang dengan scroll di dalam bingkai, menu terbuka, gelap, dan satu halaman penuh tanpa scroll bingkai. Board Versi 3 tidak diubah. Pemilik menyetujui rancangan HP pada 2026-11-24, jadi bagian HP boleh dibangun. Tablet dan lebar menengah belum dirancang (Q-18).

Isi usulan (rinci di `DESIGN.md` bagian 15):
- Navbar (direvisi 2026-11-27, D-25): satu kartu kaca yang selalu tampil, berisi logo, tombol tema, dan tombol menu. Menu membuka ke bawah di dalam kartu yang sama (empat tautan dan tombol Kontak). Tidak ada menyatu dan berpisah di HP.
- Benang latar tidak ada di HP.
- Hero, Skills, Karya, dan Tentang menjadi satu kolom. Pendidikan ditumpuk di atas Pengalaman. Kelompok Skills tetap tiga, tiap kelompok berisi kisi kotak ikon dua kolom tanpa kartu pembungkus.
- Tombol "Lihat karya" dan "Salin email" selebar kolom.

Kriteria penerimaan (berlaku setelah usulan disetujui):
- Tidak ada scroll horizontal pada lebar 320 px sampai 1920 px dan pada zoom 200%.
- Menu HP: tombol punya `aria-expanded`, `aria-controls`, dan `aria-label` yang menyebut bagian saat ini. Escape menutup menu dan fokus kembali ke tombol. Mengetuk di luar panel menutup menu. Mengetuk tautan menutup menu lalu menggulir ke bagian itu. Tautan di panel tidak bisa difokus saat panel tertutup.
- Target sentuh minimal sekitar 44 px.
- Tata letak tiap section sesuai usulan yang disetujui.
- Ukuran huruf memakai `clamp()` dengan satuan lebar viewport, bukan piksel tetap seperti di mockup.
- Lebar antara 390 dan 1180 px (tablet) belum dirancang. Q-18.

Kriteria penerimaan (berlaku setelah desain ada):
- Tidak ada scroll horizontal pada lebar 320 px sampai 1920 px dan pada zoom 200%.
- Navbar dapat dipakai di layar sempit sesuai rancangan yang disetujui (Q-01).
- Target sentuh minimal sekitar 44 px.
- Tata letak tiap section sesuai mockup HP yang disetujui.

### FR-15 Metadata dan SEO dasar [Usulan]

Tidak ada di mockup. Kriteria penerimaan:
- `<html lang="id">`, satu `<main>`, `<title>` unik, deskripsi meta, tag Open Graph dengan URL absolut `https://damas.my.id/...`.
- Teks judul, deskripsi, dan gambar OG ditentukan pemilik (Q-10). Tidak memakai gambar atau teks karangan.

## 7. Kebutuhan nonfungsional

### NFR-01 Aksesibilitas [Wajib]
- Kontras teks 4,5:1 (teks besar 3:1) dan komponen non-teks 3:1 di kedua tema. Hasil perhitungan di `DESIGN.md` bagian 3, ditambah pengujian pada kaca navbar.
- Indikator fokus terlihat di semua elemen interaktif dan semua tema.
- Struktur dokumen benar: satu `<h1>`, urutan heading tidak loncat, landmark utama, `lang="id"`.
- Teks bisa diperbesar sampai 200% tanpa terpotong. Seluruh fungsi dapat dioperasikan dengan keyboard.

### NFR-02 Gerak [Wajib]
Sesuai `DESIGN.md` bagian 13. Gerak non-esensial mati di bawah reduced motion.

### NFR-03 Stack dan versi [Wajib]
- HTML, CSS, dan JavaScript murni tanpa build step. GSAP, ScrollTrigger, dan Lenis lewat CDN dengan nomor versi dipatok eksplisit (tidak memakai "latest"), disertai atribut `integrity` (SRI) dan `crossorigin`. Pilihan CDN dan nomor versi dicatat di `docs/DECISIONS.md` saat ditetapkan (Q-11).
- Tanpa React atau framework JavaScript lain tanpa konfirmasi pemilik.
- Situs tetap terbaca bila pustaka CDN gagal dimuat.

### NFR-04 Kinerja [Usulan]
- Target Lighthouse (desktop dan HP setelah FR-14) minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO. Pemilik dapat mengubah target ini.
- Dimensi media ditetapkan agar tata letak tidak bergeser. Skrip pihak ketiga tidak memblokir render.

### NFR-05 Peramban [Wajib]
- Chromium (Chrome dan Edge) mendapat semua fitur.
- Firefox dan Safari: semua fungsi sama, kecuali transisi lingkaran yang diganti perpindahan tema langsung (sesuai catatan pemilik, diuji ulang pada Q-16).

### NFR-06 Lisensi [Wajib]
- Font: Big Shoulders Display dan Familjen Grotesk (SIL OFL).
- Ikon: Simple Icons (CC0). Merek dagang milik pemegangnya.
- Lisensi GSAP, ScrollTrigger, dan Lenis diperiksa pada versi yang dipatok sebelum rilis (Q-11).

### NFR-07 Keamanan dan privasi [Usulan]
- Tautan eksternal memakai `rel="noopener"`.
- Tidak ada pelacak atau analitik tanpa persetujuan. Satu-satunya pihak ketiga adalah CDN pustaka yang disetujui.
- Header keamanan dan cache di `vercel.json` (misalnya CSP yang mengizinkan hanya sumber yang dipakai), diuji pada peramban sebelum rilis, karena CSP yang terlalu ketat bisa merusak situs.

### NFR-08 Deploy [Wajib]
- Dipublikasikan di Vercel dari repo GitHub, tanpa perintah build. Domain damas.my.id menunjuk ke Vercel lewat DNS di IDwebhost, berjalan di HTTPS. Langkahnya di `docs/SOP-CODING.md` bagian 8.

### NFR-09 Bahasa [Wajib]
- Seluruh teks isi dalam bahasa Indonesia, mengikuti kata yang ada di mockup.

## 8. Konten per section

Teks di bawah adalah teks dari board Versi 4 (isinya sama dengan Versi 3 kecuali yang dicatat). Perubahan teks harus disetujui pemilik. Tanda kurung siku berarti placeholder.

### 8.1 Beranda (`#sec-home`)
- H1: "Hafids Damas / Arya Sutha / Ramadhan" (tiga baris).
- Tagline: "Front-end web developer".
- Paragraf: "Pelajar SIJA yang suka merancang tampilan web dan mengutak-atik jaringan. Karya terbaru: katalog online untuk konter HP keluarga." (menggantikan teks board sesuai komentar tinjauan pemilik 2026-11-19, lihat bagian 5 butir 17; kalimat pertama menunggu konfirmasi pemilik)
- Tombol: "Lihat karya" menuju Karya.
- Foto: "[Foto menyusul]".

### 8.2 Skills (`#sec-skills`)
- Judul: "Skills". Teks samping: "Yang saya pakai, dalam tiga bidang".
- Kartu 01 · Web, "Pengembangan web": "Situs statis yang cepat dan rapi, dari tata letak sampai publikasi."
- Kartu 02 · Jaringan, "Jaringan dan sistem": "Perangkat jaringan dan sistem operasi."
- Kartu 03 · Kode dan data, "Pemrograman dan data": "Bahasa dan alat untuk logika, data, dan perangkat keras."
- Isi tiap kartu: lihat bagian 9.

### 8.3 Karya (`#sec-karya`)
- Judul: "Karya".
- Kartu: label "Website · 2026", judul "Damas Cell", tangkapan layar "[Tangkapan layar Damas Cell menyusul]", tautan https://damascell.vercel.app/.
- Deskripsi: "Website konter HP di Karanganom, Klaten. Situs statis tanpa proses build. Katalog dibaca langsung dari Google Sheet, dengan pencarian, urut harga, dan galeri foto. Form servis memakai Google Form. Sudah terindeks Google."
- Teknologi: "HTML · CSS · JavaScript · Vercel · Google Sheets".
- Slot kedua: "[Proyek berikutnya menyusul]".

### 8.4 Tentang (`#sec-about`)

Pendidikan:
1. PTN, "Segera", "Teknik Informatika", "Rencana berikutnya".
2. SMKN 2 Klaten, "2023 – 2027", "Sistem Informasi Jaringan & Aplikasi", "Sekolah menengah kejuruan" (aktif).
3. SMPN 1 Klaten, "2020 – 2023", "Sekolah menengah pertama".

Pengalaman:
1. ITSC, "2024 – 2025", "Sekretaris 1", "Bersama ketua, menyusun dan menjalankan banyak program baru.", "Organisasi" (aktif).

Catatan: nama sekolah, jurusan, dan tahun diverifikasi pemilik pada 2026-11-24 (Q-08).

### 8.5 Kontak (`#sec-contact`)
- Kalimat: "Punya proyek, atau ingin sekadar mengobrol?"
- Email: damasaryasutharamadhan@gmail.com (tautan `mailto:`) dan tombol "Salin email".
- GitHub: "GitHub · NoriEtoiles" menuju https://github.com/NoriEtoiles.
- Footer: "© 2026 Hafids Damas Arya Sutha Ramadhan", "Kembali ke atas", kata "Hafids" raksasa dekoratif.

## 9. Daftar skill

### 9.1 Skill yang tampil di situs (14)

| Kelompok | Skill |
|---|---|
| 01 · Web | HTML, CSS, JavaScript, GitHub, Vercel, Google Sheets |
| 02 · Jaringan | Cisco, MikroTik, Linux |
| 03 · Kode dan data | Python, C++, SQL, Google Colab, Arduino |

Ikon: Simple Icons untuk semuanya, kecuali SQL yang digambar sendiri. Warna per tema ada di `DESIGN.md` bagian 5. Daftar ini berasal dari pemilik. Menambah atau mengurangi skill harus dikonfirmasi.

### 9.2 Skill agent yang dipakai di proyek

- `antislop`: wajib untuk pekerjaan antarmuka (Design Read, dial, larangan pola, Delivery Gate).
- `find-skills-checked`: mencari skill yang cocok pada tiap tugas. Memasang skill hanya setelah pemindaian dan persetujuan eksplisit.
- `skill-inspector`: dipakai oleh `find-skills-checked` untuk meninjau skill sebelum dipasang.

Status pencarian pada 2026-11-19: `npx skills find` untuk "gsap scrolltrigger" dan "lenis smooth scroll" tidak menemukan skill. Alat `skillspector` tidak terpasang di lingkungan kerja ini, jadi tidak ada skill baru yang dipasang dan tidak ada yang bisa dipasang sampai alat itu tersedia.

## 10. Pertanyaan terbuka

Pertanyaan yang memblokir pekerjaan diberi tanda **[blokir]**.

- **Q-01 [tertutup 2026-11-24]** Tampilan HP: pemilik menyetujui rancangan HP (menu tombol dengan panel kaca, satu kolom). Tablet dilanjutkan di Q-18.
- **Q-02 [tertutup untuk HP 2026-11-24]** Benang latar tidak ada di HP (rancangan HP disetujui). Alasan asli penyembunyian di bawah 1180 px tidak pernah dicatat. Perilaku di lebar menengah mengikuti Q-18.
- **Q-03 [diputuskan 2026-11-24, pilihan Claude, atas arahan "pilih opsi paling cocok"]** Tema awal mengikuti pengaturan sistem pengunjung (`prefers-color-scheme`), dengan terang sebagai cadangan. Pilihan lewat tombol tema menimpa pengaturan sistem dan disimpan di `localStorage` dengan `try/catch`. Bila penyimpanan diblokir, situs tetap berfungsi dan memakai tema sistem tiap kunjungan. Tema dipasang sebelum render pertama agar tidak berkedip.
- **Q-04 [diputuskan 2026-11-24, pilihan Claude]** Font dilayani sendiri dari repo (woff2, subset Latin, `font-display: swap`, preload, lisensi OFL disertakan). Alasan: tanpa pihak ketiga, tanpa permintaan DNS tambahan, dan lebih mudah memenuhi aturan antislop soal skrip pihak ketiga.
- **Q-05 [ditutup 2026-11-24, disetujui pemilik]** Hanya lingkaran dan garis rel lini masa yang diredupkan, teks tetap penuh (6,29:1). Lihat `DESIGN.md` bagian 3.4.
- **Q-06 [ditutup 2026-11-24, disetujui pemilik]** Ujung emas ITSC di tema terang diubah ke `#A07A22` (3,52:1, teks besar). Lihat `DESIGN.md` bagian 3.4.
- **Q-07 [ditutup 2026-11-24, disetujui pemilik]** Penanda navbar aktif di tema terang berisian tinta dengan teks krem (15,45:1). Lihat `DESIGN.md` bagian 3.4.
- **Q-08 [tertutup 2026-11-24]** Pemilik memverifikasi data pendidikan dan pengalaman di bagian 8.4 apa adanya seperti di board: PTN (Teknik Informatika, rencana), SMKN 2 Klaten 2023 – 2027 (Sistem Informasi Jaringan & Aplikasi), SMPN 1 Klaten 2020 – 2023, dan ITSC 2024 – 2025 (Sekretaris 1). Kepanjangan ITSC dan nama sekolah induk tidak ditampilkan.
- **Q-09 [diputuskan 2026-11-24, pilihan Claude]** Audiens utama: pihak kampus (PTN, beasiswa) lalu perekrut magang atau calon klien. Ini hanya mengarahkan urutan dan nada isi, bukan struktur, dan isi saat ini tidak berubah. Pemilik boleh mengganti.
- **Q-10 [diputuskan 2026-11-24, pilihan Claude]** `<title>`: "Hafids Damas Arya Sutha Ramadhan – Portofolio". Deskripsi meta: "Portofolio Hafids Damas Arya Sutha Ramadhan, siswa SIJA SMKN 2 Klaten yang membangun situs web, dari katalog online Damas Cell sampai jaringan." Tag Open Graph: `og:title`, `og:description`, `og:url` (`https://damas.my.id/`), `og:type` (`website`), `og:locale` (`id_ID`), dan `twitter:card` `summary`. Tanpa `og:image` sampai pemilik menyerahkan gambar asli.
- **Q-11 [diputuskan 2026-11-24, pilihan Claude]** CDN: jsDelivr untuk ketiganya. GSAP dan ScrollTrigger `gsap@3.15.0` (diterbitkan 2026-04-13), Lenis `lenis@1.3.27` (2026-10-15), dipatok persis dengan atribut `integrity` (SRI) dan `crossorigin="anonymous"`. Versi terbaru saat diperiksa adalah 3.15.1 dan 1.3.28, tetapi baru berumur kurang dari tiga minggu dan sehari, jadi tidak dipilih. Versi dicek ulang dengan `npm view` saat membangun. Lisensi: GSAP memakai "Standard no charge license" (gsap.com/standard-license), perlu dibaca pemilik sebelum rilis. Lenis MIT.
- **Q-12** Karya di Versi 3 memakai kartu, bukan baris bernomor dengan hover pembalik warna dari konsep B. Apakah kartu Versi 3 menggantikan keputusan itu sepenuhnya?
- **Q-13** Status hover, active, dan nonaktif untuk logo, tombol tema, dan tautan nav belum dirancang. Apakah saya boleh mengusulkan rancangannya dalam mockup kecil dulu?
- **Q-14** Setelah domain terhubung, apakah `www.damas.my.id` dialihkan ke `damas.my.id` (atau sebaliknya)? Format hash URL tetap mengikuti id mockup (mis. `#sec-karya`) atau dibuat lebih ringkas (mis. `#karya`)?
- **Q-15 [diputuskan 2026-11-24]** Repo: https://github.com/NoriEtoiles/hafidsdamas-portofolio (dibuat pemilik). Alur: `main` yang dideploy ke Vercel, kerja di cabang `fitur/<nama>` yang dibuat pemilik, pratinjau Vercel diperiksa sebelum digabung, dan hanya pemilik yang commit, push, dan menggabungkan.
- **Q-16** Peramban dan perangkat apa yang dipakai pemilik untuk pengujian akhir? Dukungan View Transitions di Firefox dan Safari akan diuji ulang karena catatan "hanya Chromium" bisa berubah.
- **Q-17** Apakah minat di paragraf hero ("suka merancang tampilan web dan mengutak-atik jaringan") sudah benar? Di data pemilik tidak ada minat machine learning, jadi tidak saya tulis. Bila memang tertarik, sebutkan dan saya tambahkan. Pilihan lain: "Suka merancang web yang enak dilihat dan dipakai, sambil terus belajar jaringan." atau "Merancang web dari nol, dari tata letak sampai tayang."
- **Q-18** Bagaimana tampilan tablet dan lebar menengah (sekitar 600 sampai 1180 px)? Usulan HP baru memakai lebar 390 px. Benang latar juga hilang di bawah 1180 px menurut catatan pemilik, jadi lebar menengah harus diputuskan bersama Q-02.
- **Q-19 [tertutup 2026-11-24]** Ikon kuning memakai emas tua (Versi 4b, keputusan 2026-11-23). Sapuan cahaya footer tetap seperti di Versi 4: sekali saat terlihat dan sekali per hover, tanpa pengulangan otomatis (keputusan 2026-11-24).
