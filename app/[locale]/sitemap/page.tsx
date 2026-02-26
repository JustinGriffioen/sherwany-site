import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { pagesMeta, fullUrl } from "@/lib/pages-meta"
import { canonicalUrl, alternateLanguages, type PathKey } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const pathKey: PathKey = "sitemap"
  const canonical = canonicalUrl(validLocale, pathKey)
  const title =
    validLocale === "en"
      ? "Sitemap & SEO overview | Sherwany Barbershop"
      : "Sitemap & SEO-overzicht | Sherwany Barbershop"
  const description =
    validLocale === "en"
      ? "Overview of pages, metadata and search engine optimization."
      : "Overzicht van pagina's, meta-gegevens en zoekmachine-optimalisatie."

  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: {
      canonical,
      languages: alternateLanguages(pathKey),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
    },
  }
}

function alternateLanguagesForPath(pathKey: PathKey) {
  const entry = pagesMeta.find((p) => p.pathKey === pathKey)
  if (!entry) return null
  return {
    nl: fullUrl(entry.pathNl || "/"),
    en: fullUrl(entry.pathEn),
  }
}

export default async function SitemapPage({ params }: Props) {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const isEn = validLocale === "en"

  const t = {
    title: isEn ? "Sitemap & SEO overview" : "Sitemap & SEO-overzicht",
    intro: isEn
      ? "All pages with their meta titles, descriptions, sharing images and target keywords."
      : "Alle pagina's met hun meta-titels, beschrijvingen, deelafbeeldingen en zoekwoorden.",
    metaImage: isEn ? "Sharing image (OG/Twitter)" : "Deelafbeelding (OG/Twitter)",
    canonical: "Canonical URL",
    hreflang: "Languages (hreflang)",
    keywords: isEn ? "Target keywords" : "Zoekwoorden",
    viewPage: isEn ? "View page" : "Bekijk pagina",
    siteKeywords: isEn ? "Site-wide SEO keywords" : "Site-brede zoekwoorden",
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.title}
            </h1>
            <p className="mt-2 text-muted-foreground">{t.intro}</p>
            <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t.siteKeywords}
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {siteConfig.seoKeywords.map((kw) => (
                  <Badge key={kw} variant="secondary" className="font-normal">
                    {kw}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          <ul className="space-y-8">
            {pagesMeta
              .filter((p) => p.pathKey !== "sitemap")
              .map((entry) => {
                const title = isEn ? entry.titleEn : entry.titleNl
                const description = isEn ? entry.descriptionEn : entry.descriptionNl
                const pagePath = isEn ? entry.pathEn : entry.pathNl || "/"
                const canonical = fullUrl(pagePath)
                const alternates = alternateLanguagesForPath(entry.pathKey)

                return (
                  <li key={entry.pathKey}>
                    <Card>
                      <CardHeader className="gap-4 sm:flex-row sm:items-start">
                        <div className="aspect-[1200/630] w-full shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:w-64">
                          <Image
                            src={entry.ogImage ?? siteConfig.ogImage}
                            alt=""
                            width={1200}
                            height={630}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-lg">{title}</CardTitle>
                          <CardDescription className="mt-1 line-clamp-3">
                            {description}
                          </CardDescription>
                          <Link
                            href={pagePath}
                            className="mt-3 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
                          >
                            {t.viewPage} →
                          </Link>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 border-t border-border pt-6">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {t.canonical}
                          </h3>
                          <a
                            href={canonical}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block truncate text-sm text-primary hover:underline"
                          >
                            {canonical}
                          </a>
                        </div>
                        {alternates && (
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {t.hreflang}
                            </h3>
                            <ul className="mt-1 space-y-1 text-sm">
                              <li>
                                <a
                                  href={alternates.nl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  nl
                                </a>
                              </li>
                              <li>
                                <a
                                  href={alternates.en}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  en
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                        {entry.keywords.length > 0 && (
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {t.keywords}
                            </h3>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {entry.keywords.map((kw) => (
                                <Badge key={kw} variant="outline" className="font-normal">
                                  {kw}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </li>
                )
              })}
          </ul>
        </div>
      </main>
      <Footer locale={validLocale} bookingHref="#footer" />
    </>
  )
}
