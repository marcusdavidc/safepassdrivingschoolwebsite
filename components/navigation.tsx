"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses & Pricing", href: "/courses" },
  { name: "Practice G1 Test", href: "/practice-test" },
  { name: "Road Test Booking", href: "/road-test-booking" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo Only - Made Larger */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/safepass-logo.png"
              alt="SafePass Driving School"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors text-sm whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:416-271-1295" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
              <Phone className="h-4 w-4" />
              <span className="font-medium">416-271-1295</span>
            </a>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/booking">Book Lesson</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href="tel:416-271-1295" className="flex items-center gap-2 text-gray-700">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">416-271-1295</span>
                </a>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/booking">Book Lesson</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
