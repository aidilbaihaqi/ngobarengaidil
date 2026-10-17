# Brief Presentasi: The Magic Behind Software
### When Code Becomes a Creature · *Life of a Feature in the Age of AI Agents*

| | |
|---|---|
| **Acara** | FOSS Day Talk Show, Batam Linux User Group |
| **Narasumber** | Aidil Baihaqi |
| **Durasi** | **35 menit** · **32 slide** (26 materi + 6 jeda meme) |
| **Audiens** | Mahasiswa IT yang sudah cukup paham teknis |
| **Format** | Talk tanpa hands-on, 1 demo rekaman (60–90 detik) |
| **Alur pembawaan** | **Pre-opening → Profil → Materi → Penutup** |
| **Gaya bahasa** | Lugas dan teknis, **tanpa analogi** penyihir, sihir, mantra, makhluk, atau sejenisnya |

> Judul resmi acara tetap dipakai apa adanya di slide judul. Di luar slide itu, materi tidak memakai metafora; semua proses disebut dengan istilah teknisnya.

---

## 1. Inti Talk

**Cerita:** satu fitur, *Upload & Resize Foto Profil*, diikuti dari issue sampai berjalan di production. Di tiap tahap ada dua lapis: **apa yang sebenarnya terjadi secara teknis** dan **apa yang berubah di era AI agent**.

**Satu kalimat yang harus dibawa pulang audiens:**
> AI mempercepat menulis kode. Memahami sistem dari ujung ke ujung yang membuatmu tetap relevan.

---

## 2. Alur Pembawaan

| Fase | Tujuan | Slide |
|---|---|---|
| **Pre-opening** | Menarik perhatian sebelum perkenalan apa pun. Audiens langsung melihat satu prompt berubah jadi fitur yang ter-deploy, lalu ditanya: apa yang sebenarnya terjadi? | 1–2 |
| **Judul + Profil** | Setelah rasa penasaran terbentuk, tampilkan judul dan perkenalan diri. Profil membangun kredibilitas: "saya membangun software dengan AI setiap hari." | 3–4 |
| **Materi** | Konteks perubahan, peta 6 tahap, lalu pembahasan tiap tahap, diselingi 5 slide jeda (meme). | 5–28 |
| **Penutup** | Skill yang naik nilainya, satu jeda, ajakan open source, kalimat penutup. | 29–32 |

**Kalimat transisi kunci:**
- Pre-opening → Judul: *"Dari luar terlihat instan. Hari ini kita bongkar apa saja yang terjadi di baliknya."*
- Judul → Profil: *"Sebelum masuk ke materi, perkenalkan, saya Aidil."*
- Profil → Materi: *"Dari pekerjaan sehari-hari, yang paling terasa adalah betapa cepat cara software dibuat berubah. Seberapa cepat?"*

---

## 3. Outline & Alokasi Waktu (35 menit)

| Bagian | Slide | Waktu | Kumulatif |
|---|---|---|---|
| Pre-opening | 1–2 | 2 menit | 0:00–2:00 |
| Judul & Profil | 3–4 | 1,5 menit | 2:00–3:30 |
| Konteks & Peta | 5–6 | 1,5 menit | 3:30–5:00 |
| Tahap 1 · Spesifikasi | 7–8 | 3 menit | 5:00–8:00 |
| Tahap 2 · Implementasi oleh Agen | 9–13 (jeda 11) | 6 menit | 8:00–14:00 |
| Tahap 3 · Dependency & Supply Chain | 14–18 (jeda 15) | 5 menit | 14:00–19:00 |
| Tahap 4 · Review & Testing | 19–20 (jeda 20) | 2,5 menit | 19:00–21:30 |
| Tahap 5 · Build & Deploy | 21–26 (jeda 22, 26) | 6,5 menit | 21:30–28:00 |
| Tahap 6 · Operasi & Observability | 27–28 | 3 menit | 28:00–31:00 |
| Penutup | 29–32 (jeda 30) | 4 menit | 31:00–35:00 |

> **Jeda:** 6 slide meme, masing-masing ±15 detik (total ±1,5–2 menit), diambil dari waktu tahap di sekitarnya. Kalau waktu mepet, jeda 15 dan 26 paling aman dilewati.

---

## 4. Brief Desain

### 4.1 Aturan Teks: slide bukan naskah

Slide berfungsi seperti papan informasi, bukan dokumen. Detail disampaikan lisan, bukan ditulis di layar.

- **Maksimal ±20 kata terlihat per slide**, di luar potongan kode dan label diagram.
- **Headline = klaim, bukan topik.** Bukan "Container Image", tapi "Yang dikirim ke production cuma hasilnya."
- **Satu slide, satu ide.** Kalau butuh dua poin besar, jadikan dua slide.
- **Tidak ada bullet list lebih dari 3 baris.** Kalau lebih, ubah jadi diagram, angka besar, atau pecah slide.
- **Angka tampil sendirian dan besar**, dengan label 4–6 kata.
- **Sumber data tetap wajib**, sebagai footer kecil 1 baris.
- Semua penjelasan panjang pindah ke **naskah pemaparan** (`docs/naskah-fossday-2026.pdf`), bukan ke layar. Deck sendiri tidak punya panel speaker notes atau timer.
- **Tanpa metafora:** gunakan istilah teknis (spesifikasi, implementasi, dependency, build, deploy, observability).

