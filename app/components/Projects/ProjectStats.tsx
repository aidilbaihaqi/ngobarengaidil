"use client";

import { motion } from "framer-motion";
import { FolderGit2, Users, Award } from "lucide-react";
import type { Project } from "@/app/types/project";

interface ProjectStatsProps {
  projects: Project[];
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const totalProjects = projects.length;
  const totalUsers = projects.reduce(
    (sum, p) => sum + (p.metrics?.users || 0),
    0,
  );
  const totalAwards = projects.reduce(
    (sum, p) => sum + (p.metrics?.awards?.length || 0),
    0,
  );

  const stats = [
    {
      icon: FolderGit2,
      label: "Total Projects",
      value: totalProjects,
    },
    {
      icon: Users,
      label: "Users Reached",
      value: `${(totalUsers / 1000).toFixed(1)}K+`,
    },
    {
      icon: Award,
      label: "Awards",
      value: totalAwards,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 bg-white/80/5 backdrop-blur-xl border border-rule dark:border-white/10 rounded-2xl hover:border-signal/50 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div
              className="rounded-lg border border-signal/40 bg-signal/12 p-3"
            >
              <stat.icon className="h-6 w-6 text-signal-ink" />
            </div>
            <div>
              <p className="text-sm text-ink-soft">{stat.label}</p>
              <p className="text-2xl font-bold text-ink">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
