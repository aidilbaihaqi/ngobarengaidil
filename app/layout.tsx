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

const baseUrl = 'https://aidilbaihaqi.id';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aidil Baihaqi - Full Stack AI Engineer, IT Mentor & Researcher in Bioinformatics and Medical",
    template: "%s | Aidil Baihaqi"
  },
  description: "Aidil Baihaqi is a Full Stack AI Engineer, IT Mentor, and Researcher in Bioinformatics and Medical fields. Specializing in scalable AI-powered applications, intelligent backend systems, and research-driven solutions at the intersection of technology, biology, and medicine.",
  keywords: [
    "Aidil Baihaqi",
    "aidil baihaqi",
    "Full Stack AI Engineer",
    "IT Mentor",
    "Bioinformatics Researcher",
    "Medical Researcher",
    "Software Engineer",
    "AI Developer",
    "Machine Learning",
    "Bioinformatics",
    "Medical Technology",
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
    title: 'Aidil Baihaqi - Full Stack AI Engineer, IT Mentor & Researcher in Bioinformatics and Medical',
    description: 'Aidil Baihaqi is a Full Stack AI Engineer, IT Mentor, and Researcher in Bioinformatics and Medical fields. Bridging technology, biology, and medicine through intelligent software solutions.',
    siteName: 'Personal Website Aidil Baihaqi',
    images: [
      {
        url: '/image-optimized/aidilbaihaqi.webp',
        width: 800,
        height: 800,
        alt: 'Aidil Baihaqi - Full Stack AI Engineer & Bioinformatics Researcher',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aidil Baihaqi - Full Stack AI Engineer, IT Mentor & Researcher in Bioinformatics and Medical',
    description: 'Personal website, portfolio, and blog of Aidil Baihaqi — Full Stack AI Engineer, IT Mentor, and Researcher in Bioinformatics and Medical technology.',
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
  jobTitle: 'Full Stack AI Engineer, IT Mentor & Researcher in Bioinformatics and Medical',
  description: 'Passionate and results-driven engineer with strong experience in software engineering, AI development, IT mentoring, and research in bioinformatics and medical technology. Bridging the gap between technology and life sciences.',
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
    'Artificial Intelligence',
    'Machine Learning',
    'IT Mentoring',
    'Bioinformatics',
    'Medical Technology',
    'Data Science',
    'Backend Development'
  ],
};

// JSON-LD for WebSite and Sitelinks Search Box
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Personal Website Aidil Baihaqi',
  url: baseUrl,
  description: 'Personal website, portfolio, and blog of Aidil Baihaqi, featuring insights on software engineering, AI, and programming tips.',
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
      description: 'Explore the portfolio and projects I have worked on, from AI to full stack development.',
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