### 4.2 Arah Visual

**Mood:** engineering yang bersih dan nyata, seperti membuka terminal, repo, dan dashboard sungguhan. Kesan "menarik" datang dari artefak asli, komposisi, dan kontras tipografi, bukan ornamen.

**Elemen visual pembeda (pengganti ornamen):**
- Grid garis halus (seperti kertas teknik) samar di latar slide judul dan penutup.
- Artefak asli: terminal, potongan kode, issue, diff, dashboard.
- Diagram buatan sendiri dengan garis tipis dan label rata kiri.
- Penanda tahap konsisten: nomor besar `01`–`06` dalam font monospace di pojok slide.

**Palet (diambil dari warna poster acara supaya tetap konsisten dengan branding):**

| Peran | Warna | Pemakaian |
|---|---|---|
| Navy | `#10163A` | Latar utama sebagian besar slide |
| Navy pekat | `#0B1028` | Latar terminal, kode, dan pre-opening |
| Krem | `#F4EFE3` | Latar terang untuk slide penekanan |
| Amber | `#F2C46D` | Aksen, angka penting, satu kata yang ditekankan |
| Teal | `#7FD8D4` | Aksen sekunder untuk diagram & alur sistem |
| Merah bata | `#D9644A` | Slide ancaman keamanan (16–17), plus sinyal "bahaya" kecil di jeda (test dihapus, `--force`, usage limit) |

**Tipografi:**
- **Display:** sans grotesk berkarakter teknis, misalnya *Space Grotesk*, untuk headline besar dan angka.
- **Teks:** *IBM Plex Sans*.
- **Kode, terminal, nomor tahap:** *JetBrains Mono*.
- Skala ekstrem lebih baik daripada skala aman: headline 120–200px berdampingan dengan label 24px menciptakan hierarki yang jelas.

### 4.3 Anti "AI Slop": yang dihindari

| ❌ Jangan | ✅ Ganti dengan |
|---|---|
| Setiap slide: judul di atas + 3 kartu ber-ikon | Variasi layout dari daftar arketipe di bawah |
| Ikon generik (lampu, roket, gembok) di tiap kartu | Artefak nyata: screenshot terminal, `git log`, diff, dashboard, halaman CVE |
| Gradien ungu-biru dan efek glow | Latar flat dari palet |
| Ornamen tematik (bulan, bintang, topi penyihir, sigil, papan penunjuk ala film) | Grid halus, diagram, terminal |
| Semua konten di tengah dan simetris | Komposisi asimetris, ruang kosong yang disengaja, teks rata kiri |
| Slide profil berisi daftar panjang pencapaian | Foto + nama + 3 baris kredensial yang relevan |
| Emoji sebagai dekorasi | Tidak ada emoji |
| Stock illustration orang berlaptop / robot | Diagram buatan sendiri, foto/screenshot asli |
| Kalimat pembuka klise ("Di era digital ini…") | Headline yang langsung menyatakan klaim |

### 4.4 Arketipe Layout

**Dua slide berurutan tidak boleh memakai arketipe yang sama.**

| Kode | Arketipe | Bentuk |
|---|---|---|
| **A** | Statement | Satu kalimat besar, banyak ruang kosong. Untuk momen penekanan. |
| **B** | Angka besar | Satu atau dua angka 200px+, label pendek, sumber di footer. |
| **C** | Split visual | 60% gambar/foto/screenshot sampai tepi, 40% headline + 1 kalimat. |
| **D** | Artefak sebagai hero | Terminal, kode, atau dokumen nyata mengisi slide; anotasi kecil menunjuk bagian penting. |
| **E** | Diagram alur | Satu diagram besar, label minimal, headline di atas. |
| **F** | Timeline | Garis waktu horizontal dengan 4–6 titik. |
| **G** | Kontras dua kolom | Sebelum/sesudah, turun/naik, manusia/AI. |
| **H** | Full-bleed warna | Latar penuh satu warna (navy/amber/krem) untuk pembuka bab atau momen penting. |

**Ritme:** gelap dominan, diselingi slide terang (krem/amber) kira-kira tiap 4–5 slide sebagai jeda visual.

### 4.5 Slide Jeda (Meme)

Materi teknisnya padat, jadi ada 6 slide jeda untuk menurunkan ketegangan. Aturannya:

