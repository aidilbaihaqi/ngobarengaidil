"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, NotebookPen } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides } from "@/app/seminar/data/slides";
import { unsplashUrl } from "@/app/seminar/lib/photos";
import type { Slide } from "@/app/seminar/lib/types";
import { CardsSlide, CompareSlide, IntroSlide, SplitSlide, StepsSlide } from "./slides/Content";
import { CloudSlide, FocusSlide, PollSlide } from "./slides/Open";
import { BuildingSlide, ChartSlide } from "./slides/Data";
import { ClosingSlide, CoverSlide, NumberSlide, QnaSlide, QuoteSlide } from "./slides/Hero";

function SlideView({ s }: { s: Slide }) {
  switch (s.layout) {
    case "cover": return <CoverSlide s={s} />;
    case "intro": return <IntroSlide s={s} />;
    case "cloud": return <CloudSlide s={s} />;
    case "focus": return <FocusSlide s={s} />;
    case "poll": return <PollSlide s={s} />;
    case "split": return <SplitSlide s={s} />;
    case "cards": return <CardsSlide s={s} />;
    case "number": return <NumberSlide s={s} />;
    case "chart": return <ChartSlide s={s} />;
    case "building": return <BuildingSlide s={s} />;
    case "steps": return <StepsSlide s={s} />;
    case "quote": return <QuoteSlide s={s} />;
    case "compare": return <CompareSlide s={s} />;
    case "qna": return <QnaSlide s={s} />;
    case "closing": return <ClosingSlide s={s} />;
  }
}

/** Kumpulkan semua hash foto di satu slide untuk preload. */
function photoHashes(s: Slide): string[] {
  const out: string[] = [];
  const j = s as unknown as Record<string, unknown>;
  if (j.photo && typeof j.photo === "object") out.push((j.photo as { hash: string }).hash);
  if (Array.isArray(j.cards)) for (const c of j.cards as { photo: { hash: string } }[]) out.push(c.photo.hash);
  return out;
}

const variants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0, scale: 0.985 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  exit: (dir: number) => ({ x: dir > 0 ? "-6%" : "6%", opacity: 0, scale: 0.985, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] as const } }),
};

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [ready, setReady] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = slides.length;
  const slide = slides[index];

  const go = useCallback(
    (next: number) => {
      const n = Math.max(0, Math.min(total - 1, next));
      if (n === index) return;
      setDir(n > index ? 1 : -1);
      setIndex(n);
    },
    [index, total],
  );

  // hash → index (deep link) saat pertama kali dibuka
  useEffect(() => {
    const fromHash = () => {
      const h = parseInt(window.location.hash.replace("#", ""), 10);
      if (!Number.isNaN(h) && h >= 1 && h <= total) setIndex((cur) => { setDir(h - 1 >= cur ? 1 : -1); return h - 1; });
    };
    fromHash();
    setReady(true);
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [total]);

  // index → hash
  useEffect(() => {
    if (ready) history.replaceState(null, "", `#${index + 1}`);
  }, [index, ready]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); go(index + 1); }
      else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); go(index - 1); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
      else if (e.key.toLowerCase() === "n") setShowNotes((v) => !v);
      else if (e.key.toLowerCase() === "f") document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  // preload foto slide berikut & sebelumnya supaya transisi tidak menunggu gambar
  useEffect(() => {
    [index + 1, index + 2, index - 1]
      .filter((i) => i >= 0 && i < total)
      .flatMap((i) => photoHashes(slides[i]))
      .forEach((h) => { const im = new Image(); im.src = unsplashUrl(h, 1600); });
  }, [index, total]);

  const phase = useMemo(() => slide.phase, [slide]);

  if (!ready) return <div className="h-full w-full bg-white" />;

  return (
    <div
      className="relative h-full w-full select-none overflow-hidden bg-white"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div key={slide.id} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          <SlideView s={slide} />
        </motion.div>
      </AnimatePresence>

      {/* zona klik kiri/kanan */}
      <button aria-label="Sebelumnya" onClick={() => go(index - 1)} className="absolute inset-y-0 left-0 w-[12%] cursor-w-resize opacity-0" />
      <button aria-label="Berikutnya" onClick={() => go(index + 1)} className="absolute inset-y-0 right-0 w-[12%] cursor-e-resize opacity-0" />

      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-seminar/10">
        <motion.div className="h-full bg-seminar" animate={{ width: `${((index + 1) / total) * 100}%` }} transition={{ duration: 0.5 }} />
      </div>

      {/* chrome bawah */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-xs text-neutral-500">
        <span className={`rounded-full px-2 py-0.5 font-semibold uppercase tracking-widest ${phase === "berat" ? "bg-seminar text-white" : "bg-seminar-light text-seminar"}`}>
          {phase === "berat" ? "Materi inti" : "Ringan"}
        </span>
        <div className="pointer-events-auto flex items-center gap-1">
          <button onClick={() => go(index - 1)} className="rounded-full p-1.5 hover:bg-neutral-100" aria-label="Sebelumnya"><ChevronLeft className="h-4 w-4" /></button>
          <span className="tabular-nums">{index + 1} / {total}</span>
          <button onClick={() => go(index + 1)} className="rounded-full p-1.5 hover:bg-neutral-100" aria-label="Berikutnya"><ChevronRight className="h-4 w-4" /></button>
          <button onClick={() => setShowNotes((v) => !v)} className="ml-2 rounded-full p-1.5 hover:bg-neutral-100" aria-label="Catatan"><NotebookPen className="h-4 w-4" /></button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} className="rounded-full p-1.5 hover:bg-neutral-100" aria-label="Layar penuh"><Maximize2 className="h-4 w-4" /></button>
        </div>
      </div>

      {/* catatan pembicara (N) */}
      <AnimatePresence>
        {showNotes && (
          <motion.aside
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="absolute bottom-12 left-4 right-4 z-20 max-h-[40vh] overflow-auto rounded-2xl border border-seminar/15 bg-white/95 p-4 text-sm leading-relaxed text-neutral-800 shadow-2xl backdrop-blur md:left-auto md:w-[420px]"
          >
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-seminar">Catatan pembicara · {slide.id}</p>
            {slide.notes}
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
