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

const baseUrl = 'https://ngobarengaidil.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aidil Baihaqi - Full Stack Engineer & Data Scientist",
    template: "%s | Aidil Baihaqi"
  },
  description: "Aidil Baihaqi adalah Full Stack Engineer dan Data Scientist. Personal website, portfolio, dan blog tentang software engineering, AI, dan programming tips.",
  keywords: [
    "Aidil Baihaqi",
    "aidil baihaqi",
    "Full Stack Engineer",
    "Data Scientist",
    "Software Engineer",
    "Backend Developer",
    "MLOps",
    "AI Developer",
    "ngobarengaidil",
    "programming tips",
    "web developer indonesia"
  ],
  creator: "Aidil Baihaqi",
  publisher: "Aidil Baihaqi",
  applicationName: "Aidil Baihaqi Portfolio",
  authors: [{ name: "Aidil Baihaqi", url: baseUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: baseUrl,
    title: 'Aidil Baihaqi - Full Stack Engineer & Data Scientist',
    description: 'Aidil Baihaqi adalah Full Stack Engineer dan Data Scientist. Personal website, portfolio, dan blog tentang software engineering, AI, dan programming tips.',
    siteName: 'Aidil Baihaqi',
    images: [
      {
        url: '/image-optimized/aidilbaihaqi.webp',
        width: 800,
        height: 800,
        alt: 'Aidil Baihaqi - Full Stack Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aidil Baihaqi - Full Stack Engineer & Data Scientist',
    description: 'Personal website, portfolio, dan blog Aidil Baihaqi tentang software engineering dan AI.',
    images: ['/image-optimized/aidilbaihaqi.webp'],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data for Person
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aidil Baihaqi',
  url: baseUrl,
  image: `${baseUrl}/image-optimized/aidilbaihaqi.webp`,
  jobTitle: 'Full Stack Engineer & Data Scientist',
  description: 'Passionate and results-driven programmer with strong experience in software engineering, specializing in backend development, data-driven systems, and AI-based applications.',
  sameAs: [
    'https://github.com/aidilbaihaqi',
    'https://www.linkedin.com/in/aidilbaihaqi/',
    'https://instagram.com/albyhaqee',
    'https://www.youtube.com/@albyhaqee',
    'https://www.tiktok.com/@albyhaqee'
  ],
  knowsAbout: [
    'Software Engineering',
    'Full Stack Development',
    'Data Science',
    'Machine Learning',
    'Backend Development',
    'AI Applications'
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GridBackground />
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