- **Artefak yang dibuat ulang, bukan gambar tempelan.** Chat, PR, terminal, atau diagram balok digambar ulang dalam palet deck. Tidak memakai foto atau template meme milik orang lain.
- **Tema dev culture 2026** yang nyambung dengan tahap di sekitarnya: agen AI yang terlalu nurut, PR raksasa, *works on my machine*, deploy hari Jumat, usage limit.
- **Dua klik:** klik pertama setup, klik kedua punchline.
- **Tanpa label penanda:** jeda dikenali dari latar krem dan nadanya saja. Satu-satunya pengecualian adalah jeda 26, yang berlatar navy pekat karena berdampingan dengan slide krem 25.
- **Hindari meme politik** atau yang menyinggung pihak tertentu. Ini acara komunitas.

---

## 5. Rincian per Slide

> **Headline** = teks penekanan di slide. **Visual** = apa yang dilihat audiens. **Teks lain** = maksimal yang boleh tampil. **Narasi** = intisari yang diucapkan (masuk speaker notes).

---

### PRE-OPENING (0:00–2:00)

#### Slide 1 · Pre-opening: Satu Prompt · Arketipe D (navy pekat) · 0:00–1:00
- **Headline:** *(tidak ada, biarkan terminal yang bicara)*
- **Visual:** layar hampir hitam, satu kursor terminal berkedip. Sebuah prompt muncul seolah sedang diketik:
  ```
  > buatkan fitur upload foto profil, resize ke 3 ukuran, lalu deploy
  ```
  Klik berikutnya: baris-baris output agen mengalir cepat dan berakhir dengan satu baris hijau `✓ deployed to production`.
- **Teks lain:** tidak ada.
- **Narasi:** jangan memperkenalkan diri dulu. Mulai langsung: *"Satu kalimat. Beberapa menit kemudian, fiturnya sudah berjalan di production."* Diam sebentar, lalu tanya audiens: *"Siapa di sini yang minggu ini ngoding pakai AI agent? Angkat tangan."*
- **Aset:** rekam atau susun ulang animasi dari sesi agen asli (bisa dari rekaman yang sama dengan slide 10 dan 21).

#### Slide 2 · Pre-opening: Angka · Arketipe B · 1:00–2:00
- **Headline:** 90%
- **Visual:** angka 90% sangat besar (amber) di kiri, angka 68% lebih kecil (teal) di bawahnya.
- **Teks lain:** "developer profesional pakai AI agent tiap minggu" · "68% setiap hari" · footer: JetBrains Developer Ecosystem Survey 2026.
- **Narasi:** kaitkan dengan tangan yang terangkat tadi. *"Ini sudah normal. Tapi dari luar terlihat instan. Apa yang sebenarnya terjadi di antara prompt tadi dan baris `deployed` itu?"* → transisi ke judul.

---

### JUDUL & PROFIL (2:00–3:30)

#### Slide 3 · Judul · Arketipe H (navy + grid halus) · 2:00–2:30
- **Headline (judul utama):** Life of a Feature in the Age of AI Agents. Tiga baris, "AI Agents" berwarna amber.
- **Sub:** The Magic Behind Software · *When Code Becomes a Creature*. Judul resmi acara tetap tampil, tapi sebagai baris kecil di bawah judul utama.
- **Visual:** latar navy dengan grid garis halus samar, judul rata kiri. Ada dua komponen yang berjalan terus (*looping*):
  - **Dial siklus (kanan):** lingkaran dengan 60 takik dan 6 titik tahap. Satu titik amber berputar mengelilinginya dalam 12 detik. Tahap yang sedang dilewati menyala, dan nomor serta namanya berganti di tengah lingkaran.
  - **Ticker log (bawah):** log fitur yang sama bergulir tanpa henti, dari `issue #128 opened` sampai `rollout 3/3 ready`.
- **Teks lain:** "FOSS Day · Batam Linux User Group" · "Aidil Baihaqi".
- **Narasi:** *"Hari ini kita akan mengikuti satu fitur software, dari issue sampai berjalan di production, dan melihat apa yang berubah ketika sebagian kodenya ditulis AI."* → *"Sebelum itu, perkenalkan, saya Aidil."*

#### Slide 4 · Profil · Arketipe C · 2:30–3:30
- **Headline:** Aidil Baihaqi
- **Visual:** foto diri `public/image/aidil.jpg` (latar putih) mengisi ±52% sisi kiri sampai tepi, berdampingan dengan panel navy di kanan.
- **Teks lain (kanan), 4 baris berlabel:**
  - Kini: Full-stack AI Engineer
  - Kerja: Backend & DevOps Engineer · UmbiTeams
  - Komunitas: Founder · Lyceum Indonesia & Tim WAT
  - Riset: Bioinformatika, Blockchain & Deep Learning (bidang saja, tanpa penghargaan)
  - Kecil di bawah: Teknik Informatika UMRAH · Instagram @albyhaqee
- **Narasi:** singkat, maksimal 1 menit. *"Sehari-hari saya membangun software dengan bantuan AI, dari backend sampai model ML. Jadi yang saya ceritakan hari ini berasal dari praktik di lapangan."*
- **Catatan desain:** jangan jadikan slide CV. Pencapaian lain cukup disebut lisan bila perlu.

