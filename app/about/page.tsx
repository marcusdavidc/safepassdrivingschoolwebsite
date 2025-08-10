import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const specializations = [
  "Nervous/new drivers",
  "Post-accident driving recovery",
  "Highway & winter driving",
  "Road test preparation",
]

const achievements = [
  { icon: Award, title: "MTO Certified", description: "Ministry-approved driving instructor" },
  { icon: Users, title: "1000+ Students", description: "Successfully helped pass their tests" },
  { icon: Clock, title: "25+ Years", description: "Of professional driving instruction" },
  { icon: Shield, title: "Safety First", description: "Focus on lifelong safe driving habits" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">MTO Certified Instructor</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              25 Years of Experience.
              <br />
              <span className="text-green-600">Thousands of Safe Drivers.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet Azmaray Nadi, your trusted driving instructor based in Kleinburg, dedicated to helping drivers of all
              backgrounds build confidence on the road.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">About Nadi</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Azmaray Nadi is a Ministry-approved driving instructor based in Kleinburg. With over 25 years of
                  experience, he's known for helping drivers of all backgrounds pass their G2 or G and build confidence
                  on the road.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nadi's patient and calm approach has made him a trusted choice for thousands of students, from nervous
                  first-time drivers to those recovering confidence after an accident.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Specializes in:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {specializations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/booking">Book a Lesson with Nadi</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/nadi-instructor.jpeg"
                alt="Nadi, professional driving instructor in his teaching vehicle"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose SafePass?</h2>
            <p className="text-xl text-gray-600">Experience, patience, and proven results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-gray-200 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Teaching Philosophy</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              "My approach is simple: every student is unique, and every lesson should be tailored to their individual
              needs and comfort level. Whether you're a nervous beginner or rebuilding confidence after an accident, I'm
              here to guide you every step of the way."
            </p>
            <p>
              "Passing your road test is just the beginning. My goal is to help you become a safe, confident driver for
              life. That means understanding not just the rules of the road, but developing the judgment and skills to
              handle any situation you might encounter."
            </p>
          </div>
          <div className="text-2xl font-semibold text-green-600">– Azmaray Nadi, MTO Certified Instructor</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl text-green-100">
            Join thousands of successful students who've learned to drive safely with Nadi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/booking">Book Your First Lesson</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/courses">View Courses & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
