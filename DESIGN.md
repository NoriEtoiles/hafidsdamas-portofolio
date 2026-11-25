# DESIGN.md — Portofolio damas.my.id

Status: draf, menunggu persetujuan pemilik. Diperbarui 2026-11-24.

Catatan 2026-11-24: pemilik menyetujui board "Versi 4" (desktop) dan empat board HP. Versi 4 menggantikan Versi 3 sebagai sumber kebenaran. Pada hari yang sama pemilik menyetujui tiga perbaikan kontras di bagian 3.4 (board "Versi 4c"), yang kini sudah menjadi isi Versi 4 dan board HP.

Sumber kebenaran desain adalah board "Versi 4" (`project/v4.dc.html`, desktop) dan empat board HP (`project/hp-*.dc.html`) pada kanvas https://claude.ai/artifact/R3aTqZWsbnFhEifaUp4zoX. Board lain hanya riwayat. Semua nilai di bawah dibaca langsung dari berkas board itu. Rasio kontras dihitung ulang pada 2026-11-19 dengan rumus luminansi relatif WCAG 2.x. Bila dokumen ini berbeda dari board, board yang benar dan dokumen ini harus diperbaiki. Daftar selisih antara mockup dan situs asli ada di `docs/PRD.md` bagian 5.

## 1. Design Read

> Membaca ini sebagai: situs portofolio satu halaman untuk orang yang menilai kemampuan front-end Hafids, bergaya editorial (tipografi display besar, satu aksen, motif sudut terpotong) dengan interaksi bergaya Swiss (penomoran, kisi tegas), dial ENERGY 3 / RHYTHM 3 / MOTION 3.

Tujuan rasa dari pemilik: kesan pertama membuat pengunjung takjub dan menganggap Hafids front-end web developer yang mahir. Efeknya dinamis tetapi tetap elegan. Pemilik juga meminta micro-interaction yang tidak terkesan "AI slop".

## 2. Dial dan alasannya

| Dial | Nilai | Alasan |
|---|---|---|
| ENERGY | 3 | Tujuannya kesan pertama yang kuat. Nama dan judul section memakai huruf display kapital berukuran 64 sampai 184 px. Ada satu aksen (emas di tema terang, perak di tema gelap) dan satu motif identitas (sudut terpotong). Kata "Hafids" raksasa memotong bagian bawah footer. |
| RHYTHM | 3 | Tiap section punya komposisi sendiri: hero asimetris (nama besar di kiri, foto dengan blok aksen bergeser di kanan), Skills tiga kelompok dengan kisi kotak ikon (tanpa kartu pembungkus), Karya satu kartu besar dengan slot putus-putus, Tentang dua lini masa berdampingan, Kontak satu kalimat besar. Padding atas section berbeda (72, 40, 112 px). |
| MOTION | 3 | Ada koreografi yang punya pemicu jelas: navbar menyatu lalu berpisah saat scroll, sorotan navbar berpindah, benang latar tergambar mengikuti scroll, nama naik per baris, judul section terisi, bagian masuk bertahap, tema berganti dengan lingkaran. Tidak ada parallax atau pin. Tidak ada gerak yang berulang tanpa henti: semua gerak dipicu scroll, klik, atau hover. |

Catatan perubahan: kesepakatan awal pada 2026-11-17 adalah MOTION 2. Versi 3 dan instruksi sesi 2026-11-19 menaikkannya menjadi 3. Alasan lengkapnya ada di `docs/DECISIONS.md` (D-05).

Pengungkit keaktifan yang dipakai (agar hasilnya tidak hampa): satu titik fokus per layar (nama di hero, judul besar di tiap section), kontras hierarki lewat ukuran dan bobot, satu aksen yang hemat, dan satu motif identitas yang berulang.

## 3. Palet

Dua tema. Terang bernuansa krem dan emas. Gelap bernuansa arang abu-abu dan perak. Tema dipilih lewat atribut `data-theme` ("light" atau "dark"). Nama token mengikuti board agar bisa dilacak satu lawan satu.

### 3.1 Token warna

| Token | Fungsi | Terang | Gelap |
|---|---|---|---|
| `--bg` | latar halaman | `#F6F1E6` | `#151618` |
| `--g1` | latar kartu dan ujung gradasi latar | `#E8DFCB` | `#23252A` |
| `--fg` | teks utama, tombol utama gelap | `#1B1A17` | `#ECEDEF` |
| `--mut` | teks sekunder | `#5C584F` | `#A4A8B0` |
| `--acc` | aksen untuk isian (bukan teks) | `#C9A24B` | `#C9CED6` |
| `--accT` | aksen untuk teks | `#7A5813` | `#C9CED6` |
| `--onacc` | teks di atas isian aksen | `#1B1A17` | `#151618` |
| `--i1` | ujung gelap gradasi teks "ITSC" | `#7A5813` | `#8D939D` |
| `--i2` | ujung terang gradasi teks "ITSC" | `#C9A24B` | `#E4E7EC` |
| `--line` | garis, latar placeholder, kata raksasa di footer | `#D9D0BC` | `#2E3035` |

Latar halaman memakai gradasi lurus 180 derajat dari `--g1` ke `--bg` sepanjang 900 px pertama, tanpa pengulangan.

### 3.2 Token kaca (khusus navbar)

