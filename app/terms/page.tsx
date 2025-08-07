import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Terms & <span className="text-green-600">Policies</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Please review our terms of service, cancellation policies, and important information about our driving
            instruction services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cancellation Policy */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>24-Hour Notice Required:</strong> All lesson cancellations must be made at least 24 hours in
                advance. This allows us to offer the time slot to other students and maintain our schedule efficiently.
              </p>
              <p>
                <strong>Late Cancellations:</strong> Cancellations made with less than 24 hours notice will result in
                forfeiture of the lesson fee. We understand that emergencies occur, so please contact us as soon as
                possible if you need to cancel.
              </p>
              <p>
                <strong>No-Show Policy:</strong> Students who fail to show up for their scheduled lesson without prior
                notice will forfeit the full lesson fee. No refunds will be provided for no-shows.
              </p>
              <p>
                <strong>Weather Conditions:</strong> Lessons may be cancelled due to severe weather conditions for
                safety reasons. In such cases, lessons will be rescheduled at no additional cost.
              </p>
            </CardContent>
          </Card>

          {/* Payment Policy */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Payment Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Payment Methods:</strong> We accept payment via Interac e-Transfer and PayPal. Payment is
                required to confirm your booking.
              </p>
              <p>
                <strong>Package Payments:</strong> Lesson packages must be paid in full before the first lesson.
                Individual lessons must be paid before each session.
              </p>
              <p>
                <strong>Refund Policy:</strong> Refunds are not provided for no-shows or cancellations made with less
                than 24 hours notice. Unused lessons from packages may be refunded at our discretion, minus any
                administrative fees.
              </p>
              <p>
                <strong>Price Changes:</strong> Lesson prices may change with 30 days written notice. Existing packages
                purchased before price changes will honor the original pricing.
              </p>
            </CardContent>
          </Card>

          {/* BDE Certification Requirements */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">BDE Certification Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Course Completion:</strong> Students must complete all 40 hours of the Beginner Driver Education
                program (20 hours online theory, 10 hours homework, 10 hours in-car) to receive MTO certification.
              </p>
              <p>
                <strong>Attendance:</strong> Regular attendance is required. Excessive absences may result in course
                extension or additional fees.
              </p>
              <p>
                <strong>Certification Benefits:</strong> Upon successful completion, students receive MTO certification
                for insurance discounts and become eligible for G2 road test in 8 months instead of 12.
              </p>
              <p>
                <strong>Course Materials:</strong> All necessary course materials and access to online modules are
                included in the program fee.
              </p>
            </CardContent>
          </Card>

          {/* Car Usage Policies */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Vehicle Usage Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Road Test Vehicle:</strong> Our Intermediate and Advanced packages include use of our
                dual-control vehicle for road tests. The vehicle is fully insured and meets all MTO requirements.
              </p>
              <p>
                <strong>Vehicle Condition:</strong> Students are responsible for reporting any damage or issues with the
                vehicle immediately. Pre-lesson vehicle inspections will be conducted.
              </p>
              <p>
                <strong>Cleanliness:</strong> Please keep the vehicle clean and remove all personal items after each
                lesson. Additional cleaning fees may apply for excessive mess.
              </p>
              <p>
                <strong>Fuel:</strong> Fuel costs are included in lesson fees. Students should not attempt to refuel the
                vehicle unless specifically instructed.
              </p>
            </CardContent>
          </Card>

          {/* Conduct Agreement */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Respectful Conduct Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Professional Environment:</strong> We maintain a professional, respectful learning environment.
                Inappropriate language, behavior, or harassment will not be tolerated.
              </p>
              <p>
                <strong>Safety First:</strong> Students must follow all safety instructions and traffic laws during
                lessons. Reckless or dangerous behavior may result in immediate lesson termination.
              </p>
              <p>
                <strong>Instructor Authority:</strong> The instructor has final authority over all driving decisions
                during lessons for safety reasons. Students must comply with all instructor directions.
              </p>
              <p>
                <strong>Substance Policy:</strong> Students must not be under the influence of alcohol, drugs, or any
                substance that impairs driving ability. Lessons will be cancelled if impairment is suspected.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Information Collection:</strong> We collect only necessary information for providing driving
                instruction services, including contact details, driving history, and lesson progress.
              </p>
              <p>
                <strong>Data Protection:</strong> All student information is kept confidential and secure. We do not
                share personal information with third parties except as required by law.
              </p>
              <p>
                <strong>Communication:</strong> We may contact students via phone, email, or text for lesson scheduling,
                reminders, and important updates about our services.
              </p>
              <p>
                <strong>Record Keeping:</strong> Lesson records and progress reports are maintained for educational
                purposes and may be required for insurance or MTO documentation.
              </p>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Liability & Insurance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Insurance Coverage:</strong> Our vehicles are fully insured for driving instruction. Students
                are covered under our commercial insurance policy during lessons.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> SafePass Driving School's liability is limited to the cost of
                services provided. We are not responsible for indirect or consequential damages.
              </p>
              <p>
                <strong>Student Responsibility:</strong> Students are responsible for following all traffic laws and
                instructor directions. Violations or accidents due to student negligence may result in additional costs.
              </p>
              <p>
                <strong>Medical Conditions:</strong> Students must disclose any medical conditions that may affect their
                ability to drive safely. We reserve the right to require medical clearance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Questions About Our Policies?</h2>
          <p className="text-xl text-gray-600">
            If you have any questions about our terms and policies, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <a href="tel:416-271-1295">Call 416-271-1295</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Begin?</h2>
          <p className="text-xl text-green-100">
            Now that you've reviewed our policies, book your first lesson and start your journey to becoming a confident
            driver.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/booking">Book Your Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
