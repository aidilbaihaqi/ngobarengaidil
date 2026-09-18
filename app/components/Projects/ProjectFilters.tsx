"use client";

import { motion } from "framer-motion";
import InteractiveSearch from "../ui/InteractiveSearch";

interface ProjectFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  resultCount?: number;
}

export default function ProjectFilters({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  resultCount,
}: ProjectFiltersProps) {
  const filters = ["All", "Web Apps", "Mobile Apps", "AI/ML", "Data & Analytics", "Automation", "Open Source"];

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <InteractiveSearch
        value={searchQuery}
        onChange={setSearchQuery}
        resultCount={resultCount}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:-translate-y-0.5 ${
              activeFilter === filter
                ? "text-gray-800 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-green-600/15 border border-blue-500/50 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