| Token | Terang | Gelap |
|---|---|---|
| `--glass` | `rgba(255,251,242,0.55)` | `rgba(48,50,56,0.70)` |
| `--glassB` (garis tepi) | `rgba(255,255,255,0.75)` | `rgba(255,255,255,0.16)` |
| `--glassHi` (kilau dalam) | `rgba(255,255,255,0.55)` | `rgba(255,255,255,0.14)` |
| `--sheen` (kilap diagonal) | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.14)` |
| `--shadow` | `rgba(60,45,10,0.18)` | `rgba(0,0,0,0.45)` |

Ambang yang dipakai: teks biasa 4.5:1, teks besar (mulai 24 px, atau 18,66 px tebal) 3:1, komponen dan bidang non-teks 3:1.

### 3.3 Rasio kontras

| Pasangan | Terang | Gelap | Hasil |
|---|---|---|---|
| `--fg` di `--bg` | 15,45 | 15,46 | lolos |
| `--fg` di `--g1` | 13,13 | 13,09 | lolos |
| `--mut` di `--bg` | 6,29 | 7,59 | lolos |
| `--mut` di `--g1` | 5,35 | 6,43 | lolos |
| `--accT` di `--bg` | 5,77 | 11,45 | lolos |
| `--accT` di `--g1` | 4,90 | 9,70 | lolos |
| `--onacc` di `--acc` (teks pada sorotan navbar dan tombol utama) | 7,25 | 11,45 | lolos |
| `--mut` di `--line` (teks placeholder) | 4,62 | 5,54 | lolos |
| `--i1` di `--bg` | 5,77 | 5,86 | lolos |
| `--i2` di `--bg` | 2,13 | 14,61 | terang gagal untuk ujung emas (lihat 3.4) |
| `--acc` di `--bg` (isian non-teks) | 2,13 | 11,45 | terang di bawah 3:1 (lihat 3.4) |
| `--acc` di `--g1` | 1,81 | 9,70 | terang di bawah 3:1, hanya dekoratif |
| `--line` di `--bg` | 1,36 | 1,37 | dekoratif saja, tidak membawa informasi |

Warna emas asli `#C9A24B` sebagai teks di atas `#F6F1E6` hanya 2,13:1. Itu sebabnya semua teks beraksen emas di tema terang memakai `#7A5813` (5,77:1 di `--bg`, 4,90:1 di `--g1`). `#C9A24B` hanya dipakai sebagai isian dan garis dekoratif.

### 3.4 Temuan kontras pada mockup (perbaikan disetujui 2026-11-24)

Ketiganya tercatat apa adanya. Pada 2026-11-24 pemilik meminta saya memilih opsi paling cocok, dan hasilnya ada di board "Versi 4c" (kanvas). Pemilik menyetujuinya pada hari yang sama. Situs asli dibangun dengan perbaikan ini (lihat `docs/PRD.md`, Q-05 sampai Q-07).

Perbaikan yang disetujui (Versi 4c, kini sama dengan Versi 4):
- **Lini masa (Q-05):** hanya lingkaran penanda dan garis rel yang diredupkan (opasitas 0,55). Semua teks tetap penuh, jadi teks sekunder `--mut` 6,29:1 di tema terang. Item aktif tetap ditandai lingkaran berisian aksen.
- **Gradasi ITSC (Q-06):** di tema terang ujung `--i2` diubah dari `#C9A24B` (2,13:1) menjadi `#A07A22` (3,52:1, cukup untuk teks besar 3:1). `--i1` `#7A5813` tetap (5,77:1). Tema gelap tidak berubah.
- **Navbar aktif (Q-07):** di tema terang penanda berisian tinta `--fg` (`#1B1A17`) dengan teks `--bg` (`#F6F1E6`), kontras 15,45:1. Tema gelap tetap isian perak. Di menu HP tema terang, baris aktif memakai isian aksen `#7A5813` dengan teks `--bg` (5,77:1) supaya berbeda dari baris Kontak yang berisian tinta. Ini selisih kecil dari rumusan "isian tinta" dan dicatat di `docs/PRD.md` bagian 5.

Rincian masalah aslinya:

1. Item lini masa yang tidak aktif (`.tl`, opacity 0,55). Judul 22 px dan peran 20 px (bobot 600) efektif 3,75:1 di tema terang dan 5,38:1 di tema gelap. Angka itu lolos hanya bila dihitung sebagai teks besar, dan bobot 600 berada di perbatasan definisi "tebal", jadi sebaiknya ikut diperbaiki. Teks sekunder 15 px jelas gagal: efektif 2,40:1 di tema terang dan 3,15:1 di tema gelap, sedangkan ambangnya 4,5:1.
2. Gradasi teks "ITSC" (56 px, tema terang). Ujung `--i2` `#C9A24B` hanya 2,13:1, di bawah 3:1 untuk teks besar. Ujung `--i1` aman.
3. Sorotan navbar aktif di tema terang. Isian emas terhadap latar hanya 2,13:1 dan warna teks aktif sama dengan warna teks tidak aktif (`#1B1A17`), sehingga status aktif hanya dibedakan oleh isian itu. Di tema gelap rasionya 11,45:1 dan tidak bermasalah.

Teks navbar di atas kaca juga belum bisa dihitung secara statis karena latarnya berubah mengikuti konten yang lewat. Ini harus diuji pada bagian halaman dengan latar terburuk di kedua tema (lihat `docs/SOP-CODING.md`).

### 3.5 Token struktural (potongan 4.1, 2026-11-25)

Token berikut hanya mencatat angka yang sudah ada di mockup dan `docs/SOP-CODING.md`; tidak ada nilai desain baru. Ditulis di `css/tokens.css` bersama token warna.

| Token | Nilai | Sumber |
|---|---|---|
| `--font-display` | Big Shoulders Display (bobot 900), cadangan Impact dan Arial Narrow | bagian 4 |
| `--font-body` | Familjen Grotesk (400, 500, 600), cadangan sans-serif sistem | bagian 4 |
| `--gutter` | 48 px, 20 px di lebar 640 px ke bawah | bagian 15 |
| `--page-max` | 1240 px | lebar isi board Versi 4 |
| `--cut` | 28 px | bagian 6 |
| `--nav-offset` | 88 px (offset `scroll-margin-top` section) | SOP bagian 7 |
| `--hover-wash` | `rgba(120,110,90,0.16)` (latar hover tautan nav tidak aktif, dipakai di kedua tema) | board Versi 4 |

