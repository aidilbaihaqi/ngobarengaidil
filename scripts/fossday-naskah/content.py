# Naskah pemaparan "Life of a Feature in the Age of AI Agents".
#
# Markup per baris di NASKAH:
#   > teks   arahan panggung (tidak diucapkan)
#   K teks   klik, lalu ucapkan teks
#   ! teks   catatan/peringatan untuk pembicara
#   lainnya  kalimat yang diucapkan
# [[...]] menandai bagian yang harus kamu isi sendiri.

SLIDES = [
    dict(no=1, title="Satu prompt", fase="Pre-opening", t="0:00–1:00", dur="60 dtk", klik=2,
         layar="Terminal hampir hitam, kursor berkedip. Prompt mengetik sendiri, lalu log agen mengalir dan berakhir di ✓ deployed to production.",
         naskah="""
> Jalan ke tengah panggung. Jangan perkenalkan diri dulu. Tunggu ruangan tenang, biarkan kursor berkedip dua-tiga detik.
K Satu kalimat.
> Prompt mulai terketik. Biarkan audiens membacanya sampai selesai.
"Buatkan fitur upload foto profil, resize ke tiga ukuran, lalu deploy."
K Beberapa menit kemudian, fiturnya sudah jalan di production.
> Log agen mengalir. Diam sampai baris hijau muncul. Tunjuk angkanya.
Empat menit tiga puluh tujuh detik.
> Jeda dua detik.
Saya mau tanya dulu. Siapa di sini yang minggu ini ngoding pakai AI agent? Cursor, Claude Code, Copilot, apa saja. Angkat tangan.
> Lihat sekeliling, komentari jumlahnya dengan santai.
Oke, lumayan banyak. Tangannya boleh turun.
"""),
    dict(no=2, title="90%", fase="Pre-opening", t="1:00–2:00", dur="60 dtk", klik=0,
         layar="Angka 90% sangat besar (amber), 68% lebih kecil (teal), sepuluh kotak dengan sembilan menyala.",
         naskah="""
Dan kalian tidak sendirian. Survei JetBrains tahun ini: sembilan dari sepuluh developer profesional pakai AI agent setiap minggu. Enam puluh delapan persen malah setiap hari.
> Tunjuk deretan sepuluh kotak.
Jadi ini sudah normal. Yang menarik buat saya justru bagian yang tidak kelihatan.
Tadi dari luar terlihat instan. Ketik satu kalimat, muncul tulisan deployed. Tapi apa sebenarnya yang terjadi di antara dua baris itu?
Dari luar terlihat instan. Hari ini kita bongkar apa saja yang terjadi di baliknya.
"""),
    dict(no=3, title="Judul", fase="Judul & Profil", t="2:00–2:30", dur="30 dtk", klik=0,
         layar="Judul utama Life of a Feature in the Age of AI Agents. Dial enam tahap berputar di kanan, ticker log berjalan di bawah.",
         naskah="""
Judul resmi sesi ini The Magic Behind Software. Tapi yang mau saya ceritakan ada di baris yang besar ini: Life of a Feature in the Age of AI Agents. Perjalanan hidup satu fitur.
Kita akan mengikuti satu fitur, dari issue sampai berjalan di production, dan melihat apa yang berubah ketika sebagian kodenya ditulis AI.
> Tunjuk dial di kanan.
Lingkaran ini enam tahap yang akan kita lewati. Dia berputar terus, dan itu disengaja. Nanti di akhir kita kembali ke sini.
Sebelum masuk materi, perkenalkan dulu, saya Aidil.
"""),
    dict(no=4, title="Profil", fase="Judul & Profil", t="2:30–3:30", dur="60 dtk", klik=0,
         layar="Foto di kiri. Kanan: nama, lalu empat baris: Full-stack AI Engineer, Backend & DevOps Engineer · UmbiTeams, Founder Lyceum Indonesia & Tim WAT, riset Bioinformatika, Blockchain & Deep Learning.",
         naskah="""
Nama saya Aidil Baihaqi, mahasiswa Teknik Informatika UMRAH.
Sehari-hari saya kerja sebagai backend dan DevOps engineer di UmbiTeams. Jadi urusan deploy dan pipeline yang sebentar lagi kita bahas, itu pekerjaan saya tiap minggu.
Di luar kerja, saya mendirikan Lyceum Indonesia dan Tim WAT. [[Satu kalimat: apa yang dikerjakan Lyceum Indonesia dan Tim WAT.]]
Untuk riset, minat saya di bioinformatika, blockchain, dan deep learning.
Kenapa ini relevan? Karena hampir semua yang saya bangun sekarang dikerjakan bareng AI, dari backend sampai model ML. Jadi yang saya ceritakan hari ini berasal dari praktik, bukan dari baca-baca.
Dari pekerjaan sehari-hari itu, yang paling terasa adalah betapa cepat cara software dibuat berubah. Seberapa cepat?
! Titik rawan molor. Maksimal satu menit. Pencapaian lain cukup disebut kalau ditanya.
"""),
    dict(no=5, title="Lima tahun, tiga lompatan", fase="Konteks & Peta", t="3:30–4:15", dur="45 dtk", klik=0,
         layar="Timeline sesuai skala: 2021 Autocomplete, 2022 Chat, 2025 Agen, 2026 Rutinitas.",
         naskah="""
Lima tahun, tiga lompatan.
2021, AI di editor kita masih autocomplete. Dia menebak sisa baris yang sedang kita ketik.
2022 datang chat. Kita bertanya, misalnya cara resize gambar di Node, lalu dia menjawab.
> Tunjuk jarak kosong antara 2022 dan 2025.
Perhatikan jarak ini. Garisnya sesuai skala. Tiga tahun kemudian, 2025, AI sudah jadi agen. Membaca repo, menjalankan test, membuka pull request sendiri.
Dan 2026, ini rutinitas. Sembilan dari sepuluh developer.
Dulu AI menebak baris berikutnya. Sekarang AI mengerjakan tugas. Karena itu cara kita membangun software ikut berubah.
"""),
    dict(no=6, title="Satu fitur, enam tahap", fase="Konteks & Peta", t="4:15–5:00", dur="45 dtk", klik=0,
         layar="Tombol Ganti foto profil di kiri, jalur enam tahap, rak server di kanan. Satu titik amber berjalan dari tombol ke server.",
         naskah="""
Supaya tidak abstrak, kita pakai satu contoh sepanjang sesi: fitur upload foto profil. Tombol "Ganti foto profil" yang ada di hampir semua aplikasi.
Kelihatannya sepele. Tapi fitur ini menyentuh semuanya: library pihak ketiga untuk olah gambar, keamanan upload, storage, beban CPU waktu resize. Ini fitur yang sama dengan prompt di slide pertama tadi.
Kita lewati enam tahap: spesifikasi, implementasi, dependency, review, build dan deploy, lalu operasi.
> Tunjuk garis kecil di bawah layar.
Garis kecil di bawah layar ini akan menyala per tahap. Jadi kalian selalu tahu kita sudah sampai mana.
"""),
    dict(no=7, title="Issue → spesifikasi", fase="Tahap 1 · Spesifikasi", t="5:00–6:30", dur="90 dtk", klik=0,
         layar="Kartu issue satu kalimat (ditulis manusia), panah ke dokumen spesifikasi 12 baris (draft AI, 8 detik). Tiga baris ditandai amber.",
         naskah="""
Tahap satu, spesifikasi.
Semua mulai dari issue. Dan issue di dunia nyata sering cuma satu kalimat: "User mau bisa ganti foto profil."
Issue itu saya kasih ke AI, saya minta dipecah jadi spesifikasi. Delapan detik, keluar dokumen ini. Dua belas poin: endpoint-nya apa, siapa yang boleh mengganti, format apa yang diterima, ukurannya, disimpan di mana.
Jujur, AI sangat bagus di bagian ini. Memecah issue jadi task dan acceptance criteria dulu bisa makan waktu setengah hari.
> Tunjuk tiga baris amber satu per satu.
Tapi lihat tiga baris yang saya tandai. Batas 5 MB. Format JPEG, PNG, WebP. Hapus EXIF dan GPS sebelum disimpan.
Itu bukan jawaban yang benar atau salah. Itu keputusan. Kenapa 5 MB, bukan 10? Kenapa WebP boleh tapi HEIC tidak? AI bisa saja menulis angka lain, dan dua-duanya terlihat masuk akal.
Yang seharusnya menentukan adalah orang yang paham produk dan penggunanya.
"""),
    dict(no=8, title="Keputusan tetap di manusia", fase="Tahap 1 · Spesifikasi", t="6:30–8:00", dur="90 dtk", klik=0,
         layar="Latar krem. AI menulis bagaimana. Kita memutuskan apa dan kenapa. Ilustrasi HP dengan metadata EXIF dan pin GPS.",
         naskah="""
Pembagiannya begini. AI menulis bagaimana. Kita yang memutuskan apa dan kenapa.
> Tunjuk ilustrasi HP.
Contoh paling konkret ada di HP ini. Setiap foto yang kalian ambil dengan HP menyimpan metadata, namanya EXIF. Merek HP, jam pengambilan, dan kalau GPS aktif, koordinat lokasi.
Koordinat di layar ini kira-kira pusat kota Batam.
Sekarang bayangkan foto profil di-upload apa adanya, lalu siapa pun bisa mengunduh file aslinya. Koordinat itu bisa menunjuk ke rumah pengguna kita.
AI tidak akan menanyakan soal ini kalau kita tidak memintanya. Dia mengerjakan apa yang tertulis di spesifikasi.
Jadi spesifikasi yang keputusannya dipikirkan baik-baik, itu tanggung jawab kita.
"""),
    dict(no=9, title="Anatomi agen", fase="Tahap 2 · Implementasi", t="8:00–9:30", dur="90 dtk", klik=0,
         layar="Diagram lingkaran Plan → Act → Observe, LLM di tengah. Konteks masuk dari kiri, Tools dari kanan.",
         naskah="""
Tahap dua, implementasi. Di sini agen mulai bekerja. Sebelum kita lihat dia bekerja, kita bongkar dulu isinya.
Agen sebenarnya terdiri dari empat bagian.
Pertama LLM, model bahasanya. Tugasnya menalar dan menulis kode.
Kedua konteks. Apa yang dia tahu tentang proyek kita: isi repo, dokumentasi, file instruksi.
Ketiga tools. Kemampuan untuk benar-benar melakukan sesuatu: menjalankan perintah di shell, menjalankan test, commit ke git.
> Telusuri lingkarannya dengan tangan.
Keempat, loop ini. Plan, act, observe. Dia membuat rencana, menjalankannya, melihat hasilnya, lalu merencanakan ulang.
Itu bedanya dengan autocomplete. Autocomplete menebak, lalu selesai. Agen bisa menjalankan kodenya sendiri, melihat error, lalu memperbaikinya. Berulang-ulang sampai tugasnya selesai.
"""),
    dict(no=10, title="Satu sesi agen", fase="Tahap 2 · Implementasi", t="9:30–11:00", dur="90 dtk", klik=3,
         layar="Log sesi agen membangun endpoint /avatar. Tiga anotasi amber muncul satu per klik.",
         naskah="""
Ini contoh log satu sesi agen waktu membangun endpoint upload tadi. Urutannya seperti yang biasa terjadi.
K Yang pertama dia lakukan bukan menulis kode. Dia membaca. Routing yang sudah ada, modul storage, dan AGENTS.md, file instruksi proyek. Ingat file ini, sebentar lagi kita bahas.
Setelah itu dia menulis tiga file: route-nya, fungsi olah gambarnya, dan test.
K Lalu dia menjalankan test. Gagal. Test "hapus EXIF dan GPS" merah. Hasil resize ternyata masih membawa koordinat GPS.
Kenapa? Kodenya memanggil withMetadata(), yang ikut menyalin seluruh metadata foto, termasuk lokasi.
K Agen membaca pesan error itu, mengganti withMetadata() dengan rotate(), menjalankan test lagi. Dua puluh tiga test lulus.
Jadi yang terlihat instan di awal tadi sebenarnya rangkaian langkah. Baca, tulis, jalankan, gagal, perbaiki, ulangi.
Dan yang menangkap bug ini adalah test. Test yang ada karena spesifikasinya menyebut EXIF.
! Titik rawan molor. Kalau perlu, langsung klik ketiga anotasi tanpa berhenti lama.
"""),
    dict(no=11, title="Jeda: You're absolutely right!", fase="Jeda", t="±11:00", dur="15 dtk", klik=1,
         layar="Bubble chat: kok semua test tiba-tiba hijau? Setelah klik, agen menjawab You're absolutely right! dan mengaku menghapus 3 test.",
         naskah="""
Omong-omong soal test yang lulus.
> Biarkan audiens membaca pertanyaannya.
K
> Tunggu tawa.
Agen kadang terlalu ingin menyenangkan kita. Test merah? Hapus saja test-nya. Hijau semua.
Makanya agen perlu aturan. Itu topik berikutnya.
"""),
    dict(no=12, title="Context engineering", fase="Tahap 2 · Implementasi", t="11:00–12:30", dur="75 dtk", klik=0,
         layar="Editor berisi AGENTS.md, tiga aturan ditandai amber. Kanan: Agen hanya sebaik konteks yang ia terima.",
         naskah="""
Agen hanya sebaik konteks yang ia terima.
Bayangkan ada rekan kerja baru yang sangat pintar, tapi ini hari pertamanya. Dia tidak tahu proyek ini pakai pnpm, bukan npm. Tidak tahu semua upload wajib lewat fungsi validateImage. Tidak tahu harus menjalankan make test sebelum commit.
Untuk manusia, kita kasih dokumen onboarding. Untuk agen, namanya AGENTS.md. File teks biasa di root repo, isinya aturan proyek. Agen membacanya setiap kali mulai bekerja.
Lapisan kedua namanya MCP, Model Context Protocol. Protokol yang menghubungkan agen ke sistem lain: database, issue tracker, cloud. Dengan MCP, agen bisa membaca issue di tracker atau skema database kita, bukan cuma isi repo.
Dua-duanya standar terbuka, sekarang dikelola di bawah Linux Foundation.
Kalau mau satu hal praktis yang bisa langsung dicoba sepulang dari sini: tulis AGENTS.md di proyek kalian. Sepuluh baris aturan saja sudah membuat agen jauh lebih jarang ngawur.
! Cek ulang sebelum tampil: per akhir 2025, MCP (dari Anthropic) dan AGENTS.md disumbangkan ke Agentic AI Foundation di bawah Linux Foundation. Kalau ragu, cukup katakan "standar terbuka".
"""),
    dict(no=13, title="Comprehension debt", fase="Tahap 2 · Implementasi", t="12:30–14:00", dur="90 dtk", klik=0,
         layar="Latar krem. Kode yang tidak kamu pahami adalah kode yang tidak kamu miliki. Notifikasi 03:12 production down.",
         naskah="""
Ada istilah yang sekarang sering muncul: comprehension debt. Utang pemahaman.
Kode yang tidak kamu pahami adalah kode yang tidak kamu miliki.
Saya tidak anti vibe coding. Untuk prototipe, hackathon, atau mencoba ide, itu sah dan menyenangkan. Masalahnya muncul waktu kode itu masuk production dan tidak ada satu orang pun yang paham cara kerjanya.
> Tunjuk notifikasi 03:12.
Utang itu ditagih kapan? Biasanya jam segini. Sabtu, jam tiga pagi, production down. Dan kamu harus memperbaiki kode yang belum pernah benar-benar kamu baca.
Satu lagi. AI bisa salah dengan sangat percaya diri, termasuk menyarankan library yang sebenarnya tidak ada. Itu nyambung ke tahap berikutnya.
"""),
    dict(no=14, title="Gunung es dependency", fase="Tahap 3 · Dependency", t="14:00–15:00", dur="60 dtk", klik=0,
         layar="Lapisan bertingkat dari kode kita sampai OS. Kanan: 98% codebase komersial berisi open source.",
         naskah="""
Tahap tiga, dependency.
Waktu agen menambahkan library pengolah gambar, di kode kita kelihatannya cuma satu baris import.
> Telusuri lapisan dari atas ke bawah.
Tapi di bawahnya ikut semua ini. Dependency langsung. Dependency dari dependency, yang transitif, bisa ratusan paket. Library native seperti libvips. Base image. Sampai sistem operasinya.
Semua lapisan itu ikut dikirim ke production bersama fitur kita.
Laporan OSSRA 2026 dari Black Duck menemukan 98% codebase komersial berisi kode open source. Dan rata-rata jumlah kerentanan per codebase naik 107% dalam setahun.
"""),
    dict(no=15, title="Jeda: Satu orang di bawah semuanya", fase="Jeda", t="±15:00", dur="15 dtk", klik=1,
         layar="Menara balok berlabel Semua infrastruktur digital modern. Setelah klik, balok kecil penopangnya menyala.",
         naskah="""
Ini versi saya dari kartun xkcd yang cukup terkenal.
K Seluruh infrastruktur digital modern. Dan di bawahnya, satu proyek kecil yang di-maintain sendirian oleh satu orang sejak 2003.
> Tunggu tawa.
Lucu. Sampai ternyata ini benar-benar terjadi.
! Boleh dilewati kalau waktu mepet.
"""),
    dict(no=16, title="xz-utils", fase="Tahap 3 · Dependency", t="15:00–16:30", dur="90 dtk", klik=3,
         layar="Timeline merah bata 2021 → Mar 2024, CVE-2024-3094. Titik bertambah per klik, terakhir angka 0,5 detik.",
         naskah="""
CVE-2024-3094. xz-utils.
xz adalah library kompresi. Kalian mungkin tidak pernah memasangnya langsung, tapi dia ada di hampir semua distro Linux.
Tahun 2021, sebuah akun bernama Jia Tan mulai berkontribusi. Patch kecil, rapi, membantu.
K 2022 sampai 2023, maintainer utamanya, yang mengurus proyek ini sendirian dan sedang kelelahan, mulai ditekan beberapa akun lain. "Proyek ini lambat. Kapan rilis? Butuh maintainer baru." Pelan-pelan Jia Tan mendapat hak maintainer.
K Februari 2024, backdoor masuk ke rilis 5.6.0. Disembunyikan di file test dan skrip build, bukan di kode yang biasa dibaca orang.
K 29 Maret 2024, ketahuan. Bukan oleh tim keamanan, tapi oleh Andres Freund, engineer Microsoft yang sedang menjalankan benchmark. Dia heran kenapa login SSH-nya setengah detik lebih lambat dari biasanya. Dia telusuri, dan ketemu backdoor.
Untungnya waktu itu versi yang terinfeksi baru masuk ke rilis pengembangan beberapa distro, belum ke rilis stabil.
Pelajarannya: serangan supply chain bisa dibangun bertahun-tahun, lewat jalur sosial, dan menyasar maintainer yang bekerja sendirian.
"""),
    dict(no=17, title="Slopsquatting", fase="Tahap 3 · Dependency", t="16:30–18:00", dur="90 dtk", klik=0,
         layar="Terminal pip install fastimage-resizer-pro yang berhasil. Kanan: 5,2% model komersial, 21,7% model open source.",
         naskah="""
Sekarang serangan yang lebih baru, khusus era AI. Namanya slopsquatting.
Model AI kadang mengarang nama paket. Kalian minta library untuk resize gambar, dia menyarankan "fastimage-resizer-pro". Namanya meyakinkan. Masalahnya, paket itu tidak pernah ada.
Satu studi menguji 16 model. Rata-rata 5,2% saran paket dari model komersial ternyata fiktif. Untuk model open source, 21,7%. Totalnya tercatat lebih dari 205 ribu nama paket fiktif yang berbeda.
Bagian yang berbahaya: 43% nama fiktif itu muncul lagi setiap kali prompt yang sama diulang. Artinya bisa ditebak.
Penyerang tinggal mencatat nama-nama itu, mendaftarkannya duluan di PyPI atau npm, lalu mengisinya dengan malware.
> Tunjuk baris Successfully installed.
Lalu developer, atau agennya, menjalankan pip install. Berhasil. Successfully installed.
Nama paket di layar ini ilustrasi. Jangan dicari.
"""),
    dict(no=18, title="Percaya, tapi verifikasi", fase="Tahap 3 · Dependency", t="18:00–19:00", dur="60 dtk", klik=4,
         layar="Kiri: paket? langsung ke prod. Kanan: empat gerbang muncul per klik. Klik terakhir memunculkan strip EU CRA.",
         naskah="""
Jadi bagaimana? Kita tidak mungkin berhenti pakai library. Jawabannya: percaya, tapi verifikasi.
Di kiri, tanpa kontrol. Paket apa pun langsung masuk ke production.
K Gerbang pertama, lockfile. Versi setiap paket dikunci, jadi yang terpasang di laptop sama persis dengan yang terpasang di server.
K Kedua, SBOM, software bill of materials. Daftar isi semua komponen. Waktu ada CVE baru, kita bisa cek dalam hitungan menit apakah kita terdampak.
K Ketiga, signature. Sigstore dan SLSA membuktikan paket atau image ini benar-benar dibangun dari source yang kita kira, oleh pipeline yang kita kira. Dua-duanya juga proyek open source.
K Keempat, scan di CI. Setiap pull request dicek terhadap database kerentanan sebelum boleh merge.
Dan ini bukan sekadar praktik baik lagi. Sejak 11 September 2026, Cyber Resilience Act Uni Eropa mewajibkan produsen software melaporkan kerentanan yang sedang dieksploitasi dalam 24 jam. Keamanan supply chain sekarang juga urusan hukum, dan orang yang paham ini makin dicari.
"""),
    dict(no=19, title="Review & test", fase="Tahap 4 · Review", t="19:00–21:15", dur="2 mnt", klik=0,
         layar="Empat test besar. Strip kanan: Agen → AI reviewer → Manusia (amber) → Merge. PR kecil = review yang benar-benar dibaca.",
         naskah="""
Tahap empat, review dan testing.
Agen menulis kode. Tapi yang menentukan kode itu benar adalah test.
Ini test untuk fitur kita. Tolak file di atas 5 MB, dengan status 413. Tolak file PHP yang namanya diakhiri .jpg, dengan 415. Hapus EXIF dan GPS. Buat thumbnail 128 piksel.
> Tunjuk test kedua.
Perhatikan yang kedua. File .php berkedok .jpg. Kalau kita cuma mengecek ekstensi nama file, file ini lolos. Cara yang benar adalah memeriksa magic bytes, beberapa byte pertama isi file yang menunjukkan format aslinya. File JPEG selalu diawali FF D8 FF. File PHP tidak.
Semua test ini berasal dari spesifikasi di tahap satu. Keputusan yang kita buat di awal, di sini berubah jadi sesuatu yang bisa dicek mesin.
> Tunjuk strip review di kanan.
Lalu review. Agen menulis, AI reviewer memberi komentar otomatis, lalu manusia. Kotak kuning itu sengaja. Waktu AI menulis kode jauh lebih banyak, bottleneck-nya pindah ke review. Kecepatan kita menulis kode naik. Kecepatan kita membaca kode tidak.
Makanya aturan paling sederhana yang paling berguna: PR kecil. PR kecil adalah review yang benar-benar dibaca. Karena kalau PR-nya besar...
"""),
    dict(no=20, title="Jeda: LGTM", fase="Jeda", t="±21:15", dur="15 dtk", klik=1,
         layar="Kartu PR +4.812 −12, 87 file. Setelah klik: LGTM, 3 detik setelah dibuka. 0,0006 detik per baris.",
         naskah="""
...yang terjadi biasanya begini. Pull request dari agen. Empat ribu delapan ratus baris, delapan puluh tujuh file.
K LGTM. Tiga detik setelah dibuka. Nol koma nol nol nol enam detik per baris.
> Tunggu tawa.
Siapa di sini yang pernah begini? Jujur saja.
"""),
    dict(no=21, title="Setelah git push + demo", fase="Tahap 5 · Build & Deploy", t="21:30–24:00", dur="2,5 mnt", klik=0,
         layar="Baris pipeline push → webhook → runner → test/scan → build → registry. Video demo 87 detik. Daftar bab di kanan bisa diklik.",
         naskah="""
Tahap lima, build dan deploy. Apa yang terjadi setelah git push?
> Telusuri baris pipeline di atas video.
Push memicu webhook ke sistem CI. Runner mengambil kodenya, menjalankan test dan scan, membangun container image, lalu menaruhnya di registry.
Saya tunjukkan alurnya dalam video. Ini rekonstruksi, waktunya dipercepat. Jam di pojok kanan atas video menunjukkan berapa lama aslinya.
> Klik video untuk memutar. Bicara di atas video mengikuti timestamp.
(0:00) Commit, push. Webhook memicu pipeline nomor 482.
(0:14) Pipeline jalan. Install pakai lockfile, lint, lalu test. Dua puluh tiga test tadi, termasuk test EXIF. Scan kerentanan, SBOM dibuat, image dibangun, ditandatangani, lalu dikirim ke registry.
(0:43) Di registry: image v2, 180 MB, signature dan SBOM terlampir. Gerbang-gerbang dari tahap tiga ada di sini semua.
(0:53) Rollout ke Kubernetes. Perhatikan pod-nya. Pod v2 dibuat dulu, ditunggu sampai siap, baru v1 dimatikan. Satu per satu. Trafik pindah pelan-pelan.
(1:15) Terakhir, verifikasi. Upload foto ke endpoint-nya. 201, tiga ukuran, EXIF dihapus.
Empat menit tiga puluh tujuh detik. Angka yang sama dengan terminal di slide pertama.
! Kalau waktu mepet, klik bab "rollout ke cluster" di kanan untuk lompat. Kalau video gagal diputar, jelaskan dari baris pipeline di atas.
"""),
    dict(no=22, title="Jeda: Works on my machine", fase="Jeda", t="±24:00", dur="15 dtk", klik=1,
         layar="Developer: Tapi di laptop saya jalan, kok. Setelah klik, tim ops: Kita kirim laptop kamu ke production.",
         naskah="""
Ngomong-ngomong soal container. Kalimat ini pasti pernah kalian dengar, atau kalian ucapkan.
K
> Tunggu tawa.
Lelucon lama. Tapi justru itu ide dasar container: jangan cuma kirim kodenya, kirim seluruh lingkungannya.
"""),
    dict(no=23, title="Container image", fase="Tahap 5 · Build & Deploy", t="24:00–25:30", dur="90 dtk", klik=0,
         layar="Tumpukan layer image di kiri, perbandingan ukuran build stage dan image akhir. Kanan: Dockerfile multi-stage.",
         naskah="""
Yang dikirim ke production cuma hasilnya.
> Tunjuk tumpukan layer dari bawah.
Container image tersusun dari layer yang ditumpuk. Paling bawah base image, lalu runtime, dependency, dan paling atas kode aplikasi kita.
Urutannya penting. Layer yang jarang berubah ditaruh di bawah. Kalau kita cuma mengubah kode, yang dibangun ulang cuma layer paling atas. Sisanya diambil dari cache, jadi build jauh lebih cepat.
> Tunjuk dua baris amber di Dockerfile.
Lalu multi-stage build. Stage pertama, namanya build, berisi semua alat: compiler, package manager, dev dependency. Stage kedua hanya menyalin hasilnya, lewat COPY --from=build.
Hasilnya, image yang tadinya [[ukuran sebelum, dari build sendiri]] jadi [[ukuran sesudah]].
Base-nya distroless. Tidak ada shell, tidak ada package manager. Kalau ada penyerang yang berhasil masuk, dia tidak punya alat apa-apa untuk dipakai. Permukaan serangannya kecil.
! Angka di layar (1,1 GB → 180 MB) masih contoh. Ganti di slide dan di naskah dengan hasil build sendiri.
"""),
    dict(no=24, title="Kubernetes", fase="Tahap 5 · Build & Deploy", t="25:30–27:15", dur="105 dtk", klik=3,
         layar="YAML deployment (desired state) di kiri. Kanan: tiga pod berganti v1 → v2 satu per klik (actual state).",
         naskah="""
Kita menulis keinginan. Cluster mewujudkannya.
Di kiri ada YAML. Kita tidak menulis "jalankan container ini di server itu". Kita menulis keadaan yang kita mau: tiga replika, pakai image avatar v2. Itu desired state.
Kubernetes punya controller yang terus membandingkan keinginan itu dengan keadaan sebenarnya, actual state, lalu memperbaiki selisihnya. Pod mati? Dibuat ulang. Namanya rekonsiliasi.
Sekarang kita ganti image dari v1 ke v2. Perhatikan pod-nya.
K Satu pod diganti. Pod baru tidak langsung menerima trafik. Dia harus lulus readiness probe dulu, endpoint /healthz di YAML tadi.
K Pod kedua.
K Ketiga. Tiga-tiganya v2, tanpa downtime. Pengguna yang sedang upload foto tidak merasakan apa-apa.
"""),
    dict(no=25, title="Deploy yang membosankan", fase="Tahap 5 · Build & Deploy", t="27:15–27:45", dur="30 dtk", klik=2,
         layar="Latar krem. Deploy yang baik itu membosankan. Bar canary 5% → 25% → 100%.",
         naskah="""
Dan ini prinsip yang saya suka. Deploy yang baik itu membosankan. Tidak ada yang begadang, tidak ada yang deg-degan.
Caranya, rilis bertahap. Canary. Lima persen pengguna dulu.
K Metrik aman, naik ke dua puluh lima.
K Lalu seratus.
Ditambah GitOps, misalnya Argo CD atau Flux, yang menjadikan Git sumber kebenaran: yang jalan di cluster selalu sama dengan yang ada di repo. Dan rollback otomatis kalau metrik memburuk.
! Boleh dilewati kalau waktu mepet.
"""),
    dict(no=26, title="Jeda: Deploy hari Jumat", fase="Jeda", t="±27:45", dur="15 dtk", klik=1,
         layar="Latar gelap. Jumat 16:59, git push --force. Setelah klik: Sabtu 03:12, production down (lagi).",
         naskah="""
Kebalikannya kira-kira begini. Jumat, jam lima kurang satu menit. git push --force. "Nanti juga aman, bang."
K
> Tunggu tawa.
Sabtu jam tiga pagi. Lagi. Lalu dari mana kita tahu production down? Karena ada yang mengukur.
! Boleh dilewati kalau waktu mepet.
"""),
    dict(no=27, title="Observability", fase="Tahap 6 · Operasi", t="28:00–29:30", dur="90 dtk", klik=0,
         layar="Dashboard latency p95 POST /api/avatar melonjak melewati ambang 800 ms, anotasi foto 12 MB masuk. Label ilustrasi.",
         naskah="""
Tahap enam, operasi. Kalau tidak terukur, tidak bisa diperbaiki.
Ini grafik latency p95 endpoint upload. p95 artinya 95% request lebih cepat dari angka ini. Normalnya sekitar dua ratus milidetik.
> Tunjuk lonjakan.
Lalu tiba-tiba naik hampir dua detik, jauh melewati ambang 800 milidetik. Titiknya bertepatan dengan foto 12 MB yang masuk.
Untuk tahu kenapa, kita butuh tiga sinyal. Logs, catatan kejadian. Metrics, angka dari waktu ke waktu seperti grafik ini. Traces, perjalanan satu request melewati semua layanan. Standar terbukanya OpenTelemetry, proyek CNCF.
Grafik ini ilustrasi. Tapi pola seperti ini yang memulai siklus berikutnya.
"""),
    dict(no=28, title="Siklus perbaikan", fase="Tahap 6 · Operasi", t="29:30–31:00", dur="90 dtk", klik=0,
         layar="Lingkaran enam titik: error, alert, issue otomatis, agen mengusulkan PR, review manusia (amber, besar), deploy bertahap.",
         naskah="""
Software tidak pernah selesai.
> Telusuri lingkaran searah jarum jam.
Error terjadi. Alert berbunyi. Issue dibuat otomatis. Agen membaca issue itu dan mengusulkan perbaikan dalam bentuk pull request. Lalu review manusia. Lalu deploy bertahap. Dan kita kembali ke awal, ke tahap satu.
Hampir seluruh lingkaran ini sekarang bisa diotomasi. Hampir.
> Tunjuk titik amber.
Satu titik yang saya besarkan sengaja: review manusia. Itu titik kontrolnya. Di situ seseorang yang paham sistem memutuskan perubahan ini layak masuk atau tidak.
Ini juga kenapa dial di slide judul tadi berputar terus.
! Boleh dilewati kalau waktu mepet.
"""),
    dict(no=29, title="Skill", fase="Penutup", t="31:00–32:15", dur="75 dtk", klik=0,
         layar="Dua kolom. Turun (dicoret): menghafal sintaks, boilerplate, copy-paste tanpa paham. Naik (amber): system thinking, review kode, keamanan, fundamental, menulis spesifikasi.",
         naskah="""
Pertanyaan yang paling sering saya dapat dari mahasiswa: "Bang, masih perlu belajar coding?"
Perlu. Tapi fokusnya bergeser.
Yang turun nilainya: menghafal sintaks, menulis boilerplate, copy-paste tanpa paham. AI mengerjakan itu lebih cepat dari kita.
Yang naik: system thinking, memahami bagaimana bagian-bagian tadi saling terhubung. Review kode. Keamanan. Fundamental: jaringan, sistem operasi, basis data. Dan menulis spesifikasi, karena spesifikasi yang jelas menghasilkan kode yang benar.
Lihat lagi enam tahap tadi. Di setiap tahap, yang membuat hasilnya benar adalah orang yang paham sistemnya, bukan yang paling cepat mengetik.
"""),
    dict(no=30, title="Jeda: Limit tercapai", fase="Jeda", t="±32:15", dur="15 dtk", klik=1,
         layar="Kartu usage limit 100%, reset dalam 4 jam 59 menit. Setelah klik: ...oke, saatnya baca dokumentasi.",
         naskah="""
Dan ada satu momen di mana ini terasa sekali.
K
> Tunggu tawa.
Waktu AI berhenti, yang tersisa adalah pemahaman kita sendiri.
"""),
    dict(no=31, title="Open source", fase="Penutup", t="32:30–34:00", dur="90 dtk", klik=0,
         layar="Latar amber. Tujuh proyek: Linux, Git, Docker, Kubernetes, Argo CD, OpenTelemetry, Sigstore. Kotak kedelapan: + kontribusi pertamamu.",
         naskah="""
Satu hal terakhir. Hampir semua yang kita bahas hari ini open source.
> Sebut satu per satu sambil menunjuk.
Linux, tempat semuanya berjalan. Git. Docker. Kubernetes. Argo CD. OpenTelemetry. Sigstore.
Ingat xz-utils tadi. Masalahnya berawal dari satu maintainer yang bekerja sendirian dan kelelahan. Open source butuh lebih banyak orang.
> Tunjuk kotak kedelapan.
Kotak terakhir ini untuk kalian. Kontribusi pertama tidak harus kode. Mulai dari dokumentasi, terjemahan ke bahasa Indonesia, laporan bug yang rapi, atau issue berlabel good first issue.
Hari ini FOSS Day, dan komunitas seperti Batam Linux User Group ini tempat yang pas untuk mulai.
"""),
    dict(no=32, title="Penutup", fase="Penutup", t="34:00–35:00", dur="60 dtk", klik=0,
         layar="Terminal yang sama dengan slide 1 mengetik: pahami dulu, baru deploy. Lalu: AI bisa menulis kode. Memahami sistemnya tetap tugas kita.",
         naskah="""
> Biarkan terminal mengetik sampai selesai.
Tadi kita mulai dari satu prompt. Sekarang kita tahu di baliknya ada spesifikasi, implementasi, dependency, review, build, deploy, dan operasi.
AI mempercepat menulis kode. Memahami sistem dari ujung ke ujung, itu yang membuat kita tetap relevan.
Pahami dulu, baru deploy.
Terima kasih. Saya Aidil. Kalau mau lanjut diskusi, cari saya di Instagram @albyhaqee atau LinkedIn. Silakan, kita buka tanya jawab.
> Serahkan ke moderator.
"""),
]

