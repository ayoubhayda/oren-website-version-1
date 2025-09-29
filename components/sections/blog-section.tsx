"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape and how they can benefit your business.",
    image: "/modern-web-development-trends-2024.jpg",
    category: "Web Development",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    href: "/blog/future-web-development-2024",
  },
  {
    title: "Building Scalable E-commerce Platforms: Best Practices",
    excerpt: "Learn the essential strategies for creating e-commerce platforms that can grow with your business.",
    image: "/scalable-ecommerce-platform-architecture.jpg",
    category: "E-commerce",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    href: "/blog/scalable-ecommerce-platforms",
  },
  {
    title: "Digital Marketing Strategies That Actually Work in 2024",
    excerpt: "Discover proven digital marketing tactics that drive real results for modern businesses.",
    image: "/digital-marketing-strategies-2024.jpg",
    category: "Marketing",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    href: "/blog/digital-marketing-strategies-2024",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in web development and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.title} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                  <Link href={post.href}>
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
