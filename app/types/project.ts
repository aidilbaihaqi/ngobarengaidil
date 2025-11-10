export type FeaturedItem = {
  id: string;
  title: string;
  subtitle?: string;
  cover: string; // image/video thumbnail
  year?: number;
  tags?: string[]; // e.g. ["AI","Web","Open Source"]
  metric?: string; // e.g. "2,000+ users" or "Top 10 ID Fest 2025"
  hrefLive?: string;
  hrefRepo?: string;
  accent?: "purple" | "cyan" | "pink";
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  cover: string;
  year: number;
  teamSize?: number;
  role: string[];
  stack: string[];
  tags: string[];
  metrics?: {
    users?: number;
    performance?: string;
    awards?: string[];
    uptime?: string;
  };
  links?: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  details?: {
    problem?: string;
    solution?: string;
    contribution?: string[];
    highlights?: string[];
  };
};
