import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aidil Baihaqi - Personal and Blog Website",
  description: "Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Aidil",
  keywords: "aidil baihaqi, programming tips, lyceum, risalah maritim, belajar programming",
  creator: "Aidil Baihaqi",
  applicationName: "ngobarengaidil",
  authors: {name: "Aidil Baihaqi"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      <PrelineScript />
      </body>
    </html>
  );
}
