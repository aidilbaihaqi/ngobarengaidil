"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/app/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No projects found matching your criteria.
          </p>
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
