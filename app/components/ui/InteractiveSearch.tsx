"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";

/**
 * The projects search field, dressed as an instrument rather than a form
 * control: placeholders rotate through real queries, a conic beam runs around
 * the border while the field owns focus, a live result count pops with each
 * keystroke, and "/" summons it from anywhere on the page.
 *
 * Filtering stays live on change — the theatrics never touch the query.
 */
export default function InteractiveSearch({
  value,
  onChange,
  resultCount,
  placeholders = [
    "Try “AI assistant”…",
    "Try “Laravel”…",
    "Try “dashboard”…",
    "Try “automation”…",
    "Search projects, stack, or tags…",
  ],
  className = "",
}: {
  value: string;
  onChange: (next: string) => void;
  resultCount?: number;
  placeholders?: string[];
  className?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Rotate the suggestion line only while the field is empty and unwatched.
  useEffect(() => {
    if (value || reduceMotion) return;
    const id = setInterval(
      () => setPlaceholderIndex((i) => (i + 1) % placeholders.length),
      3200,
    );
    return () => clearInterval(id);
  }, [value, reduceMotion, placeholders.length]);

  // "/" focuses the search from anywhere; Escape clears, then releases it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target && target.isContentEditable);

      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        if (value) onChange("");
        else inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [value, onChange]);

  const showCount = value.length > 0 && typeof resultCount === "number";

  return (
    <div className={`relative max-w-md ${className}`}>
      {/* Border layer: a slow conic beam while focused, a plain hairline at rest. */}
      <div
        className={`group relative rounded-2xl p-px transition-shadow duration-500 ${
          focused
            ? "shadow-[0_0_0_4px_rgba(26,115,232,0.08),0_8px_30px_-12px_rgba(26,115,232,0.35)]"
            : "shadow-none"
        }`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
            focused ? "opacity-100" : "opacity-0"
          } ${reduceMotion ? "" : "animate-border-spin"}`}
          style={{
            background:
              "conic-gradient(from var(--border-angle, 0deg), #1a73e8, #1fb1c1, #2bc48a, #1fb1c1, #1a73e8)",
          }}
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-2xl border transition-colors duration-300 ${
            focused
              ? "border-transparent"
              : "border-gray-200 dark:border-white/10"
          }`}
        />

        <div className="relative flex items-center rounded-[calc(1rem-1px)] bg-white dark:bg-neutral-900">
          <Search
            className={`ml-4 h-5 w-5 shrink-0 transition-colors duration-300 ${
              focused ? "text-blue-500" : "text-gray-400"
            }`}
          />

          <div className="relative flex-1">
            {/* Rotating placeholder, drawn behind a transparent-placeholder input. */}
            {!value && (
              <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden pl-3 pr-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={placeholderIndex}
                    initial={reduceMotion ? false : { y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: -12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    className="truncate text-sm text-gray-400 dark:text-neutral-500"
                  >
                    {placeholders[placeholderIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            )}

            <input
              ref={inputRef}
              type="text"
              role="searchbox"
              aria-label="Search projects, stack, or tags"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="w-full bg-transparent py-3 pl-3 pr-2 text-sm text-gray-800 outline-none placeholder:text-transparent dark:text-white"
            />
          </div>

          <div className="mr-3 flex shrink-0 items-center gap-1.5">
            <AnimatePresence mode="popLayout">
              {showCount && (
                <motion.span
                  key={resultCount}
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={reduceMotion ? undefined : { scale: 0.6, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  className={`rounded-full px-2 py-0.5 text-xs font-medium tabular-nums ${
                    resultCount === 0
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "bg-green-500/10 text-green-600 dark:text-green-400"
                  }`}
                >
                  {resultCount === 0 ? "no match" : `${resultCount} found`}
                </motion.span>
              )}
            </AnimatePresence>

            {value ? (
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="rounded-full p-1 text-gray-400 transition-all duration-200 hover:rotate-90 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <kbd
                className={`hidden rounded-md border border-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-400 transition-opacity duration-300 sm:block dark:border-white/10 dark:text-neutral-500 ${
                  focused ? "opacity-0" : "opacity-100"
                }`}
              >
                /
              </kbd>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
