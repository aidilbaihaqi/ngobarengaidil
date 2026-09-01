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
      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-rule dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-signal/50 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Cover Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-ground-deep">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
          )}
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
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
            <h3 className="text-xl font-bold text-ink mb-2 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-ink-soft line-clamp-2">
              {project.blurb}
            </p>
          </div>

          {/* Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-mono bg-signal/10 dark:bg-signal/10 border border-signal/40 dark:border-signal/30 rounded text-signal-ink dark:text-signal"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono bg-ground-deep/5 border border-rule dark:border-white/10 rounded text-ink-soft">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-xs text-ink-soft font-mono">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role.join(", ")}</span>
            {project.metrics?.users && (
              <>
                <span>•</span>
                <span className="text-signal-ink dark:text-signal font-semibold">
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-signal/10 dark:bg-signal/20 hover:bg-signal/10 dark:hover:bg-signal/30 border border-signal/40 dark:border-signal/50 text-signal-ink dark:text-signal text-sm font-semibold rounded-lg transition-all duration-300"
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-ground-deep/5 hover:bg-ground-deep/10 border border-rule dark:border-white/10 text-ink-soft text-sm font-semibold rounded-lg transition-all duration-300"
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-signal/10 dark:bg-signal/20 hover:bg-signal/10 dark:hover:bg-signal/30 border border-signal/40 dark:border-signal/50 text-signal-ink dark:text-signal text-sm font-semibold rounded-lg transition-all duration-300"
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
          <div className="absolute inset-0 bg-gradient-to-t from-ground/95 via-ground/60 to-transparent pointer-events-none flex items-end p-6">
            <div className="space-y-2 text-ink">
              {project.details?.problem && (
                <div>
                  <p className="text-xs font-semibold text-signal">Problem</p>
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
