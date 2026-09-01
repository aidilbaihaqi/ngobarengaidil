"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function ProjectFilters({
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
}: ProjectFiltersProps) {
  const filters = [
    "All",
    "Web Apps",
    "Mobile Apps",
    "AI/ML",
    "Data & Analytics",
    "Automation",
    "Open Source",
  ];

  return (
    <div className="mb-12 space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Search projects, stack, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-rule dark:border-white/10 rounded-xl text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal/50 transition-all duration-300"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-signal/50 ${
              activeFilter === filter ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-signal/15 border border-signal/50 rounded-full"
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
