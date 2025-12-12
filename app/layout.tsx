import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { GridBackground } from "./components/ui/grid-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aidil Baihaqi - Personal and Blog Website",
  description: "Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Aidil",
  keywords: "aidil baihaqi, programming tips, lyceum, risalah maritim, belajar programming",
  creator: "Aidil Baihaqi",
  applicationName: "ngobarengaidil",
  authors: [{name: "Aidil Baihaqi"}],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aidil Baihaqi - Personal and Blog Website',
    description: 'Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Aidil',
    siteName: 'ngobarengaidil',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" as="image" href="/image/aidilbaihaqi.webp" type="image/webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href="/image-optimized/aidil.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-900`}
      >

        <GridBackground />
        {children}

      <PrelineScript />
      </body>
    </html>
  );
}
