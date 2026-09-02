import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aidil Baihaqi about a website, an AI build, or digitizing how your business runs. Available for freelance work, consulting, and mentoring.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact – Aidil Baihaqi",
    description:
      "Get in touch about a website, an AI build, or digitizing how your business runs.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
