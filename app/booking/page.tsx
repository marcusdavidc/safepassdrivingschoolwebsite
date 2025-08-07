import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calendar, CreditCard, Phone, Mail } from "lucide-react"
import Link from "next/link"

const bookingSteps = [
  {
    step: 1,
    title: "Choose Your Service",
    description: "Select the type of lesson or package that best fits your needs",
  },
  {
    step: 2,
    title: "Pick Your Time",
    description: "Use our online calendar to select a convenient date and time",
  },
  {
    step: 3,
    title: "Confirm & Pay",
    description: "Complete your booking with secure payment via e-Transfer or PayPal",
  },
  {
    step: 4,
    title: "Get Ready to Drive",
    description: "Receive confirmation and prepare for your lesson with Nadi",
  },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy Online Booking</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Book Your <span className="text-green-600">Driving Lesson</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your journey? Book your lesson with Nadi today using our convenient online booking system or
            contact us directly.
          </p>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">How to Book</h2>
            <p className="text-xl text-gray-600">Simple steps to get you behind the wheel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <Card key={index} className="border-gray-200 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">{step.step}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">Schedule Your Lesson</CardTitle>
              <p className="text-gray-600">Select a convenient time from our available slots below</p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Calendly Embed Placeholder */}
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center space-y-4">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-700">Calendly Booking Widget</h3>
                <p className="text-gray-600">
                  The Calendly booking widget would be embedded here, allowing students to:
                </p>
                <div className="text-left max-w-md mx-auto space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">View available time slots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Select lesson type and duration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Provide contact information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Receive instant confirmation</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  To integrate: Replace this section with actual Calendly embed code
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Payment & Confirmation</h2>
            <p className="text-xl text-gray-600">Secure and convenient payment options</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Interac e-Transfer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">PayPal</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Payment is required to confirm your booking. You'll receive payment instructions via email after
                    scheduling your lesson.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Mail className="h-6 w-6 text-green-600" />
                  What Happens Next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Instant booking confirmation email</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Payment instructions and details</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Lesson reminder 24 hours before</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Contact from Nadi to confirm details</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Prefer to Book by Phone?</h2>
          <p className="text-xl text-gray-600">
            No problem! Call or email us directly and we'll help you schedule your lesson.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <a href="tel:416-271-1295" className="text-2xl font-bold text-green-600 hover:text-green-700">
                    416-271-1295
                  </a>
                  <p className="text-gray-600 text-sm">Available 7 AM - 9 PM daily</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a
                    href="mailto:safepassdrivingschool@gmail.com"
                    className="text-green-600 hover:text-green-700 font-medium break-all"
                  >
                    safepassdrivingschool@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm">Response within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Important Booking Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>24-Hour Cancellation Policy:</strong> Please provide at least 24 hours notice for
                    cancellations to avoid fees.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Payment Required:</strong> Booking confirmation requires payment via e-Transfer or PayPal.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Valid License Required:</strong> Bring your valid G1 or G2 license to every lesson.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Weather Policy:</strong> Lessons may be rescheduled due to severe weather conditions for
                    safety.
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Your Journey Starts Here</h2>
          <p className="text-xl text-green-100">
            Take the first step toward becoming a confident, safe driver. Book your lesson with Nadi today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="#booking-calendar">Book Online Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <a href="tel:416-271-1295">Call 416-271-1295</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
