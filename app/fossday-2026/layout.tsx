import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./fossday.css";
import ScrollLock from "./components/ScrollLock";

/*
 * Space Grotesk already arrives from the root layout as --font-space-grotesk,
 * so only the two faces the site does not ship are loaded here.
 */
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://www.aidilbaihaqi.id";
const title = "The Magic Behind Software";
const description =
  "Life of a Feature in the Age of AI Agents. Talk Aidil Baihaqi di FOSS Day, Batam Linux User Group: satu fitur diikuti dari issue sampai production.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fossday-2026" },
  openGraph: { type: "article", url: `${baseUrl}/fossday-2026`, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function FossDayLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
      A fixed stage over the root layout's grid background. The deck is dark by
      design and never reads the site's light/dark toggle.
    */
    <div
      lang="id"
      className={`fossday ${plexSans.variable} ${jetbrains.variable} fixed inset-0 z-50 overflow-hidden bg-fd-ink font-fd-sans text-fd-cream`}
    >
      <ScrollLock />
      {children}
    </div>
  );
}
