import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore 25+ shipped projects by Aidil Baihaqi — AI platforms, company profile websites, dashboards, LMS, and automation systems built for businesses, institutions, and communities.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects – Aidil Baihaqi",
    description:
      "AI, web, data, and automation projects built for real businesses — including products serving 100,000+ users.",
    type: "website",
  },
};

const baseUrl = "https://www.aidilbaihaqi.id";

/* Frames the route as a portfolio collection for search and AI engines. */
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by Aidil Baihaqi",
  url: `${baseUrl}/projects`,
  description:
    "A portfolio of AI, web development, data, and automation projects — from company profile websites and custom dashboards to AI assistants and large-scale platforms.",
  about: [
    "Artificial Intelligence",
    "Web Development",
    "Business Digitalization",
    "Workflow Automation",
    "Data & Analytics",
  ],
  creator: {
    "@type": "Person",
    name: "Aidil Baihaqi",
    url: baseUrl,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
