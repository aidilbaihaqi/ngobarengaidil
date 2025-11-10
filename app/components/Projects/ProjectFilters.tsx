"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ["All", "AI/ML", "Web Apps", "Open Source", "Research"];

export default function ProjectFilters({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
}: ProjectFiltersProps) {
  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects, stack, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
              activeFilter === filter
                ? "text-gray-800 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/50 rounded-full"
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
