"use client";

import { motion } from "framer-motion";
import { FolderGit2, Users, Award } from "lucide-react";
import type { Project } from "@/app/types/project";
import CountUp from "../ui/CountUp";

interface ProjectStatsProps {
  projects: Project[];
}

/*
 * Colour classes are written out in full per stat: composing them from a
 * `${color}` variable meant Tailwind never generated them, so the tiles
 * shipped without their tint.
 */
const statStyles = {
  blue: {
    box: "bg-gradient-to-br from-blue-500/15 to-blue-600/15 border-blue-500/40",
    icon: "text-blue-500 dark:text-blue-400",
    hover: "hover:border-blue-500/50",
  },
  teal: {
    box: "bg-gradient-to-br from-teal-500/15 to-teal-600/15 border-teal-500/40",
    icon: "text-teal-500 dark:text-teal-400",
    hover: "hover:border-teal-500/50",
  },
  green: {
    box: "bg-gradient-to-br from-green-500/15 to-green-600/15 border-green-500/40",
    icon: "text-green-500 dark:text-green-400",
    hover: "hover:border-green-500/50",
  },
} as const;

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const totalProjects = projects.length;
  const totalUsers = projects.reduce(
    (sum, p) => sum + (p.metrics?.users || 0),
    0
  );
  const totalAwards = projects.reduce(
    (sum, p) => sum + (p.metrics?.awards?.length || 0),
    0
  );

  const stats: {
    icon: typeof FolderGit2;
    label: string;
    value: number;
    suffix: string;
    decimals?: number;
    color: keyof typeof statStyles;
  }[] = [
    {
      icon: FolderGit2,
      label: "Projects Shipped",
      value: totalProjects,
      suffix: "",
      color: "blue",
    },
    {
      icon: Users,
      label: "Users Reached",
      value: totalUsers / 1000,
      suffix: "K+",
      decimals: 1,
      color: "teal",
    },
    {
      icon: Award,
      label: "Awards Won",
      value: totalAwards,
      suffix: "",
      color: "green",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat, index) => {
        const style = statStyles[stat.color];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${style.hover}`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 border rounded-xl ${style.box}`}>
                <stat.icon className={`w-6 h-6 ${style.icon}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
