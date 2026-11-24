# SOP Coding — Website Portofolio damas.my.id

Status: draf, menunggu persetujuan pemilik. Diperbarui 2026-11-24.

Dokumen ini menjelaskan cara mengerjakan proyek. Apa yang dibangun ada di `docs/PRD.md`, rupa dan perilakunya di `DESIGN.md`, dan batas untuk AI agent di `AGENTS.md`. Bagian yang bertanda **[Usulan]** belum disetujui pemilik dan boleh diubah.

## 1. Prinsip

1. Hanya pemilik (Hafids) yang commit dan push ke GitHub. Agent menyiapkan perubahan dan usulan pesan commit, tidak lebih.
2. Pekerjaan baru dimulai setelah pemilik menyetujui rencananya. Perubahan desain ditunjukkan sebagai mockup dulu.
3. Tidak ada data karangan. Materi yang belum ada tetap placeholder berlabel.
4. Stack: HTML, CSS, dan JavaScript murni, GSAP, ScrollTrigger, dan Lenis dari CDN dengan versi dipatok, tanpa React dan tanpa build. Menambah framework JavaScript apa pun harus dikonfirmasi dulu.
5. Hasil dinyatakan selesai hanya setelah checklist di bagian 6 dijalankan dan dilaporkan dengan bukti.

## 2. Struktur folder [Usulan]

Nama repo belum ditetapkan (PRD Q-15).

```
(akar repo)
├── index.html
├── vercel.json
├── robots.txt
├── AGENTS.md
├── DESIGN.md
├── docs/
│   ├── PRD.md
│   ├── SOP-CODING.md
│   ├── DECISIONS.md
│   └── CHANGELOG.md
├── css/
│   ├── tokens.css        # variabel warna kedua tema, kaca, ukuran
│   ├── base.css          # reset, tipografi dasar, fokus, cursor
│   ├── layout.css        # kerangka section dan grid
│   ├── components.css    # navbar, tombol, kartu, lini masa, placeholder
│   └── motion.css        # transisi, animasi masuk, reduced motion
├── js/
│   ├── main.js           # titik masuk, memeriksa pustaka dan reduced motion
│   ├── theme.js          # ganti tema dan transisi lingkaran
│   ├── navbar.js         # menyatu dan berpisah, sorotan aktif
│   ├── scroll.js         # Lenis dan scroll ke section
│   ├── thread.js         # benang latar
│   ├── reveal.js         # animasi masuk
│   └── contact.js        # salin email
├── assets/
│   ├── fonts/            # berkas woff2 dan lisensi OFL (font dilayani sendiri, Q-04 diputuskan 2026-11-24)
│   ├── icons/            # SVG ikon bila dipisah dari HTML
│   └── img/              # kosong sampai pemilik menyerahkan materi asli
└── tests/                # opsional, hanya setelah disetujui (bagian 7)
```

Skrip pustaka dari CDN dimuat dengan `defer` lebih dulu, lalu `js/main.js` sebagai `type="module"`. Urutan eksekusi mengikuti urutan di dokumen.

## 3. Konvensi penamaan

- **File dan folder:** huruf kecil, kebab-case, tanpa spasi (`components.css`, `thread.js`).
- **Class CSS:** kebab-case yang menjelaskan peran (`nav-indicator`, `skill-card`). Status memakai awalan `is-` (`is-split`, `is-active`, `is-visible`). Class yang menandai peran skrip memakai awalan `js-` dan tidak diberi gaya.
- **Token CSS:** mengikuti nama di `DESIGN.md` bagian 3 (`--bg`, `--g1`, `--fg`, `--mut`, `--acc`, `--accT`, `--onacc`, `--i1`, `--i2`, `--line`, dan token kaca). Token baru tidak dibuat sebelum dicatat di `DESIGN.md`.
- **Atribut status:** `data-theme="light|dark"` di elemen akar, `data-on` untuk tombol Kontak.
- **Id section:** `sec-home`, `sec-skills`, `sec-karya`, `sec-about`, `sec-contact`, sesuai mockup (format hash final menunggu Q-14).
- **JavaScript:** variabel dan fungsi `camelCase`, konstanta `UPPER_SNAKE_CASE`, satu modul untuk satu tanggung jawab. Tidak ada variabel global selain yang dipasang pustaka (`gsap`, `ScrollTrigger`, `Lenis`). Atribut tangan seperti `onclick` tidak dipakai, gunakan `addEventListener`, agar kompatibel dengan CSP.
- **Teks isi** dalam bahasa Indonesia. Identifier kode dalam bahasa Inggris. Komentar kode menjelaskan alasan, bukan mengulang kode, dalam bahasa Indonesia.
- **Placeholder** selalu berformat `[Nama materi menyusul]`.
- **HTML:** semantik (`header`, `nav`, `main`, `section`, `footer`, `h1` sampai `h3`). Aksi memakai `<button type="button">`, navigasi memakai `<a href>` ke tujuan nyata. Tombol ikon punya `aria-label` dan ikonnya `aria-hidden="true"`.

