import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { CalEmbed } from "@/components/cal-embed"
import {
  GeoAlt,
  Clock,
  Telephone,
  Envelope,
  Instagram,
  Whatsapp,
  Tiktok,
  Linkedin,
  Facebook,
  BoxArrowUpRight,
} from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import { messages } from "@/lib/i18n/messages"
import { canonicalUrl, alternateLanguages } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const t = messages[validLocale].contactPage
  const canonical = canonicalUrl(validLocale, "contact")
  const description =
    validLocale === "en"
      ? "Visit Sherwany Barbershop & Studio in the centre of Deventer. Grote Overstraat 56, 7411 JD. Book an appointment, call or walk in. Barbershop and men's hairdresser."
      : "Bezoek Sherwany Barbershop & Studio in het centrum van Deventer. Grote Overstraat 56, 7411 JD. Maak een afspraak, bel of loop binnen. Barbershop en herenkapper."

  return {
    title: t.title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages("contact"),
    },
    openGraph: {
      title: `Contact | ${siteConfig.name} Deventer`,
      description:
        validLocale === "en"
          ? "Visit Sherwany Barbershop & Studio in the centre of Deventer. Book an appointment, call or walk in."
          : "Bezoek Sherwany Barbershop & Studio in het centrum van Deventer. Maak een afspraak, bel of loop binnen.",
      url: canonical,
    },
  }
}

function ContactPageJsonLd({ locale }: { locale: string }) {
  const { url } = siteConfig
  const path = locale === "en" ? "/en/contact" : "/contact"
  const fullUrl = `${url}${path}`
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${fullUrl}#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: fullUrl,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.country,
      addressRegion: "Overijssel",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHoursSpecification: siteConfig.business.openingHours.flatMap((oh) =>
      oh.dayOfWeek.map((day) => ({
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: day,
        opens: oh.hours.split("-")[0],
        closes: oh.hours.split("-")[1],
      }))
    ),
    sameAs: [
      siteConfig.business.social.instagram,
      siteConfig.business.social.whatsapp,
      siteConfig.business.social.tiktok,
      siteConfig.business.social.linkedin,
      siteConfig.business.social.facebook,
    ],
    image: `${url}/images/sherwany-outside.jpg`,
    priceRange: "€€",
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: locale === "en" ? `${url}/en` : url },
      { "@type": "ListItem", position: 2, name: "Contact", item: fullUrl },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const validLocale = locale === "en" ? "en" : "nl"
  const t = messages[validLocale].contactPage
  const openingHoursDisplay = messages[validLocale].openingHours
  const { business } = siteConfig
  const homeHref = validLocale === "en" ? "/en" : "/"

  return (
    <>
      <ContactPageJsonLd locale={validLocale} />
      <Navigation />
      <main id="main-content" className="min-h-screen pt-24">
        <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <Link
              href={homeHref}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.backHome}
            </Link>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {t.overline}
            </p>
            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              {t.h1}
              <br />
              {t.h1City}
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-card py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border sm:aspect-video">
                  <iframe
                    src={business.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sherwany Barbershop & Studio locatie op Google Maps"
                    className="h-full w-full"
                  />
                </div>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.bekijkMaps}
                  <BoxArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="space-y-10 lg:col-span-2">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {messages[validLocale].footer.adres}
                  </h2>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GeoAlt className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>
                      {business.address.street}
                      <br />
                      {business.address.postalCode} {business.address.city}
                    </span>
                  </a>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {messages[validLocale].footer.openingstijden}
                  </h2>
                  <div className="mt-3 flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div className="space-y-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {openingHoursDisplay.map((row) => (
                        <p key={row.days}>
                          {row.days} {row.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {messages[validLocale].footer.contact}
                  </h2>
                  <div className="mt-3 space-y-4">
                    <a
                      href={`tel:${business.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Telephone className="h-5 w-5 shrink-0" />
                      {business.phone}
                    </a>
                    <a
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-3 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Envelope className="h-5 w-5 shrink-0" />
                      {business.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {t.volgOns}
                  </h2>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={business.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={business.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      aria-label="WhatsApp"
                    >
                      <Whatsapp className="h-5 w-5" />
                    </a>
                    <a
                      href={business.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      aria-label="TikTok"
                    >
                      <Tiktok className="h-5 w-5" />
                    </a>
                    <a
                      href={business.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={business.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="footer"
          className="border-b border-border bg-background py-16 sm:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 text-center">
            <Image
              src="/images/logo.png"
              alt="Sherwany Barbershop & Studio"
              width={80}
              height={80}
              className="mx-auto h-16 w-auto brightness-0 invert"
            />
            <h2 className="mt-6 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:text-4xl md:text-5xl">
              {t.maakAfspraak}
            </h2>
            <p className="mt-6 text-[15px] text-muted-foreground">
              {t.planDesc}
            </p>
            <div className="mt-10 w-full border border-border bg-card p-5 sm:p-8 lg:p-12 lg:px-16">
              <CalEmbed />
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="mt-6 inline-block text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground"
              >
                {t.ofBel}: {business.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
