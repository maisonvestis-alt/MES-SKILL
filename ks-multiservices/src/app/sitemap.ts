import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// Prêt à accueillir les futures pages ville/prestation : il suffira de pousser
// leurs URLs dans ce tableau.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${siteUrl}/politique-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