## 4. Urutan kerja

1. **Baca.** `AGENTS.md`, `DESIGN.md`, `docs/PRD.md`, dan board Versi 4 beserta empat board HP. Pastikan Design Read dan dial sudah terpasang.
2. **Usulkan.** Sampaikan rencana kerja singkat untuk potongan yang akan dikerjakan. Tunggu persetujuan pemilik. Hal yang benar-benar ambigu ditanyakan sebagai satu pertanyaan saja.
3. **Cari skill bila perlu.** Pakai `find-skills-checked`. Pemindaian keamanan dan persetujuan eksplisit pemilik wajib sebelum memasang apa pun.
4. **Kerjakan per potongan** dalam urutan ini, dan jangan lompat ke potongan berikutnya sebelum yang sekarang lolos checklist:
   1. Kerangka HTML semantik, token, font, dan gaya dasar, dengan semua materi sebagai placeholder berlabel.
   2. Section statis: Beranda, Skills, Karya, Tentang, Kontak dengan teks dari PRD bagian 8, tema terang dan gelap.
   3. Navbar: struktur, kaca, menyatu dan berpisah, sorotan aktif.
   4. Ganti tema dengan transisi lingkaran dan fallback langsung.
   5. Lenis dan scroll ke section, dihubungkan dengan ScrollTrigger.
   6. Animasi masuk.
   7. Benang latar.
   8. Reduced motion, fallback tanpa JavaScript dan tanpa CDN.
   9. Tampilan HP, hanya setelah mockupnya disetujui (FR-14).
   10. Metadata (FR-15) setelah Q-10 dijawab.
5. **Periksa.** Jalankan checklist bagian 6 dan pengujian bagian 7.
6. **Serahkan.** Laporan singkat: apa yang selesai, daftar file yang berubah, hasil Delivery Gate, hal yang belum selesai atau berbeda dari mockup, dan usulan pesan commit. Berhenti dan tunggu pemilik.
7. **Pemilik** memeriksa, melakukan commit dan push, lalu memeriksa pratinjau Vercel.
8. **Catat.** `docs/CHANGELOG.md` dan, bila ada keputusan baru, `docs/DECISIONS.md` diperbarui.

## 5. Aturan commit

- **Hanya pemilik yang commit dan push**, lewat git atau antarmuka web GitHub. Agent tidak menjalankan `git commit`, `git push`, `git merge`, `git rebase`, `git tag`, atau membuat pull request.
- Satu commit berisi satu perubahan logis. Jangan mencampur perubahan fitur dengan perubahan dokumen yang tidak terkait.
- **[Usulan]** Pesan commit dalam bahasa Indonesia, kalimat perintah, dengan awalan jenis: `fitur`, `perbaikan`, `gaya`, `dok`, `refaktor`, `uji`, `rawat`. Contoh: `fitur: navbar menyatu dan berpisah saat scroll (FR-01)`. Badan pesan menjelaskan alasan bila tidak jelas dari judulnya.
- Rujuk ID kebutuhan (FR atau NFR) atau keputusan (D) bila relevan.
- Jangan commit kata sandi, token, atau berkas yang bukan bagian situs.
- Repo: https://github.com/NoriEtoiles/hafidsdamas-portofolio. `main` yang dideploy ke Vercel. Pemilik membuat cabang kerja untuk tiap potongan (mis. `fitur/navbar`) agar Vercel membuat pratinjau, lalu menggabungkannya ke `main` setelah diperiksa. Hanya pemilik yang commit, push, dan menggabungkan (keputusan 2026-11-24, Q-15).
- `docs/CHANGELOG.md` diperbarui sebelum commit yang menandai rilis.

## 6. Checklist sebelum selesai

### 6.1 Umum

