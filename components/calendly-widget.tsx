"use client"

import Script from "next/script"
import { useMemo } from "react"

type CalendlyWidgetProps = {
  url?: string
  height?: number
}

export default function CalendlyWidget({
  url = "https://calendly.com/your-calendly-username/lesson",
  height = 700,
}: CalendlyWidgetProps) {
  // Ensure a stable id for the container (not strictly required, but helpful if multiple widgets)
  const containerId = useMemo(() => "calendly-inline-widget", [])

  return (
    <div className="w-full">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <div
        id={containerId}
        className="calendly-inline-widget rounded-lg"
        data-url={url}
        style={{ minWidth: "320px", height }}
        aria-label="Calendly scheduling widget"
      />
      <noscript>
        {"To book a time, please enable JavaScript or open "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
          {"this Calendly link"}
        </a>
        {"."}
      </noscript>
    </div>
  )
}