---

### KONTEKS & PETA (3:30–5:00)

#### Slide 5 · Dari Autocomplete ke Agen · Arketipe F · 3:30–4:15
- **Headline:** Lima tahun, tiga lompatan.
- **Visual:** timeline horizontal 4 titik dengan screenshot mini di tiap titik.
  - 2021 · **Autocomplete** — melengkapi baris
  - 2022 · **Chat** — menjawab pertanyaan
  - 2025 · **Agen** — membaca repo, menjalankan test, membuka PR
  - 2026 · **Rutinitas** — 9 dari 10 developer
- **Teks lain:** hanya label di atas.
- **Narasi:** perubahannya bukan bertahap, tapi lompatan. Dari "AI menebak baris berikutnya" menjadi "AI mengerjakan tugas". Karena itu proses pengembangan software ikut berubah.

#### Slide 6 · Peta Perjalanan · Arketipe E · 4:15–5:00
- **Headline:** Satu fitur, enam tahap.
- **Visual:** satu jalur horizontal dengan 6 titik bernomor `01`–`06`; di ujung awal ada mockup kecil tombol "Ganti foto profil", di ujung akhir ikon server.
- **Teks lain:** nama 6 tahap saja: Spesifikasi · Implementasi · Dependency · Review · Build & Deploy · Operasi.
- **Narasi:** fitur upload foto profil. Sederhana, tapi menyentuh semua tahap: library pihak ketiga, keamanan upload, storage, beban CPU saat resize. Ini fitur yang sama dengan prompt di slide pertama.

---

### TAHAP 1 · SPESIFIKASI (5:00–8:00)

#### Slide 7 · Dari Issue ke Spesifikasi · Arketipe D · 5:00–6:30
- **Headline:** Satu kalimat jadi 12 keputusan.
- **Visual:** screenshot issue berisi satu kalimat "User mau bisa ganti foto profil", panah ke dokumen spesifikasi hasil AI yang panjang, beberapa baris di-highlight amber (5 MB, JPEG/PNG/WebP, hapus EXIF).
- **Teks lain:** label kecil "ditulis manusia" dan "draft AI, 8 detik".
- **Narasi:** AI sangat bagus memecah issue jadi task dan acceptance criteria. Tapi baris yang di-highlight bukan "jawaban benar", itu keputusan.

#### Slide 8 · Keputusan Tetap di Manusia · Arketipe A (krem) · 6:30–8:00
- **Headline:** AI menulis *bagaimana*. Kita memutuskan *apa* dan *kenapa*.
- **Visual:** ilustrasi kecil foto HP dengan pin lokasi GPS di pojok kanan bawah (contoh metadata EXIF).
- **Teks lain:** tidak ada.
- **Narasi:** disimpan di mana, batas ukuran berapa, bagaimana dengan EXIF. Foto dari HP bisa membocorkan lokasi rumah user, dan AI tidak akan menanyakannya kalau tidak diminta.

---

### TAHAP 2 · IMPLEMENTASI OLEH AGEN (8:00–14:00)

#### Slide 9 · Anatomi Agen · Arketipe E · 8:00–9:30
- **Headline:** LLM, konteks, tools, dan satu loop.
- **Visual:** diagram melingkar besar: Plan → Act → Observe kembali ke Plan, di tengahnya "LLM"; di luar lingkaran "Konteks" dan "Tools" sebagai input.
- **Teks lain:** label diagram saja.
- **Narasi:** LLM untuk menalar dan menulis kode, konteks berisi repo dan dokumentasi, tools untuk menjalankan perintah. Bedanya dengan autocomplete: agen bisa menjalankan, melihat hasilnya, lalu memperbaiki sendiri.

#### Slide 10 · Satu Sesi Agen, Direkam · Arketipe D · 9:30–11:00
- **Headline:** Di balik `✓ deployed`: satu loop yang berulang.
- **Visual:** screenshot terminal penuh (log sesi agen nyata saat membangun endpoint `/avatar`), dengan 3 anotasi amber:
  1. agen membaca file di repo,
  2. test gagal (merah),
  3. agen memperbaiki, test hijau.
- **Teks lain:** 3 anotasi, masing-masing ≤5 kata.
- **Narasi:** kembali ke pre-opening. Yang terlihat instan tadi sebenarnya rangkaian langkah: baca, tulis, jalankan, gagal, perbaiki, ulangi.

#### Slide 11 · Jeda 1: "You're absolutely right!" · Jeda (krem) · +0:15
- **Setup:** bubble chat developer: "kok semua test tiba-tiba hijau?"
- **Punchline:** agen menjawab **"You're absolutely right!"**, lalu "Saya menghapus 3 test yang gagal supaya suite-nya lulus." Di samping ada terminal kecil: `✓ 20 passed · 0 failed · 3 deleted`.
- **Narasi:** agen memang jago bikin test hijau, termasuk dengan cara menghapus test-nya. Ini alasan slide berikutnya penting: konteks dan aturan yang jelas.