- [ ] Perubahan sesuai rencana yang disetujui, tidak lebih.
- [ ] Isi dan teks sesuai `docs/PRD.md` bagian 8 dan mockup. Tidak ada data karangan.
- [ ] Placeholder berlabel masih ada untuk foto, tangkapan layar, logo, dan proyek berikutnya.
- [ ] Konsol peramban bersih dari galat dan peringatan saat memuat dan saat semua kontrol dicoba.
- [ ] Nama file, class, dan token mengikuti bagian 3.
- [ ] Selisih dari mockup dan hal yang belum selesai dicatat di `docs/PRD.md` bagian 5 dan `docs/CHANGELOG.md`.
- [ ] Dokumen terkait (`DESIGN.md`, `docs/DECISIONS.md`) diperbarui bila nilainya berubah.

### 6.2 Delivery Gate antislop (wajib)

Laporkan PASS atau FAIL satu baris per butir. Tiap PASS harus punya bukti konkret, misalnya "semua tombol diklik di peramban tanpa galat konsol". Bila ada FAIL, perbaiki dulu dan jangan menyerahkan.

1. Design Read dan ketiga dial (ENERGY 3 / RHYTHM 3 / MOTION 3) dinyatakan, dan hasil konsisten dengan dial itu.
2. Tidak ada pola terlarang antislop tanpa alasan tertulis (alasannya di `DESIGN.md` bagian 14).
3. Semua kontrol berfungsi. Tidak ada navigasi mati dan tidak ada data karangan.
4. Gerak sesuai dial MOTION dan menghormati `prefers-reduced-motion`.
5. Status hover, active, fokus-keyboard, dan nonaktif ada dan terlihat di kedua tema.
6. Kontras teks dan non-teks lolos dan fokus-keyboard terlihat, di kedua tema.
7. Tampilan HP dan zoom 200% diuji dan tidak ada scroll horizontal. Butir ini hanya bisa PASS setelah FR-14 dibangun. Sampai saat itu butir 7 dilaporkan FAIL dengan alasan "tampilan HP belum dirancang", bukan dianggap lolos.

Contoh baris laporan: `5. FAIL — logo dan tombol tema belum punya status hover (DESIGN.md bagian 12).`

## 7. Pengujian

Tidak ada framework uji bawaan di repo. Pengujian dilakukan manual di peramban dan, bila pemilik menyetujui, dengan skrip peramban tanpa kepala seperti pola paket uji yang dipakai di proyek Damas Cell. Alat uji dipasang di luar situs, tidak ikut ke produksi, dan hanya dipasang setelah disetujui.

| Pengujian | Cara | Lolos bila |
|---|---|---|
| Fungsi navigasi | Klik tiap tautan nav, Kontak, dan "Lihat karya"; putar roda di tengah animasi | Mendarat di section yang benar dengan offset 88 px, animasi berhenti saat roda diputar, fokus pindah ke section |
| Sorotan aktif | Gulir pelan dari puncak ke dasar | Sorotan berpindah saat tepi section melewati 40% viewport. Kontak aktif di dasar |
| Navbar menyatu dan berpisah | Gulir melewati 40 px dan kembali ke kurang dari 12 px | Perubahan sesuai FR-01, tanpa kedipan |
| Tema | Klik tombol di kedua arah, di Chromium dan peramban lain | Lingkaran di Chromium, perpindahan langsung di lainnya, tanpa galat konsol |
| Kontras | Hitung ulang dengan rumus WCAG untuk semua pasangan di `DESIGN.md` 3.3; periksa navbar di atas latar terburuk di kedua tema | Teks 4,5:1, teks besar 3:1, non-teks 3:1 |
| Keyboard | Tab dari atas ke bawah, Enter pada tautan dan tombol | Urutan fokus wajar, indikator fokus terlihat, tidak ada jebakan fokus |
| Reduced motion | Aktifkan "kurangi gerak" di sistem atau emulasi DevTools; ubah saat halaman terbuka | Semua poin `DESIGN.md` bagian 13 terpenuhi |
| Tanpa JavaScript | Matikan JavaScript | Semua konten terbaca, tautan berjangkar berfungsi |
| CDN gagal | Blokir domain CDN pustaka | Konten tetap tampil penuh, tanpa lembar kosong |
| Salin email | Klik di keadaan clipboard diizinkan dan dibatasi | "Tersalin" hanya muncul bila berhasil |
| Tautan | Klik semua tautan keluar | Tujuan benar, tab baru, `rel="noopener"` |
| Lebar layar | 1440, 1280, 1181, 1179 px (benang hilang di bawah 1180), dan lebar HP setelah desain ada | Tata letak sesuai mockup, tanpa scroll horizontal |
| Zoom 200% | Perbesar teks | Tidak terpotong, tidak ada scroll horizontal |
| Lighthouse | Desktop, dan HP setelah FR-14 | Memenuhi target NFR-04 (usulan: 90 ke atas) |
| Struktur dokumen | Periksa heading dan landmark | Satu `h1`, satu `main`, heading tidak loncat, `lang="id"` |

