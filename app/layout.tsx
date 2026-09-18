import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Silkscreen } from "next/font/google";
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

// Secondary face. Carries every heading and any label that needs voice.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Bitmap display face, in the spirit of Minecraftia. Used for the wordmark
// under the hero portrait, so it is loaded but not preloaded ahead of body copy.
const pixelFont = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
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
    "hire full stack developer indonesia",
    "AI consultant indonesia",
    "jasa dashboard bisnis",
    "jasa otomasi workflow",
    "software engineer tanjungpinang",
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
    locale: 'en_US',
    url: baseUrl,
    title: 'Aidil Baihaqi - AI, Web Development & Business Digitalization',
    description: 'AI solutions, websites, and workflow automation that digitize how businesses run — built end to end, with the source code handed over.',
    siteName: 'Personal Website Aidil Baihaqi',
    images: [
      {
        // Branded 1200x630 card (scripts/generate-brand-assets.js), the size
        // link previews actually want — the square portrait cropped badly.
        url: '/image-optimized/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Aidil Baihaqi - Full Stack AI Engineer & IT Mentor',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aidil Baihaqi - AI, Web Development & Business Digitalization',
    description: 'Portfolio of Aidil Baihaqi — AI solutions, websites, and business digitalization, plus IT mentoring.',
    images: ['/image-optimized/og-card.png'],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'pwZKhC_JZ_YXRGv4Ui6VsdSrPjRxalnZ1BLbokJ_Go0',
  },
};

// JSON-LD Structured Data for Person
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aidil Baihaqi',
  url: baseUrl,
  email: 'mailto:aidilmusirjun@gmail.com',
  image: `${baseUrl}/image-optimized/aidilbaihaqi.webp`,
  jobTitle: 'Full Stack AI Engineer & IT Mentor',
  description: 'Engineer building AI solutions, websites, and workflow automation that digitize how businesses run. Also mentors developers and hands over the source code so teams can keep building.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tanjungpinang',
    addressRegion: 'Kepulauan Riau',
    addressCountry: 'ID',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitas Maritim Raja Ali Haji',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'UmbiTeams',
  },
  award: [
    'Awardee Beasiswa Pendidikan Indonesia (BPI) S1 Dalam Negeri',
    'Awardee Beasiswa Indonesia Maju (BIM) Persiapan S1 Luar Negeri — Kyoto University, Japan (Computer Science)',
    'Gold Medal — National Bioinformatics & Synthetic Biology Competition, Institut Teknologi Bandung',
  ],
  knowsLanguage: ['English', 'Indonesian'],
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

// JSON-LD for the service catalogue — what a business can actually hire.
// Spelled out per line of business so AI and search engines can answer
// "who builds X in Indonesia" with a concrete offering, not a guess.
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aidil Baihaqi — AI, Web Development & Business Digitalization',
  url: baseUrl,
  image: `${baseUrl}/image-optimized/aidilbaihaqi.webp`,
  email: 'mailto:aidilmusirjun@gmail.com',
  areaServed: ['Indonesia', 'Remote / Worldwide'],
  founder: { '@type': 'Person', name: 'Aidil Baihaqi', url: baseUrl },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tanjungpinang',
    addressRegion: 'Kepulauan Riau',
    addressCountry: 'ID',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Company Profile & Business Websites',
          description: 'Fast, SEO-ready websites that present a business credibly and convert visitors into inquiries.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Dashboards & Internal Tools',
          description: 'Role-based dashboards, ERP modules, and internal systems that replace spreadsheets and manual reporting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Assistants & Applied Machine Learning',
          description: 'AI features built into real workflows — assistants, diagnostics, prediction, and document intelligence.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Workflow Automation',
          description: 'Scrapers, schedulers, integrations, and n8n pipelines that turn repetitive office work into systems.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Mentoring & Team Enablement',
          description: 'Hands-on mentoring for teams and students, plus full source-code handover on every project.',
        },
      },
    ],
  },
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
        {/*
          Runs before first paint, so a dark-mode reader never sees a frame of
          light-theme colours. ThemeToggle only adds `.dark` from an effect,
          which lands after hydration — until then every `dark:` utility was
          inactive and text meant to be white rendered near-black.
          Defaults to light when nothing is stored, matching ThemeToggle.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})()",
          }}
        />
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
        <meta name="theme-color" content="#1A73E8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/image-optimized/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${pixelFont.variable} antialiased`}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
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