#### Slide 12 · Context Engineering · Arketipe C · 11:00–12:30
- **Headline:** Agen hanya sebaik konteks yang ia terima.
- **Visual (kiri, 60%):** screenshot file `AGENTS.md` nyata di editor:
  ```markdown
  - Pakai pnpm, bukan npm
  - Upload wajib lewat validateImage()
  - Jalankan make test sebelum commit
  ```
- **Teks lain (kanan):** "File instruksi + MCP = onboarding untuk rekan kerja baru."
- **Narasi:** dua lapisan konteks: file instruksi di repo dan protokol tools (MCP) yang menghubungkan agen ke database, issue tracker, cloud. Keduanya standar terbuka. *(Cek ulang status pengelolaan MCP sebelum tampil.)*

#### Slide 13 · Vibe Coding · Arketipe A · 12:30–14:00
- **Headline:** Kode yang tidak kamu pahami adalah kode yang tidak kamu miliki.
- **Visual:** kecil di bawah: notifikasi alert "03:12 · production down" seperti lock screen HP.
- **Teks lain:** satu kata kecil di atas headline: "comprehension debt".
- **Narasi:** vibe coding sah untuk prototipe. Masalahnya saat dikirim ke production tanpa ada yang paham. Utang pemahaman ditagih saat insiden. Dan AI bisa salah dengan percaya diri, termasuk menyarankan paket yang tidak ada.

---

### TAHAP 3 · DEPENDENCY & SUPPLY CHAIN (14:00–19:00)

#### Slide 14 · Gunung Es Dependency · Arketipe C · 14:00–15:00
- **Headline:** 1 baris import. Ratusan paket ikut.
- **Visual:** diagram berlapis mengisi sisi kiri: lapisan atas kecil "kode kita", di bawahnya makin lebar "dependency langsung · dependency transitif · library native · base image · OS". Kanan: angka **98%**.
- **Teks lain:** "codebase komersial berisi open source" · footer sumber OSSRA 2026.
- **Narasi:** saat agen menambahkan library pengolah gambar, seluruh lapisan di bawahnya ikut dikirim ke production. Kerentanan rata-rata per codebase naik 107% dalam setahun.

#### Slide 15 · Jeda 2: Satu Orang di Bawah Semuanya · Jeda (krem) · +0:15
- **Setup:** menara balok berlabel "Semua infrastruktur digital modern".
- **Punchline:** balok kecil di bawahnya yang menopang separuh menara menyala amber: "Satu proyek yang di-maintain sendirian oleh satu orang sejak 2003."
- **Kredit (footer):** Terinspirasi xkcd #2347 "Dependency" · Randall Munroe · CC BY-NC 2.5.
- **Narasi:** kartun ini ternyata jadi kenyataan, dan contohnya ada di slide berikutnya: xz-utils.

#### Slide 16 · xz-utils · Arketipe F (aksen merah bata) · 15:00–16:30
- **Headline:** Backdoor yang ditanam selama dua tahun.
- **Visual:** timeline:
  - 2021–2022 · akun "Jia Tan" mulai berkontribusi
  - 2022–2023 · tekanan ke maintainer yang kelelahan, mendapat hak maintainer
  - Feb 2024 · backdoor masuk rilis 5.6.0
  - 29 Mar 2024 · ditemukan
  - Di titik terakhir: angka besar **0,5 detik**.
- **Teks lain:** label timeline + "CVE-2024-3094".
- **Narasi:** serangan social engineering bertahun-tahun ke satu maintainer open source. Ditemukan kebetulan oleh seorang engineer yang heran login SSH-nya setengah detik lebih lambat.

#### Slide 17 · Slopsquatting · Arketipe D (aksen merah bata) · 16:30–18:00
- **Headline:** AI mengarang nama paket. Penyerang mendaftarkannya.
- **Visual:** potongan terminal:
  ```
  $ pip install fastimage-resizer-pro
  ```
  dengan anotasi merah "paket ini tidak pernah ada… sampai penyerang membuatnya". Di samping: **5,2%** (model komersial) dan **21,7%** (model open source).
- **Teks lain:** label angka + footer sumber.
- **Narasi:** 205 ribu nama paket fiktif tercatat dalam satu studi, dan 43% muncul berulang, jadi bisa ditebak. Nama paket di contoh ini ilustrasi.

#### Slide 18 · Pengamanan Supply Chain · Arketipe G · 18:00–19:00
- **Headline:** Percaya, tapi verifikasi.
- **Visual:** dua kolom. Kiri "tanpa kontrol" (paket asing langsung masuk). Kanan: 4 gerbang berurutan **Lockfile → SBOM → Signature (Sigstore/SLSA) → Scan di CI**.
- **Teks lain:** label 4 gerbang + strip bawah: "11 Sep 2026 · EU CRA: lapor kerentanan aktif dalam 24 jam".
- **Narasi:** pengamanan berlapis, dan Sigstore serta SLSA sendiri proyek open source. Keamanan supply chain kini juga urusan hukum, dan skill ini makin dicari.

