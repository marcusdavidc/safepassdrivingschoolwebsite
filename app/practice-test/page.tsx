import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Clock, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

const testFeatures = [
  "40 official MTO practice questions",
  "Instant feedback on answers",
  "Detailed explanations for each question",
  "Track your progress and scores",
  "Mobile-friendly interface",
  "Updated with latest traffic laws",
]

const testTopics = [
  { topic: "Traffic Signs & Signals", questions: 8 },
  { topic: "Rules of the Road", questions: 12 },
  { topic: "Safe Driving Practices", questions: 10 },
  { topic: "Sharing the Road", questions: 6 },
  { topic: "Driving Conditions", questions: 4 },
]

export default function PracticeTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Free Practice Test</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            G1 Practice <span className="text-green-600">Test</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prepare for your G1 written test with our comprehensive practice questions. Test your knowledge of Ontario
            traffic laws and road signs before taking the real exam.
          </p>
        </div>
      </section>

      {/* Practice Test Interface */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-gray-900">Start Your Practice Test</CardTitle>
              <p className="text-gray-600">
                Take our free G1 practice test to assess your readiness for the official MTO exam.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Test Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">40</div>
                  <div className="text-gray-600">Questions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">30</div>
                  <div className="text-gray-600">Minutes</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">80%</div>
                  <div className="text-gray-600">Pass Rate</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {testFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Start Test Button */}
              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  Start Practice Test
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-2">No registration required • Completely free</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Test Topics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Test Topics Covered</h2>
            <p className="text-xl text-gray-600">Practice questions covering all areas of the G1 exam</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testTopics.map((topic, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">{topic.topic}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{topic.questions} questions</span>
                      <Badge variant="outline" className="border-green-600 text-green-600">
                        Practice
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Study Tips for Success</h2>
            <p className="text-xl text-gray-600">Maximize your chances of passing the G1 test</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  Before the Test
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Study the official MTO Driver's Handbook</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Take multiple practice tests</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Focus on road signs and traffic laws</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Get plenty of rest the night before</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Award className="h-6 w-6 text-green-600" />
                  Test Day Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Arrive early with required documents</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Read each question carefully</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Don't rush - you have plenty of time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Review your answers before submitting</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready for Your G1 Test?</h2>
          <p className="text-xl text-green-100">
            Once you pass your G1, book your first driving lesson to start preparing for your G2 road test.
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
              <Link href="/courses">View Lesson Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
