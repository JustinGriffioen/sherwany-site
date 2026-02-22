import { NextRequest, NextResponse } from "next/server"

/**
 * Proxies Google Place Photos so the API key stays server-side.
 * Usage: /api/google-place-photo?name=places/.../photos/...&width=800
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get("name")
  const width = Math.min(2400, Math.max(100, parseInt(searchParams.get("width") ?? "800", 10) || 800))

  if (!name) {
    return NextResponse.json({ error: "Missing name parameter" }, { status: 400 })
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "API not configured" }, { status: 503 })
  }

  const googleUrl = `https://places.googleapis.com/v1/${name}/media?maxWidthPx=${width}&key=${apiKey}`

  try {
    const res = await fetch(googleUrl, { redirect: "follow" })
    if (!res.ok) {
      return NextResponse.json({ error: "Photo fetch failed" }, { status: res.status })
    }
    const blob = await res.blob()
    const contentType = res.headers.get("content-type") ?? "image/jpeg"
    return new NextResponse(blob, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    })
  } catch (error) {
    console.error("[google-place-photo] Error:", error)
    return NextResponse.json({ error: "Photo fetch failed" }, { status: 500 })
  }
}
