/**
 * Katalog foto Unsplash (lisensi Unsplash: gratis, komersial, tanpa atribusi wajib —
 * kredit tetap ditampilkan kecil di pojok slide sebagai bentuk sopan santun).
 *
 * `hash` = bagian setelah images.unsplash.com/. Ganti foto: cukup ubah hash + kredit di sini.
 * Ambil hash dari halaman foto Unsplash (klik kanan gambar > Copy image address).
 */
export type Photo = {
  hash: string;
  alt: string;
  by: string;
  handle: string;
};

export const unsplashUrl = (hash: string, w = 1600) =>
  `https://images.unsplash.com/${hash}?auto=format&fit=crop&w=${w}&q=75`;

export const srcSet = (hash: string) =>
  [800, 1200, 1600, 2000].map((w) => `${unsplashUrl(hash, w)} ${w}w`).join(", ");

const p = (hash: string, alt: string, by: string, handle: string): Photo => ({ hash, alt, by, handle });

export const photos = {
  // konstruksi & struktur
  cranes4: p("photo-1578052315041-06c7c248b325", "Empat tower crane di langit", "Danny Lau", "kirk7501"),
  workersSunset: p("photo-1579847188804-ecba0e2ea330", "Siluet pekerja konstruksi saat matahari terbenam", "Shivendu Shukla", "shivendushukla"),
  structure: p("photo-1536895058696-a69b1c7ba34f", "Struktur gedung yang sedang dibangun", "Nathan Waters", "nathangwaters"),
  steelFrame: p("photo-1527335988388-b40ee248d80c", "Rangka baja gedung dan tower crane", "Jacek Dylag", "dylu"),
  cranesOnBuilding: p("photo-1429497419816-9ca5cfb4571a", "Crane di atas gedung, sudut rendah", "Danist Soh", "danist07"),
  yellowCrane: p("photo-1599707254554-027aeb4deacd", "Crane kuning di dekat gedung", "Frames For Your Heart", "framesforyourheart"),
  aerial: p("photo-1551295022-de5522c94e08", "Foto udara bangunan dan jalan", "Jocke Wulcan", "wulcan"),
  concreteBuilding: p("photo-1508450859948-4e04fabaa4ea", "Gedung beton dalam konstruksi", "Tolu Olubode", "toluobde"),
  craneSunset: p("photo-1551711974-faf378be34b2", "Crane saat senja", "Matías Santana", "santanamatias"),
  tallBuildings: p("photo-1565008447742-97f6f38c985c", "Gedung tinggi di bawah langit berawan", "C Dustin", "dianamia"),
  // kampus
  studentsSeated: p("photo-1492538368677-f6e0afe31dcc", "Mahasiswa duduk di kelas, dari atas", "Mikael Kristenson", "mikael_k"),
  professor: p("photo-1758270704262-ecc82b23dc37", "Dosen mengajar di kelas", "Vitaly Gariev", "silverkblack"),
  speaker: p("photo-1544531586-fde5298cdd40", "Pembicara di depan kerumunan", "Miguel Henriques", "miguel_photo"),
  lectureHall: p("photo-1541829070764-84a7d30dd3f3", "Bangku kuliah kosong", "Changbok Ko", "kochangbok"),
  raisingHands: p("photo-1477281765962-ef34e8bb0967", "Orang-orang mengangkat tangan", "Edwin Andrade", "theunsteady5"),
  soloReader: p("photo-1536925155833-43e9c2b2f499", "Seseorang membaca di ruang kuliah kosong", "Philippe Bout", "flipboo"),
  laptops: p("photo-1606761568499-6d2451b23c66", "Mahasiswa bekerja dengan laptop", "Dom Fou", "domlafou"),
  projector: p("photo-1524178232363-1fb2b075b655", "Rapat kelompok dengan layar proyektor", "Quilia", "heyquilia"),
  chalkboard: p("photo-1561089489-f13d5e730d72", "Mahasiswa di depan papan tulis", "Shubham Sharan", "shubhamsharan"),
  groupChairs: p("photo-1638957835514-224c57ffe617", "Kelompok duduk di ruangan", "Juli Kosolapova", "yuli_superson"),
  audience: p("photo-1515168985652-8454bcc8fcaf", "Penonton di sebuah ruangan", "Antenna", "antenna"),
  bench: p("photo-1614793319738-bde496bbe85e", "Teman-teman duduk di bangku kayu", "Max Shilov", "mxshlv"),
  tableGroup: p("photo-1592303637753-ce1e6b8a0ffb", "Diskusi kelompok di meja", "CX Insight", "cxinsight"),
  // prestasi
  trophy: p("photo-1578269174936-2709b6aeb913", "Piala kuning putih", "Giorgio Trovato", "giorgiotrovato"),
  trophies: p("photo-1705925716592-259267037a03", "Deretan piala di meja", "Florian Cordier", "floriancordier"),
  ribbon: p("photo-1614036417651-efe5912149d8", "Pita penghargaan kuning di latar biru", "Brands&People", "brandsandpeople"),
  confetti: p("photo-1569705460033-cfaa4bf9f822", "Perempuan melempar konfeti ke langit", "Jason Dent", "jdent"),
  silverTrophy: p("photo-1706193589333-da530df63ecf", "Piala perak di meja", "Michael Fousert", "michaelfousert"),
  stairs: p("photo-1476304884326-cd2c88572c5f", "Orang menaiki tangga biru", "Lindsay Henwood", "lindsayhenwood"),
} as const;

export type PhotoKey = keyof typeof photos;
