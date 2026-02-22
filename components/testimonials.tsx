import Image from "next/image"
import { StarFill, Star, Wallet2, Heart, Award } from "react-bootstrap-icons"
import { siteConfig } from "@/lib/site-config"
import { fetchGooglePlaceData } from "@/lib/google-places"
import type { Locale } from "@/lib/i18n"
import { messages } from "@/lib/i18n/messages"

const badrTestimonialImage = "/images/badr-testimonial.jpg"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {[...Array(5)].map((_, i) =>
        i < count ? (
          <StarFill
            key={i}
            className="h-3 w-3 fill-foreground text-foreground sm:h-4 sm:w-4"
          />
        ) : (
          <Star
            key={i}
            className="h-3 w-3 fill-muted/30 text-muted-foreground/30 sm:h-4 sm:w-4"
          />
        )
      )}
    </div>
  )
}

function TestimonialCard({
  text,
  author,
  location,
  rating,
  reviewUrl,
  viewOnGoogleLabel,
  image,
  imageAlt,
}: {
  text: string
  author: string
  location?: string
  rating: number
  reviewUrl?: string
  viewOnGoogleLabel?: string
  image?: string
  imageAlt?: string
}) {
  const content = (
    <>
      {image && (
        <div className="relative aspect-square shrink-0 overflow-hidden border-b border-border sm:aspect-[3/4] sm:w-[200px] sm:border-b-0 sm:border-r">
          <Image
            src={image}
            alt={imageAlt ?? author}
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12">
        <Stars count={rating} />
        <blockquote className="mt-3 font-serif text-[15px] font-normal italic leading-[1.65] text-foreground sm:mt-6 sm:text-lg sm:leading-[1.7] md:text-xl">
          &quot;{text}&quot;
        </blockquote>
        <div className="mt-4 border-t border-border pt-3 sm:mt-8 sm:pt-6">
          <p className="text-[13px] font-semibold text-foreground sm:text-sm">{author}</p>
          {location && (
            <p className="mt-0.5 text-[11px] text-muted-foreground sm:mt-1 sm:text-xs">
              {location}
              {reviewUrl && viewOnGoogleLabel && (
                <> · <span className="text-foreground/80">{viewOnGoogleLabel}</span></>
              )}
            </p>
          )}
        </div>
      </div>
    </>
  )

  const className =
    "flex min-w-0 flex-col overflow-hidden border border-border bg-card sm:flex-row transition-colors hover:border-foreground/20"

  if (reviewUrl) {
    return (
      <a
        href={reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className} hover:bg-card/80`}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export async function Testimonials({ locale = "nl" }: { locale?: Locale }) {
  const t = messages[locale].testimonials
  let googleData = { reviews: [] as { author: string; rating: number; text: string; relativeTime: string }[] }
  try {
    if (process.env.GOOGLE_PLACES_API_KEY) {
      googleData = await fetchGooglePlaceData({
        placeId: siteConfig.business.googlePlaceId ?? undefined,
        searchQuery: "Sherwany barbershop A-Salon Deventer",
        locationBias: {
          lat: siteConfig.business.geo.latitude,
          lng: siteConfig.business.geo.longitude,
        },
      })
    }
  } catch {
    // Fallback: show only hardcoded reviews
  }

  const googleReviews = googleData.reviews.slice(0, 5).map((r) => ({
    text: r.text,
    author: r.author,
    location: r.relativeTime ? `Google · ${r.relativeTime}` : "Google",
    rating: r.rating,
  }))
  const fallbackReviews = t.hardcoded.map((review) => ({
    text: review.text,
    author: review.author,
    location: review.location,
    rating: 5,
  }))
  const allReviews = googleReviews.length > 0 ? googleReviews : fallbackReviews

  return (
    <section id="reviews" className="border-t border-border bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          {t.overline}
        </p>

        <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          {t.title}
          <br />
          {t.titleLine2}
        </h2>
        <a
          href={siteConfig.business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.bekijkGoogle}
        </a>

        {/* Testimonials */}
        <div className="mt-10 flex flex-col gap-6 sm:mt-16 sm:gap-8 lg:gap-10">
          {allReviews.slice(0, 3).map((review, i) => (
            <TestimonialCard
              key={i}
              {...review}
              reviewUrl={siteConfig.business.mapsUrl}
              viewOnGoogleLabel={t.bekijkReviewOpGoogle}
              image={i === 0 ? badrTestimonialImage : undefined}
              imageAlt={i === 0 ? (locale === "en" ? "Badr Belarbi – customer at Sherwany Barbershop" : "Badr Belarbi – klant bij Sherwany Barbershop") : undefined}
            />
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {[
            {
              title: t.features.prijzen,
              icon: Wallet2,
              description: t.features.prijzenDesc,
            },
            {
              title: t.features.sfeer,
              icon: Heart,
              description: t.features.sfeerDesc,
            },
            {
              title: t.features.kwaliteit,
              icon: Award,
              description: t.features.kwaliteitDesc,
            },
          ].map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/10 hover:bg-muted/20 sm:p-8 lg:gap-6 lg:p-10"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-border bg-muted/30 p-2 transition-colors group-hover:border-foreground/20 group-hover:bg-muted/50">
                  <Icon className="h-4 w-4 text-muted-foreground sm:h-[18px] sm:w-[18px]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-foreground sm:text-[17px]">
                  {title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
