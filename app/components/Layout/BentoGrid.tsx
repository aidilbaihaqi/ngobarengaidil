"use client";
import { cn } from "@/app/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconBrain, IconCode, IconMessages, IconBook, IconPackage } from "@tabler/icons-react";

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
      1100
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full flex-col justify-center gap-2 p-3 overflow-hidden dark:bg-dot-white/[0.07] bg-dot-black/[0.05]">
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
              className={`w-5 h-5 rounded-full flex-shrink-0 text-[8px] flex items-center justify-center font-bold text-white ${
                msg.isUser
                  ? "bg-gradient-to-br from-green-400 to-cyan-500"
                  : "bg-gradient-to-br from-blue-500 to-purple-600"
              }`}
            >
              {msg.isUser ? "C" : "A"}
            </div>
            <div
              className={`max-w-[76%] px-3 py-1.5 rounded-2xl text-[10px] leading-relaxed ${
                msg.isUser
                  ? "bg-blue-500 text-white rounded-tr-none"
                  : "bg-white dark:bg-neutral-800 text-gray-700 dark:text-gray-200 rounded-tl-none shadow-sm border border-gray-100 dark:border-neutral-700"
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
    { label: "Frontend", tech: "Next.js · React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { label: "Backend", tech: "Go · FastAPI", icon: "⚙️", color: "from-purple-400 to-violet-500" },
    { label: "Database", tech: "PostgreSQL · MySQL", icon: "🗄️", color: "from-green-400 to-emerald-500" },
    { label: "Deploy", tech: "Docker · Nginx · VPS", icon: "🚀", color: "from-orange-400 to-red-400" },
  ];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="flex flex-1 w-full h-full flex-col justify-center gap-2 p-3 overflow-hidden dark:bg-dot-white/[0.07] bg-dot-black/[0.05]"
    >
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          variants={{
            rest: { x: 0, opacity: 0.6 },
            hover: { x: 7, opacity: 1, transition: { delay: i * 0.07, duration: 0.25 } },
          }}
          className="flex items-center gap-2"
        >
          <div
            className={`w-6 h-6 rounded-md bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 shadow-sm text-[11px]`}
          >
            {layer.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[9px] font-semibold text-gray-600 dark:text-gray-400">{layer.label}</span>
              <span className="text-[8px] text-gray-400">·</span>
              <span className="text-[8px] text-gray-400 dark:text-gray-500 truncate">{layer.tech}</span>
            </div>
            <motion.div
              variants={{
                rest: { width: "35%" },
                hover: { width: "90%", transition: { delay: i * 0.09 + 0.06, duration: 0.4 } },
              }}
              className={`h-1.5 rounded-full bg-gradient-to-r ${layer.color} opacity-55`}
            />
          </div>
          <motion.div
            variants={{
              rest: { scale: 0.4, opacity: 0 },
              hover: { scale: 1, opacity: 1, transition: { delay: i * 0.09 + 0.25, duration: 0.18 } },
            }}
            className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
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

  const lines = [
    { w: "87%", c: "from-violet-400 to-purple-500" },
    { w: "61%", c: "from-blue-400 to-cyan-400" },
    { w: "74%", c: "from-green-400 to-emerald-400" },
    { w: "48%", c: "from-orange-400 to-amber-400" },
    { w: "70%", c: "from-pink-400 to-rose-400" },
    { w: "56%", c: "from-cyan-400 to-blue-400" },
    { w: "82%", c: "from-violet-400 to-indigo-400" },
    { w: "43%", c: "from-yellow-400 to-orange-400" },
    { w: "66%", c: "from-emerald-400 to-teal-400" },
    { w: "51%", c: "from-rose-400 to-pink-400" },
  ];

  return (
    <div className="flex flex-1 w-full h-full flex-col dark:bg-dot-white/[0.07] bg-dot-black/[0.05] overflow-hidden p-3">
      {/* Editor top bar */}
      <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-gray-200 dark:border-white/10 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-[8px] text-gray-400 dark:text-gray-500 ml-1.5 font-mono">ai-model.py</span>
      </div>

      {/* Code lines */}
      <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[8px] text-gray-400 dark:text-gray-600 w-4 text-right flex-shrink-0 font-mono">
              {i + 1}
            </span>
            <motion.div
              animate={{ opacity: activeLine === i ? 1 : 0.2, scaleX: activeLine === i ? 1.03 : 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ width: line.w }}
              className={`h-2 rounded-full bg-gradient-to-r ${line.c} origin-left`}
            />
            {activeLine === i && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="w-0.5 h-3 bg-white/70 flex-shrink-0 rounded-full"
              />
            )}
          </div>
        ))}
      </div>

      {/* Collaborative cursors */}
      <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-white/10 flex-shrink-0">
        <motion.div
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded-full"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">A</span>
          </div>
          <span className="text-[8px] text-blue-600 dark:text-blue-400 font-medium">Aidil</span>
        </motion.div>
        <motion.div
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex items-center gap-1 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">C</span>
          </div>
          <span className="text-[8px] text-green-600 dark:text-green-400 font-medium">Client</span>
        </motion.div>
      </div>
    </div>
  );
};

// ── Skeleton 4: Assignment Tutor — connected service icons on hover ───────────
const SkeletonFour = () => {
  const services = [
    { icon: "📊", label: "Reports & Thesis", color: "from-blue-400 to-cyan-500" },
    { icon: "🎯", label: "Presentations", color: "from-purple-400 to-violet-500" },
    { icon: "📐", label: "Graphic Design", color: "from-pink-400 to-rose-500" },
    { icon: "🔬", label: "Data Analysis", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="flex flex-1 w-full h-full flex-col justify-center px-4 py-3 overflow-hidden dark:bg-dot-white/[0.07] bg-dot-black/[0.05]"
    >
      <div className="relative flex items-end justify-around">
        {/* Animated connecting line */}
        <motion.div
          variants={{
            rest: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
          }}
          className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-green-400 origin-left"
        />
        {services.map((s, i) => (
          <motion.div
            key={s.label}
            variants={{
              rest: { y: 0, opacity: 0.6, scale: 1 },
              hover: { y: -6, opacity: 1, scale: 1.08, transition: { delay: i * 0.07, duration: 0.26 } },
            }}
            className="flex flex-col items-center gap-2 z-10"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}>
              <span className="text-lg">{s.icon}</span>
            </div>
            <span className="text-[8px] font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
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
    <div className="flex flex-1 w-full h-full flex-col justify-center items-center gap-3 px-4 py-3 overflow-hidden dark:bg-dot-white/[0.07] bg-dot-black/[0.05]">
      <div className="flex items-center gap-4 w-full justify-center">
        {/* Folder / source */}
        <motion.div
          animate={{ x: active ? -4 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-12 h-10 bg-yellow-400 dark:bg-yellow-500 rounded-lg flex items-center justify-center shadow-md relative">
            <div className="absolute -top-1.5 left-1 w-4 h-1.5 bg-yellow-500 dark:bg-yellow-600 rounded-t-md" />
            <span className="text-xl">📁</span>
          </div>
          <span className="text-[9px] text-gray-500 dark:text-gray-400 font-medium">Source Code</span>
        </motion.div>

        {/* Transfer arrow */}
        <div className="flex-1 flex flex-col items-center gap-1 max-w-[5rem]">
          <motion.div
            animate={{ width: active ? "100%" : "40%", opacity: active ? 1 : 0.35 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
          />
          <motion.span
            animate={{ opacity: active ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-[8px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-medium"
          >
            Delivered ✓
          </motion.span>
        </div>

        {/* Client */}
        <motion.div
          animate={{ x: active ? 4 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-xl">👤</span>
          </div>
          <span className="text-[9px] text-gray-500 dark:text-gray-400 font-medium">Client</span>
        </motion.div>
      </div>

      {/* Status badge */}
      <motion.div
        animate={{ opacity: active ? 1 : 0.3, scale: active ? 1 : 0.92 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1.5 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span className="text-[9px] text-green-700 dark:text-green-400 font-medium">
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
      <span>Personal programming guidance, project consulting, and tech coaching — flexible and hands-on</span>
    ),
    header: <SkeletonOne />,
    className: "",
    icon: <IconMessages className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full Stack Web Development",
    description: (
      <span>Modern, scalable websites — elegant frontend, robust backend, production-ready</span>
    ),
    header: <SkeletonTwo />,
    className: "",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI & Machine Learning",
    description: (
      <span>AI integration, predictive models, NLP, and intelligent automation for business & research</span>
    ),
    header: <SkeletonThree />,
    className: "",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Academic Tutor & Consulting",
    description: (
      <span>Help with thesis, reports, data analysis, graphic design, and professional presentations</span>
    ),
    header: <SkeletonFour />,
    className: "sm:col-span-2 lg:col-span-2",
    icon: <IconBook className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Source Code & Project Delivery",
    description: (
      <span>Ready-to-use source code or fully custom project development tailored to your needs</span>
    ),
    header: <SkeletonFive />,
    className: "",
    icon: <IconPackage className="h-4 w-4 text-neutral-500" />,
  },
];
