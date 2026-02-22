import type React from "react"
import Image from "next/image"
import {
  Scissors,
  Gem,
  Stars,
  Water,
  Lightning,
  PencilSquare,
  Droplet,
  Wind,
  Palette,
  CircleFill,
  Brush,
} from "react-bootstrap-icons"
import type { Locale } from "@/lib/i18n"
import { messages, servicesMen, servicesWomen } from "@/lib/i18n/messages"

const menIcons = [Scissors, Gem, Stars, Water, Lightning, PencilSquare]
const menPrices = ["25", "40", "32.5", "70", "95", "15"]
const menImages = [
  "/images/diensten/model-knippen.png",
  "/images/diensten/heren-vip.png",
  "/images/diensten/model-knippen-baard.png",
  "/images/diensten/heren-permanenten.jpeg",
  "/images/diensten/permanent-knippen.png",
  "/images/diensten/contouren-baard.png",
]

const womenIcons = [Scissors, Droplet, Wind, Palette, CircleFill, Water, Brush]
const womenPrices = ["25", "30", "35", "30", "35", "22.5", "19.5"]
const womenImages = [
  "/images/diensten/model-knippen-vrouwen.png",
  "/images/diensten/wassen-knippen-drogen.png",
  "/images/diensten/wassen-knippen-fohnen.png",
  "/images/diensten/verven.png",
  "/images/diensten/highlights.png",
  "/images/diensten/haren-krullen.png",
  "/images/diensten/haren-stylen.png",
]

function getDienstenHeren(locale: Locale) {
  const texts = servicesMen[locale]
  return texts.map((t, i) => ({
    ...t,
    price: menPrices[i],
    icon: menIcons[i],
    image: menImages[i],
  }))
}

function getDienstenDames(locale: Locale) {
  const texts = servicesWomen[locale]
  return texts.map((t, i) => ({
    ...t,
    price: womenPrices[i],
    icon: womenIcons[i],
    image: womenImages[i],
  }))
}

function ServiceCard({
  name,
  description,
  price,
  priceFrom,
  icon: Icon,
  image,
  priceFromLabel,
}: {
  name: string
  description: string
  price: string
  priceFrom?: boolean
  icon: React.ComponentType<{ className?: string }>
  image?: string
  priceFromLabel?: string
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-background/60 transition-all duration-200 hover:border-foreground/25 hover:bg-background/80">
      {image ? (
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/20 sm:aspect-[4/3]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div className="flex aspect-[3/4] w-full items-center justify-center border-b border-border bg-muted/20 sm:aspect-[4/3]">
          <Icon className="h-8 w-8 text-muted-foreground sm:h-12 sm:w-12" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[13px] font-semibold leading-snug text-foreground sm:text-lg">{name}</h3>
          <span className="shrink-0 text-right">
            {priceFrom && priceFromLabel && (
              <span className="mr-0.5 text-[9px] font-normal uppercase tracking-wider text-muted-foreground sm:mr-1 sm:text-xs">
                {priceFromLabel}{" "}
              </span>
            )}
            <span className="font-serif text-base text-foreground sm:text-2xl">€{price}</span>
          </span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  )
}

export function Services({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].services
  const dienstenHeren = getDienstenHeren(locale)
  const dienstenDames = getDienstenDames(locale)
  const waxingHref = locale === "en" ? "/en/a-waxing" : "/a-waxing"

  return (
    <section id="services" className="border-t border-border bg-card py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
          {t.overline}
        </p>
        <h2 className="mt-3 font-serif text-2xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          {t.title}
        </h2>
        <p className="mt-3 text-[13px] text-muted-foreground sm:mt-5 sm:text-[15px]">
          {t.subtitle}
        </p>

        <div className="mt-10 sm:mt-16 lg:mt-20">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
            {t.heren}
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {dienstenHeren.map((dienst) => (
              <ServiceCard key={dienst.name} {...dienst} />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-10 sm:mt-20 sm:pt-20 lg:mt-24 lg:pt-24">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
            {t.dames}
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {dienstenDames.map((dienst) => (
              <ServiceCard
                key={dienst.name}
                {...dienst}
                priceFromLabel={dienst.priceFrom ? t.priceFrom : undefined}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-12 sm:gap-4">
          <a
            href="#footer"
            className="inline-flex min-h-11 min-w-[180px] items-center justify-center border border-foreground px-8 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:min-h-12 sm:min-w-[200px] sm:px-10 sm:py-3.5 sm:text-[12px] sm:tracking-[0.2em]"
          >
            {t.maakAfspraak}
          </a>
          <a
            href={waxingHref}
            className="text-[12px] text-muted-foreground transition-colors hover:text-foreground sm:text-[13px]"
          >
            {t.waxing} →
          </a>
        </div>
      </div>
    </section>
  )
}
