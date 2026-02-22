import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { fetchGooglePlaceData } from "@/lib/google-places"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

const staticImages = [
  "/images/sherwany-outside.jpg",
  "/images/haircut-in-action.jpg",
  "/images/knippen-styling.jpg",
  "/images/baard-trimmen.jpg",
  "/images/gallery/knippen-actie.png",
  "/images/sherwany-barber.jpg",
  "/images/gallery/klant-in-stoel.png",
  "/images/gallery/sfeer-in-zaak.png",
  "/images/gallery/dames-knippen.png",
  "/images/gallery/afgewerkt-resultaat.png",
  "/images/gallery/interieur-zaak.png",
  "/images/gallery/styling-resultaat.png",
]

export async function Gallery({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].gallery
  let googlePhotos: { url: string; widthPx: number; heightPx: number }[] = []
  try {
    if (process.env.GOOGLE_PLACES_API_KEY) {
      const data = await fetchGooglePlaceData({
        placeId: siteConfig.business.googlePlaceId ?? undefined,
        searchQuery: "Sherwany barbershop A-Salon Deventer",
        locationBias: {
          lat: siteConfig.business.geo.latitude,
          lng: siteConfig.business.geo.longitude,
        },
      })
      googlePhotos = data.photos.slice(0, 6).map((p) => ({
        url: p.url,
        widthPx: p.widthPx,
        heightPx: p.heightPx,
      }))
    }
  } catch {
    // Fallback: gallery uses only static images
  }

  const allImages = [
    ...googlePhotos.map((p) => ({
      src: p.url,
      isExternal: true,
      alt: "Sherwany Studio barbershop - Google foto",
    })),
    ...staticImages.map((src, i) => ({
      src,
      isExternal: false,
      alt: `Sherwany Studio barbershop - foto ${i + 1}`,
    })),
  ]

  // Fisher-Yates shuffle for random order
  for (let i = allImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[allImages[i], allImages[j]] = [allImages[j], allImages[i]]
  }

  return (
    <section className="border-t border-border bg-card py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {t.overline}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {t.title}
            <br />
            {t.titleLine2}
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid grid-cols-3 gap-1.5 sm:mt-16 sm:grid-cols-4 sm:gap-2 lg:grid-cols-5 lg:gap-2.5 xl:grid-cols-6">
          {allImages.map((item) => (
            <div key={item.src} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                loading="lazy"
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                unoptimized={item.isExternal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
