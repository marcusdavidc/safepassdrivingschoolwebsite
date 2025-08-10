"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ExternalLink } from "lucide-react"

type Review = {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  text: string
  when: string
}

type ReviewsResponse = {
  name: string
  rating: number
  total: number
  placeUrl?: string
  writeReviewUrl: string
  reviews: Review[]
}

function Stars({ value = 0 }: { value?: number }) {
  const full = Math.round(value)
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < full ? "h-4 w-4 text-yellow-400 fill-yellow-400" : "h-4 w-4 text-gray-300"} />
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const res = await fetch("/api/google-reviews", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to load Google reviews")
        const json = (await res.json()) as ReviewsResponse
        if (active) {
          setData(json)
        }
      } catch (e: any) {
        setError(e?.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto text-center space-y-3">
        <div className="text-lg font-semibold text-gray-900">Google Reviews unavailable</div>
        <p className="text-gray-600 text-sm">
          {error ? error : "Please try again later."} If you haven’t added your Google API credentials yet, add them and
          redeploy. See steps below.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">{data.name}</h3>
          <div className="flex items-center gap-2 text-gray-700">
            <Stars value={data.rating} />
            <span className="font-medium">{data.rating?.toFixed(1)}</span>
            <span className="text-gray-500">({data.total} reviews)</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" className="border-gray-300 bg-transparent">
            <a href={data.placeUrl || "#"} target="_blank" rel="noopener noreferrer">
              View on Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href={data.writeReviewUrl} target="_blank" rel="noopener noreferrer">
              Write a Google Review
            </a>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews.map((r, idx) => (
          <Card key={idx} className="border-gray-200 h-full">
            <CardContent className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={r.profile_photo_url || "/placeholder.svg"} alt={r.author_name} />
                  <AvatarFallback>{r.author_name?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  {r.author_url ? (
                    <a
                      href={r.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 hover:underline"
                    >
                      {r.author_name}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-gray-900">{r.author_name}</div>
                  )}
                  <div className="text-xs text-gray-500">{r.when}</div>
                </div>
              </div>
              <Stars value={r.rating} />
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{r.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-500">Reviews and ratings are provided by Google.</div>
    </div>
  )
}
