import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

const heroImages = [
  { src: "/images/sherwany-barber.jpg", alt: "Sherwany barbershop interieur" },
  { src: "/images/haircut-in-action.jpg", alt: "Knippen in actie" },
  { src: "/images/knippen-styling.jpg", alt: "Knippen en styling" },
  { src: "/images/baard-trimmen.jpg", alt: "Baard trimmen en verzorging" },
  { src: "/images/gallery/klant-in-stoel.png", alt: "Klant in stoel" },
  { src: "/images/gallery/afgewerkt-resultaat.png", alt: "Afgewerkt resultaat" },
  { src: "/images/gallery/dames-knippen.png", alt: "Dames knippen bij Sherwany" },
  { src: "/images/sherwany-black-white.jpg", alt: "Indruk van de zaak" },
  { src: "/images/sherwany-outside.jpg", alt: "Sherwany barbershop gevel Deventer" },
  { src: "/images/gallery/sfeer-in-zaak.png", alt: "Sfeer in de zaak" },
]

const floatStyles = [
  "top-[14%] left-[4%] w-14 sm:w-20 md:w-24 lg:w-28 rotate-[-10deg] opacity-60 sm:opacity-100 z-[1]",
  "top-[12%] right-[4%] w-12 sm:w-18 md:w-22 lg:w-26 rotate-[8deg] opacity-60 sm:opacity-100 z-[2]",
  "top-[32%] left-[2%] w-11 sm:w-16 md:w-20 lg:w-24 rotate-[-6deg] z-[1]",
  "top-[48%] right-[3%] w-11 sm:w-18 md:w-24 lg:w-28 rotate-[10deg] z-[2]",
  "bottom-[14%] left-[5%] w-12 sm:w-16 md:w-20 lg:w-24 rotate-[5deg] z-[1]",
  "top-[42%] left-[6%] w-9 sm:w-14 md:w-18 lg:w-20 rotate-[-4deg] hidden md:block z-[1]",
  "bottom-[10%] right-[5%] w-11 sm:w-14 md:w-18 lg:w-22 rotate-[6deg] z-[2]",
  "top-[24%] right-[12%] w-8 sm:w-12 md:w-16 lg:w-18 rotate-[3deg] hidden lg:block z-[1]",
  "top-[36%] right-[8%] w-9 sm:w-14 md:w-18 lg:w-20 rotate-[-5deg] hidden sm:block z-[1]",
  "top-[22%] right-[4%] w-10 sm:w-16 md:w-20 lg:w-24 rotate-[6deg] hidden md:block z-[2]",
]

export function Hero({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].hero
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Floating image cards - start below header to avoid overlap */}
      <div className="pointer-events-none absolute inset-0 pt-20 sm:pt-24">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute ${floatStyles[i]} rounded-md border border-white/20 shadow-2xl shadow-black/50 transition-transform duration-300 hover:scale-105 hover:border-white/40 hover:z-10`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 144px"
                className="object-cover"
                priority={i < 3}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-5 pt-24 pb-8 text-center sm:px-6 sm:pt-24 sm:pb-0">
          <Image
            src="/images/logo.png"
            alt="Sherwany Barbershop & Studio"
            width={512}
            height={512}
            sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 96px"
            className="h-12 w-auto brightness-0 invert sm:h-16 md:h-20"
          />
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/60 sm:mt-8 sm:text-xs sm:tracking-[0.3em]">
            {t.overline}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-normal leading-[1.2] text-white sm:mt-3 sm:text-5xl md:text-7xl lg:text-8xl text-balance sm:leading-[1.15]">
            {t.title}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/75 sm:mt-6 sm:text-[15px]">
            {t.description}
          </p>
          <a
            href="#footer"
            className="mt-6 inline-flex min-h-[48px] min-w-[160px] items-center justify-center border border-white px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:mt-10 sm:min-h-12 sm:min-w-[200px] sm:px-10 sm:py-4 sm:text-[13px]"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
