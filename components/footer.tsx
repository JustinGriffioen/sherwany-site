import Image from "next/image"
import Link from "next/link"
import { GeoAlt, Clock, Telephone, Envelope, Instagram, Whatsapp } from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

export function Footer({
  locale = "nl",
  bookingHref,
}: {
  locale?: Locale
  /** Where "Maak afspraak" links to. Use "#footer" on home/contact, or "/contact#footer" on other pages. */
  bookingHref?: string
}) {
  const { business } = siteConfig
  const t = messages[locale].footer
  const prefix = locale === "en" ? "/en" : ""
  const homeHref = prefix || "/"
  const contactHref = prefix ? `${prefix}/contact` : "/contact"
  const maakAfspraakHref = bookingHref ?? `${contactHref}#footer`
  const hours = messages[locale].openingHours

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-12">
          {/* Brand + nav */}
          <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
            <Link href={homeHref} className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={160}
                height={160}
                sizes="40px"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-serif text-lg tracking-wide text-foreground">
                Sherwany Barbershop & Studio
              </span>
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Footer">
              <Link
                href={`${homeHref}#over-ons`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.overOns}
              </Link>
              <Link
                href={`${homeHref}#team`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.barbier}
              </Link>
              <Link
                href={prefix ? `${prefix}/a-waxing` : "/a-waxing"}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.harsen}
              </Link>
              <Link
                href={`${homeHref}#services`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.prijzen}
              </Link>
              <Link
                href={contactHref}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.contact}
              </Link>
            </nav>
            <Link
              href={maakAfspraakHref}
              className="mt-2 inline-flex w-fit items-center justify-center border border-foreground bg-foreground px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              {t.maakAfspraak}
            </Link>
          </div>

          {/* Adres */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.adres}
            </h3>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex gap-3 text-[14px] leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
            >
              <GeoAlt className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {business.address.street}
                <br />
                {business.address.postalCode} {business.address.city}
              </span>
            </a>
          </div>

          {/* Openingstijden */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.openingstijden}
            </h3>
            <div className="mt-4 flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <ul className="min-w-[120px] space-y-1 text-[14px] leading-relaxed text-muted-foreground">
                {hours.map(({ days, hours: h }) => (
                  <li key={days} className="flex justify-between gap-4">
                    <span>{days}</span>
                    <span className="tabular-nums">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.belMail}
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Telephone className="h-4 w-4 shrink-0" />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Envelope className="h-4 w-4 shrink-0" />
                {business.email}
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                aria-label="WhatsApp"
              >
                <Whatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col items-center gap-2">
          <Link
            href={prefix ? `${prefix}/privacy` : "/privacy"}
            className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
