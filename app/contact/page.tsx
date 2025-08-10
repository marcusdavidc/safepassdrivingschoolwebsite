import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react"
import CallDialogButton from "@/components/call-dialog"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Have a Question? <span className="text-green-600">Call to Book</span>
          </h1>
          <p className="text-xl text-gray-600">
            We handle bookings by phone to get you the best time and package. Call now and we’ll schedule you right
            away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallDialogButton buttonText="Book a Lesson" />
            <Button
              asChild
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <a href="mailto:safepassdriving@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information (no form) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">Service Area</h3>
                      <p className="text-gray-600">Based in Kleinburg</p>
                      <p className="text-gray-600">Serving Vaughan & Toronto</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a href="tel:416-271-1295" className="text-green-600 hover:text-green-700 font-medium">
                        416-271-1295
                      </a>
                      <p className="text-gray-600 text-sm">Call or text anytime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:safepassdriving@gmail.com"
                        className="text-green-600 hover:text-green-700 font-medium break-all"
                      >
                        safepassdriving@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm">We’ll respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900">Facebook</h3>
                      <a
                        href="https://www.facebook.com/profile.php?id=100094668114312"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        SafePass Driving School
                      </a>
                      <p className="text-gray-600 text-sm">Follow us for tips and updates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hours */}
            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Clock className="h-6 w-6 text-green-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <CallDialogButton buttonText="Book a Lesson" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-xl text-green-100">Call now and we’ll get you booked.</p>
          <CallDialogButton />
        </div>
      </section>
    </div>
  )
}