## 4. Tipografi

Dua keluarga huruf, keduanya berlisensi SIL Open Font License (OFL):

- **Big Shoulders Display**, bobot 900, selalu huruf kapital (`text-transform: uppercase`). Untuk nama, judul section, judul kartu, logo, dan kata raksasa di footer. Board memuat bobot 800 dan 900, tetapi hanya 900 yang dipakai.
- **Familjen Grotesk**, bobot 400 (isi), 500 (tautan navbar, label skill), 600 (penekanan, tombol, judul kecil). Untuk semua teks isi.

Cadangan keluarga huruf: display `'Impact','Arial Narrow',sans-serif`, isi `system-ui,sans-serif`.

| Elemen | Ukuran | Tinggi baris | Catatan |
|---|---|---|---|
| Teks isi | 18 px | 1,55 | dasar halaman |
| Nama di hero | `clamp(64px, 8.8vw, 128px)` | 0,96 | tiga baris: "Hafids Damas", "Arya Sutha", "Ramadhan" |
| Judul besar (Skills, Karya) | `clamp(88px, 12.5vw, 184px)` | 0,92 | efek isian saat masuk |
| Kalimat Kontak | `clamp(52px, 7.4vw, 108px)` | 0,98 | lebar maksimum 960 px |
| Judul Pendidikan dan Pengalaman | 64 px | 1 | |
| Judul kelompok skill | 44 px | 1 | |
| Judul kartu Karya, teks "ITSC" | 56 px | 1,1 dan 1 | |
| Logo navbar | 24 px | | `letter-spacing: .03em` |
| Kata "Hafids" raksasa di footer | 380 px | 0,9 | warna `--line`, `aria-hidden`, tinggi tampak 230 px dipotong |
| Tagline hero | 21 px, bobot 600 | | |
| Label kecil, tautan navbar, isi kartu kecil | 14 sampai 15 px | | |
| Tombol | 16 px, bobot 600 | | tombol kecil 15 px |

Keputusan 2026-11-24 (Q-04): berkas huruf dilayani sendiri dari repo dalam format woff2 (`fonts/`), dengan `font-display: swap`, preload untuk berkas di atas lipatan, dan salinan lisensi OFL di folder yang sama. Board kanvas tetap memakai tautan Google Fonts hanya karena batasan kanvas.

## 5. Ikon

Status: bagian ini menggambarkan Versi 4 (diusulkan 2026-11-19, direvisi, disetujui pemilik 2026-11-24). Versi 3 yang disetujui memakai warna ikon yang berpindah antar tema, dan permintaan pemilik 2026-11-19 mengubahnya (D-21, direvisi D-22).

- **Ikon teknologi:** Simple Icons (pustaka berlisensi CC0). Path SVG diambil dari board apa adanya, `viewBox="0 0 24 24"`, ukuran 30 px, `aria-hidden="true"`. Nama skill tetap tertulis sebagai teks di bawah ikon. Merek dagang tetap milik pemiliknya masing-masing, jadi ikon hanya dipakai untuk menandai teknologi yang memang dipakai Hafids, bukan untuk mengesankan afiliasi. Versi Simple Icons yang dipakai dicatat saat situs dibangun.
- **SQL:** digambar sendiri (silinder basis data), warna indigo netral `#5B6BD6` karena tidak ada merek tunggal yang diwakili.
- **Matahari dan bulan** pada tombol tema: digambar sendiri, garis 1,8 px, `viewBox="0 0 24 24"`, 20 px, `aria-hidden`. Tombolnya punya `aria-label="Ganti tema terang atau gelap"`.

**Bentuk Skills (revisi D-22).** Tidak ada lagi kartu besar di belakang kelompok. Tiap kelompok (Web, Jaringan, Kode dan data) hanya berupa label kecil, judul, satu kalimat, dan kisi kotak skill dua kolom yang langsung duduk di latar halaman. Tiap skill adalah satu kotak (tinggi minimal 116 px, radius 16 px, garis tepi 1 px) berisi ikon di atas dan nama di bawah. Kotak itu mengikuti tema lewat dua token: `--tile` (`#FFFDF8` terang, `#23252A` gelap) dan `--tileB` (garis tepi, `rgba(120,110,90,.24)` terang, `rgba(255,255,255,.08)` gelap). Radius 16 px pada kotak kecil menyimpang dari motif sudut terpotong (bagian 6), yang tetap dipakai pada foto dan tangkapan layar. Penyimpangan ini mengikuti referensi pemilik.

**Warna ikon tetap di kedua tema.** Satu warna per ikon, tidak berubah saat tema berganti, dengan pengecualian yang dicatat di bawah:
- Tiga ikon yang merek aslinya hitam atau hampir hitam (GitHub, Vercel, MikroTik) memakai warna tinta `--fg`: `#1B1A17` di tema terang dan `#ECEDEF` di tema gelap. Hitam di atas kotak gelap tidak terbaca (1,2:1), dan satu-satunya cara menjaganya konstan adalah kotak yang tidak mengikuti tema, yang ditolak pemilik. Ini satu-satunya ikon yang warnanya berpindah.
- CSS (merek `#663399`) dan C++ (merek `#00599C`) dicerahkan menjadi `#8E55C6` dan `#0073CA`, dan nilai baru itu dipakai di kedua tema. Warna merek asli hanya 1,8:1 dan 2,1:1 di kotak gelap.

Tiga ikon kuning memakai emas tua (lihat di bawah tabel). Warna lainnya adalah warna merek apa adanya. Alasan tertulis untuk menyimpang dari "palet maksimal tiga warna inti plus satu aksen": warna merek menandai teknologi, dan hanya muncul di ikon pada kotak skill.

