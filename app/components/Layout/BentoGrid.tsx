"use client";
import { cn } from "@/app/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  IconBrain,
  IconCode,
  IconMessages,
  IconBook,
  IconPackage,
} from "@tabler/icons-react";

// ── Skeleton 1: IT Mentoring — looping chat bubbles ──────────────────────────
const SkeletonOne = () => {
  const [step, setStep] = useState(1);
  const messages = [
    { text: "Hey! Can you help with my project?", isUser: true },
    { text: "Of course! Tell me what you need 😊", isUser: false },
    { text: "Need a website + REST API backend", isUser: true },
    { text: "Perfect, let's start tomorrow! 🚀", isUser: false },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setStep((p) => (p >= messages.length ? 1 : p + 1)),
      1100,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full flex-col justify-center gap-2 p-3 overflow-hidden bg-ground-deep/50 rounded-md">
      <AnimatePresence mode="popLayout">
        {messages.slice(0, step).map((msg, i) => (
          <motion.div
            key={`${step}-${i}`}
            initial={{ opacity: 0, x: msg.isUser ? 22 : -22, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex items-end gap-1.5 ${msg.isUser ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-5 h-5 rounded-sm flex-shrink-0 text-[8px] flex items-center justify-center font-mono font-semibold text-ground ${
                msg.isUser ? "bg-signal-ink" : "bg-ink-soft"
              }`}
            >
              {msg.isUser ? "C" : "A"}
            </div>
            <div
              className={`max-w-[76%] px-3 py-1.5 rounded-md text-[10px] leading-relaxed ${
                msg.isUser
                  ? "bg-signal-ink text-ground rounded-tr-none"
                  : "bg-surface-raised text-ink rounded-tl-none border border-rule"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// ── Skeleton 2: Full Stack Web Dev — tech stack layers on hover ───────────────
const SkeletonTwo = () => {
  const layers = [
    { label: "Frontend", tech: "Next.js · React", color: "bg-signal" },
    { label: "Backend", tech: "Go · FastAPI", color: "bg-signal/75" },
    { label: "Database", tech: "PostgreSQL · MySQL", color: "bg-ink-soft/70" },
    { label: "Deploy", tech: "Docker · Nginx · VPS", color: "bg-ink-soft/45" },
  ];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="flex flex-1 w-full h-full flex-col justify-center gap-2 p-3 overflow-hidden bg-ground-deep/50 rounded-md"
    >
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          variants={{
            rest: { x: 0, opacity: 0.6 },
            hover: {
              x: 7,
              opacity: 1,
              transition: { delay: i * 0.07, duration: 0.25 },
            },
          }}
          className="flex items-center gap-2"
        >
          <div
            className={`w-1 h-6 rounded-sm ${layer.color} flex-shrink-0`}
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="font-mono text-[9px] font-medium uppercase tracking-label text-ink-soft">
                {layer.label}
              </span>
              <span className="text-[8px] text-muted">·</span>
              <span className="truncate font-mono text-[8px] text-muted">
                {layer.tech}
              </span>
            </div>
            <motion.div
              variants={{
                rest: { width: "35%" },
                hover: {
                  width: "90%",
                  transition: { delay: i * 0.09 + 0.06, duration: 0.4 },
                },
              }}
              className={`h-px ${layer.color} opacity-80`}
            />
          </div>
          <motion.div
            variants={{
              rest: { scale: 0.4, opacity: 0 },
              hover: {
                scale: 1,
                opacity: 1,
                transition: { delay: i * 0.09 + 0.25, duration: 0.18 },
              },
            }}
            className="w-1 h-1 rounded-full bg-signal flex-shrink-0"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

// ── Skeleton 3: AI/ML — code editor with animated cursor ─────────────────────
const SkeletonThree = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveLine((p) => (p + 1) % 10), 560);
    return () => clearInterval(t);
  }, []);

  // Depth is carried by weight, not hue — the page has one accent.
  const lines = [
    { w: "87%", c: "bg-signal" },
    { w: "61%", c: "bg-ink-soft/70" },
    { w: "74%", c: "bg-ink-soft/45" },
    { w: "48%", c: "bg-signal/60" },
    { w: "70%", c: "bg-ink-soft/70" },
    { w: "56%", c: "bg-ink-soft/45" },
    { w: "82%", c: "bg-signal" },
    { w: "43%", c: "bg-ink-soft/45" },
    { w: "66%", c: "bg-signal/60" },
    { w: "51%", c: "bg-ink-soft/70" },
  ];

  return (
    <div className="flex flex-1 w-full h-full flex-col bg-ground-deep/50 rounded-md overflow-hidden p-3">
      {/* Editor top bar */}
      <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-rule flex-shrink-0">
        <div className="h-px w-2.5 bg-rule" />
        <div className="h-px w-2.5 bg-rule" />
        <div className="h-px w-2.5 bg-signal" />
        <span className="ml-1.5 font-mono text-[8px] text-muted">
          ai-model.py
        </span>
      </div>

      {/* Code lines */}
      <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-4 flex-shrink-0 text-right font-mono text-[8px] text-muted">
              {i + 1}
            </span>
            <motion.div
              animate={{
                opacity: activeLine === i ? 1 : 0.2,
                scaleX: activeLine === i ? 1.03 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ width: line.w }}
              className={`h-1.5 rounded-sm ${line.c} origin-left`}
            />
            {activeLine === i && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="w-0.5 h-3 bg-signal flex-shrink-0 rounded-sm"
              />
            )}
          </div>
        ))}
      </div>

      {/* Collaborative cursors */}
      <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-rule flex-shrink-0">
        <motion.div
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex items-center gap-1 rounded-sm bg-signal/12 px-2 py-0.5"
        >
          <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-signal-ink">
            <span className="font-mono text-[6px] font-semibold text-ground">
              A
            </span>
          </div>
          <span className="font-mono text-[8px] font-medium text-signal-ink">
            Aidil
          </span>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex items-center gap-1 rounded-sm bg-ink-soft/12 px-2 py-0.5"
        >
          <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-ink-soft">
            <span className="font-mono text-[6px] font-semibold text-ground">
              C
            </span>
          </div>
          <span className="font-mono text-[8px] font-medium text-ink-soft">
            Client
          </span>
        </motion.div>
      </div>
    </div>
  );
};

// ── Skeleton 4: Assignment Tutor — connected service icons on hover ───────────
const SkeletonFour = () => {
  const services = [
    { tag: "RPT", label: "Reports & Thesis", color: "bg-signal" },
    { tag: "PRS", label: "Presentations", color: "bg-signal/70" },
    { tag: "DSN", label: "Graphic Design", color: "bg-ink-soft/70" },
    { tag: "DAT", label: "Data Analysis", color: "bg-ink-soft/45" },
  ];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="flex flex-1 w-full h-full flex-col justify-center px-4 py-3 overflow-hidden bg-ground-deep/50 rounded-md"
    >
      <div className="relative flex items-end justify-around">
        {/* Animated connecting line */}
        <motion.div
          variants={{
            rest: { scaleX: 0, opacity: 0 },
            hover: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          className="absolute top-5 left-[10%] right-[10%] h-px bg-rule origin-left"
        />
        {services.map((s, i) => (
          <motion.div
            key={s.label}
            variants={{
              rest: { y: 0, opacity: 0.6, scale: 1 },
              hover: {
                y: -6,
                opacity: 1,
                scale: 1.08,
                transition: { delay: i * 0.07, duration: 0.26 },
              },
            }}
            className="flex flex-col items-center gap-2 z-10"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-sm ${s.color}`}
            >
              <span className="font-mono text-[9px] font-semibold tracking-label text-ground">
                {s.tag}
              </span>
            </div>
            <span className="text-center font-mono text-[8px] leading-tight text-muted">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ── Skeleton 5: Source Code & Project Delivery — folder → client transfer ─────
const SkeletonFive = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => !p), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full flex-col justify-center items-center gap-3 px-4 py-3 overflow-hidden bg-ground-deep/50 rounded-md">
      <div className="flex items-center gap-4 w-full justify-center">
        {/* Folder / source */}
        <motion.div
          animate={{ x: active ? -4 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="relative flex h-10 w-12 items-center justify-center rounded-sm border border-rule bg-surface-raised">
            <div className="absolute -top-1.5 left-1 h-1.5 w-4 rounded-t-sm border border-b-0 border-rule bg-surface-raised" />
            <span className="font-mono text-[9px] font-semibold text-ink-soft">
              SRC
            </span>
          </div>
          <span className="font-mono text-[9px] text-muted">Source Code</span>
        </motion.div>

        {/* Transfer arrow */}
        <div className="flex-1 flex flex-col items-center gap-1 max-w-[5rem]">
          <motion.div
            animate={{
              width: active ? "100%" : "40%",
              opacity: active ? 1 : 0.35,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-px bg-signal rounded-sm"
          />
          <motion.span
            animate={{ opacity: active ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-sm bg-signal/12 px-2 py-0.5 font-mono text-[8px] font-medium text-signal-ink"
          >
            Delivered
          </motion.span>
        </div>

        {/* Client */}
        <motion.div
          animate={{ x: active ? 4 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex h-10 w-12 items-center justify-center rounded-sm bg-ink-soft">
            <span className="font-mono text-[9px] font-semibold text-ground">
              YOU
            </span>
          </div>
          <span className="font-mono text-[9px] text-muted">Client</span>
        </motion.div>
      </div>

      {/* Status badge */}
      <motion.div
        animate={{ opacity: active ? 1 : 0.3, scale: active ? 1 : 0.92 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1.5 rounded-sm border border-signal/35 bg-signal/10 px-3 py-1"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-signal" />
        <span className="font-mono text-[9px] font-medium uppercase tracking-label text-signal-ink">
          Delivered on time
        </span>
      </motion.div>
    </div>
  );
};

// ── Main export ───────────────────────────────────────────────────────────────
export function BentoGridThirdDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("min-h-[14rem]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "IT Mentoring & Tutoring",
    description: (
      <span>
        Personal programming guidance, project consulting, and tech coaching —
        flexible and hands-on
      </span>
    ),
    header: <SkeletonOne />,
    className: "",
    icon: <IconMessages className="h-4 w-4 text-signal-ink" />,
  },
  {
    title: "Full Stack Web Development",
    description: (
      <span>
        Modern, scalable websites — elegant frontend, robust backend,
        production-ready
      </span>
    ),
    header: <SkeletonTwo />,
    className: "",
    icon: <IconCode className="h-4 w-4 text-signal-ink" />,
  },
  {
    title: "AI & Machine Learning",
    description: (
      <span>
        AI integration, predictive models, NLP, and intelligent automation for
        business & research
      </span>
    ),
    header: <SkeletonThree />,
    className: "",
    icon: <IconBrain className="h-4 w-4 text-signal-ink" />,
  },
  {
    title: "Academic Tutor & Consulting",
    description: (
      <span>
        Help with thesis, reports, data analysis, graphic design, and
        professional presentations
      </span>
    ),
    header: <SkeletonFour />,
    className: "sm:col-span-2 lg:col-span-2",
    icon: <IconBook className="h-4 w-4 text-signal-ink" />,
  },
  {
    title: "Source Code & Project Delivery",
    description: (
      <span>
        Ready-to-use source code or fully custom project development tailored to
        your needs
      </span>
    ),
    header: <SkeletonFive />,
    className: "",
    icon: <IconPackage className="h-4 w-4 text-signal-ink" />,
  },
];
