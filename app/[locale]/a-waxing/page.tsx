import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { messages, waxingServices } from "@/lib/i18n/messages"
import { canonicalUrl, alternateLanguages } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const validLocale: Locale = locale === "en" ? "en" : "nl"
  const t = messages[validLocale].aWaxing
  const canonical = canonicalUrl(validLocale, "a-waxing")
  const description =
    validLocale === "en"
      ? "Professional waxing and sugaring treatments at Sherwany Barbershop & Studio Deventer. Eyebrows, face, and body - carefully and hygienically performed."
      : "Professionele waxing en harsbehandelingen bij Sherwany Barbershop & Studio Deventer. Wenkbrauwen, gezicht, en lichaam - zorgvuldig en hygiënisch uitgevoerd."

  return {
    title: t.title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages("a-waxing"),
    },
    openGraph: {
      title: `${t.title} | ${siteConfig.name} Deventer`,
      description,
      url: canonical,
    },
  }
}

export default async function AWaxingPage({ params }: Props) {
  const { locale } = await params
  const validLocale = locale === "en" ? "en" : "nl"
  const t = messages[validLocale].aWaxing
  const services = waxingServices[validLocale]
  const ourMenuHref = validLocale === "en" ? "/en#services" : "/#services"
  const whatsappUrl = siteConfig.business.social.whatsapp
  const phone = siteConfig.business.phone

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24">
        <section className="border-b border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href={ourMenuHref}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.backDiensten}
            </Link>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {t.overline}
            </p>
            <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.1] text-foreground md:text-6xl lg:text-7xl text-balance">
              {t.h1}
              <br />
              {t.h1Line2}
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-card py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="border border-border p-6 transition-colors hover:border-foreground/20"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-24">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
            <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl">
              {t.maakAfspraak}
            </h2>
            <p className="mt-4 text-[14px] text-muted-foreground">
              {t.ctaSubtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="w-full border border-foreground bg-foreground px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-transparent hover:text-foreground sm:w-auto text-center"
              >
                {t.bel} {phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-foreground px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:w-auto text-center"
              >
                {t.app}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer
        locale={validLocale}
        bookingHref={validLocale === "en" ? "/en/contact" : "/contact"}
      />
    </>
  )
}
