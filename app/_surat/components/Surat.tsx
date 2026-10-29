"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { unseal, type Letter } from "./unseal";

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = "lock" | "opening" | "letter";

/**
 * Three quiet steps: the lock, a few words about the books, then the letter.
 * The text only exists once the password opens sealed.json.
 */
export default function Surat() {
  const [step, setStep] = useState<Step>("lock");
  const [letter, setLetter] = useState<Letter | null>(null);

  const go = (s: Step) => {
    setStep(s);
    document.querySelector(".surat")?.scrollTo({ top: 0 });
  };

  return (
    <div className="rj-park relative min-h-[100dvh]">
      <div aria-hidden className="rj-dapple pointer-events-none fixed inset-0" />
      <Leaves />
      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col px-5 py-10">
        <AnimatePresence mode="wait">
          {step === "lock" && (
            <Fade key="lock">
              <Lock
                onOpen={(l) => {
                  setLetter(l);
                  go("opening");
                }}
              />
            </Fade>
          )}
          {step === "opening" && letter && (
            <Fade key="opening">
              <Opening lines={letter.opening} onNext={() => go("letter")} />
            </Fade>
          )}
          {step === "letter" && letter && (
            <Fade key="letter">
              <Paper letter={letter} />
            </Fade>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Fade({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.main>
  );
}

function Lock({ onOpen }: { onOpen: (l: Letter) => void }) {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [tries, setTries] = useState(0);
  const shake = useAnimationControls();
  const input = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || busy) return;
    setBusy(true);
    const l = await unseal(value);
    setBusy(false);
    if (l) return onOpen(l);
    setTries((t) => t + 1);
    shake.start({ x: [0, -10, 10, -6, 6, 0], transition: { duration: 0.45 } });
    input.current?.select();
  };

  return (
    <div className="flex flex-1 flex-col justify-center gap-10">
      <div className="text-center">
        <p className="text-[13px] uppercase tracking-[0.3em] text-rj-sun/70">sepucuk surat</p>
        <h1 className="mt-3 font-rj-brush text-[64px] leading-[0.85] text-rj-paper drop-shadow-[0_4px_18px_rgb(0_0_0/0.35)]">
          untuk
          <br />
          <span className="text-rj-sun">dita</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[30ch] text-[16px] italic leading-relaxed text-rj-paper/80">
          surat ini terkunci. kuncinya terselip di salah satu buku yang sedang kamu baca.
        </p>
      </div>

      <motion.form animate={shake} onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4">
        <label htmlFor="kunci" className="sr-only">
          kunci
        </label>
        <input
          ref={input}
          id="kunci"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          placeholder="tulis kuncinya di sini"
          className="w-full rounded-2xl border border-rj-sun/30 bg-rj-night/50 px-5 py-4 text-center text-[18px] tracking-wider text-rj-paper placeholder:text-rj-paper/35 outline-none backdrop-blur-sm transition focus:border-rj-sun/80 focus:bg-rj-night/70"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={busy}
          className="w-full rounded-2xl bg-rj-shirt px-5 py-4 font-rj-brush text-[26px] leading-none text-rj-paper shadow-[0_12px_28px_-10px_rgb(178_67_58/0.8)] transition disabled:opacity-60"
        >
          {busy ? "membuka..." : "buka"}
        </motion.button>
        <div className="min-h-[3.5rem] text-center text-[15px] italic leading-snug text-rj-sun/85">
          <AnimatePresence mode="wait">
            {tries > 0 && (
              <motion.p key={tries >= 3 ? "hint" : "miss"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {tries >= 3
                  ? "coba cari di buku yang satunya, yang penuh lampu kota."
                  : "belum tepat. buka lagi bukunya pelan-pelan, ya."}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </div>
  );
}

function Opening({ lines, onNext }: { lines: string[]; onNext: () => void }) {
  // Each line waits for the one before it; tapping anywhere shows the rest at once.
  const [shown, setShown] = useState(1);
  const done = shown >= lines.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setShown((n) => n + 1), 2400);
    return () => clearTimeout(t);
  }, [shown, done]);

  return (
    <div className="flex flex-1 flex-col justify-center gap-10" onClick={() => setShown(lines.length)}>
      <div className="space-y-6">
        {lines.slice(0, shown).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: EASE }}
            className={
              i === 0
                ? "font-rj-brush text-[44px] leading-none text-rj-sun"
                : "text-[19px] leading-[1.75] text-rj-paper/90"
            }
          >
            {line}
          </motion.p>
        ))}
      </div>
      <div className="flex h-16 items-center justify-center">
        <AnimatePresence>
          {done && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="rounded-full border border-rj-sun/50 px-8 py-3 font-rj-brush text-[26px] leading-none text-rj-sun transition hover:bg-rj-sun/10"
            >
              buka suratnya →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Paper({ letter }: { letter: Letter }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: -0.4 }}
      transition={{ duration: 1, ease: EASE }}
      className="rj-paper relative rounded-[4px] px-6 pb-12 pt-14 text-rj-ink sm:px-10"
    >
      {/* A wax seal, already broken: the letter has been opened. */}
      <motion.div
        aria-hidden
        initial={{ scale: 1.4, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: -8 }}
        transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
        className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-rj-shirt font-rj-brush text-[30px] leading-none text-rj-paper shadow-[0_6px_14px_rgb(0_0_0/0.35),inset_0_-3px_0_rgb(0_0_0/0.18)]"
      >
        d
      </motion.div>

      <div className="space-y-5 text-[17px] leading-[1.85]">
        {letter.letter.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className={i === 0 ? "rj-dropcap" : undefined}
          >
            {p}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-10 text-right"
      >
        <p className="text-[17px] italic">{letter.closing}</p>
        <p className="mt-1 font-rj-brush text-[38px] leading-none text-rj-shirt">{letter.sign}</p>
      </motion.div>

      <div aria-hidden className="mt-10 flex justify-center gap-2 text-rj-moss/50">
        <span>❦</span>
      </div>
    </motion.article>
  );
}

/** A handful of leaves falling across the page, slowly. */
function Leaves() {
  const [leaves, setLeaves] = useState<{ left: number; delay: number; dur: number; size: number; hue: string }[]>([]);

  // Positions are random, so they are only drawn after mount.
  useEffect(() => {
    const hues = ["#7FA65A", "#3F6B45", "#F2D58A"];
    setLeaves(
      Array.from({ length: 9 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        dur: 14 + Math.random() * 10,
        size: 10 + Math.random() * 10,
        hue: hues[i % hues.length],
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {leaves.map((l, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 20 20"
          width={l.size}
          height={l.size}
          className="absolute -top-6 opacity-60"
          style={{ left: `${l.left}%` }}
          animate={{ y: [0, 1000], x: [0, 30, -20, 10], rotate: [0, 120, 240, 360] }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: "linear" }}
        >
          <path d="M10 1C4 5 3 12 10 19 17 12 16 5 10 1z" fill={l.hue} />
        </motion.svg>
      ))}
    </div>
  );
}
