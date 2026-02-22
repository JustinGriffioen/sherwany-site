import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ContactInfo } from "@/components/contact-info"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { InstagramSection } from "@/components/instagram-section"
import { Gallery } from "@/components/gallery"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { messages } from "@/lib/i18n/messages"
import { canonicalUrl, alternateLanguages } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const t = messages[validLocale].hero
  const canonical = canonicalUrl(validLocale, "")
  const desc =
    validLocale === "en"
      ? "Premium barbershop and men's hairdresser in Deventer. Haircuts, shaves, styling and waxing. Personal attention and craftsmanship for a result you'll love."
      : "Premium barbershop en herenkapper in Deventer. Knippen, scheren, styling en waxing. Persoonlijke aandacht en vakmanschap voor een resultaat waar u blij van wordt."

  return {
    title: validLocale === "en" ? `${t.overline} Deventer | Premium Barber` : `${t.overline} Deventer | Premium Barbier`,
    description: desc,
    alternates: {
      canonical,
      languages: alternateLanguages(""),
    },
    openGraph: {
      title: validLocale === "en" ? `${t.overline} Deventer | Premium Barber` : `${t.overline} Deventer | Premium Barbier`,
      description: desc,
      url: canonical,
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"

  return (
    <main id="main-content" role="main" className="overflow-x-hidden">
      <Navigation />
      <Hero locale={validLocale} />
      <About locale={validLocale} />
      <ContactInfo locale={validLocale} />
      <Services locale={validLocale} />
      <Testimonials locale={validLocale} />
      <InstagramSection locale={validLocale} />
      <Gallery locale={validLocale} />
      <ContactCTA locale={validLocale} />
      <Footer locale={validLocale} />
    </main>
  )
}
