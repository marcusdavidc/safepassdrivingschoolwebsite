import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Top 10 Tips to Pass Your G2 on the First Try",
    excerpt:
      "Master these essential skills and strategies to increase your chances of passing your G2 road test on your first attempt.",
    slug: "top-10-tips-pass-g2-first-try",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Road Test Tips",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "What to Expect on Your G Test in Ontario",
    excerpt:
      "A comprehensive guide to the G road test, including highway driving, merging, and advanced maneuvers you'll need to master.",
    slug: "what-to-expect-g-test-ontario",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Road Test Guide",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Winter Driving Tips for New Drivers",
    excerpt:
      "Essential winter driving techniques to keep you safe on icy roads, including proper following distance and emergency procedures.",
    slug: "winter-driving-tips-new-drivers",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Safety Tips",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "How Many Lessons Do You Really Need?",
    excerpt:
      "Factors that determine how many driving lessons you'll need before you're ready for your road test, based on 25+ years of experience.",
    slug: "how-many-driving-lessons-needed",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Learning Guide",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Post-Accident Confidence: Regaining Control Behind the Wheel",
    excerpt:
      "Practical strategies and mental techniques to rebuild your confidence and overcome anxiety after a car accident.",
    slug: "post-accident-confidence-regaining-control",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Confidence Building",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Understanding Ontario's Graduated Driver Licensing System",
    excerpt:
      "A complete breakdown of the GDL system, from G1 to full G license, including requirements and restrictions at each level.",
    slug: "ontario-graduated-driver-licensing-system",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Licensing Guide",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Driving <span className="text-green-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, guides, and insights from 25+ years of professional driving instruction. Learn the skills and
            knowledge you need to become a safe, confident driver.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Featured Post</Badge>
          </div>

          <Card className="border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{blogPosts[0].title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest driving tips and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="space-y-3">
                  <Badge variant="outline" className="border-green-600 text-green-600 w-fit">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Stay Updated</h2>
          <p className="text-xl text-green-100">
            Get the latest driving tips and safety insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
