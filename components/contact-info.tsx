import Link from "next/link"
import { Clock, Telephone, Envelope, BoxArrowUpRight, GeoAlt } from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

export function ContactInfo({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].contactInfo
  const openingHoursDisplay = messages[locale].openingHours
  const { business } = siteConfig

  return (
    <section
      id="bezoek-ons"
      className="bg-card py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {t.overline}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-[15px] text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Info cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden bg-card"
          >
            <h3 className="p-6 pb-0 text-sm font-semibold uppercase tracking-wider text-foreground sm:p-8 sm:pb-0">
              {t.adres}
            </h3>
            {/* Mobile: address + Maps button (no iframe – saves ~150 KiB JS) */}
            <div className="flex flex-col gap-4 p-6 pt-4 sm:hidden">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </p>
              <span className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded border border-border px-4 py-3 text-[13px] font-medium text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                <GeoAlt className="h-4 w-4 shrink-0" />
                {t.routeBekijken}
                <BoxArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </span>
            </div>
            {/* Desktop/tablet: full Maps embed */}
            <div className="relative mt-4 hidden aspect-[4/3] flex-1 overflow-hidden sm:mt-4 sm:block">
              <iframe
                src={business.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sherwany Barbershop & Studio op Google Maps"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="hidden p-4 pt-3 items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:flex sm:p-6 sm:pt-4">
              {t.routeBekijken}
              <BoxArrowUpRight className="h-3.5 w-3.5" />
            </p>
          </a>

          <div className="flex items-start gap-4 bg-card p-6 sm:p-8">
            <div className="rounded-md border border-border bg-muted/50 p-2.5">
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {t.openingstijden}
              </h3>
              <div className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {openingHoursDisplay.map((row) => (
                  <p key={row.days}>
                    {row.days} {row.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-card p-6 sm:p-8">
            <div className="rounded-md border border-border bg-muted/50 p-2.5">
              <Telephone className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {t.contact}
              </h3>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Envelope className="h-3.5 w-3.5 shrink-0" />
                  <span className="break-all">{business.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
        <Link
          href="#footer"
          className="inline-flex items-center gap-2 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.maakAfspraak}
          <span className="text-foreground/70">→</span>
        </Link>
        </div>
      </div>
    </section>
  )
}
