import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SafePass Driving School | Drive Safe. Pass with Confidence.",
  description:
    "Professional driving instruction in Kleinburg, serving Vaughan & Toronto. MTO-certified instructor with 25+ years experience. G1, G2, G driving lessons and road test preparation.",
  keywords:
    "driving school vaughan, G2 driving lessons toronto, beginner driver education ontario, driving instructor kleinburg, road test preparation, MTO certified",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
