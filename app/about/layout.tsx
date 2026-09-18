import type { Metadata } from "next";

export const metadata: Metadata = {
  // The root template appends " | Aidil Baihaqi"; naming him here too
  // rendered "About – Aidil Baihaqi | Aidil Baihaqi".
  title: "About",
  description:
    "Get to know Aidil Baihaqi — Full Stack AI Engineer, IT Mentor, and Awardee of Beasiswa Pendidikan Indonesia (BPI). Background, skills, experience, education, awards, and a downloadable CV.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About – Aidil Baihaqi",
    description:
      "Background, skills, and professional experience of Aidil Baihaqi — Full Stack AI Engineer, IT Mentor, and BPI scholarship awardee.",
    type: "profile",
  },
};

const baseUrl = "https://www.aidilbaihaqi.id";

/*
 * ProfilePage marks this route as the canonical "who is he" document, so
 * search and AI engines pull biography facts from here rather than guessing.
 */
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-09-18",
  mainEntity: {
    "@type": "Person",
    name: "Aidil Baihaqi",
    url: `${baseUrl}/about`,
    image: `${baseUrl}/image-optimized/aidilbaihaqi.webp`,
    jobTitle: "Full Stack AI Engineer & IT Mentor",
    description:
      "Full Stack AI Engineer and IT Mentor building AI solutions, websites, and workflow automation that digitize how businesses run.",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universitas Maritim Raja Ali Haji",
        sameAs: "https://umrah.ac.id",
      },
      {
        "@type": "EducationalOrganization",
        name: "SMK Negeri 1 Bintan Timur",
      },
    ],
    award: [
      "Awardee Beasiswa Pendidikan Indonesia (BPI) S1 Dalam Negeri",
      "Awardee Beasiswa Indonesia Maju (BIM) Persiapan S1 Luar Negeri — Kyoto University, Japan (Computer Science)",
      "Gold Medal — National Bioinformatics & Synthetic Biology Competition, Institut Teknologi Bandung (2025)",
      "1st Place — AL Ahmadi International Youthpreneurship Competition, Batam (2025)",
      "1st Place — Festival Open Source Software, Batam (2025)",
      "2nd Place — Festival Open Source Software, Batam (2024)",
      "Finalist — ID Fest Developer Day, Jakarta (2025)",
    ],
    worksFor: {
      "@type": "Organization",
      name: "UmbiTeams",
    },
    knowsLanguage: ["English", "Indonesian"],
    sameAs: [
      "https://github.com/aidilbaihaqi",
      "https://www.linkedin.com/in/aidilbaihaqi/",
      "https://instagram.com/albyhaqee",
      "https://www.youtube.com/@albyhaqee",
      "https://www.tiktok.com/@albyhaqee",
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      {children}
    </>
  );
}
