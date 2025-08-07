import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, MapPin, Clock, FileText, Car, Phone } from "lucide-react"
import Link from "next/link"

const bookingSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Ensure you meet the requirements for G2 or G road test",
    icon: FileText,
  },
  {
    step: 2,
    title: "Choose Test Centre",
    description: "Select a DriveTest centre convenient to your location",
    icon: MapPin,
  },
  {
    step: 3,
    title: "Book Online",
    description: "Schedule your test through the official DriveTest website",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Prepare & Practice",
    description: "Take lessons with SafePass to ensure you're test-ready",
    icon: Car,
  },
]

const testCentres = [
  { name: "Downsview", address: "1003 Sheppard Ave W, Toronto", distance: "15 km from Kleinburg" },
  { name: "Etobicoke", address: "27 Fasken Dr, Etobicoke", distance: "25 km from Kleinburg" },
  { name: "Metro East", address: "2 Bermondsey Rd, Toronto", distance: "35 km from Kleinburg" },
  { name: "Newmarket", address: "1275 Gorham St, Newmarket", distance: "20 km from Kleinburg" },
]

const requirements = {
  g2: [
    "Valid G1 license for at least 12 months (or 8 months with BDE)",
    "Completed vision test",
    "Road test fee ($53.75)",
    "Appropriate vehicle with valid insurance",
    "Licensed driver (4+ years) to accompany you to test",
  ],
  g: [
    "Valid G2 license for at least 12 months",
    "Road test fee ($85.25)",
    "Appropriate vehicle with valid insurance",
    "Licensed driver (4+ years) to accompany you to test",
  ],
}

export default function RoadTestBookingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Official Guide</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            How to Book Your <span className="text-green-600">Road Test</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete step-by-step guide to booking your G2 or G road test in Ontario. We'll help you through the entire
            process and provide test preparation.
          </p>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Road Test Booking Process</h2>
            <p className="text-xl text-gray-600">Follow these steps to book your road test</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <Card key={index} className="border-gray-200 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-green-600">Step {step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Test Requirements</h2>
            <p className="text-xl text-gray-600">Make sure you meet all requirements before booking</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">G2 Road Test</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.g2.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/courses">Book G2 Preparation Lessons</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">G Road Test</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.g.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/courses">Book G Preparation Lessons</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Test Centres */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Nearby Test Centres</h2>
            <p className="text-xl text-gray-600">DriveTest centres serving the Vaughan & Toronto area</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testCentres.map((centre, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{centre.name}</h3>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        {centre.distance}
                      </Badge>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{centre.address}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://drivetest.ca/book-a-road-test/" target="_blank" rel="noopener noreferrer">
                Book on DriveTest.ca
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SafePass Services */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">How SafePass Can Help</h2>
            <p className="text-xl text-gray-600">We provide comprehensive support for your road test success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Test Preparation</h3>
                <p className="text-gray-600">Comprehensive lessons covering all test requirements and maneuvers</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Road Test Escort</h3>
                <p className="text-gray-600">We'll accompany you to the test centre and provide our vehicle</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Booking Assistance</h3>
                <p className="text-gray-600">Help with the booking process and scheduling your test appointment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <Clock className="h-6 w-6 text-orange-600" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Book Early:</strong> Road test appointments can be booked up to 6 months in advance and fill
                    up quickly.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cancellation Policy:</strong> You can cancel or reschedule up to 48 hours before your test.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Required Documents:</strong> Bring your current license, vehicle registration, and
                    insurance.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Vehicle Requirements:</strong> The test vehicle must be roadworthy with valid insurance and
                    registration.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Pass Your Road Test?</h2>
          <p className="text-xl text-green-100">
            Don't leave your success to chance. Book preparation lessons with SafePass and increase your chances of
            passing on the first try.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/booking">Book Test Preparation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <a href="tel:416-271-1295">Call for Assistance</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
