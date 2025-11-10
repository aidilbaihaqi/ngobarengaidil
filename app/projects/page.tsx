"use client";

import { useState } from "react";
import Main from "../components/Layout/Main";
import ClickSpark from "../components/ui/ClickSpark";
import FeaturedCardSwap from "../components/Projects/FeaturedCardSwap";
import ProjectFilters from "../components/Projects/ProjectFilters";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import ProjectStats from "../components/Projects/ProjectStats";
import { featuredProjects, allProjects } from "../data/projects";
import type { Project } from "../types/project";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = allProjects.filter((project: Project) => {
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      activeFilter === "All" || project.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <ClickSpark
      sparkColor="#8b5cf6"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <Main>
        {/* Main Content */}
        <main id="content">
          <div className="w-full max-w-6xl mx-auto pt-5 md:pt-16 px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A collection of my work in AI/ML, web development, and open source
                contributions
              </p>
            </div>

            {/* Stats Summary */}
            <ProjectStats projects={allProjects} />

            {/* Featured Projects - Card Swap */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Featured Projects
              </h2>
              <FeaturedCardSwap items={featuredProjects} />
            </section>

            {/* Filters & Search */}
            <ProjectFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            {/* Projects Grid */}
            <ProjectsGrid projects={filteredProjects} />
          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
