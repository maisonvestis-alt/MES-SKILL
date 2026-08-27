import type { MetadataRoute } from "next";
import { serviceCategories, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...serviceCategories.map((category) => ({
      url: `${siteUrl}/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${siteUrl}/politique-confidentialite`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];
}
