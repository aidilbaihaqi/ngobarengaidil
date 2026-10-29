import type { ComponentType } from "react";
import type { Tone } from "../components/kit";
import { S01Prompt, S02Number, S03Title, S04Profile } from "../slides/Opening";
import { S05Timeline, S06Map, S07Spec, S08Decide } from "../slides/Context";
import { S09Anatomy, S10Session, S11Context, S12Debt } from "../slides/Agent";
import { S13Iceberg, S14Xz, S15Slop, S16Gates } from "../slides/Supply";
import { S17Tests, S18Pipeline, S19Image, S20Kube, S21Boring } from "../slides/Ship";
import { S22Observe, S23Cycle, S24Skills, S25Open, S26Close } from "../slides/Closing";
import { M1Right, M2Tower, M3Lgtm, M4Machine, M5Friday, M6Limit } from "../slides/Memes";

export type SlideDef = {
  title: string;
  tone: Tone;
  /** 1–6 lights that tick on the trace; "done" lights all six. */
  stage?: number | "done";
  /** Number of build states; arrow keys walk them before changing slide. */
  steps?: number;
  /** Hide the trace strip: the pre-opening, the title, the full-bleed photo, the close. */
  bare?: boolean;
  /** Target start time, mm:ss. */
  at: string;
  notes: string;
  Slide: ComponentType<{ step: number }>;
};