| Skill | Warna ikon | Rasio di kotak terang `#FFFDF8` | Rasio di kotak gelap `#23252A` |
|---|---|---|---|
| HTML | `#E34F26` | 3,82 | 3,95 |
| CSS | `#8E55C6` | 4,84 | 3,11 |
| JavaScript | `#A29006` | 3,16 | 4,77 |
| GitHub | tinta (`--fg`): `#1B1A17` di terang, `#ECEDEF` di gelap | 17,12 | 13,09 |
| Vercel | tinta (`--fg`): `#1B1A17` di terang, `#ECEDEF` di gelap | 17,12 | 13,09 |
| Google Sheets | `#34A853` | 3,01 | 5,02 |
| Cisco | `#049FD9` | 2,97 | 5,09 |
| MikroTik | tinta (`--fg`): `#1B1A17` di terang, `#ECEDEF` di gelap | 17,12 | 13,09 |
| Linux | `#B78A03` | 3,11 | 4,86 |
| Python | `#3776AB` | 4,76 | 3,17 |
| C++ | `#0073CA` | 4,80 | 3,14 |
| SQL | `#5B6BD6` | 4,57 | 3,30 |
| Google Colab | `#C18400` | 3,15 | 4,80 |
| Arduino | `#00878F` | 4,25 | 3,55 |

Rasio dihitung ikon terhadap warna kotak. Semua ikon lolos 3:1 di kedua kotak, dengan dua di batas: Cisco (2,97:1 di kotak terang, dibulatkan, praktis 3:1) dan Google Sheets (3,01:1). Tiga ikon kuning (JavaScript, Linux, Google Colab) sengaja digelapkan menjadi emas tua dari warna logo resminya (`#F7DF1E`, `#FCC624`, `#F9AB00`) atas keputusan pemilik 2026-11-23 setelah membandingkan board Versi 4 dan 4b. Konsekuensinya warna ketiganya tidak lagi sama dengan logo resmi dan JavaScript tampak lebih zaitun. Tiap ikon tetap disertai nama sebagai teks.

**Micro-interaction kotak skill:** di perangkat dengan hover, kotak naik 3 px dan garis tepinya berubah menjadi warna ikonnya (0,25 detik). Kotak bukan tautan, jadi kursor tidak berubah. Dimatikan oleh reduced motion.

## 6. Motif sudut terpotong

Satu motif identitas yang berulang: sudut kanan bawah dipotong miring.

```css
clip-path: polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%);
```

Ukuran potongan selalu 28 px. Dipakai pada tempat foto, kartu kelompok Skills, dan tempat tangkapan layar Karya. Di belakang foto ada satu blok `--acc` dengan bentuk yang sama, bergeser `14px` ke kanan dan ke bawah (`inset: 14px -14px -14px 14px`) sebagai bayangan identitas. Aturan penggunaan:

- Hanya sudut kanan bawah, tidak dipakai di sudut lain.
- Tombol tidak memakai motif ini. Tombol berradius 4 px.
- Bentuk pil (radius 999 px) hanya untuk bagian navbar. Alasan tertulis: pil di navbar adalah bahan kaca yang berubah dari satu kapsul menjadi beberapa bagian, dan hanya di situ pil dipakai agar tidak menjadi bentuk default semua elemen.
- Placeholder tak berbingkai (slot proyek berikutnya) memakai garis putus-putus 1 px `--mut` tanpa sudut terpotong, supaya jelas bahwa itu kosong dan belum ada isinya.

## 7. Navbar

### 7.1 Struktur

Satu `<header>` sticky (`top: 16px`, `z-index: 20`, lebar maksimum 1240 px, padding samping 48 px) berisi satu baris:

- Logo teks "Hafids" (tautan ke Beranda, tinggi 48 px, padding 24 px, huruf display 24 px).
- Kelompok `<nav aria-label="Utama">` dengan empat tautan berukuran sama: Beranda, Skills, Karya, Tentang (masing-masing 104 × 40 px, padding kelompok 4 px).
- Tombol tema 48 × 48 px (matahari di tema terang, bulan di tema gelap).
- Tombol "Kontak" berupa tautan ke `#sec-contact` (tinggi 48 px, padding 26 px).

### 7.2 Menyatu di hero, berpisah saat di-scroll

- **Menyatu** (scroll di puncak): lebar baris `min(744px, 100%)`. Satu kapsul kaca melingkupi semua bagian (`::before`, `inset: -6px -8px`, radius 999 px). Logo, nav, dan tombol tema sendiri tembus pandang tanpa garis tepi dan bayangan.
- **Berpisah**: setelah scroll lebih dari 40 px, lebar baris melebar ke `min(1144px, 100%)` (0,7 detik, `cubic-bezier(.3,.9,.3,1)`). Kapsul menghilang (opasitas 0 dalam 0,5 detik) dan logo, kelompok nav, serta tombol tema masing-masing tampil sebagai kaca tersendiri.
- **Kembali menyatu** hanya ketika scroll kurang dari 12 px. Di antara 12 dan 40 px keadaan tidak berubah, supaya tidak berkedip di sekitar ambang.

### 7.3 Bahan kaca

`backdrop-filter: blur(20px) saturate(1.7)`, latar `--glass`, garis tepi 1 px `--glassB`, bayangan dalam `inset 0 1px 1px --glassHi`, bayangan luar `0 10px 30px --shadow`, ditambah lapisan kilap diagonal 135 derajat dari `--sheen` ke transparan pada 45%. Kaca hanya dipakai di navbar. Alasan tertulis: pemilik meminta bahan kaca (ide 2026-11-18) agar konten yang lewat di belakang navbar tetap terlihat, dan kaca menandai perubahan bentuk dari kapsul menjadi bagian-bagian. Kaca tidak boleh meluas ke elemen lain.

### 7.4 Sorotan section aktif

