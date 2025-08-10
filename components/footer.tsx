import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/safepass-logo.png"
                alt="SafePass Driving School"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <div className="font-bold text-lg">SafePass</div>
                <div className="text-sm text-gray-400">Driving School</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Drive Safe. Pass with Confidence.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/courses" className="block text-gray-400 hover:text-white transition-colors">
                Courses & Pricing
              </Link>
              <Link href="/practice-test" className="block text-gray-400 hover:text-white transition-colors">
                Practice G1 Test
              </Link>
              <Link href="/road-test-booking" className="block text-gray-400 hover:text-white transition-colors">
                Road Test Booking
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">G1 BDE Program</div>
              <div className="text-gray-400">G2 Driving Lessons</div>
              <div className="text-gray-400">G Driving Lessons</div>
              <div className="text-gray-400">Road Test Preparation</div>
              <div className="text-gray-400">Winter Driving</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">
                  Kleinburg, ON
                  <br />
                  Serving Vaughan & Toronto
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-green-500" />
                <a href="tel:416-271-1295" className="text-gray-400 hover:text-white">
                  416-271-1295
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-green-500" />
                <a href="mailto:safepassdriving@gmail.com" className="text-gray-400 hover:text-white">
                  safepassdriving@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Facebook className="h-4 w-4 text-green-500" />
                <a
                  href="https://www.facebook.com/profile.php?id=100094668114312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2024 SafePass Driving School. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms & Policies
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
