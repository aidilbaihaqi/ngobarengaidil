import { photos as P } from "@/app/seminar/lib/photos";
import type { Slide } from "@/app/seminar/lib/types";

export const slides: Slide[] = [
  // ───────────────────────────── RINGAN ─────────────────────────────
  {
    id: "cover",
    layout: "cover",
    phase: "ringan",
    kicker: "Seminar Mahasiswa Baru · Teknik Sipil",
    title: ["Kuliah Tetap Prioritas,", "Prestasi Terus Berkualitas"],
    subtitle: "Aidil Baihaqi · Awardee Beasiswa Pendidikan Indonesia S1 Dalam Negeri",
    photo: P.cranes4,
    notes:
      "Tampil saat peserta masuk. Setelah dipanggil moderator: senyum, satu kalimat, langsung lanjut. Jangan buka dengan 'selamat pagi' panjang.",
  },
  {
    id: "pertanyaan",
    layout: "cloud",
    phase: "ringan",
    kicker: "Pre-opening",
    title: "Yang ada di kepala kalian sekarang.",
    questions: [
      { text: "Kenapa prestasi dan kuliah harus dibarengin?", size: "lg", accent: true },
      { text: "Goals prestasi di kuliah itu seperti apa, sih?", size: "lg", accent: true },
      { text: "IPK aman dulu atau lomba dulu?", size: "md" },
      { text: "Kalau saya bukan anak pintar, masih bisa?", size: "md" },
      { text: "Organisasi itu nambah nilai atau nambah beban?", size: "md" },
      { text: "Kampus daerah bisa tembus nasional?", size: "lg" },
      { text: "Mulainya dari mana?", size: "sm" },
      { text: "Nanti aja semester 3, masih sempat kan?", size: "sm" },
      { text: "Capek nggak, sih?", size: "sm" },
      { text: "Teknik Sipil kok lombanya apa?", size: "md" },
      { text: "Kalau gagal gimana?", size: "sm" },
    ],
    footer: "Tidak ada pertanyaan yang bodoh di sini. Hampir semua orang di ruangan ini menanyakan hal yang sama.",
    notes:
      "PRE-OPENING (0–2 menit). Jangan dibaca satu-satu — diam 5 detik, biarkan mereka membaca sendiri. Lalu: 'Ada yang kebetulan mikirin salah satunya barusan? Angkat tangan.' Tunggu tangan naik, baru lanjut.",
  },
  {
    id: "satu-pertanyaan",
    layout: "focus",
    phase: "ringan",
    kicker: "Dari semua itu, satu dulu",
    question: "Kenapa kuliah dan prestasi harus dibarengin?",
    body:
      "Karena yang dinilai setelah kalian lulus bukan salah satunya. Bukan IPK saja, bukan sertifikat saja — tapi bukti bahwa kalian sanggup mengerjakan dua-duanya sekaligus, dalam waktu yang sama terbatasnya buat semua orang.",
    footer: "Dua jam ke depan kita bongkar jawabannya. Pelan-pelan.",
    notes:
      "PRE-OPENING bagian 2. Ini kontrak isi seminar: sebutkan pertanyaannya, janjikan jawabannya, jangan dijawab sekarang. Tahan godaan untuk spoiler — jawabannya baru utuh di slide 'Satu bangunan'.",
  },
  {
    id: "kenalan",
    layout: "intro",
    phase: "ringan",
    title: "Kenalan dulu.",
    items: [
      { icon: "school", text: "SMK Negeri 1 Bintan Timur, jurusan RPL — nilai akhir 91,8/100" },
      { icon: "campus", text: "Teknik Informatika, Universitas Maritim Raja Ali Haji — IPK 3,80/4,00" },
      { icon: "medal", text: "Gold Medal Kompetisi Bioinformatika & Biologi Sintetis Nasional, ITB 2025" },
      {
        icon: "globe",
        text: "Awardee Beasiswa Indonesia Maju Persiapan S1 Luar Negeri — Kyoto University, Computer Science",
      },
      {
        icon: "scholarship",
        text: "Kini satu-satunya Awardee Beasiswa Pendidikan Indonesia S1 Dalam Negeri di Kepulauan Riau",
      },
    ],
    body: "Jalur saya biasa saja. Yang beda cuma sistemnya — dan itu yang mau saya bagi hari ini.",
    notes:
      "RINGAN. Bawakan sebagai cerita, bukan CV. Dua baris terakhir dibaca pelan: BIM itu jalur persiapan ke Kyoto, lalu migrasi ke BPI dalam negeri — jangan digabung jadi satu kalimat, nanti terdengar seperti satu beasiswa. Kalimat kunci: 'Jalur saya biasa saja - anak SMK, kampus daerah, sama seperti kalian.'",
  },
  {
    id: "bukti",
    layout: "split",
    phase: "ringan",
    title: "Bukti, bukan pamer.",
    subtitle: "Supaya kalian percaya ini bukan teori.",
    body: [
      "Gold Medal — Kompetisi Bioinformatika & Biologi Sintetis Nasional, ITB 2025",
      "Juara 1 — AL Ahmadi International Youthpreneurship Competition, Batam 2025",
      "Juara 1 — Festival Open Source Software, Politeknik Negeri Batam 2025",
      "Juara 2 — Festival Open Source Software, Politeknik Negeri Batam 2024",
      "Finalis — ID Fest Developer Day, Kementerian Komdigi RI, Jakarta 2025",
      "1 dari 1.100 programmer undangan Baparekraf Developer Day, Yogyakarta 2024",
    ],
    check: true,
    photo: P.trophies,
    notes:
      "Maksimal 60 detik. Jangan dibaca semua — sebut dua, sisanya biarkan terbaca sendiri. 'Saya tunjukkan ini bukan untuk pamer, tapi supaya kalian tahu yang saya bilang 2 jam ke depan sudah saya jalani.' Perhatikan dua baris terakhir: itu yang kalah dan yang cuma diundang — sengaja ikut ditulis.",
  },
  {
    id: "kupu-kupu",
    layout: "cards",
    phase: "ringan",
    title: "Kupu-kupu atau kura-kura?",
    subtitle: "Topik ringan: kamu tipe yang mana?",
    cards: [
      { photo: P.soloReader, title: "Kupu-kupu", text: "Kuliah–pulang. Fokus, tapi sering sendirian." },
      { photo: P.projector, title: "Kura-kura", text: "Kuliah–rapat. Sibuk, tapi belum tentu berdampak." },
      { photo: P.bench, title: "Kunang-kunang", text: "Kuliah–nangkring. Relasi bagus, target kabur." },
    ],
    footer: "Dua-duanya bisa berprestasi, dua-duanya bisa gagal. Yang menentukan bukan labelnya — tapi punya SATU hal yang ditekuni.",
    notes:
      "Polling tangan: 'Angkat tangan yang niatnya kupu-kupu!' 'Kura-kura?' 'Kunang-kunang?' Biarkan ramai 1–2 menit. Lalu pecahkan mitosnya: kupu-kupu yang pulang buat ngerjain PKM itu berprestasi; kura-kura yang ikut 12 rapat tanpa tanggung jawab cuma sibuk.",
  },
  {
    id: "jajak-lulus",
    layout: "poll",
    phase: "ringan",
    kicker: "Angkat tangan",
    title: "Ekspektasi vs realita.",
    subtitle: "Jujur saja: seyakin apa kalian langsung kerja setelah lulus nanti?",
    options: [
      { label: "Yakin banget", text: "Lulus → langsung jadi site engineer." },
      { label: "Semoga", text: "Ada rencana, tapi belum tahu caranya." },
      { label: "Belum kepikiran", text: "Baru masuk kok sudah ditanya kerja." },
    ],
    reveal: "Tahan dulu jawabannya. Slide berikutnya, angkanya.",
    notes:
      "JEDA INTERAKTIF #1. Hitung tangan dengan suara keras — ini yang bikin ruangan hidup. Jangan dikomentari benar atau salah. Begitu tangan turun, langsung ganti slide: efek angka satu juta hilang kalau kalian keburu ngobrol.",
  },

  // ───────────────────────────── BERAT ─────────────────────────────
  {
    id: "satu-juta",
    layout: "number",
    phase: "berat",
    number: "±1 juta",
    title: "sarjana teknik di Indonesia menganggur.",
    body: ["Disampaikan Ketua Umum PII, Agustus 2026.", "Bukan lulusan SMA. Sarjana. Teknik. Seperti kalian empat tahun lagi."],
    photo: P.workersSunset,
    notes:
      "Mulai bagian BERAT dengan angka. Diam 3 detik setelah slide muncul. Sumber: Ketua Umum PII Ilham Habibie kepada Kontan, 30 Agustus 2026 — sekitar 1 juta sarjana insinyur menganggur (rincian per bidang belum diketahui, jadi sebut 'sekitar').",
  },
  {
    id: "tpt",
    layout: "chart",
    phase: "berat",
    title: "Ijazah S1 bukan jaminan.",
    subtitle: "Lulusan D3 lebih mudah terserap daripada sarjana.",
    bars: [
      { label: "Sarjana (D4–S3)", value: 6.13, highlight: true },
      { label: "Diploma (D1–D3)", value: 4.8 },
      { label: "Rata-rata nasional", value: 4.68 },
    ],
    unit: "%",
    body: ["Tingkat pengangguran terbuka menurut pendidikan, BPS Februari 2026.", "Sarjana dinilai dari yang bisa ia buktikan, bukan gelarnya."],
    notes:
      "FAKTA MENGEJUTKAN #2. Sumber: BPS, Sakernas Februari 2026 (rilis 5 Mei 2026): TPT D4/S1/S2/S3 6,13%; D1–D3 4,80%; nasional 4,68%. 'Ini yang jarang dibilang waktu ospek.'",
  },
  {
    id: "satu-bangunan",
    layout: "building",
    phase: "berat",
    title: "Satu bangunan.",
    subtitle: "Kuliah dan prestasi bukan musuh yang rebutan waktu.",
    layers: [
      { label: "Atap", value: "Prestasi" },
      { label: "Balok", value: "Relasi" },
      { label: "Kolom", value: "Skill" },
      { label: "Fondasi", value: "Kuliah" },
    ],
    body: "Beban atap turun ke balok, ke kolom, ke fondasi. Fondasi retak, atap roboh — itu kenapa kuliah tetap prioritas.",
    photo: P.structure,
    notes:
      "IDE UTAMA (ulangi 3x). Pakai bahasa mereka: analisis beban struktur. Tanya: 'Kalau fondasinya retak, atapnya sebagus apa pun, terjadi apa?' Dua ekstrem: 'sibuk organisasi makanya IPK jelek' = bangunan tanpa fondasi; IPK 3,9 tapi nggak ikut apa-apa = fondasi doang.",
  },
  {
    id: "ipk-tiket",
    layout: "split",
    phase: "berat",
    title: "IPK = tiket.",
    subtitle: "Bukan tujuan — tapi tanpa tiket kalian nggak masuk proyek.",
    body: ["Beasiswa besar: IPK minimal ±3,0", "Magang & exchange: minta transkrip", "Lomba nasional: minta surat aktif kuliah"],
    check: true,
    photo: P.yellowCrane,
    notes:
      "Cek syarat IPK terbaru beasiswa yang kamu sebut (BPI S1 umumnya minimal 3,0). Cerita: hampir semua formulir minta transkrip atau surat aktif. Ada mata kuliah belum lulus, formulir berhenti di situ.",
  },
  {
    id: "kebiasaan",
    layout: "cards",
    phase: "berat",
    title: "Tiga kebiasaan fondasi.",
    subtitle: "Gratis, dan bisa dimulai Senin depan.",
    cards: [
      { photo: P.studentsSeated, title: "Duduk di depan", text: "HP susah dibuka kalau dosen dua meter dari kamu." },
      { photo: P.laptops, title: "Catat, ulang 24 jam", text: "Baca ulang 10 menit malam harinya. Nggak perlu SKS sebelum UAS." },
      { photo: P.professor, title: "Kenal dosenmu", text: "Nama lengkap dan risetnya. Ini balok 'relasi' di bangunan tadi." },
    ],
    footer: "Dosen yang kenal kamu = surat rekomendasi, ajakan riset, info lomba.",
    notes:
      "Tanya audiens: 'Siapa yang tahu nama lengkap dosen wali kalian?' Biasanya sedikit yang angkat tangan — itu materinya.",
  },
  {
    id: "matkul",
    layout: "split",
    phase: "berat",
    title: "Fondasi wajib teknik sipil.",
    subtitle: "Empat mata kuliah yang tak boleh setengah hati.",
    body: ["Mekanika Teknik", "Kalkulus & Statistika", "Gambar Teknik / CAD", "Teknologi Bahan", "Semua lomba sipil berdiri di atas empat ini."],
    check: true,
    photo: P.steelFrame,
    side: "left",
    notes:
      "Cek kurikulum kampus tempat seminar; ganti nama mata kuliah kalau beda. Setelah slide ini: AKTIVITAS 'Tanya tetangga' 5–7 menit — tiap orang tanya ke sebelahnya 'mata kuliah mana yang paling kamu takuti?', ambil 3 jawaban.",
  },
  {
    id: "kualitas",
    layout: "compare",
    phase: "berat",
    title: "Kualitas mengalahkan jumlah.",
    subtitle: "Kolom prestasi di formulir beasiswa biasanya hanya 3–5 entri.",
    left: "10 sertifikat webinar",
    right: "1 juara lomba nasional",
    verdict: "Berkualitas = relevan, berdampak, terbukti.",
    photo: P.trophy,
    notes:
      "Pengalaman mengisi formulir seleksi: 10 sertifikat webinar tidak menambah apa-apa; satu juara nasional mengubah keputusan reviewer. Tulis tiga kata: RELEVAN – BERDAMPAK – TERBUKTI.",
  },
  {
    id: "jenjang",
    layout: "steps",
    phase: "berat",
    title: "Jenjang lomba.",
    subtitle: "Naik satu anak tangga per semester.",
    steps: [
      { label: "01", title: "Kampus", text: "Lomba HMJ, LKTI internal, Pilmapres tingkat prodi" },
      { label: "02", title: "Wilayah", text: "Peksimida, seleksi LLDikti, kompetisi regional" },
      { label: "03", title: "Nasional", text: "PIMNAS, Peksiminas, KJI/KBGI, POMNAS, Pilmapres" },
      { label: "04", title: "Internasional", text: "Exchange, konferensi, kompetisi global" },
    ],
    photo: P.stairs,
    notes:
      "Hampir semua lomba resmi Kemdiktisaintek berjenjang: kampus → wilayah/LLDikti → nasional → internasional. Pilmapres dari prodi sampai nasional; Peksimida sebelum Peksiminas; PKM lolos pendanaan baru ke PIMNAS. Lomba tingkat kampus bukan 'kecil' — itu tiket ke atas.",
  },
  {
    id: "ragam-lomba",
    layout: "cards",
    phase: "berat",
    title: "Lomba apa saja?",
    subtitle: "Pilih satu jalur dulu di semester 1–2.",
    cards: [
      { photo: P.chalkboard, title: "Akademik & riset", text: "PKM → PIMNAS · ON-MIPA · LKTI · Gemastik · NUDC/KDMI" },
      { photo: P.confetti, title: "Seni & olahraga", text: "Peksiminas (vokal, tari, poster, fotografi, film pendek, cerpen, puisi) · POMNAS" },
      { photo: P.concreteBuilding, title: "Sipil & profesi", text: "KJI · KBGI · Civil Expo · Pilmapres · sertifikasi AutoCAD / SAP2000" },
    ],
    footer: "PKM punya banyak skema — dari riset sampai pengabdian masyarakat. Cek pendaftaran tahun ini H-3 supaya bisa sebut tanggal.",
    notes:
      "Sebut yang paling dekat dengan mereka: KJI (Kompetisi Jembatan Indonesia) dan KBGI (Kompetisi Bangunan Gedung Indonesia). PKM = Program Kreativitas Mahasiswa, puncaknya PIMNAS. Peksiminas = Pekan Seni Mahasiswa Nasional. POMNAS = olahraga. ON-MIPA = olimpiade sains PT. KMI Expo (wirausaha), MTQMN.",
  },
  {
    id: "tangga",
    layout: "steps",
    phase: "berat",
    title: "Tangga 4 tahap.",
    subtitle: "Tidak ada yang loncat dari anak tangga 1 ke 4.",
    steps: [
      { label: "Sem 1–2", title: "Ikut", text: "Anggota tim senior, volunteer, seminar seperti ini" },
      { label: "Sem 3–4", title: "Peran", text: "Ketua tim kecil, penulis proposal PKM, drafter CAD" },
      { label: "Sem 5–6", title: "Pimpin", text: "Ketua tim, target juara, daftar beasiswa" },
      { label: "Sem 7–8", title: "Bagikan", text: "Mentor adik tingkat, rapikan portofolio" },
    ],
    photo: P.cranesOnBuilding,
    notes:
      "'Saya di semester 1 cuma anggota. Gold medal baru datang di semester 5.' Framework ini yang paling sering dicatat — beri 3 menit, minta mereka tulis di HP tahap mereka sekarang.",
  },
  {
    id: "jajak-organisasi",
    layout: "poll",
    phase: "berat",
    kicker: "Angkat tangan",
    title: "Sebentar, hitung dulu.",
    subtitle: "Semester ini kalian daftar berapa organisasi dan kepanitiaan?",
    options: [
      { label: "0–1", text: "Masih lihat-lihat dulu." },
      { label: "2–3", text: "Cukup buat punya tanggung jawab nyata." },
      { label: "4 atau lebih", text: "Kalender sudah penuh sebelum kuliah mulai." },
    ],
    reveal: "Sertifikat peserta ×12 itu bukan struktur — itu tumpukan bata tanpa semen.",
    notes:
      "JEDA INTERAKTIF #2. Jeda napas di tengah bagian berat. Yang angkat tangan di kolom C biasanya paling ramai — jangan diejek, justru pujilah semangatnya, baru bacakan kalimat penutupnya pelan-pelan.",
  },
  {
    id: "podium",
    layout: "quote",
    phase: "berat",
    kicker: "Cerita: podium",
    quote: "“Kami bukan dari ITB. Kami dari kampus daerah. Modalnya: riset yang rapi dan tim yang mau begadang.”",
    body: "Nama kampus tidak ditulis di lembar penilaian juri. Kualitas kerja kalian yang ditulis.",
    photo: P.speaker,
    notes:
      "CERITA #2 (90 detik): Gold Medal National Bioinformatics & Synthetic Biology Competition ITB 2025. Ceritakan versi aslimu: tim terbentuk, momen hampir nyerah, malam sebelum presentasi, momen pengumuman. Detail konkret yang bikin nempel.",
  },
  {
    id: "dokumentasi",
    layout: "split",
    phase: "berat",
    title: "Tanpa bukti, dianggap tak terjadi.",
    subtitle: "Reviewer tidak kenal kalian. Yang dia lihat cuma bukti.",
    body: ["Foto & sertifikat → satu folder cloud", "Angka dampak: berapa peserta, berapa orang terbantu", "Link portofolio yang bisa diklik", "Simpan hari itu juga, bukan dua tahun lagi"],
    check: true,
    photo: P.tableGroup,
    notes:
      "Praktik: folder PRESTASI, subfolder per kegiatan berisi foto, sertifikat, dan catatan 3 baris: peran saya, hasilnya, angkanya. 'Website desa dipakai 1.000+ warga' lebih kuat dari 'membuat website'.",
  },
  {
    id: "beasiswa",
    layout: "split",
    phase: "berat",
    title: "Prestasi bisa membayar kuliahmu.",
    subtitle: "Berkas beasiswa dikumpulkan 4 semester, bukan 4 hari.",
    body: ["BPI · BIM · Beasiswa Unggulan · KIP-K", "Beasiswa Pemprov & swasta", "Siapkan sejak semester 1: IPK, 1–2 prestasi berkualitas, esai, rekomendasi dosen"],
    check: true,
    photo: P.ribbon,
    side: "left",
    notes:
      "Bagian yang paling ditunggu — beri 5 menit. Sebut BPI, BIM, Beasiswa Unggulan, KIP-Kuliah, beasiswa Pemprov Kepri, beasiswa swasta. Cek status pembukaan masing-masing tahun ini sebelum tampil.",
  },
  {
    id: "jam-168",
    layout: "chart",
    phase: "berat",
    title: "168 jam seminggu.",
    subtitle: "Masalahnya bukan waktu.",
    bars: [
      { label: "Tidur", value: 56 },
      { label: "Kuliah", value: 24 },
      { label: "Sisa", value: 88, highlight: true },
    ],
    unit: " jam",
    body: ["Tidur 8 jam sehari = 56. Kuliah + praktikum ≈ 24. Sisa 88 jam.", "Ke mana perginya 88 jam itu?"],
    notes:
      "FAKTA #3 — matematika sederhana, biar mereka hitung sendiri. Diam setelah '88 jam'. 'Masalahnya kita nggak pernah nulis mau dipakai apa 88 jam itu.'",
  },
  {
    id: "blok-beton",
    layout: "cards",
    phase: "berat",
    title: "Blok beton mingguan.",
    subtitle: "Beton dicor per blok, bukan setetes-setetes. Waktu juga.",
    cards: [
      { photo: P.lectureHall, title: "Kuliah", text: "Blok tetap, tidak bisa digeser. Termasuk 10 menit review malam." },
      { photo: P.silverTrophy, title: "Prestasi", text: "Dua blok × 3 jam per minggu. Di luar itu, nggak dipikirin." },
      { photo: P.bench, title: "Istirahat", text: "Dijadwal, bukan sisa. Kalau sisa, kalian istirahat di jam kuliah." },
    ],
    footer: "Buka kalender HP sekarang. Pasang dua blok prestasi minggu ini. 60 detik.",
    notes: "Sistem yang saya pakai sampai sekarang. Aktivitas 60 detik: pasang dua blok di kalender HP.",
  },
  {
    id: "aturan",
    layout: "split",
    phase: "berat",
    title: "Aturan 1 + 1.",
    subtitle: "Satu lomba + satu organisasi per semester.",
    body: ["IPK turun di bawah target? Prestasi pause — bukan berhenti.", "Fondasi diperbaiki dulu. Kuliah tetap prioritas."],
    photo: P.tallBuildings,
    notes:
      "Aturan pengaman supaya judul seminar ini beneran jalan. Ceritakan semester saat kamu menolak ajakan lomba karena ada mata kuliah yang harus dikejar.",
  },

  // ───────────────────────────── RINGAN ─────────────────────────────
  {
    id: "jajak-deadline",
    layout: "poll",
    phase: "ringan",
    kicker: "Angkat tangan",
    title: "Kembali ringan.",
    subtitle: "Tugas dikumpul Senin. Kalian mulai ngerjain kapan?",
    options: [
      { label: "H-7", text: "“Biar tenang.” Ada? Serius?" },
      { label: "H-3", text: "Masih masuk akal, masih sempat revisi." },
      { label: "H-1, jam 2 pagi", text: "“Kenapa aku begini.”" },
    ],
    reveal: "Bukan salah kalian — ini memang cara kerja otak. Makanya yang dibutuhkan blok waktu, bukan niat.",
    notes:
      "JEDA INTERAKTIF #3. Kolom C pasti paling banyak; tertawakan bareng, jangan menggurui. Mulai turun ke bagian ringan: nada santai, tempo lebih pelan.",
  },
  {
    id: "kalah-dulu",
    layout: "steps",
    phase: "ringan",
    title: "Kalah dulu, baru juara.",
    subtitle: "Prestasi berkualitas lahir dari kekalahan yang dianalisis.",
    steps: [
      { label: "2024", title: "Juara 2", text: "Festival Open Source Software, Polibatam" },
      { label: "2025", title: "Finalis, tidak menang", text: "AL Ahmadi International · ID Fest Developer Day" },
      { label: "2025", title: "Juara 1", text: "FOSS Polibatam · Gold Medal ITB" },
      { label: "Kamu", title: "Anak tangga kedua", text: "Kalah di lomba pertama bukan tanda berhenti." },
    ],
    photo: P.confetti,
    notes:
      "CERITA #3 (paling emosional, 2 menit): ceritakan rasanya pulang tanpa piala dan apa yang diubah setelahnya — feedback juri, latihan pitching.",
  },
  {
    id: "qna",
    layout: "qna",
    phase: "ringan",
    title: "Tanya jawab.",
    subtitle: "20–25 menit bersama moderator. Tidak ada pertanyaan yang terlalu kecil.",
    contacts: ["@albyhaqee", "aidilbaihaqi.id", "LinkedIn: Aidil Baihaqi"],
    photo: P.raisingHands,
    notes:
      "Pertanyaan pancingan untuk moderator (kirim H-1): (1) IPK semester 1 sudah jelek, masih ada harapan? (2) Fokus lomba atau organisasi dulu? (3) Cara kenal dosen tanpa kelihatan cari muka? (4) Beasiswa mana yang realistis untuk maba? (5) Pernah mau nyerah? Jawab maksimal 90 detik, tutup dengan satu tindakan konkret minggu ini. Setelah selesai, tekan → ke slide terakhir.",
  },
  {
    id: "penutup",
    layout: "closing",
    phase: "ringan",
    title: ["Fondasi dulu,", "baru tinggi."],
    subtitle: "Satu kalimat untuk dibawa pulang.",
    photo: P.craneSunset,
    notes:
      "SLIDE TERAKHIR. Ucapkan sekali, minta audiens ulang ('Fondasi dulu...' — '...baru tinggi!'), terima kasih, kembalikan ke moderator. Selesai. Jangan tambah apa pun.",
  },
];
