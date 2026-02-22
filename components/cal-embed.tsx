"use client"

import { useEffect, useRef, useState } from "react"

// Iframe embed – only loads when user scrolls to the booking section (avoids third-party cookies/deprecated API until needed).
const CAL_EMBED_URL =
  "https://app.cal.com/sherwanystudio/sherwany-studio?layout=month_view"

export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true)
      },
      { rootMargin: "100px", threshold: 0.01 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="cal-embed relative min-h-[600px] w-full overflow-hidden rounded-lg bg-muted/20 sm:min-h-[700px] lg:min-h-[750px]"
    >
      {shouldLoad ? (
        <iframe
          src={CAL_EMBED_URL}
          className="absolute inset-0 h-full min-h-[600px] w-full rounded-lg border-0 sm:min-h-[700px] lg:min-h-[750px]"
          title="Plan een afspraak bij Sherwany Barbershop & Studio"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-8 w-8 animate-pulse rounded bg-muted-foreground/20" aria-hidden />
        </div>
      )}
    </div>
  )
}
