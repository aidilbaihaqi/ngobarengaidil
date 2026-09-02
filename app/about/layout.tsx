import type { Metadata } from "next";

export const metadata: Metadata = {
  // The root template appends " | Aidil Baihaqi"; naming him here too
  // rendered "About – Aidil Baihaqi | Aidil Baihaqi".
  title: "About",
  description:
    "Get to know Aidil Baihaqi — Full Stack AI Engineer and IT Mentor working on AI, web development, and business digitalization. Background, skills, and professional experience.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About – Aidil Baihaqi",
    description:
      "Background, skills, and professional experience of Aidil Baihaqi — Full Stack AI Engineer and IT Mentor.",
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
