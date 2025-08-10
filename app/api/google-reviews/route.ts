import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID",
        tip: "Add both environment variables in your Vercel Project Settings > Environment Variables, then redeploy.",
      },
      { status: 500 },
    )
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json")
  url.searchParams.set("place_id", placeId)
  // Reviews are limited (Google typically returns up to 5 most relevant)
  url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url,place_id")
  url.searchParams.set("key", apiKey)

  const res = await fetch(url.toString(), {
    // Cache upstream response for 1 hour to reduce quota usage; updates quickly enough for most sites
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch from Google Places API" }, { status: 502 })
  }

  const data = await res.json()

  if (data.status !== "OK") {
    return NextResponse.json(
      { error: "Google Places API error", details: data.status, message: data.error_message },
      { status: 502 },
    )
  }

  const result = data.result
  const reviews = Array.isArray(result.reviews) ? result.reviews : []

  const simplified = {
    name: result.name,
    rating: result.rating,
    total: result.user_ratings_total,
    placeUrl: result.url,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
    reviews: reviews.slice(0, 6).map((r: any) => ({
      author_name: r.author_name,
      author_url: r.author_url,
      profile_photo_url: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      when: r.relative_time_description,
    })),
  }

  return NextResponse.json(simplified, {
    headers: {
      // Light client-side caching
      "Cache-Control": "public, max-age=300",
    },
  })
}
