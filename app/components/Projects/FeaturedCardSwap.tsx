"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import type { FeaturedItem } from "@/app/types/project";

interface FeaturedCardSwapProps {
  items: FeaturedItem[];
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
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/50",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/50",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/50",
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">
              {activeItem.title}
            </h2>
            {activeItem.subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-400">{activeItem.subtitle}</p>
            )}
          </div>

          {/* Tags */}
          {activeItem.tags && activeItem.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Metric */}
          {activeItem.metric && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50 focus:ring-offset-2"
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
                  className="object-cover"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 border border-gray-200 dark:border-white/10 rounded-full text-gray-800 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 border border-gray-200 dark:border-white/10 rounded-full text-gray-800 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/50"
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
                ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500"
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