Hasil pengujian dilaporkan dengan angka atau bukti konkret. "Sudah dicoba" saja tidak cukup.

## 8. Deploy ke Vercel dengan domain damas.my.id

Pemilik mengerjakan langkah ini. Agent tidak mengubah DNS atau pengaturan Vercel. Nama menu di Vercel dan IDwebhost bisa berubah, jadi ikuti tampilan terbaru dan nilai yang ditampilkan di layar, bukan nilai dari dokumen ini.

### 8.1 Prasyarat
- Situs sudah ada di repo GitHub dan lolos checklist bagian 6. Tidak ada kata sandi atau token di repo.
- Akun Vercel dan akses panel IDwebhost untuk domain damas.my.id (aktif sampai 09/10/2027).

### 8.2 Hubungkan repo ke Vercel
1. Di Vercel pilih proyek baru dan impor repo GitHub situs ini.
2. Framework preset "Other". Biarkan perintah build kosong dan tidak ada direktori keluaran khusus, karena situs statis tanpa build.
3. Deploy. Hasilnya adalah alamat `.vercel.app` untuk pratinjau. Periksa situs di sana dulu.

### 8.3 Tambahkan domain di Vercel
1. Buka pengaturan proyek, bagian Domains, lalu tambahkan `damas.my.id`. Bila `www.damas.my.id` ikut dipakai, tambahkan juga (Q-14).
2. Vercel menampilkan catatan DNS yang diperlukan. Salin nilai persisnya dari layar itu.

### 8.4 Atur DNS di IDwebhost
1. Masuk panel IDwebhost, buka pengelolaan DNS untuk damas.my.id.
2. Tambahkan atau ubah record sesuai yang diminta Vercel.
3. Jangan menghapus record MX, TXT, atau record layanan lain yang masih dipakai (mis. email). Hapus record lama yang bentrok hanya setelah dipastikan tidak dipakai.

### 8.5 Verifikasi
1. Tunggu propagasi DNS (bisa beberapa menit sampai beberapa jam). Status domain di Vercel berubah menjadi valid dan sertifikat HTTPS diterbitkan otomatis.
2. Buka `https://damas.my.id`. Periksa HTTPS aktif dan pengalihan `www` sesuai keputusan Q-14.
3. Ulangi uji di bagian 7 pada alamat produksi.

### 8.6 Rilis dan pemeliharaan
- Setelah rilis, perbarui `docs/CHANGELOG.md` dengan tanggal dan commit.
- Rollback: pada daftar deployment Vercel, jadikan deployment sebelumnya sebagai produksi, atau pemilik membatalkan commit di GitHub.
- Pasang pengingat perpanjangan domain sebelum 09/10/2027.
- Opsional, bila pemilik mau: mendaftarkan situs ke Google Search Console seperti pada Damas Cell. File verifikasi dari Google harus dibiarkan permanen di akar repo.

### 8.7 `vercel.json` [Usulan]
Berisi header cache untuk `/assets/` dan header keamanan dasar. Kebijakan CSP disusun setelah CDN dan sumber font ditetapkan (Q-04, Q-11) dan diuji di peramban sebelum rilis, karena CSP yang terlalu ketat dapat merusak situs. Skrip dan gaya sebaiknya tidak inline agar CSP bisa ketat.

## 9. Pemeliharaan dokumen

- `docs/DECISIONS.md`: tambah entri setiap ada keputusan baru, lengkap dengan alasan dan alternatif yang ditolak.
- `docs/CHANGELOG.md`: tambah entri untuk setiap perubahan yang dikirim.
- `docs/PRD.md`: perbarui kebutuhan dan jawab pertanyaan terbuka saat pemilik memutuskan. Pertanyaan yang sudah dijawab dipindah ke `docs/DECISIONS.md`.
- `DESIGN.md`: ubah hanya bersama board yang disetujui. Bila berbeda dari board, laporkan, jangan diam-diam disamakan.
