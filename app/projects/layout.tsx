import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of AI, web, and automation projects — from company profile sites and custom dashboards to AI assistants and internal tools.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects – Aidil Baihaqi",
    description:
      "Explore my portfolio of AI, web, and automation projects built for real businesses.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
