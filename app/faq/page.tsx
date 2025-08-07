import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "SafePass Driving School is based in Kleinburg and serves the greater Vaughan and Toronto areas. We provide in-car lessons throughout these regions and can accommodate students from surrounding communities.",
  },
  {
    question: "Do you provide the car for the road test?",
    answer:
      "Yes! Our Intermediate and Advanced packages include the use of our dual-control vehicle for your road test. We also provide road test escort service to help you feel comfortable and confident on test day.",
  },
  {
    question: "Are you MTO certified?",
    answer:
      "Absolutely. Nadi is a Ministry of Transportation (MTO) certified driving instructor with over 25 years of experience. All our instruction meets or exceeds MTO standards and requirements.",
  },
  {
    question: "How do I book a lesson?",
    answer:
      "You can book lessons easily through our online Calendly booking system, or by calling us directly at 416-271-1295. We'll work with your schedule to find convenient lesson times.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept payment via Interac e-Transfer and PayPal for your convenience. Payment is required to confirm your booking, and we'll provide all necessary payment details when you book.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "We require 24-hour notice for cancellations. If you cancel with less than 24 hours notice or don't show up for your lesson, the lesson fee is non-refundable. We understand emergencies happen, so please contact us as soon as possible.",
  },
  {
    question: "Do you offer winter driving lessons?",
    answer:
      "Yes! Winter driving is a crucial skill in Ontario. We offer specialized winter driving lessons that cover snow and ice conditions, proper following distances, emergency procedures, and vehicle control in adverse weather.",
  },
  {
    question: "Do you help drivers after an accident?",
    answer:
      "Absolutely. Post-accident confidence building is one of our specialties. Nadi has extensive experience helping drivers overcome anxiety and rebuild their confidence behind the wheel after traumatic experiences.",
  },
  {
    question: "Can I take refresher lessons?",
    answer:
      "Of course! Refresher lessons are perfect for licensed drivers who want to brush up on their skills, haven't driven in a while, or want to improve specific areas like highway driving or parking.",
  },
  {
    question: "Do you teach nervous or senior drivers?",
    answer:
      "Yes, we specialize in working with nervous drivers and senior drivers. Nadi's patient, calm approach has helped thousands of anxious students build confidence. We adapt our teaching style to each individual's needs and comfort level.",
  },
  {
    question: "How many lessons will I need?",
    answer:
      "The number of lessons varies depending on your experience level, natural ability, and comfort behind the wheel. Most students need between 10-20 lessons, but we'll assess your progress and provide honest feedback about your readiness for the road test.",
  },
  {
    question: "What's included in the BDE program?",
    answer:
      "Our Beginner Driver Education (BDE) program includes 20 hours of online theory, 10 hours of homework assignments, and 10 hours of in-car driving instruction. Upon completion, you'll receive MTO certification for insurance discounts and be eligible for your G2 test in 8 months instead of 12.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find answers to common questions about our driving lessons, policies, and services. Can't find what you're
            looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-green-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Still Have Questions?</h2>
          <p className="text-xl text-gray-600">
            We're here to help! Contact us directly and we'll be happy to answer any questions about our driving
            lessons, policies, or services.
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
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Learning?</h2>
          <p className="text-xl text-green-100">
            Book your first lesson today and begin your journey to becoming a confident, safe driver.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/booking">Book Your Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
