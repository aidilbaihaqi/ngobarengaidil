"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "@/app/components/Projects/ProjectCard";
import ProjectModal from "@/app/components/Projects/ProjectModal";
import type { Project } from "@/app/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

const PROJECTS_PER_PAGE = 6; // Reduced for faster initial load

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount]
  );
  const hasMore = visibleCount < projects.length;

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Simplified animation for better performance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visibleProjects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No projects found matching your criteria.
          </p>
        </div>
      )}

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
          >
            <span>Show More Projects</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
