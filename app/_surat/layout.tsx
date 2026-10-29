import type { Metadata, Viewport } from "next";
import { Caveat, Lora } from "next/font/google";
import "./surat.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

/* A letter for one reader: out of search, out of the sitemap, no link preview. */
export const metadata: Metadata = {
  title: { absolute: "sepucuk surat" },
  description: "untuk dibaca pelan-pelan.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export const viewport: Viewport = {
  themeColor: "#14291F",
};

export default function SuratLayout({ children }: { children: React.ReactNode }) {
  return (
    /* A fixed stage over the root layout's grid; never follows the site's theme toggle. */
    <div
      lang="id"
      className={`surat ${caveat.variable} ${lora.variable} fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-rj-night font-rj-serif text-rj-paper`}
    >
      {children}
    </div>
  );
}
