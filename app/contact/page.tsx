import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Have a Question? <span className="text-green-600">Ready to Book?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get in touch with us today. We're here to answer your questions and help you start your journey to becoming
            a confident, safe driver.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to book your first lesson or have questions about our services? We'd love to hear from you.
                  Contact us using any of the methods below.
                </p>
              </div>

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
                          href="mailto:safepassdrivingschool@gmail.com"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          safepassdrivingschool@gmail.com
                        </a>
                        <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
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
                        <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                          SafePass Driving School
                        </a>
                        <p className="text-gray-600 text-sm">Follow us for tips and updates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/booking">Book a Lesson</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone (Optional)
                    </label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your driving experience, questions, or what you'd like to learn..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Lesson Times</h3>
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
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Phone & Email</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span>Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-xl text-green-100">
            Don't wait – book your first lesson today and take the first step toward becoming a confident, safe driver.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/booking">Book Your First Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
