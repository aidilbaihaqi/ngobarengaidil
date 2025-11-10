import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Aidil Baihaqi",
  description:
    "Explore my portfolio of AI/ML projects, web applications, and open source contributions. From bioinformatics platforms to smart city dashboards.",
  openGraph: {
    title: "Projects – Aidil Baihaqi",
    description:
      "Explore my portfolio of AI/ML projects, web applications, and open source contributions.",
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