---

### TAHAP 4 · REVIEW & TESTING (19:00–21:30)

#### Slide 19 · Review & Test · Arketipe D · 19:00–21:30
- **Headline:** Agen menulis kode. Test menentukan kebenaran.
- **Visual:** potongan file test besar sebagai fokus utama:
  ```js
  it("tolak file > 5 MB")          // 413
  it("tolak .php berkedok .jpg")   // 415
  it("hapus EXIF & GPS")
  it("buat thumbnail 128px")
  ```
  Di tepi kanan, strip vertikal sempit alur review: Agen → AI reviewer → **Manusia** (amber) → Merge.
- **Teks lain:** "PR kecil = review yang benar-benar dibaca."
- **Narasi:** saat AI menulis lebih banyak kode, bottleneck pindah ke review. File .php berkedok .jpg ditolak dengan cek magic bytes, bukan ekstensi.

#### Slide 20 · Jeda 3: LGTM · Jeda (krem) · +0:15
- **Setup:** kartu PR #219 dari agent, "refactor: auth, upload, billing, dan 'sedikit perbaikan lain'", `+4.812 −12 · 87 file berubah`.
- **Punchline:** reviewer approve **LGTM**, 3 detik setelah dibuka. Angka besar di samping: **0,0006** detik per baris kode.
- **Narasi:** tanya audiens siapa yang pernah begini. Ini kenapa PR kecil itu penting.

---

### TAHAP 5 · BUILD & DEPLOY (21:30–28:00)

#### Slide 21 · Setelah Git Push + Demo · Arketipe E → video · 21:30–24:00
- **Headline:** Apa yang terjadi setelah `git push`?
- **Visual:** pipeline horizontal tipis di atas (push → webhook → runner → test/scan → build → registry), area bawah besar untuk **video demo 60–90 detik**.
- **Teks lain:** label pipeline.
- **Video:** `public/fossday-2026/demo.mp4`, 87 detik, berupa rekonstruksi alur dengan waktu dipercepat (jam "waktu nyata" di pojok kanan atas berjalan sampai 4:37):
  - 0:00 · push: `git status`, commit, `git push`, webhook memicu pipeline #482
  - 0:14 · pipeline: checkout → install → lint → test (23 passed) → scan → SBOM → build → sign → push
  - 0:43 · registry: `avatar:v2`, 180 MB, signature dan SBOM terverifikasi, GitOps mulai sync
  - 0:53 · rollout: 3 pod v1 diganti v2 satu per satu, trafik pindah 0 → 100%
  - 1:15 · verifikasi: `curl` upload foto → 201, 3 ukuran, EXIF dihapus, lalu `✓ deployed to production`
  - Daftar bab di kanan slide bisa diklik untuk lompat ke bagian itu.
- **Narasi:** jelaskan pipeline singkat, lalu putar demo. Sebutkan bahwa ini rekonstruksi alur. Siapkan cadangan offline; kalau video gagal, jelaskan dari diagram.

#### Slide 22 · Jeda 4: Works on My Machine · Jeda (krem) · +0:15
- **Setup:** developer: "Tapi di laptop saya jalan, kok."
- **Punchline:** tim ops: "Oke. Kita kirim laptop kamu ke production." Kecil di bawah: "…dan begitulah container lahir."
- **Narasi:** lelucon lama, tapi memang itu ide dasar container: kirim seluruh lingkungannya, bukan cuma kodenya. Transisi ke slide container image.

#### Slide 23 · Container Image · Arketipe C · 24:00–25:30
- **Headline:** Yang dikirim ke production cuma hasilnya.
- **Visual:** layer image sebagai tumpukan balok (kode → dependency → runtime → base distroless) di kiri; di kanan potongan Dockerfile multi-stage dengan `FROM ... AS build` dan `COPY --from=build` di-highlight.
- **Teks lain:** perbandingan ukuran image *[isi dari build sendiri, mis. "1,1 GB → 180 MB"]*.
- **Narasi:** urutan layer menentukan cache. Multi-stage membuang tool build. Distroless tanpa shell = permukaan serangan kecil.

#### Slide 24 · Kubernetes · Arketipe G · 25:30–27:15
- **Headline:** Kita menulis keinginan. Cluster mewujudkannya.
- **Visual:** kiri: potongan YAML `replicas: 3` dan `image: avatar:v2`. Kanan: rolling update 3 pod v1 → v2 satu per satu (animasi build-in per baris).
- **Teks lain:** label "desired state" dan "actual state".
- **Narasi:** Kubernetes deklaratif: controller terus merekonsiliasi. Pod mati dibuat ulang. Pod baru menerima trafik setelah readiness probe lulus, jadi tanpa downtime.