Satu penanda isian `--acc` (radius 999 px, 104 × 40 px) berpindah di belakang tautan aktif dengan `transform: translateX(indeks × 104px)` selama 0,5 detik, `cubic-bezier(.3,1.3,.5,1)` (sedikit melampaui lalu kembali). Teks tautan aktif berubah menjadi `--onacc`. Tautan tidak aktif yang di-hover mendapat latar `rgba(120,110,90,.16)`.

Penentuan section aktif: section dianggap aktif saat tepi atasnya melewati 40% tinggi viewport. Di dasar halaman, section terakhir (Kontak) otomatis aktif. Saat Kontak aktif, penanda nav menghilang (opasitas 0) dan tombol "Kontak" berubah dari isian `--fg` ke isian `--acc` dengan teks `--onacc`. Tautan aktif membawa `aria-current="true"`.

Selama scroll mulus ke suatu section, sorotan langsung berpindah ke tujuan dan tidak mengikuti section yang dilewati.

### 7.5 Catatan untuk implementasi

Penanda di board memakai lebar tetap 104 px sebagai konstanta. Di situs asli, posisi dan lebar penanda sebaiknya dibaca dari ukuran tautan sebenarnya agar tidak patah saat zoom, ganti font, atau tautan berubah. Penentuan section aktif di board dihitung dari `offsetTop` pada setiap scroll. Di situs asli, ScrollTrigger sudah tersedia dan cukup dipakai untuk itu.

## 8. Scroll mulus

Board menggulir di dalam bingkai 900 px (`overflow-y: auto`) dan memakai animasi scroll buatan sendiri. Situs asli menggulir halaman penuh memakai Lenis. Perilaku yang harus sama:

- Klik tautan nav menggulir ke tujuan dengan offset 88 px (supaya judul tidak tertutup navbar). Tujuan Beranda adalah puncak halaman.
- Durasi sebanding dengan jarak: 0,42 ms per piksel, minimum 550 ms, maksimum 1200 ms. Easing kubik masuk-keluar (`4t³` untuk separuh pertama, `1 − (−2t+2)³/2` untuk separuh kedua).
- Perintah scroll dibatalkan bila pengguna memutar roda atau menyentuh layar.
- Setelah tiba, fokus pindah ke section (`tabindex="-1"`, tanpa menggulir lagi).
- Tautan tetap memiliki `href` ke id section sehingga berfungsi tanpa JavaScript.
- Dengan `prefers-reduced-motion: reduce`, tidak ada scroll animasi: halaman langsung melompat.

Integrasi Lenis dan ScrollTrigger mengikuti pola standar dokumentasi Lenis (perbarui ScrollTrigger pada setiap scroll Lenis, gerakkan Lenis dari ticker GSAP, matikan lag smoothing). Nilai durasi dan easing di atas adalah usulan awal dari perilaku board dan diukur ulang saat membangun.

## 9. Benang latar

Garis tipis tergambar di gutter kiri dan kanan yang mengikuti scroll, menyeberang lewat celah kosong antar section. Fungsi tertulisnya adalah menuntun mata melewati lima section dan menjadi bagian dari identitas. Benang bukan pola latar acak.

- Dua jalur SVG sama: jalur dasar `--line` (1,5 px) dan jalur aksen `--acc` (2 px, ujung bulat, `pathLength=1000`) yang digambar bertahap lewat `stroke-dashoffset`. Titik bulat `--acc` (radius 6, garis tepi 2 px `--bg`) menandai ujungnya.
- Jalur dimulai di tepi kanan (`x = lebar − 44`, `y = 96`), turun di gutter, lalu menyeberang ke sisi lain lewat kurva kubik di celah 100 px sebelum tiap section (Skills, Karya, Tentang, Kontak), bergantian kanan dan kiri. Berakhir 160 px sebelum dasar halaman.
- Panjang yang tergambar ditentukan oleh `scrollTop + 0,62 × tinggi viewport`: ujung benang berada di titik jalur yang tingginya sama dengan garis itu.
- Jalur dihitung ulang saat ukuran berubah dan saat font selesai dimuat.
- **Di bawah 1180 px lebar, benang disembunyikan** (`display: none`). Alasannya belum tercatat oleh pemilik (lihat Q-02). Tampilan HP belum dirancang di mockup.
- Dengan `prefers-reduced-motion: reduce`: jalur aksen tergambar penuh tanpa animasi dan titiknya disembunyikan.

Pada situs asli posisi dihitung dari scroll halaman, bukan dari bingkai, dan harus diuji ulang.

## 9b. Latar kontur topografi (Versi 4, usulan)

Status: usulan 2026-11-19 atas permintaan pemilik ("latar terlalu polos, ingin bertekstur", referensi foto kontur pada situs ekawahyu-portofolio). Disetujui 2026-11-24 (D-21).

