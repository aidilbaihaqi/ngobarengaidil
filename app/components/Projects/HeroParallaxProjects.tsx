"use client";
import React from "react";
import { HeroParallax, type ParallaxProduct } from "@/app/components/ui/hero-parallax";
import { featuredProjects, allProjects } from "@/app/data/projects";

// Build the parallax deck from real portfolio data (featured first, then fill
// with the rest), de-duplicating by title and keeping only entries with a cover.
const seenTitle = new Set<string>();
const seenThumb = new Set<string>();

const products: ParallaxProduct[] = [
  ...featuredProjects.map((p) => ({
    title: p.title,
    link: p.hrefLive || p.hrefRepo || "/projects",
    thumbnail: p.cover,
  })),
  ...allProjects.map((p) => ({
    title: p.title,
    link: p.links?.live || p.links?.repo || p.links?.caseStudy || "/projects",
    thumbnail: p.cover,
  })),
]
  .filter((p) => {
    const key = p.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!p.thumbnail || seenTitle.has(key) || seenThumb.has(p.thumbnail)) {
      return false;
    }
    seenTitle.add(key);
    seenThumb.add(p.thumbnail);
    return true;
  })
  .slice(0, 15);

export default function HeroParallaxProjects() {
  return <HeroParallax products={products} />;
}