#### Slide 25 · Rilis · Arketipe A (krem) · 27:15–28:00
- **Headline:** Deploy yang baik itu membosankan.
- **Visual:** satu bar progres canary tipis di bawah headline: 5% → 25% → 100%.
- **Teks lain:** "GitOps · Canary · Rollback otomatis".
- **Narasi:** Argo CD/Flux menjadikan Git sumber kebenaran; canary dan feature flag membatasi dampak; rollback otomatis saat metrik memburuk.

#### Slide 26 · Jeda 5: Deploy Hari Jumat · Jeda (navy pekat) · +0:15
- **Setup:** "Jumat **16:59**" sangat besar, dan terminal `git push origin main --force` · "nanti juga aman, bang".
- **Punchline:** "Sabtu, dini hari **03:12**" dengan notifikasi `production down (lagi)`, menggemakan slide comprehension debt.
- **Narasi:** kebalikan dari deploy yang membosankan. Makanya kita butuh observability.

---

### TAHAP 6 · OPERASI & OBSERVABILITY (28:00–31:00)

#### Slide 27 · Observability · Arketipe C · 28:00–29:30
- **Headline:** Kalau tidak terukur, tidak bisa diperbaiki.
- **Visual:** screenshot dashboard dengan grafik latency p95 endpoint upload yang melonjak melewati garis ambang; anotasi "foto 12 MB masuk".
- **Teks lain:** "Logs · Metrics · Traces → OpenTelemetry". Jika grafik bukan data nyata, beri label "ilustrasi".
- **Narasi:** tiga sinyal, satu standar terbuka (OpenTelemetry, proyek CNCF). Lonjakan ini pemicu siklus berikutnya.

#### Slide 28 · Siklus Perbaikan · Arketipe E · 29:30–31:00
- **Headline:** Software tidak pernah selesai.
- **Visual:** lingkaran besar 6 titik: error → alert → issue otomatis → agen mengusulkan PR → **review manusia** (amber, lebih besar) → deploy bertahap → kembali ke awal.
- **Teks lain:** label titik saja.
- **Narasi:** sebagian besar siklus ini kini bisa diotomasi, tapi titik kontrolnya tetap review manusia. Siklus kembali ke Tahap 1.

---

### PENUTUP (31:00–35:00)

#### Slide 29 · Skill · Arketipe G · 31:00–32:30
- **Headline:** Yang turun nilainya, yang naik nilainya.
- **Visual:** dua kolom kontras: kiri pudar/abu-abu dan dicoret tipis, kanan terang amber.
  - Turun: menghafal sintaks · boilerplate · copy-paste tanpa paham
  - Naik: system thinking · review kode · keamanan · fundamental · menulis spesifikasi
- **Narasi:** "Masih perlu belajar coding?" Perlu, tapi fokusnya bergeser ke memahami seluruh tahapan yang barusan kita lihat.

#### Slide 30 · Jeda 6: Limit Tercapai · Jeda (krem) · +0:15
- **Setup:** kartu usage limit dengan cincin 100%: "Batas penggunaan tercapai. Reset dalam 4 jam 59 menit."
- **Punchline:** "…oke, saatnya **baca dokumentasi**."
- **Narasi:** saat AI berhenti, yang tersisa adalah fundamental kita. Nyambung ke daftar skill yang naik nilainya.

#### Slide 31 · Open Source · Arketipe H (amber) · 32:30–34:00
- **Headline:** Hampir semua yang kita bahas hari ini adalah open source.
- **Visual:** dinding logo proyek yang dibahas (Git, Linux, Docker, Kubernetes, OpenTelemetry, Sigstore, Argo CD), monokrom gelap di atas amber.
- **Teks lain:** "Mulai dari: docs · good first issue · terjemahan · laporan bug".
- **Narasi:** kasus xz-utils lahir dari maintainer yang bekerja sendirian dan kelelahan. Open source butuh lebih banyak kontributor, dan kontribusi pertama paling mudah justru dokumentasi dan terjemahan.

#### Slide 32 · Penutup · Arketipe H (navy pekat, cermin slide 1) · 34:00–35:00
- **Headline:** AI bisa menulis kode. Memahami sistemnya tetap tugas kita.
- **Visual:** kursor terminal dari slide 1 muncul lagi, kali ini mengetik:
  ```
  > pahami dulu, baru deploy.
  ```
- **Teks lain:** Instagram @albyhaqee · [LinkedIn] · [QR kontak] · "Tanya jawab".
- **Narasi:** tutup dengan merujuk pre-opening: *"Tadi kita mulai dari satu prompt. Sekarang kita tahu ada spesifikasi, implementasi, supply chain, review, build, deploy, dan operasi di baliknya."* Ulangi pesan utama, serahkan ke moderator.

---

## 6. Peta Ritme (cek variasi)

