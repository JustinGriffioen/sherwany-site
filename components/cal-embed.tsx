"use client"

// Iframe embed – loads lazily when user scrolls to the booking section (avoids third-party cookies/deprecated API until needed).
const CAL_EMBED_URL =
  "https://app.cal.com/sherwanystudio/sherwany-studio?layout=month_view"

export function CalEmbed() {
  return (
    <div className="cal-embed relative min-h-[600px] w-full overflow-hidden rounded-lg bg-muted/20 sm:min-h-[700px] lg:min-h-[750px]">
      <iframe
        src={CAL_EMBED_URL}
        className="absolute inset-0 h-full min-h-[600px] w-full rounded-lg border-0 sm:min-h-[700px] lg:min-h-[750px]"
        title="Plan een afspraak bij Sherwany Barbershop & Studio"
        loading="lazy"
      />
    </div>
  )
}
