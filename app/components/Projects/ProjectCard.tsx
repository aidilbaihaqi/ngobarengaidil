"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/app/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Cover Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
          )}
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            quality={75}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title & Blurb */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {project.blurb}
            </p>
          </div>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 rounded text-purple-700 dark:text-purple-300"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded text-gray-600 dark:text-gray-400">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-500 font-mono">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role.join(", ")}</span>
            {project.metrics?.users && (
              <>
                <span>•</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">
                  {project.metrics.users.toLocaleString()}+ users
                </span>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-600/20 hover:bg-purple-200 dark:hover:bg-purple-600/30 border border-purple-300 dark:border-purple-500/50 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-lg transition-all duration-300"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300"
                aria-label={`View source code of ${project.title}`}
              >
                <Github className="w-4 h-4" />
                Repo
              </a>
            )}
            {project.links?.caseStudy && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-600/20 hover:bg-cyan-200 dark:hover:bg-cyan-600/30 border border-cyan-300 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-lg transition-all duration-300"
                aria-label={`View case study of ${project.title}`}
              >
                <FileText className="w-4 h-4" />
                Case
              </button>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent pointer-events-none flex items-end p-6">
            <div className="space-y-2 text-white">
              {project.details?.problem && (
                <div>
                  <p className="text-xs font-semibold text-purple-300">
                    Problem
                  </p>
                  <p className="text-sm line-clamp-2">
                    {project.details.problem}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(ProjectCard);
