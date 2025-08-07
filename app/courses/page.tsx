import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen } from 'lucide-react'
import Link from "next/link"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Courses & <span className="text-green-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect driving program for your needs. From beginner education to advanced highway driving, we
            have you covered.
          </p>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Course</h2>
            <p className="text-xl text-gray-600">Professional instruction for new drivers</p>
          </div>

          <div className="flex justify-center">
            <Card className="border-2 border-green-500 relative max-w-md">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                Featured Course
              </Badge>
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Beginner Driver Education (BDE Program)</CardTitle>
                  <div className="text-3xl font-bold text-green-600">See packages below</div>
                  <div className="text-gray-600">40 hours total</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">20 hours of online theory</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">10 hours of homework</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">10 hours of in-car driving</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">MTO certification for insurance discount</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Eligible for G2 road test in 8 months</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mock road test included</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="#packages">View Packages</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Packages & Pricing</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs and budget</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential Package */}
            <Card className="border-2 border-green-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                🟩 Essential
              </div>
              <CardHeader className="text-center space-y-4 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-600">$599</div>
                  <div className="text-gray-600">+ Administration Fee</div>
                  <div className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                    HST of $77.87 waived
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">20 hours of online theory (flexible schedule)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">10 hours of home link assignments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">10 hours of one-on-one in-car driving lessons</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Pickup and drop-off available</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">MTO certification (insurance discount eligible)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Eligible to take G2 road test in 8 months</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Includes a mock road test</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg">❌</span>
                    <span className="text-gray-500">Road test booking assistance not included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg">❌</span>
                    <span className="text-gray-500">Instructor's car not provided for road test</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/booking">Choose Essential</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-orange-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                Most Popular
              </Badge>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                🟧 Premium
              </div>
              <CardHeader className="text-center space-y-4 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-600">$799</div>
                  <div className="text-gray-600">+ Administration Fee</div>
                  <div className="text-sm font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
                    HST of $110.37 waived
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700 font-medium">Everything in the Essential Package</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Road test booking assistance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Use of instructor's car for G2 road test</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/booking">Choose Premium</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="border-2 border-red-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                🟥 Elite
              </div>
              <CardHeader className="text-center space-y-4 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">$999</div>
                  <div className="text-gray-600">+ Administration Fee</div>
                  <div className="text-sm font-medium text-red-700 bg-red-50 px-3 py-1 rounded-full">
                    HST of $136.37 waived
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700 font-medium">Everything in the Premium Package</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">15 hours of in-car driving lessons (instead of 10)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Extra practice + mock test</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">✅</span>
                    <span className="text-gray-700">Full road test support and instructor car use</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/booking">Choose Elite</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">📌</span>
                <div className="text-left">
                  <p className="text-blue-800 font-medium mb-2">Important Note:</p>
                  <p className="text-blue-700">
                    All packages include official MTO certification and may qualify students for insurance discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized training for specific needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Post-Accident Confidence Building", "Winter Driving", "Defensive Driving", "Refresher Lessons"].map(
              (service, index) => (
                <Card key={index} className="border-gray-200 text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                    <p className="text-gray-600 text-sm">Specialized training tailored to your needs</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-xl text-green-100">
            Book your first lesson today and take the first step toward becoming a confident driver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
