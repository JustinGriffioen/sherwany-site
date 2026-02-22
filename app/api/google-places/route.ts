import { fetchGooglePlaceData } from "@/lib/google-places"
import { siteConfig } from "@/lib/site-config"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 3600 // 1 hour

export async function GET() {
  try {
    const data = await fetchGooglePlaceData({
      placeId: siteConfig.business.googlePlaceId ?? undefined,
      searchQuery: "Sherwany barbershop A-Salon Deventer",
      locationBias: {
        lat: siteConfig.business.geo.latitude,
        lng: siteConfig.business.geo.longitude,
      },
    })
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("[google-places] Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch place data", photos: [], reviews: [] },
      { status: 500 }
    )
  }
}
