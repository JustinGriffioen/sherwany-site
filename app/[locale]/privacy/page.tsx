import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { canonicalUrl, alternateLanguages } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const title = validLocale === "en" ? "Privacy" : "Privacy"
  const path = validLocale === "en" ? "/en/privacy" : "/privacy"
  const canonical = `${siteConfig.url}${path}`

  return {
    title,
    alternates: {
      canonical,
      languages: { nl: `${siteConfig.url}/privacy`, en: `${siteConfig.url}/en/privacy` },
    },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const homeHref = validLocale === "en" ? "/en" : "/"

  const content =
    validLocale === "en"
      ? {
          title: "Privacy",
          back: "Back to home",
          intro:
            "We do not collect personal data beyond what is necessary for the website to function. Basic analytics, no cookies, no tracking.",
          analytics: "Analytics",
          analyticsText: "Page views only. Does not identify you personally.",
          contact: "Questions? Contact us at",
        }
      : {
          title: "Privacy",
          back: "Terug naar home",
          intro:
            "We verzamelen geen persoonsgegevens behalve wat nodig is voor de werking van de website. Basis analytics, geen cookies, geen tracking.",
          analytics: "Analytics",
          analyticsText: "Alleen page views. Identificeert u niet persoonlijk.",
          contact: "Vragen? Neem contact op via",
        }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-10">
          <Link
            href={homeHref}
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← {content.back}
          </Link>
          <h1 className="mt-8 font-serif text-4xl font-normal text-foreground">
            {content.title}
          </h1>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <p>{content.intro}</p>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {content.analytics}
            </h2>
            <p>{content.analyticsText}</p>
            <p>
              {content.contact}{" "}
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {siteConfig.business.email}
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer locale={validLocale} bookingHref={`${validLocale === "en" ? "/en" : ""}/contact`} />
    </>
  )
}
