"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, TrendingUp } from "lucide-react";
import type { Project } from "@/app/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ExpandableBlurb({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = text.length > 200;

  return (
    <div className="text-ink-soft">
      <p className={!isExpanded && isLong ? "line-clamp-4" : ""}>{text}</p>
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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl bg-surface dark:bg-[#0a0a0a] border border-rule dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90/50 hover:bg-white/70 border border-rule dark:border-white/10 rounded-full text-ink transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Banner */}
                <div className="relative w-full h-64">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Header */}
                  <div>
                    <h2 className="text-3xl font-bold text-ink mb-2">
                      {project.title}
                    </h2>
                    <ExpandableBlurb text={project.blurb} />
                  </div>

                  {/* Stats Chips */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.users && (
                        <div className="px-4 py-2 bg-signal/10 border border-signal/30 rounded-lg">
                          <p className="text-xs text-muted">Users</p>
                          <p className="text-lg font-bold text-signal-ink">
                            {project.metrics.users.toLocaleString()}+
                          </p>
                        </div>
                      )}
                      {project.metrics.performance && (
                        <div className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
                          <p className="text-xs text-muted">Performance</p>
                          <p className="text-lg font-bold text-green-400 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {project.metrics.performance}
                          </p>
                        </div>
                      )}
                      {project.metrics.uptime && (
                        <div className="px-4 py-2 bg-signal/10 border border-signal/30 rounded-lg">
                          <p className="text-xs text-muted">Uptime</p>
                          <p className="text-lg font-bold text-signal">
                            {project.metrics.uptime}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Case Study Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Problem */}
                    {project.details?.problem && (
                      <div className="p-6 bg-signal/10/5 border border-signal/40 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-signal-ink dark:text-signal mb-3">
                          Problem
                        </h3>
                        <p className="text-sm text-ink-soft">
                          {project.details.problem}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {project.details?.solution && (
                      <div className="p-6 bg-signal/10/5 border border-signal/40 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-signal-ink dark:text-signal mb-3">
                          Solution
                        </h3>
                        <p className="text-sm text-ink-soft">
                          {project.details.solution}
                        </p>
                      </div>
                    )}

                    {/* Contributions */}
                    {project.details?.contribution && (
                      <div className="p-6 bg-signal/10/5 border border-signal/40 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-signal-ink dark:text-signal mb-3">
                          Contributions
                        </h3>
                        <ul className="space-y-2">
                          {project.details.contribution.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-ink-soft flex items-start gap-2"
                            >
                              <span className="text-signal-ink dark:text-signal mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-signal/10 border border-signal/30 rounded-lg text-signal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-signal-ink hover:bg-signal text-ground font-semibold rounded-xl transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live
                      </a>
                    )}
                    {project.links?.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-ground-deep/5 hover:bg-ground-deep/10 border border-rule dark:border-white/10 text-ink font-semibold rounded-xl transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
