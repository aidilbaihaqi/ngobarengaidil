import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Aidil Baihaqi",
  description:
    "Get in touch with Aidil Baihaqi for project inquiries, collaborations, or just to say hi. Available for freelance work and consulting.",
  openGraph: {
    title: "Contact – Aidil Baihaqi",
    description:
      "Get in touch with Aidil Baihaqi for project inquiries, collaborations, or just to say hi.",
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
