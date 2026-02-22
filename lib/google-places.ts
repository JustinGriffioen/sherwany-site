/**
 * Google Places API (New) integration for fetching business photos and reviews.
 * Requires GOOGLE_PLACES_API_KEY in .env.local
 * @see https://developers.google.com/maps/documentation/places/web-service
 */

const PLACES_BASE = "https://places.googleapis.com/v1"

export interface GooglePlacePhoto {
  name: string
  url: string
  widthPx: number
  heightPx: number
  attribution?: string
}

export interface GooglePlaceReview {
  author: string
  rating: number
  text: string
  relativeTime: string
}

export interface GooglePlaceData {
  placeId: string | null
  rating?: number
  userRatingCount?: number
  photos: GooglePlacePhoto[]
  reviews: GooglePlaceReview[]
}

async function getApiKey(): Promise<string> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) {
    throw new Error(
      "GOOGLE_PLACES_API_KEY is not set. Add it to .env.local - get one at https://console.cloud.google.com/apis/credentials"
    )
  }
  return key
}

/**
 * Find Place ID via Text Search
 */
async function findPlaceId(
  apiKey: string,
  query: string,
  locationBias: { lat: number; lng: number; radiusMeters?: number }
): Promise<string | null> {
  const res = await fetch(`${PLACES_BASE}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      textQuery: query,
      pageSize: 1,
      locationBias: {
        circle: {
          center: {
            latitude: locationBias.lat,
            longitude: locationBias.lng,
          },
          radius: locationBias.radiusMeters ?? 2000,
        },
      },
    }),
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    console.error("Google Text Search failed:", res.status, await res.text())
    return null
  }

  const data = (await res.json()) as { places?: Array<{ id?: string }> }
  return data.places?.[0]?.id ?? null
}

/**
 * Fetch Place Details (photos, reviews, rating)
 */
async function fetchPlaceDetails(
  apiKey: string,
  placeId: string
): Promise<{
  photos?: Array<{
    name: string
    widthPx?: number
    heightPx?: number
    authorAttributions?: Array<{ displayName?: string }>
  }>
  reviews?: Array<{
    authorAttribution?: { displayName?: string }
    rating?: number
    text?: { text?: string }
    relativePublishTimeDescription?: string
  }>
  rating?: number
  userRatingCount?: number
}> {
  const res = await fetch(
    `${PLACES_BASE}/places/${placeId}?languageCode=nl`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "photos,reviews,rating,userRatingCount",
      },
      next: { revalidate: 3600 },
    }
  )

  if (!res.ok) {
    console.error("Google Place Details failed:", res.status, await res.text())
    throw new Error("Place details fetch failed")
  }

  return res.json()
}

/**
 * Build Place Photo proxy URL (keeps API key server-side)
 */
function buildPhotoProxyUrl(photoName: string, maxWidth = 800): string {
  const encoded = encodeURIComponent(photoName)
  return `/api/google-place-photo?name=${encoded}&width=${maxWidth}`
}

/**
 * Fetch Google Place data: photos, reviews, and rating.
 * Uses Text Search to resolve Place ID if not provided.
 */
export async function fetchGooglePlaceData(
  options: {
    placeId?: string | null
    searchQuery?: string
    locationBias?: { lat: number; lng: number }
  } = {}
): Promise<GooglePlaceData> {
  const apiKey = await getApiKey()
  const { placeId: configPlaceId, searchQuery, locationBias } = options

  let placeId = configPlaceId ?? null
  const loc = locationBias ?? { lat: 52.252, lng: 6.159 }
  const query = searchQuery ?? "Sherwany barbershop A-Salon Deventer"

  if (!placeId) {
    placeId = await findPlaceId(apiKey, query, loc)
  }

  if (!placeId) {
    return { placeId: null, photos: [], reviews: [] }
  }

  const details = await fetchPlaceDetails(apiKey, placeId)

  const photos: GooglePlacePhoto[] = (details.photos ?? []).slice(0, 8).map(
    (p) => ({
      name: p.name,
      url: buildPhotoProxyUrl(p.name),
      widthPx: p.widthPx ?? 800,
      heightPx: p.heightPx ?? 600,
      attribution: p.authorAttributions?.[0]?.displayName,
    })
  )

  const reviews: GooglePlaceReview[] = (details.reviews ?? []).map((r) => ({
    author: r.authorAttribution?.displayName ?? "Anonymous",
    rating: r.rating ?? 5,
    text: r.text?.text ?? "",
    relativeTime: r.relativePublishTimeDescription ?? "",
  }))

  return {
    placeId,
    rating: details.rating,
    userRatingCount: details.userRatingCount,
    photos,
    reviews,
  }
}