- **Bentuk:** garis kontur halus tanpa isian, seperti peta topografi. Dibuat sebagai satu pola SVG yang bisa disambung mulus (ubin 1200 × 1200 px, tepi kiri dan kanan serta atas dan bawah cocok) dan diulang di seluruh latar halaman. Sekitar 59 jalur: 45 garis biasa (1,3 px) dan 14 garis indeks (2 px, tiap garis keempat, seperti pada peta sungguhan).
- **Warna:** memakai token `--line` yang sudah ada (`#D9D0BC` terang, `#2E3035` gelap), tanpa token baru. Garis ini 1,36:1 dan 1,37:1 terhadap `--bg`, jadi tetap latar yang tenang.
- **Teks di atas garis:** teks sekunder `--mut` yang tepat berada di atas garis kontur tetap 4,62:1 (terang) dan 5,54:1 (gelap), di atas ambang 4,5:1. Teks utama jauh di atasnya. Kotak skill berisian `--tile` sehingga menutupi garis. Judul dan kalimat kelompok Skills kini langsung di atas garis (tidak ada kartu pembungkus), jadi kontras teks `--mut` di sana mengacu pada angka di atas.
- **Susunan lapisan:** di bawah semua konten (z-index 0), di atas gradasi latar `--g1` ke `--bg`. `pointer-events: none` dan `aria-hidden`.
- **Alasan tertulis (antislop):** latar bertekstur biasanya dilarang tanpa alasan identitas. Alasannya di sini: kontur adalah garis, selaras dengan benang latar (bagian 9) yang juga garis, jadi keduanya terbaca sebagai satu motif. Pemilik memintanya secara eksplisit. Benang `t1` (jalur dasar) diubah menjadi `--mut` dengan opasitas 0,3 supaya tetap terbedakan dari garis kontur.
- **Gerak dan micro-interaction (revisi D-22):** lapisan dasar tetap statis. Di atasnya ada lapisan sorotan dengan pola kontur yang sama, berwarna `--hi` (`#C9A24B` terang, `#C9CED6` gelap, garis 2,2 px), yang hanya tampak di dalam lingkaran berjari-jari sekitar 230 px yang mengikuti kursor. Tepinya memudar lewat `mask-image: radial-gradient`. Saat kursor meninggalkan halaman, sorotan memudar dalam 0,4 detik. Posisi dihitung dari kursor relatif terhadap latar, dan dihitung ulang saat scroll supaya sorotan tetap di bawah kursor. Pola dibuat satu kali di `<g>` lalu dipakai dua kali lewat `<use>` (satu untuk garis dasar, satu untuk sorotan), jadi data garis tidak digandakan.
  - **Tujuan tertulis:** memberi tahu bahwa latar hidup dan memberi umpan balik pada kursor tanpa mengganggu bacaan. Sorotan tidak berjalan sendiri.
  - **Hanya perangkat dengan hover dan penunjuk halus** (`(hover: hover) and (pointer: fine)`). Di layar sentuh lapisan sorotan tidak dipasang.
  - **Reduced motion:** transisi pudar dimatikan. Sorotan tetap mengikuti kursor karena itu manipulasi langsung, bukan gerak otomatis.
  - **Catatan:** situs referensi (ekawahyu-portofolio) tidak bisa dibuka dari lingkungan kerja, jadi efeknya dirancang dari gambar dan deskripsi pemilik, bukan disalin. Perilaku persisnya di referensi belum diverifikasi.
- **Di HP:** pola yang sama diperkecil menjadi 62% agar kerapatan garis mirip.
- **Belum diputuskan:** kerapatan, ketebalan, dan apakah garis indeks perlu. Nilai di atas adalah tebakan pertama dan mudah diubah. Bila pemilik lebih suka garis mengalir halus seperti pada referensi foto 2 dan 3, bentuknya diganti.

## 9c. Cahaya pada nama "Hafids" di footer (Versi 4, usulan)

Status: usulan 2026-11-19 atas ide pemilik ("nama HAFIDS di footer ada animasinya, seperti cahaya glow dari kiri ke kanan"). Disetujui 2026-11-24 (D-22).

- **Bentuk:** kata "Hafids" besar di dasar halaman (380 px di desktop, 128 px di HP, warna `--line`) tetap sebagai dasar. Di atasnya ada lapisan teks yang sama dengan latar berupa pita gradasi (transparan, `--glow`, transparan, lebar 34%) yang dipotong mengikuti huruf (`background-clip: text`) dan diberi `drop-shadow` 16 px berwarna `--glowS`. Pita bergerak dari kiri ke kanan melewati kata itu dalam 2,4 detik.
- **Warna:** `--glow` `#C9A24B` (emas) di tema terang dan `#E4E7EC` (perak) di tema gelap, sama dengan aksen masing-masing tema.
- **Pemicu (tertulis):** berjalan satu kali ketika footer masuk ke layar (separuh kata terlihat), lalu satu kali lagi tiap kali kursor masuk ke kata itu (hanya perangkat dengan hover). Tidak berulang sendiri, sesuai aturan gerak tanpa pemicu. Pemilik menyatakan pada 2026-11-23 bahwa perilaku ini sudah cocok dan tidak perlu diubah (Q-19 tertutup).
- **Aksesibilitas:** kata itu dekoratif dan `aria-hidden`, jadi tidak memengaruhi pembaca layar. Kontras kata dasar tidak dipersyaratkan karena dekoratif.
- **Reduced motion:** kelas `js` tidak dipasang, jadi tidak ada sapuan. Kata tampil statis. Ada juga aturan `animation: none` untuk lapisan itu.
- **Antislop:** glow dibatasi satu elemen ini (aturan maksimal satu sampai dua glow). Alasan tertulis: menutup halaman dengan satu momen berkesan yang menandai identitas nama, bukan hiasan di banyak tempat.

## 10. Animasi masuk

Semua animasi masuk dipicu sekali oleh `IntersectionObserver` (ambang 0,12) lalu elemen dilepas dari pengamatan, sehingga tidak berulang saat di-scroll bolak-balik.

| Elemen | Efek | Durasi dan easing |
|---|---|---|
| Nama hero (tiga baris) | tiap baris naik dari bawah garis potong (`translateY(104%)` ke 0), jeda 0 / 0,09 / 0,18 detik | 0,9 detik, `cubic-bezier(.2,.7,.1,1)` |
| Elemen `.rv` (tagline, paragraf, tombol, kartu, lini masa, kalimat Kontak) | muncul dari opasitas 0 dan bergeser 18 px ke atas | 0,7 detik, opasitas `ease`, gerak `cubic-bezier(.2,.7,.1,1)` |
| Judul besar `.hd` (Skills, Karya) | teks berupa kerangka garis 2 px `--fg`, lalu terisi `--fg` dari kiri ke kanan | 1,1 detik, `cubic-bezier(.6,0,.2,1)` |

Elemen disembunyikan oleh gaya yang hanya aktif bila kelas `js` terpasang di akar halaman. Kelas itu dipasang oleh JavaScript hanya bila pengguna tidak meminta kurangi gerak. Konsekuensinya: tanpa JavaScript atau dengan reduced motion, semua konten langsung tampil. Pola ini harus dipertahankan, termasuk bila pustaka dari CDN gagal dimuat.