| # | Arketipe | Latar | | # | Arketipe | Latar |
|---|---|---|---|---|---|---|
| 1 | D Terminal | Navy pekat | | 17 | D Artefak | Navy pekat + merah |
| 2 | B Angka | Navy | | 18 | G Kontras | Navy |
| 3 | H Judul + loop | Navy + grid | | 19 | D Artefak | Navy pekat |
| 4 | C Profil | Navy + foto putih | | 20 | Jeda: LGTM | **Krem** |
| 5 | F Timeline | Navy | | 21 | E + video | Navy |
| 6 | E Diagram | Navy | | 22 | Jeda: works on my machine | **Krem** |
| 7 | D Artefak | Navy | | 23 | C Split | Navy |
| 8 | A Statement | **Krem** | | 24 | G Kontras | Navy |
| 9 | E Diagram | Navy | | 25 | A Statement | **Krem** |
| 10 | D Artefak | Navy pekat | | 26 | Jeda: deploy Jumat | Navy pekat |
| 11 | Jeda: absolutely right | **Krem** | | 27 | C Split | Navy |
| 12 | C Split | Navy | | 28 | E Diagram | Navy |
| 13 | A Statement | **Krem** | | 29 | G Kontras | Navy |
| 14 | C Split | Navy | | 30 | Jeda: limit tercapai | **Krem** |
| 15 | Jeda: menara dependency | **Krem** | | 31 | H Full-bleed | **Amber** |
| 16 | F Timeline | Navy + merah | | 32 | H Penutup | Navy pekat |

Slide berbasis kartu ikon: **nol**. Slide terang: 8, 13, 25, 31, plus jeda krem 11, 15, 20, 22, 30.

---

## 7. Daftar Aset yang Perlu Disiapkan

| Aset | Untuk slide | Catatan |
|---|---|---|
| Animasi/rekaman prompt → output agen → `✓ deployed` | 1, 32 | Diambil dari sesi agen asli |
| Foto diri (resolusi tinggi) | 4 | Sudah ada: `public/image/aidil.jpg`, dipotong full-bleed di sisi kiri |
| Screenshot log sesi agen membangun `/avatar` | 10 | Satu sesi dengan aset slide 1 |
| Rekaman demo push → pipeline → rollout (60–90 dtk) | 21 | **Sudah ada:** `public/fossday-2026/demo.mp4` (87 dtk, 1080p). Rekonstruksi animasi, bukan rekaman sesi nyata. Source dan cara render ulang ada di `scripts/fossday-demo/`. Simpan salinan offline |
| Screenshot issue + spesifikasi hasil AI | 7 | Dari repo demo |
| Screenshot `AGENTS.md` di editor | 12 | Dari repo demo |
| Angka ukuran image sebelum/sesudah multi-stage | 23 | Dari build sendiri |
| Screenshot dashboard latency | 27 | Dari repo demo, atau beri label "ilustrasi" |
| Logo proyek open source (versi monokrom) | 31 | Dari situs resmi tiap proyek |
| QR kontak, LinkedIn | 32 | |
| Meme jeda | 11, 15, 20, 22, 26, 30 | Sudah dibuat ulang di deck; tidak perlu file gambar |

---

## 8. Checklist Sebelum Tampil

- [ ] Semua aset di bagian 7 sudah ada.
- [ ] Pre-opening dilatih tanpa melihat slide; 60 detik pertama menentukan perhatian audiens.
- [x] Kredensial final slide profil: Full-stack AI Engineer · Backend & DevOps Engineer UmbiTeams · Founder Lyceum Indonesia & Tim WAT · Riset Bioinformatika, Blockchain & Deep Learning.
- [ ] Cek ulang klaim status pengelolaan MCP (slide 12).
- [ ] Baca ulang naskah, pastikan tidak ada metafora yang terselip saat latihan lisan.
- [ ] Latihan dengan timer sendiri (HP atau jam tangan; deck tidak punya timer); titik rawan molor: slide 4 (profil), 10, 21, dan setiap jeda (jangan lebih dari 15 detik).
- [ ] Rencana potong cepat jika waktu habis: slide 25 dan 28, serta jeda 15 dan 26, bisa dilewati tanpa merusak alur.
- [ ] Uji video, animasi terminal, dan font di laptop/proyektor venue.

---

## Sumber

- [JetBrains Research — AI Coding Agents: Adoption Trends (2026)](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)
- [Black Duck — OSSRA 2026](https://www.blackduck.com/resources/analyst-reports/open-source-security-risk-analysis.html)
- [TechRepublic — Slopsquatting & Vibe Coding](https://www.techrepublic.com/article/news-slopsquatting-vide-coding-ai-cybersecurity-risk/)
- [DevOps.com — studi package hallucination](https://devops.com/?p=176558)
- [Jones Day — EU Cyber Resilience Act: 24-Hour Reporting Duties Start September 11, 2026](https://www.jonesday.com/en/insights/2026/07/eu-cyber-resilience-act-24hour-reporting-duties-start-september-11-2026)
