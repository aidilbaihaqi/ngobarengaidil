/*
 * Every word on the page, in her voice: buy is him, cayang / myakuguweh is her.
 * Edit here; the scenes only lay it out.
 */

/** The four digits buy sends over WhatsApp. 1308 = 13 Agustus, hari jadian. */
export const SECRET_CODE = "1308";

const dir = "/sticker sapi/";
export const STICKER = {
  imup: encodeURI(`${dir}imup.jpg`),
  marah: encodeURI(`${dir}marah.jpg`),
  murung: encodeURI(`${dir}murung.jpg`),
  bunga: encodeURI(`${dir}kasih bunga.jpg`),
  lidah: encodeURI(`${dir}melunjurkan lidah.jpg`),
} as const;

export const ENDING_GIF = "https://media.tenor.com/r46xx12x1gMAAAAj/peach-goma-love-head-pat.gif";

export const GATE = {
  title: "halo cayang 🥺",
  body: "buy punya cecuatu buat camu... tapi dikunci 🔒",
  task: "kodenya udah buy kirim lewat WA. tempat masukinnya? cari cendiri yaa 🙈",
  /** Said when she taps something that is not the keyhole. */
  misses: [
    "bukan acu 🙈",
    "hihi bukan di cini",
    "gelii, bukan acu",
    "ciee nyariin",
    "dingin... dingin...",
  ],
  /** Shown one by one the longer she looks, so a tired person never gets stuck. */
  hints: [
    "psst... coba liat yang merah-merah 🍉",
    "di cemangka ada biji yang bentuknya beda 👀",
    "yang bentuk hati! pencet itu cayang ❤️",
  ],
  wrong: "eh calah 🙈 cek WA buy lagi yaa",
  right: "YEAYY BENER 🎉",
};

export const MOOD = {
  title: "cayang hari ini rasanya gimana?",
  sub: "pilih catu aja, buy dengerin 🫶",
  options: [
    {
      id: "capek",
      label: "capek bgt",
      sticker: STICKER.murung,
      reply:
        "cini cini, rebahan aja. hari ini camu udah hebat banget, cayang. capeknya taruh di buy aja ya, buy yang bawain 🫂",
    },
    {
      id: "cakit",
      label: "perut cakit",
      sticker: STICKER.murung,
      badge: "🩹",
      reply:
        "uuu perutnya cakit ya... buy elus-elus dari cini 🥺 minum yang anget, kompres perutnya, jangan banyak gerak dulu ya myakuguweh",
    },
    {
      id: "ngamuk",
      label: "mau ngamuk",
      sticker: STICKER.marah,
      reply:
        "boleh banget! hari ini camu boleh ngamuk ce-pu-as-nya. buy udah ciapin tempatnya, ayo →",
    },
    {
      id: "peyuk",
      label: "mau dipeyuk",
      sticker: STICKER.imup,
      reply:
        "PEYUUUK 🫂 yang lama, yang kenceng. ini peyuk digital dulu, yang acli nanti tagih ke buy ya",
    },
  ],
  next: "lanjut 🍉",
};

export const TANTRUM = {
  title: "pojok ngamuk",
  sub: "pukul-pukul capinya, anggep aja itu buy 😤",
  /** Each line takes over once the meter passes its threshold (0–100). */
  lines: [
    { at: 0, text: "ayo tap capinya!" },
    { at: 15, text: "aduh! iya iya buy calah" },
    { at: 35, text: "marahin aja terus, buy dengerin kok" },
    { at: 55, text: "boleh kok ngamuk, buy tetep cayang" },
    { at: 75, text: "dikit lagi... keluarin cemua 💢" },
  ],
  done: "udah lega? cini peyuk dulu 🫂",
  next: "udah lega 🍉",
};

export const REASONS = {
  title: "pecahin cemangkanya!",
  sub: "tiap tap keluar 1 alesan kenapa buy cayang camu",
  list: [
    "camu itu cayang, tapi kalo ngambek berubah jadi capi. dan buy cuka cemua versi camu 🐮",
    "camu cuka cemangka, buy cuka camu. jadi cekarang buy ikut cuka cemangka 🍉",
    "pas camu ketawa, kodingan buy yang error pun jadi berasa ga apa-apa",
    "camu manggil \"buyy\" itu lebih enak didenger dari notif gajian",
    "camu bisa capek, bisa tantrum, bisa diem aja, buy tetep milih camu tiap hari",
    "camu lagi cakit perut aja masih cempet buka web ini. kuat banget cayangku 🥺",
    "myakuguweh itu bukan nama panggilan, itu status. punya buy. titik.",
    "camu ngomong \"acu cayang camu\" cekali, buy kepikiran cehari",
    "cuma camu yang boleh ngabisin jajan buy tanpa ijin",
  ],
  /** The last seed: the inside joke, given its own moment. */
  finale: {
    title: "alesan paling penting",
    text: "lele aja, makanan paling buy cuka, buy cyaling ke camu... apalagi icik dunia 🐟🌍",
  },
  next: "lanjut 🍉",
};

export const COUPONS = {
  title: "kupon buat cayang 🎟️",
  sub: "gocok pake jari. screenshot terus tagih kapan aja!",
  lazy: "males gocok? tap di cini",
  list: [
    {
      title: "Kupon Ngambek Tanpa Ditanya Kenapa",
      emoji: "😤",
      body: "berlaku kapan aja. buy ga bakal nanya \"kenapa\", cuma bakal peyuk & bawain jajan 🤐",
    },
    {
      title: "Paket Lengkap Kasih Sayang Seumur Hidup",
      emoji: "💝",
      body: "isi: peyuk, cium, dengerin cerita, ditemenin. masa berlaku: celamanya ♾️",
    },
    {
      title: "Doa Terbaik buat Cayang dalam Hal Apapun",
      emoji: "🤲",
      body: "tiap habis cholat nama camu duluan. buat cehatnya, bahagianya, cemuanya",
    },
    {
      title: "Dukungan Skripsi & Karir sampai Lulus",
      emoji: "🎓",
      body: "revisi? buy temenin. bimbingan? buy anter. cidang? buy nunggu di depan pintu bawa bunga 💐",
    },
  ],
  next: "terakhir nih 🍉",
};

export const ENDING = {
  letter: [
    "cayang, myakuguweh-nya buy,",
    "hari ini camu capek, perutnya cakit, dan boleh banget kalo mau ngambek. camu ga harus kuat terus kok.",
    "buy di cini, ga ke mana-mana. makaci udah jadi camu.",
    "acu cayang banget ama camu, i lovee you co muchhh 🍉🐮",
  ],
  sign: "— buy",
  hold: "tahan buat peyuk buy",
  holding: "peyuuuuk...",
  final: "acu kangen camu, cayang ❤️",
  again: "main lagi",
};
