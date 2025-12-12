"use client";

import { useState, Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import Main from "../components/Layout/Main";
import { featuredProjects, allProjects } from "../data/projects";
import type { Project } from "../types/project";

// Lazy load heavy components
const ClickSpark = dynamic(() => import("../components/ui/ClickSpark"), {
  ssr: false,
  loading: () => <div className="contents" />,
});

const FeaturedCardSwap = dynamic(
  () => import("../components/Projects/FeaturedCardSwap"),
  {
    loading: () => (
      <div className="h-[500px] bg-neutral-200 dark:bg-neutral-800 rounded-2xl animate-pulse" />
    ),
  }
);

const ProjectFilters = dynamic(
  () => import("../components/Projects/ProjectFilters"),
  {
    loading: () => (
      <div className="h-16 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse mb-8" />
    ),
  }
);

const ProjectsGrid = dynamic(
  () => import("../components/Projects/ProjectsGrid"),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-80 bg-neutral-200 dark:bg-neutral-800 rounded-2xl animate-pulse" />
        ))}
      </div>
    ),
  }
);

const ProjectStats = dynamic(
  () => import("../components/Projects/ProjectStats"),
  {
    loading: () => (
      <div className="h-24 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse mb-8" />
    ),
  }
);

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project: Project) => {
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
  }, [searchQuery, activeFilter]);

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