## 11. Transisi tema (lingkaran)

- Klik tombol tema memanggil `document.startViewTransition()`. Tampilan baru terungkap sebagai lingkaran yang meluas dari titik tengah tombol (`clip-path: circle(0)` ke `circle(150%)`, 0,7 detik, `ease-in-out`). Animasi bawaan lama dan baru dimatikan (`animation: none`, `mix-blend-mode: normal`).
- Koordinat asal (`--ox`, `--oy`) diambil dari pusat tombol yang diklik.
- Tema berganti lewat atribut `data-theme`.
- Efek lingkaran hanya berjalan di Chromium menurut catatan pemilik. Peramban lain mengganti tema langsung tanpa animasi. Karena dukungan View Transitions API terus berubah, hal ini harus diuji ulang di Firefox dan Safari saat pengujian lintas-peramban, dan fallback langsung tetap wajib ada.
- Dengan reduced motion, tema berganti langsung.

## 12. Status interaksi

| Elemen | Hover | Active | Fokus keyboard | Nonaktif |
|---|---|---|---|---|
| Tautan teks (`.lnk`) | garis bawah 1 px tumbuh dari kiri (0,3 detik) | belum ada | kontur 2 px `currentColor`, jarak 4 px | tidak ada |
| Tombol (`.btn`) | naik 2 px, tombol sekunder berubah ke `--line` | kembali ke posisi awal | kontur 2 px | belum ada |
| Tautan nav | latar `rgba(120,110,90,.16)` bila tidak aktif | belum ada | kontur 2 px | tidak ada |
| Tombol "Kontak" | naik 2 px | belum ada | kontur 2 px | tidak ada |
| Logo "Hafids" | latar `--hover-wash` (Q-13, disetujui 2026-11-25) | wash yang sama, mengecil ke 0,96 | kontur 2 px | tidak ada |
| Tombol tema | latar `--hover-wash`, ikon berputar 18 derajat (Q-13) | wash yang sama, mengecil ke 0,92 | kontur 2 px | tidak ada |
| Kartu Karya | gambar naik 6 px (0,35 detik), garis bawah 3 px tumbuh di judul | belum ada | kontur 2 px | tidak ada |
| Item lini masa | opasitas naik dari 0,55 ke 1 (bila tidak aktif) | tidak interaktif | tidak interaktif | tidak ada |
| Kotak skill (tidak interaktif) | naik 3 px, garis tepi berubah ke warna ikon | tidak interaktif | tidak interaktif | tidak ada |
| Latar kontur | sorotan kontur mengikuti kursor (bagian 9b) | tidak interaktif | tidak interaktif | tidak ada |
| Nama "Hafids" di footer | sapuan cahaya kiri ke kanan (bagian 9c) | tidak interaktif | tidak interaktif | tidak ada |

Sel "belum ada" adalah celah di mockup terhadap aturan antislop bahwa tiap elemen interaktif punya status hover, active, dan fokus yang berbeda. Celah itu harus ditutup saat membangun, dan rancangannya ditunjukkan dulu ke pemilik bila menyangkut tampilan. Semua elemen yang bisa diklik memakai `cursor: pointer`, diatur sekali di lapisan dasar.

Umpan balik tombol "Salin email": teks berubah menjadi "Tersalin" selama 2 detik dan sebuah `aria-live="polite"` mengumumkan "Email tersalin". Di mockup pesan itu muncul meskipun penyalinan ke clipboard gagal. Di situs asli, pesan sukses hanya boleh muncul bila penyalinan benar berhasil (lihat FR-08).

## 13. prefers-reduced-motion

Bila pengguna memilih kurangi gerak:

- Kelas `js` tidak dipasang, jadi tidak ada animasi masuk: nama, tagline, kartu, dan judul langsung tampil penuh.
- Transisi navbar (lebar, kapsul, kaca) dimatikan, jadi menyatu dan berpisah berlangsung langsung.
- Transisi hover, sorotan nav, tombol, kartu, dan lini masa dimatikan.
- Tidak ada scroll animasi, perpindahan ke section langsung melompat. Di situs asli Lenis tidak dijalankan.
- Benang tergambar penuh tanpa titik, tanpa animasi.
- Tema berganti langsung tanpa lingkaran.
- Sapuan cahaya pada nama "Hafids" di footer tidak berjalan. Transisi pudar sorotan kontur dan angkat kotak skill dimatikan.

Di board, preferensi dibaca saat pemuatan. Situs asli sebaiknya juga mendengarkan perubahan preferensi (`change`) sehingga pengguna yang mengubahnya saat halaman terbuka tetap dihormati. Tidak ada gerak yang berjalan lebih dari 5 detik, jadi tombol jeda tidak diperlukan.

## 14. Pola antislop dan alasannya

