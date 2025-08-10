import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Mail, Phone } from "lucide-react"

const PHONE = "416-271-1295"

const bookingSteps = [
  { step: 1, title: "Call Us", description: "Speak directly with Nadi to choose the right package" },
  { step: 2, title: "Pick a Time", description: "We’ll find a convenient lesson time that fits your schedule" },
  { step: 3, title: "Confirm", description: "We’ll confirm your appointment details by text or email" },
  { step: 4, title: "Get Ready to Drive", description: "We’ll send a reminder and what to bring" },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Book by Phone</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Book Your <span className="text-green-600">Driving Lesson</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            To book a lesson, please call us. We’ll help you choose the right package and confirm a time that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={`tel:${PHONE}`} aria-label={`Call ${PHONE} to book a lesson`}>
                Call {PHONE}
              </a>
            </Button>
          </div>
          <div className="text-gray-600 flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-green-600" />
            <a
              href={`tel:${PHONE}`}
              className="font-medium text-green-700 hover:text-green-800 underline"
              aria-label={`Tap to call ${PHONE}`}
            >
              {PHONE}
            </a>
            <span className="sr-only">{"Tap to call " + PHONE}</span>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">How to Book</h2>
            <p className="text-xl text-gray-600">Simple steps to get you behind the wheel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step) => (
              <Card key={step.step} className="border-gray-200 text-center">
                <CardContent className="p-6 space-y-2">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Next Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Payment & Confirmation</h2>
            <p className="text-xl text-gray-600">Quick and simple after we confirm your time by phone</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Interac e-Transfer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">PayPal</span>
                </div>
                <p className="text-gray-600 text-sm pt-2">
                  We’ll send payment instructions after we confirm your booking by phone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Mail className="h-6 w-6 text-green-600" />
                  What Happens Next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">We confirm your time via phone/text</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">You receive payment details and a prep checklist</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Reminder sent 24 hours before</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Book?</h2>
          <p className="text-lg text-gray-600">Call and we’ll get you scheduled right away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href={`tel:${PHONE}`} aria-label={`Call ${PHONE} to book now`}>
                Call {PHONE}
              </a>
            </Button>
            <a
              href={`tel:${PHONE}`}
              className="text-green-700 hover:text-green-800 underline font-medium self-center"
              aria-label={`Tap to call ${PHONE}`}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
