import { MetadataRoute } from "next";

const baseUrl = "https://www.aidilbaihaqi.id";

// Rebuild time — updated on every deploy, so lastmod reflects the live content.
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // Only routes that actually resolve. A URL in the sitemap that 404s is
  // reported as an error in Search Console and lowers crawl trust, so project
  // entries stay out until app/projects/[id]/page.tsx exists.
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
