import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

const baseUrl = siteConfig.url

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/contact", priority: 0.9 },
  { path: "/a-waxing", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/sitemap", priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const date = new Date()
  const langAlternates = (path: string) => ({
    nl: `${baseUrl}${path}`,
    en: `${baseUrl}/en${path}`,
  })

  return pages.flatMap(({ path, priority }) => [
    {
      url: `${baseUrl}${path}`,
      lastModified: date,
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages: langAlternates(path) },
    },
    {
      url: `${baseUrl}/en${path}`,
      lastModified: date,
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages: langAlternates(path) },
    },
  ])
}
