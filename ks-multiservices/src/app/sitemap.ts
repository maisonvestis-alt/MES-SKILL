import type { MetadataRoute } from "next";
import { serviceCategories } from "@/lib/content";

const siteUrl = "https://ksmultiservices.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/zone-intervention`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/politique-confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
    url: `${siteUrl}/services/${category.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
