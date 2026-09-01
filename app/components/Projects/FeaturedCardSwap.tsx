"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import type { FeaturedItem } from "@/app/types/project";

interface FeaturedCardSwapProps {
  items: FeaturedItem[];
}

function ExpandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > 150;

  useEffect(() => {
    setIsExpanded(false);
  }, [text]);

  return (
    <div className="text-xl text-ink-soft">
      <p
        className={!isExpanded && isLong ? "line-clamp-3 md:line-clamp-4" : ""}
      >
        {text}
      </p>
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm font-semibold text-signal-ink dark:text-signal hover:text-signal-ink dark:hover:text-signal transition-colors focus:outline-none"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function FeaturedCardSwap({ items }: FeaturedCardSwapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  const activeItem = items[activeIndex];
  const accentColors = {
    purple: "bg-signal/15 border-signal/50",
    cyan: "bg-signal/15 border-signal/50",
    pink: "bg-signal/15 border-signal/50",
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Featured projects carousel"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text Content */}
        <motion.div
          key={`text-${activeIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-3">
              {activeItem.title}
            </h2>
            {activeItem.subtitle && (
              <ExpandableText text={activeItem.subtitle} />
            )}
          </div>

          {/* Tags */}
          {activeItem.tags && activeItem.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-ground-deep/5 border border-rule dark:border-white/10 rounded-full text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Metric */}
          {activeItem.metric && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-signal/10 border border-signal/30 rounded-full">
              <span className="text-sm font-semibold text-signal-ink">
                {activeItem.metric}
              </span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex gap-4">
            {activeItem.hrefLive && (
              <a
                href={activeItem.hrefLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-signal-ink hover:bg-signal text-ground font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:ring-offset-2"
                aria-label={`View live demo of ${activeItem.title}`}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            {activeItem.hrefRepo && (
              <a
                href={activeItem.hrefRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ground-deep/5 hover:bg-ground-deep/10 border border-rule dark:border-white/10 text-ink font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50 focus:ring-offset-2"
                aria-label={`View source code of ${activeItem.title}`}
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Right: Card Stack */}
        <div className="relative h-[500px] perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br ${
                accentColors[activeItem.accent || "purple"]
              } border backdrop-blur-xl shadow-2xl shadow-${
                activeItem.accent || "purple"
              }-500/40`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={activeItem.cover}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={activeIndex === 0}
                  quality={80}
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90/50 hover:bg-white/70 border border-rule dark:border-white/10 rounded-full text-ink transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90/50 hover:bg-white/70 border border-rule dark:border-white/10 rounded-full text-ink transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === activeIndex
                ? "w-8 bg-signal"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
