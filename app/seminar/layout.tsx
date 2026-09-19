import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./seminar.css";
import ScrollLock from "./components/ScrollLock";

/**
 * The deck's own face. The portfolio runs on Geist + Space Grotesk; this route
 * keeps Montserrat, so it is loaded here as a CSS variable and applied only to
 * the deck subtree via `font-seminar`.
 */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const baseUrl = "https://www.aidilbaihaqi.id";

export const metadata: Metadata = {
  title: "Kuliah Tetap Prioritas, Prestasi Terus Berkualitas",
  description:
    "Deck seminar mahasiswa baru Teknik Sipil oleh Aidil Baihaqi — cara menjaga kuliah tetap jadi prioritas sambil terus berprestasi.",
  alternates: { canonical: "/seminar" },
  openGraph: {
    type: "article",
    url: `${baseUrl}/seminar`,
    title: "Kuliah Tetap Prioritas, Prestasi Terus Berkualitas",
    description:
      "Deck seminar mahasiswa baru Teknik Sipil oleh Aidil Baihaqi — cara menjaga kuliah tetap jadi prioritas sambil terus berprestasi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuliah Tetap Prioritas, Prestasi Terus Berkualitas",
    description: "Deck seminar mahasiswa baru Teknik Sipil oleh Aidil Baihaqi.",
  },
};

export default function SeminarLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
      Fixed rather than in-flow: the deck is a presentation stage, so it covers
      the root layout's grid background and sits above it at every viewport,
      with no scroll of its own to fight.
    */
    <div
      lang="id"
      className={`seminar-deck ${montserrat.variable} fixed inset-0 z-50 overflow-hidden bg-white font-seminar`}
    >
      <ScrollLock />
      {children}
    </div>
  );
}
