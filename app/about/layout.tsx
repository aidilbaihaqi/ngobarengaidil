import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Aidil Baihaqi",
  description:
    "Get to know Aidil Baihaqi — Full Stack AI Engineer, IT Mentor, and Researcher in Bioinformatics and Medical technology. Background, skills, and professional experience.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About – Aidil Baihaqi",
    description:
      "Background, skills, and professional experience of Aidil Baihaqi — Full Stack AI Engineer and Bioinformatics Researcher.",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
