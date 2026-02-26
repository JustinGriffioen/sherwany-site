/**
 * Central list of pages and their SEO/meta for the /sitemap overview and consistency.
 * Used by the human-readable /sitemap page to show meta images, titles, descriptions, etc.
 */
import { siteConfig } from "@/lib/site-config"

import type { PathKey } from "@/lib/seo"

export type { PathKey }

export interface PageMetaEntry {
  pathKey: PathKey
  pathNl: string
  pathEn: string
  titleNl: string
  titleEn: string
  descriptionNl: string
  descriptionEn: string
  /** Relative path for OG image; defaults to siteConfig.ogImage when not set */
  ogImage?: string
  keywords: string[]
}

const baseUrl = siteConfig.url

export const pagesMeta: PageMetaEntry[] = [
  {
    pathKey: "",
    pathNl: "",
    pathEn: "/en",
    titleNl: "Sherwany Barbershop & Studio Deventer | Premium Barbier",
    titleEn: "Sherwany Barbershop & Studio Deventer | Premium Barber",
    descriptionNl:
      "Premium barbershop en herenkapper in Deventer. Knippen, scheren, styling en waxing. Persoonlijke aandacht en vakmanschap voor een resultaat waar u blij van wordt.",
    descriptionEn:
      "Premium barbershop and men's hairdresser in Deventer. Haircuts, shaves, styling and waxing. Personal attention and craftsmanship for a result you'll love.",
    ogImage: siteConfig.ogImage,
    keywords: [
      "Kapper Deventer",
      "Barber Deventer",
      "Sherwany Barbershop",
      "Sherwany",
      "Barbershop Deventer",
      "kapper",
      "barbier",
      "herenkapper",
      "premium kapper",
      "knippen",
      "baard",
      "trimmen",
    ],
  },
  {
    pathKey: "contact",
    pathNl: "/contact",
    pathEn: "/en/contact",
    titleNl: "Contact | Sherwany Barbershop & Studio Deventer",
    titleEn: "Contact | Sherwany Barbershop & Studio Deventer",
    descriptionNl:
      "Bezoek Sherwany Barbershop & Studio in het centrum van Deventer. Grote Overstraat 56, 7411 JD. Maak een afspraak, bel of loop binnen. Barbershop en herenkapper.",
    descriptionEn:
      "Visit Sherwany Barbershop & Studio in the centre of Deventer. Grote Overstraat 56, 7411 JD. Book an appointment, call or walk in. Barbershop and men's hairdresser.",
    ogImage: siteConfig.ogImage,
    keywords: [
      "Contact barbershop Deventer",
      "Afspraak kapper Deventer",
      "Sherwany adres",
      "Barber Deventer contact",
    ],
  },
  {
    pathKey: "a-waxing",
    pathNl: "/a-waxing",
    pathEn: "/en/a-waxing",
    titleNl: "Waxing & Harsen | Sherwany Barbershop & Studio Deventer",
    titleEn: "Waxing & Sugaring | Sherwany Barbershop & Studio Deventer",
    descriptionNl:
      "Professionele waxing en harsbehandelingen bij Sherwany Barbershop & Studio Deventer. Wenkbrauwen, gezicht, en lichaam - zorgvuldig en hygiënisch uitgevoerd.",
    descriptionEn:
      "Professional waxing and sugaring treatments at Sherwany Barbershop & Studio Deventer. Eyebrows, face, and body - carefully and hygienically performed.",
    ogImage: siteConfig.ogImage,
    keywords: [
      "Waxing Deventer",
      "Harsen Deventer",
      "Wenkbrauwen Deventer",
      "Sherwany waxing",
    ],
  },
  {
    pathKey: "privacy",
    pathNl: "/privacy",
    pathEn: "/en/privacy",
    titleNl: "Privacy | Sherwany Barbershop & Studio",
    titleEn: "Privacy | Sherwany Barbershop & Studio",
    descriptionNl: "Privacybeleid van Sherwany Barbershop & Studio.",
    descriptionEn: "Privacy policy of Sherwany Barbershop & Studio.",
    keywords: ["Privacy", "Sherwany"],
  },
  {
    pathKey: "sitemap",
    pathNl: "/sitemap",
    pathEn: "/en/sitemap",
    titleNl: "Sitemap & SEO-overzicht | Sherwany Barbershop",
    titleEn: "Sitemap & SEO overview | Sherwany Barbershop",
    descriptionNl: "Overzicht van pagina's, meta-gegevens en zoekmachine-optimalisatie.",
    descriptionEn: "Overview of pages, metadata and search engine optimization.",
    keywords: [],
  },
]

export function getPageMeta(pathKey: PathKey): PageMetaEntry | undefined {
  return pagesMeta.find((p) => p.pathKey === pathKey)
}

export function fullUrl(path: string): string {
  return path ? `${baseUrl}${path}` : baseUrl
}

export function ogImageUrl(entry: PageMetaEntry): string {
  const img = entry.ogImage ?? siteConfig.ogImage
  return img.startsWith("http") ? img : `${baseUrl}${img}`
}
