import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aidil Baihaqi about a website, an AI build, or digitizing how your business runs. Available for freelance work, consulting, and mentoring — replies within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact – Aidil Baihaqi",
    description:
      "Get in touch about a website, an AI build, or digitizing how your business runs. Replies within 24 hours.",
    type: "website",
  },
};

/*
 * Mirrors the visible FAQ on the contact page so search engines and AI
 * assistants can quote the same answers. Keep the two lists in sync.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of projects does Aidil Baihaqi take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Websites, custom dashboards, AI assistants, and workflow automation — for businesses in any field: retail, education, media, government, logistics, health, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How does a project start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts with a short conversation about how the business runs and what should change. Clients receive a written scope and a fixed quote before anything is built.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical build take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A company profile site usually ships in 1–3 weeks. Dashboards, AI features, and automation systems typically run 4–8 weeks depending on scope, with progress visible in staging throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Does Aidil Baihaqi work with teams outside Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the workflow is fully remote-friendly, in English or Bahasa Indonesia, with async updates so time zones are never a blocker.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the project result?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The client does. Every engagement ends with a full handover: deployment, documentation, and the complete source code — plus optional mentoring for the in-house team.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
