import Image from "next/image"
import { StarFill, People, Instagram } from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

export function AboutIntro({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].about
  return (
    <section id="over-ons" className="border-t border-border bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-16 lg:gap-20">
          <div className="relative min-h-[280px] sm:min-h-[360px]">
            <div className="grid grid-cols-6 grid-rows-6 gap-2 sm:gap-3">
            {/* Card 1 - large, main */}
            <div className="col-span-4 row-span-4 overflow-hidden rounded-lg border border-border shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/sherwany-black-white.jpg"
                  alt="Sherwany Barbershop & Studio – indruk van de zaak in Deventer"
                  fill
                  sizes="(max-width: 1024px) 65vw, 35vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Card 2 - smaller, top right - exterior Deventer */}
            <div className="col-span-2 col-start-5 row-span-3 overflow-hidden rounded-lg border border-border shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/sherwany-outside.jpg"
                  alt={locale === "en" ? "Sherwany Barbershop & Studio – storefront in Deventer" : "Sherwany Barbershop & Studio – gevel in Deventer"}
                  fill
                  sizes="(max-width: 1024px) 30vw, 15vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Card 3 - smaller, bottom right */}
            <div className="col-span-2 col-start-5 row-span-3 row-start-4 overflow-hidden rounded-lg border border-border shadow-md">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/baard-trimmen.jpg"
                  alt="Sfeer bij Sherwany Barbershop"
                  fill
                  sizes="(max-width: 1024px) 30vw, 15vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Card 4 - small accent bottom left */}
            <div className="col-span-2 col-start-3 row-span-2 row-start-5 overflow-hidden rounded-lg border border-border shadow-md">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/gallery/sfeer-in-zaak.png"
                  alt="Klant bij Sherwany"
                  fill
                  sizes="(max-width: 1024px) 30vw, 12vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
              {t.overOns}
            </p>
            <h2 className="mt-2 font-serif text-lg font-normal leading-[1.2] text-foreground sm:mt-6 sm:text-4xl md:text-5xl sm:leading-[1.15] text-balance">
              {t.shopTitle}
              <br />
              {t.shopCity}
            </h2>
            <p className="mt-2 text-[11px] leading-[1.6] text-muted-foreground sm:mt-8 sm:text-[15px] sm:leading-[1.8]">
              {t.shopDesc}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8 sm:gap-x-8 sm:gap-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <People className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
                <span className="font-serif text-xl font-normal text-foreground sm:text-3xl">874+</span>
                <span className="text-[11px] text-muted-foreground sm:text-xs">{t.klanten}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFill key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
                  ))}
                </div>
                <span className="font-serif text-xl font-normal text-foreground sm:text-3xl">4.9</span>
                <span className="text-[11px] text-muted-foreground sm:text-xs">{t.google}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://www.instagram.com/sherwanybarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:px-8 sm:py-3.5 sm:text-[13px]"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                {t.volgOns}
              </a>
              <a
                href={siteConfig.business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:px-8 sm:py-3.5 sm:text-[13px]"
              >
                <StarFill className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                {t.bekijkBeoordelingen}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutTeam({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].about
  return (
    <section id="team" className="border-t border-border bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-16 lg:gap-20">
          <div className="relative order-2 aspect-square overflow-hidden sm:aspect-[4/5]">
            <Image
              src="/images/sherwany-barber.jpg"
              alt="Sherwany – eigenaar en barbier van Sherwany Barbershop & Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <div className="order-1 min-w-0 lg:py-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
              {t.barbier}
            </p>
            <h2 className="mt-2 font-serif text-lg font-normal leading-[1.2] text-foreground sm:mt-6 sm:text-4xl md:text-5xl sm:leading-[1.15] text-balance">
              {t.meetTitle}
              <br />
              {t.meetName}
            </h2>
            <p className="mt-2 text-[11px] leading-[1.6] text-muted-foreground sm:mt-8 sm:text-[15px] sm:leading-[1.8]">
              {t.meetDesc}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="https://www.instagram.com/sherwanybarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-foreground px-3 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:justify-start sm:px-6 sm:py-3 sm:text-[13px] sm:tracking-[0.15em]"
              >
                {t.instagram}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground sm:justify-start sm:px-6 sm:py-3 sm:text-[13px] sm:tracking-[0.15em]"
              >
                {t.bekijkDiensten}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