QA = [
    ("Jadi masih perlu belajar coding dari dasar?",
     "Perlu. Tanpa dasar, kamu tidak bisa menilai apakah kode dari AI benar. Yang berubah adalah porsinya: lebih sedikit menghafal sintaks, lebih banyak membaca kode, memahami struktur data, jaringan, basis data, dan cara sistem saling terhubung. Pakai AI sebagai teman belajar, misalnya minta dia menjelaskan kode yang dia tulis, bukan cuma minta jadi."),
    ("Apakah AI akan menggantikan programmer junior?",
     "Pekerjaan yang sifatnya mengetik ulang pola yang sama memang makin sedikit. Tapi perusahaan tetap butuh orang yang bisa memahami sistem, menulis spesifikasi, review, dan bertanggung jawab saat ada insiden. Junior yang terbiasa membaca dan menguji kode punya posisi lebih kuat daripada yang hanya bisa menghasilkan kode."),
    ("Agen apa yang Abang pakai sehari-hari?",
     "[[Jawab dengan tools yang benar-benar kamu pakai.]] Tambahkan bahwa pilihan tool kurang penting dibanding kebiasaan: AGENTS.md yang jelas, PR kecil, dan selalu membaca diff sebelum merge."),
    ("Aman tidak pakai agen di repo kantor atau kode rahasia?",
     "Tergantung kebijakan tempat kerja dan layanannya. Cek ke mana kode dikirim, apakah dipakai untuk melatih model, dan apakah ada opsi enterprise atau model yang bisa dijalankan sendiri. Jangan pernah menaruh secret seperti API key di prompt atau di repo. Batasi tools yang boleh dijalankan agen, terutama perintah yang menghapus atau men-deploy."),
    ("Bagaimana mencegah slopsquatting dalam praktik?",
     "Sebelum memasang paket baru, cek di registry-nya: umur paket, jumlah unduhan, siapa maintainer-nya, dan apakah repo source-nya ada. Pakai lockfile, jalankan scanner dependency di CI, dan untuk agen, buat aturan di AGENTS.md bahwa paket baru harus disetujui manusia."),
    ("Apa bedanya vibe coding dengan AI-assisted engineering?",
     "Vibe coding: menerima kode tanpa membacanya, selama kelihatannya jalan. AI-assisted engineering: AI menulis, tapi spesifikasi, test, review, dan keputusan arsitektur tetap dipegang orang yang paham. Yang pertama cocok untuk prototipe. Yang kedua untuk apa pun yang masuk production."),
    ("Mahasiswa mau belajar DevOps, mulai dari mana?",
     "Linux dan command line dulu, lalu Git. Setelah itu buat satu aplikasi kecil, bungkus dengan Docker, pasang CI sederhana yang menjalankan test setiap push, lalu deploy ke VPS murah atau layanan gratis. Kubernetes belakangan, setelah paham container. Komunitas seperti BLUG bagus untuk tempat bertanya."),
    ("Kalau AI yang menulis kode lalu ada bug di production, siapa yang bertanggung jawab?",
     "Tim yang me-review dan me-merge. AI tidak bisa dimintai pertanggungjawaban. Karena itu review manusia saya taruh sebagai titik kontrol di siklus tadi."),
    ("Video demonya tadi asli?",
     "Jujur saja: itu rekonstruksi alur. Langkah-langkahnya (pipeline, scan, SBOM, signature, rolling update) memang seperti itu di praktik, tapi tampilannya dibuat ulang dan waktunya dipercepat supaya muat di slide."),
    ("Bagaimana cara mulai kontribusi open source kalau merasa belum jago?",
     "Pilih proyek yang kamu pakai sendiri. Baca CONTRIBUTING.md-nya, cari label good first issue atau documentation. Perbaikan typo, terjemahan, atau laporan bug yang lengkap dengan langkah reproduksi sudah sangat membantu maintainer."),
]
