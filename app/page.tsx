import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import GoogleReviews from "@/components/google-reviews"

const reviews = [
  {
    name: "Brian Cao",
    text: "I passed both G2 and G with SafePass. Lessons were clear, helpful, and confidence-boosting!",
    rating: 5,
  },
  {
    name: "Vivian Tadeo",
    text: "Nadi was patient, calm, and helped me rebuild confidence after an accident.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Excellent instructor! Passed my G2 on the first try thanks to Nadi's thorough preparation.",
    rating: 5,
  },
]

const services = [
  "G1 Beginner Driver Education (BDE Program)",
  "G2 Driving Lessons",
  "G Driving Lessons",
  "Road Test Preparation & Pre-Evaluation",
  "Post-Accident Confidence Building",
  "Winter Driving",
  "Defensive Driving",
  "Refresher Lessons",
  "Road Test Escort & Car Use",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Drive Safe. <span className="text-green-600">Pass with Confidence.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Patient, professional instruction to help you pass your G2 or G — and feel great behind the wheel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  <Link href="/booking">Book Your Lesson</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 px-8 py-3 text-lg bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="font-medium">Based in Kleinburg – Serving Vaughan & Toronto</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/images/safepass-logo.png"
                  alt="SafePass Driving School Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">MTO Certified Instructor</Badge>
                <h2 className="text-4xl font-bold text-gray-900">25+ Years of Experience</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nadi is an MTO-certified instructor with over 25 years of experience. He's helped thousands of
                  students pass their tests with a calm, patient approach and a focus on lifelong safe driving.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-gray-600">Students Passed</div>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Link href="/about">Read Full Story</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/nadi-instructor.jpeg"
                alt="Nadi, professional driving instructor"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive driving education for all skill levels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/courses">View All Courses & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">5.0 on Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{review.text}"</p>
                    <div className="font-medium text-gray-900">– {review.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Get Behind the Wheel?</h2>
          <p className="text-xl text-green-100">Start your journey to becoming a confident, safe driver today.</p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="/booking">Book a Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
