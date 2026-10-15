import type { Metadata, Viewport } from "next";
import { Fredoka, Gaegu } from "next/font/google";
import "./suprise.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/*
 * A private page for one person: kept out of search, out of the sitemap, and
 * out of link previews that would spoil the opening.
 */
export const metadata: Metadata = {
  title: { absolute: "buat cayang 🍉" },
  description: "ada cecuatu dari buy 🐮",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export const viewport: Viewport = {
  themeColor: "#FFF6EA",
};

export default function SupriseLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
      A fixed stage over the root layout's grid background. Always light: the
      site's dark toggle never reaches this page.
    */
    <div
      lang="id"
      className={`suprise ${fredoka.variable} ${gaegu.variable} fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-sp-cream font-sp-round text-sp-seed`}
    >
      {children}
    </div>
  );
}