/* Running order, timing and speaker notes follow docs/brief-the-magic-behind-software-35min.md. */
export const DECK: SlideDef[] = [
  {
    title: "Satu prompt",
    tone: "ink",
    steps: 3,
    bare: true,
    at: "0:00",
    Slide: S01Prompt,
    notes:
      "Jangan perkenalkan diri dulu. Klik: prompt terketik. Klik lagi: agen jalan sampai deployed. \"Satu kalimat. Beberapa menit kemudian, fiturnya sudah berjalan di production.\" Diam sebentar. \"Siapa di sini yang minggu ini ngoding pakai AI agent? Angkat tangan.\"",
  },
  {
    title: "90%",
    tone: "navy",
    bare: true,
    at: "1:00",
    Slide: S02Number,
    notes:
      "Kaitkan dengan tangan yang terangkat. \"Ini sudah normal. Tapi dari luar terlihat instan. Apa yang sebenarnya terjadi di antara prompt tadi dan baris deployed itu?\" → \"Dari luar terlihat instan. Hari ini kita bongkar apa saja yang terjadi di baliknya.\"",
  },
  {
    title: "Judul",
    tone: "navy",
    bare: true,
    at: "2:00",
    Slide: S03Title,
    notes:
      "Judul utama sekarang Life of a Feature in the Age of AI Agents; judul resmi acara tetap tampil di bawahnya. Lingkaran di kanan berputar terus: satu fitur melewati enam tahap, berulang. \"Hari ini kita akan mengikuti satu fitur software, dari issue sampai berjalan di production, dan melihat apa yang berubah ketika sebagian kodenya ditulis AI.\" → \"Sebelum masuk ke materi, perkenalkan, saya Aidil.\"",
  },
  {
    title: "Profil",
    tone: "navy",
    bare: true,
    at: "2:30",
    Slide: S04Profile,
    notes:
      "Maksimal 1 menit. \"Sehari-hari saya membangun software dengan bantuan AI, dari backend sampai model ML. Jadi yang saya ceritakan hari ini berasal dari praktik di lapangan.\" → \"Dari pekerjaan sehari-hari, yang paling terasa adalah betapa cepat cara software dibuat berubah. Seberapa cepat?\"",
  },
  {
    title: "Lima tahun, tiga lompatan",
    tone: "navy",
    at: "3:30",
    Slide: S05Timeline,
    notes:
      "Perubahannya bukan bertahap, tapi lompatan. Dari \"AI menebak baris berikutnya\" menjadi \"AI mengerjakan tugas\". Tunjuk jarak kosong 2022 ke 2025: sumbunya sesuai skala. Karena itu proses pengembangan software ikut berubah.",
  },
  {
    title: "Satu fitur, enam tahap",
    tone: "navy",
    at: "4:15",
    Slide: S06Map,
    notes:
      "Fitur upload foto profil. Sederhana, tapi menyentuh semua tahap: library pihak ketiga, keamanan upload, storage, beban CPU saat resize. Ini fitur yang sama dengan prompt di slide pertama. Garis di bawah layar akan menyala per tahap.",
  },
  {
    title: "Issue → spesifikasi",
    tone: "navy",
    stage: 1,
    at: "5:00",
    Slide: S07Spec,
    notes:
      "AI sangat bagus memecah issue jadi task dan acceptance criteria. Draft ini keluar dalam 8 detik. Tapi baris yang di-highlight bukan \"jawaban benar\", itu keputusan: batas 5 MB, format yang diterima, EXIF.",
  },
  {
    title: "Keputusan tetap di manusia",
    tone: "cream",
    stage: 1,
    at: "6:30",
    Slide: S08Decide,
    notes:
      "Disimpan di mana, batas ukuran berapa, bagaimana dengan EXIF. Foto dari HP bisa membocorkan lokasi rumah user (tunjuk koordinat GPS), dan AI tidak akan menanyakannya kalau tidak diminta.",
  },
  {
    title: "Anatomi agen",
    tone: "navy",
    stage: 2,
    at: "8:00",
    Slide: S09Anatomy,
    notes:
      "LLM untuk menalar dan menulis kode, konteks berisi repo dan dokumentasi, tools untuk menjalankan perintah. Bedanya dengan autocomplete: agen bisa menjalankan, melihat hasilnya, lalu memperbaiki sendiri.",
  },
  {
    title: "Satu sesi agen",
    tone: "ink",
    stage: 2,
    steps: 4,
    at: "9:30",
    Slide: S10Session,
    notes:
      "Kembali ke pre-opening. Klik untuk tiap anotasi: (1) agen membaca repo, (2) test gagal karena GPS ikut tersalin, (3) agen memperbaiki dan test hijau. Yang terlihat instan tadi sebenarnya rangkaian langkah: baca, tulis, jalankan, gagal, perbaiki, ulangi.",
  },
  {
    title: "Jeda · You're absolutely right",
    tone: "cream",
    stage: 2,
    steps: 2,
    at: "11:00",
    Slide: M1Right,
    notes:
      "Jeda 15 detik. Klik untuk punchline. Agen memang jago bikin test hijau, termasuk dengan cara menghapus test-nya. Ini alasan slide berikutnya penting: konteks dan aturan yang jelas.",
  },
  {
    title: "Context engineering",
    tone: "navy",
    stage: 2,
    at: "11:00",
    Slide: S11Context,
    notes:
      "Dua lapisan konteks: file instruksi di repo dan protokol tools (MCP) yang menghubungkan agen ke database, issue tracker, cloud. Keduanya standar terbuka. (Cek ulang status pengelolaan MCP sebelum tampil.)",
  },
  {
    title: "Comprehension debt",
    tone: "cream",
    stage: 2,
    at: "12:30",
    Slide: S12Debt,
    notes:
      "Vibe coding sah untuk prototipe. Masalahnya saat dikirim ke production tanpa ada yang paham. Utang pemahaman ditagih saat insiden, jam tiga pagi. Dan AI bisa salah dengan percaya diri, termasuk menyarankan paket yang tidak ada.",
  },
  {
    title: "Gunung es dependency",
    tone: "navy",
    stage: 3,
    at: "14:00",
    Slide: S13Iceberg,
    notes:
      "Saat agen menambahkan library pengolah gambar, seluruh lapisan di bawahnya ikut dikirim ke production. Kerentanan rata-rata per codebase naik 107% dalam setahun (OSSRA 2026).",
  },
  {
    title: "Jeda · Satu orang di bawah semuanya",
    tone: "cream",
    stage: 3,
    steps: 2,
    at: "15:00",
    Slide: M2Tower,
    notes:
      "Jeda 15 detik. Klik: sorot balok kecil. Kartun xkcd yang terkenal ini ternyata jadi kenyataan, dan contohnya di slide berikutnya: xz-utils.",
  },
  {
    title: "xz-utils",
    tone: "navy",
    stage: 3,
    steps: 4,
    at: "15:00",
    Slide: S14Xz,
    notes:
      "Klik per titik. Serangan social engineering bertahun-tahun ke satu maintainer open source. Ditemukan kebetulan oleh seorang engineer yang heran login SSH-nya setengah detik lebih lambat.",
  },
  {
    title: "Slopsquatting",
    tone: "ink",
    stage: 3,
    at: "16:30",
    Slide: S15Slop,
    notes:
      "205 ribu nama paket fiktif tercatat dalam satu studi, dan 43% muncul berulang, jadi bisa ditebak. Penyerang tinggal mendaftarkan nama itu. Nama paket di contoh ini ilustrasi.",
  },
  {
    title: "Percaya, tapi verifikasi",
    tone: "navy",
    stage: 3,
    steps: 5,
    at: "18:00",
    Slide: S16Gates,
    notes:
      "Klik per gerbang: lockfile, SBOM, signature, scan di CI. Pengamanan berlapis, dan Sigstore serta SLSA sendiri proyek open source. Klik terakhir: EU CRA. Keamanan supply chain kini juga urusan hukum, dan skill ini makin dicari.",
  },
  {
    title: "Review & test",
    tone: "ink",
    stage: 4,
    at: "19:00",
    Slide: S17Tests,
    notes:
      "Saat AI menulis lebih banyak kode, bottleneck pindah ke review. File .php berkedok .jpg ditolak dengan cek magic bytes, bukan ekstensi. Titik kontrolnya manusia.",
  },
  {
    title: "Jeda · LGTM",
    tone: "cream",
    stage: 4,
    steps: 2,
    at: "21:30",
    Slide: M3Lgtm,
    notes:
      "Jeda 15 detik. Klik: reviewer menyetujui 4.812 baris dalam 3 detik. Tanya audiens: siapa yang pernah begini? Ini kenapa PR kecil itu penting.",
  },
  {
    title: "Setelah git push + demo",
    tone: "navy",
    stage: 5,
    at: "21:30",
    Slide: S18Pipeline,
    notes:
      "Jelaskan pipeline singkat, lalu klik video (87 detik): push → pipeline → registry → rollout → verifikasi. Daftar di kanan bisa diklik untuk lompat ke bagian tertentu kalau waktu mepet. Sampaikan bahwa video ini rekonstruksi alur dengan waktu dipercepat; durasi nyatanya ±4,5 menit (jam di pojok kanan atas video). Kalau video gagal, jelaskan dari diagram.",
  },
  {
    title: "Jeda · Works on my machine",
    tone: "cream",
    stage: 5,
    steps: 2,
    at: "24:00",
    Slide: M4Machine,
    notes:
      "Jeda 15 detik. Klik untuk jawaban tim ops. Lelucon lama, tapi memang itu ide dasar container: kirim seluruh lingkungannya, bukan cuma kodenya.",
  },
  {
    title: "Container image",
    tone: "navy",
    stage: 5,
    at: "24:00",
    Slide: S19Image,
    notes:
      "Urutan layer menentukan cache. Multi-stage membuang tool build. Distroless tanpa shell = permukaan serangan kecil. (Ganti angka 1,1 GB → 180 MB dengan hasil build sendiri.)",
  },
  {
    title: "Kubernetes",
    tone: "navy",
    stage: 5,
    steps: 4,
    at: "25:30",
    Slide: S20Kube,
    notes:
      "Klik tiga kali untuk rolling update. Kubernetes deklaratif: controller terus merekonsiliasi. Pod mati dibuat ulang. Pod baru menerima trafik setelah readiness probe lulus, jadi tanpa downtime.",
  },
  {
    title: "Deploy yang membosankan",
    tone: "cream",
    stage: 5,
    steps: 3,
    at: "27:15",
    Slide: S21Boring,
    notes:
      "Klik: 25%, lalu 100%. Argo CD/Flux menjadikan Git sumber kebenaran; canary dan feature flag membatasi dampak; rollback otomatis saat metrik memburuk. (Boleh dilewati jika waktu habis.)",
  },
  {
    title: "Jeda · Deploy hari Jumat",
    tone: "ink",
    stage: 5,
    steps: 2,
    at: "28:00",
    Slide: M5Friday,
    notes:
      "Jeda 15 detik. Kebalikan dari deploy yang membosankan. Klik: 03:12 lagi, sama seperti slide comprehension debt. Lanjut: makanya kita butuh observability.",
  },
  {
    title: "Observability",
    tone: "navy",
    stage: 6,
    at: "28:00",
    Slide: S22Observe,
    notes:
      "Tiga sinyal, satu standar terbuka: OpenTelemetry, proyek CNCF. Lonjakan ini pemicu siklus berikutnya. Grafik ini ilustrasi.",
  },
  {
    title: "Siklus perbaikan",
    tone: "navy",
    stage: 6,
    at: "29:30",
    Slide: S23Cycle,
    notes:
      "Sebagian besar siklus ini kini bisa diotomasi, tapi titik kontrolnya tetap review manusia. Siklus kembali ke Tahap 1. (Boleh dilewati jika waktu habis.)",
  },
  {
    title: "Skill",
    tone: "navy",
    stage: "done",
    at: "31:00",
    Slide: S24Skills,
    notes:
      "\"Masih perlu belajar coding?\" Perlu, tapi fokusnya bergeser ke memahami seluruh tahapan yang barusan kita lihat.",
  },
  {
    title: "Jeda · Limit tercapai",
    tone: "cream",
    stage: "done",
    steps: 2,
    at: "32:30",
    Slide: M6Limit,
    notes:
      "Jeda 15 detik. Klik untuk punchline. Saat AI berhenti, yang tersisa adalah fundamental kita. Nyambung ke daftar skill yang naik nilainya.",
  },
  {
    title: "Open source",
    tone: "amber",
    stage: "done",
    at: "32:30",
    Slide: S25Open,
    notes:
      "Kasus xz-utils lahir dari maintainer yang bekerja sendirian dan kelelahan. Open source butuh lebih banyak kontributor, dan kontribusi pertama paling mudah justru dokumentasi dan terjemahan.",
  },
  {
    title: "Penutup",
    tone: "ink",
    bare: true,
    at: "34:00",
    Slide: S26Close,
    notes:
      "\"Tadi kita mulai dari satu prompt. Sekarang kita tahu ada spesifikasi, implementasi, supply chain, review, build, deploy, dan operasi di baliknya.\" Ulangi pesan utama: AI mempercepat menulis kode, memahami sistem dari ujung ke ujung yang membuatmu tetap relevan. Serahkan ke moderator.",
  },
];