| Pola yang berpotensi dianggap slop | Keputusan |
|---|---|
| Glassmorphism | Hanya navbar. Alasan di 7.3. |
| Bentuk pil | Hanya bagian navbar. Alasan di bagian 6. |
| Gradasi | Dua pemakaian: latar `--g1` ke `--bg` pada 900 px pertama (tonal, untuk kedalaman hero) dan teks "ITSC" dari `--i1` ke `--i2` (satu-satunya tempat emas dipakai sebagai teks identitas, atas permintaan pemilik pada 2026-11-17). Tidak ada gradasi biru-ungu atau pelangi. Ujung `--i2` masih bermasalah kontras (3.4). |
| Bayangan dan glow | Bayangan hanya pada kaca navbar. Glow hanya pada nama "Hafids" di footer (bagian 9c), satu elemen, dengan alasan tertulis. Kartu tidak berbayangan. |
| Latar grid atau titik | Tidak ada grid atau titik. Versi 4 menambah latar kontur topografi dengan alasan tertulis di bagian 9b (selaras dengan benang latar, diminta pemilik). |
| Font default | Tidak dipakai. Big Shoulders Display dan Familjen Grotesk dipilih untuk karakter, bukan default. |
| Ikon generik AI | Tidak ada. Ikon adalah ikon teknologi yang memang dipakai. |
| Data karangan | Tidak ada. Foto, tangkapan layar, logo, dan proyek berikutnya adalah placeholder berlabel. |
| Gerak tak berujung | Tidak ada. Semua gerak punya pemicu: sorotan kontur mengikuti kursor, sapuan footer berjalan sekali saat terlihat dan sekali per hover. |
| Kontrol tak berfungsi | Setiap tautan menuju tujuan nyata. Tautan Karya menuju https://damascell.vercel.app/. |
| Palet melebihi batas | Dua tema, satu aksen per tema. Warna merek hanya pada ikon di kotak skill, dan sama di kedua tema kecuali tiga ikon tinta (bagian 5). |

## 15. Tampilan HP (disetujui 2026-11-24)

Status: diusulkan 2026-11-19, disetujui pemilik 2026-11-24. Berada di kanvas sebagai empat board terpisah (lebar 390): `hp-terang`, `hp-menu`, `hp-gelap`, `hp-panjang`. Board Versi 4 adalah sumber kebenaran untuk desktop. Kebutuhannya ada di `docs/PRD.md` FR-14, alasannya di `docs/DECISIONS.md` D-20.

Yang sama dengan Versi 3: dial, kedua palet dan semua token, font, ikon skill, motif sudut terpotong 28 px, animasi masuk, tema lingkaran (hanya di Chromium), aturan reduced motion, isi dan placeholder.

Yang berbeda di HP:

| Hal | Desktop (Versi 4) | HP |
|---|---|---|
| Navbar | Logo, empat tautan dengan sorotan geser, tombol tema, tombol Kontak | Logo di kiri. Di kanan: tombol tema dan tombol menu yang memuat nama bagian saat ini. Menu membuka panel kaca berisi Beranda, Skills, Karya, Tentang, dan Kontak. Bagian aktif ditandai isian aksen dan tanda centang. Kontak berisi gelap, dan berisi aksen saat aktif |
| Menyatu dan berpisah | Lebar 744 ke 1144 px | Satu kapsul kaca di puncak, lebur saat scroll lebih dari 40 px (ambang sama), tanpa perubahan lebar |
| Benang latar | Ada di atas 1180 px | Tidak ada |
| Hero | Dua kolom | Nama, tagline, paragraf, tombol selebar kolom, lalu foto 4:5 di bawah |
| Skills | Tiga kelompok berdampingan, kisi kotak ikon dua kolom di tiap kelompok | Tiga kelompok bertumpuk, tiap kelompok berisi kisi kotak ikon dua kolom |
| Karya | Dua kolom | Satu kolom: kartu Damas Cell, lalu slot proyek berikutnya |
| Tentang | Pendidikan kiri, Pengalaman kanan | Pendidikan di atas, Pengalaman di bawah |
| Kontak | Tombol dan tautan sebaris | Ditumpuk, tombol "Salin email" selebar kolom, email boleh patah baris |
| Gutter | 48 px | 20 px |
| Ukuran huruf | Nama `clamp(64px, 8.8vw, 128px)` | Mockup memakai 56 px. Situs asli memakai `clamp()` dengan nilai yang diukur ulang |

Perilaku menu HP:
- Tombol menu: `aria-expanded`, `aria-controls="mpanel"`, dan `aria-label` yang menyebut bagian saat ini ("Buka menu, bagian saat ini: Skills").
- Panel muncul dalam 0,35 detik (naik 8 px dan memudar) di bawah navbar, disertai selubung gelap tipis di belakang. Dengan reduced motion, muncul tanpa transisi.
- Menutup: ketuk tombol menu, ketuk selubung, tekan Escape (fokus kembali ke tombol), atau ketuk salah satu tautan. Ketuk tautan juga menggulir ke section dengan offset 72 px.
- Tombol tema dan tombol menu setinggi 44 px. Baris panel setinggi 52 px.
- Status tekan (active) ada untuk logo, tombol tema, tombol menu, dan baris panel, karena di layar sentuh tidak ada hover. Ini menutup sebagian celah di bagian 12.

Keterbatasan usulan:
- Mockup memakai piksel tetap untuk ukuran huruf karena satuan `vw` di kanvas mengikuti lebar jendela editor, bukan bingkai.
- Perbaikan kontras bagian 3.4 (Versi 4c) sudah diterapkan ke keempat board HP setelah disetujui pemilik (Q-05 sampai Q-07).
- Hanya lebar 390 px yang dirancang. Tablet dan lebar menengah belum (Q-18).
- Pengujian 2026-11-19 (Chromium tanpa kepala, font asli dipasang lokal untuk uji): tidak ada scroll horizontal pada lebar 320, 360, dan 390 px. Nama hero tiga baris di 390 px. Menu terbuka dan tertutup lewat tombol, Escape (fokus kembali ke tombol), ketuk selubung, dan ketuk tautan (menggulir ke Karya dan Kontak, label dan penanda aktif ikut berubah). Tautan panel tidak ikut urutan Tab saat panel tertutup. Tombol tema mengganti tema. Tombol "Salin email" menampilkan "Gagal menyalin" saat clipboard tidak diizinkan, tanpa galat konsol.
- Belum diuji: jalur sukses tombol "Salin email", perangkat sentuh nyata, Safari dan Firefox, zoom 200%, mode reduced motion, dan kontras teks navbar di atas latar terburuk.
- Tinggi nyata `hp-panjang` di 390 px adalah 5223 px (bingkai di kanvas 5260 px). Di 320 px tingginya 5452 px.
