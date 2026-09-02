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

const baseUrl = 'https://www.aidilbaihaqi.id';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aidil Baihaqi - AI, Web Development & Business Digitalization",
    template: "%s | Aidil Baihaqi"
  },
  description: "Aidil Baihaqi builds AI solutions, websites, and workflow automation that digitize how businesses run — from company profile sites and custom dashboards to AI assistants and the systems that tie them together. Also an IT mentor, with source code handed over so your team can keep building.",
  keywords: [
    "Aidil Baihaqi",
    "aidil baihaqi",
    "Full Stack AI Engineer",
    "IT Mentor",
    "AI Developer",
    "Machine Learning",
    "Web Developer",
    "Business Digitalization",
    "Workflow Automation",
    "Custom Dashboard",
    "Company Profile Website",
    "Software Engineer",
    "digitalisasi bisnis",
    "jasa pembuatan website",
    "jasa AI",
    "web developer indonesia",
    "ngobarengaidil"
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
    title: 'Aidil Baihaqi - AI, Web Development & Business Digitalization',
    description: 'AI solutions, websites, and workflow automation that digitize how businesses run — built end to end, with the source code handed over.',
    siteName: 'Personal Website Aidil Baihaqi',
    images: [
      {
        url: '/image-optimized/aidilbaihaqi.webp',
        width: 800,
        height: 800,
        alt: 'Aidil Baihaqi - Full Stack AI Engineer & IT Mentor',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aidil Baihaqi - AI, Web Development & Business Digitalization',
    description: 'Portfolio of Aidil Baihaqi — AI solutions, websites, and business digitalization, plus IT mentoring.',
    images: ['/image-optimized/aidilbaihaqi.webp'],
  },
  alternates: {
    canonical: '/',
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
  jobTitle: 'Full Stack AI Engineer & IT Mentor',
  description: 'Engineer building AI solutions, websites, and workflow automation that digitize how businesses run. Also mentors developers and hands over the source code so teams can keep building.',
  sameAs: [
    'https://github.com/aidilbaihaqi',
    'https://www.linkedin.com/in/aidilbaihaqi/',
    'https://instagram.com/albyhaqee',
    'https://www.youtube.com/@albyhaqee',
    'https://www.tiktok.com/@albyhaqee'
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Full Stack Development',
    'Web Development',
    'Business Digitalization',
    'Workflow Automation',
    'Backend Development',
    'Data Analysis',
    'IT Mentoring'
  ],
};

// JSON-LD for WebSite and Sitelinks Search Box
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Personal Website Aidil Baihaqi',
  url: baseUrl,
  description: 'Portfolio of Aidil Baihaqi — AI solutions, websites, and business digitalization, plus IT mentoring and custom builds.',
};

// JSON-LD for SiteNavigationElement to encourage Sitelinks in Google
const navigationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'About Me',
      description: 'Find out more about Aidil Baihaqi, my experiences, education, and skills.',
      url: `${baseUrl}/about`
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Projects',
      description: 'Explore the projects I have shipped — AI, websites, dashboards, and business automation.',
      url: `${baseUrl}/projects`
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Contact',
      description: 'Get in touch with me for collaborations, jobs, or any inquiries.',
      url: `${baseUrl}/contact`
    }
  ]
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
        {/*
          No manual image preload here: the hero portrait is a next/image with
          `priority`, so Next emits the preload for the exact transformed URL it
          will request. A hand-written preload of the raw file would fetch a
          second, unused copy.
        */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" sizes="180x180" href="/image-optimized/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }}
        />
        <GridBackground />
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
