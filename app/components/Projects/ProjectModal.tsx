"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, TrendingUp } from "lucide-react";
import type { Project } from "@/app/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
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
                className="relative w-full max-w-4xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 border border-gray-200 dark:border-white/10 rounded-full text-gray-800 dark:text-white transition-all duration-300"
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
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">{project.blurb}</p>
                  </div>

                  {/* Stats Chips */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.users && (
                        <div className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg">
                          <p className="text-xs text-gray-400">Users</p>
                          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            {project.metrics.users.toLocaleString()}+
                          </p>
                        </div>
                      )}
                      {project.metrics.performance && (
                        <div className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
                          <p className="text-xs text-gray-400">Performance</p>
                          <p className="text-lg font-bold text-green-400 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {project.metrics.performance}
                          </p>
                        </div>
                      )}
                      {project.metrics.uptime && (
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-lg">
                          <p className="text-xs text-gray-400">Uptime</p>
                          <p className="text-lg font-bold text-blue-400">
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
                      <div className="p-6 bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3">
                          Problem
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {project.details.problem}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {project.details?.solution && (
                      <div className="p-6 bg-cyan-50 dark:bg-white/5 border border-cyan-200 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                          Solution
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {project.details.solution}
                        </p>
                      </div>
                    )}

                    {/* Contributions */}
                    {project.details?.contribution && (
                      <div className="p-6 bg-pink-50 dark:bg-white/5 border border-pink-200 dark:border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-3">
                          Contributions
                        </h3>
                        <ul className="space-y-2">
                          {project.details.contribution.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-pink-600 dark:text-pink-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300"
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300"
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold rounded-xl transition-all duration-300"
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
