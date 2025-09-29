"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const relatedPosts = [
  {
    id: "responsive-design-best-practices",
    title: "Responsive Design Best Practices for Modern Websites",
    excerpt: "Master the art of responsive design with these proven techniques and best practices.",
    image: "/responsive-web-design-best-practices.jpg",
    category: "Design",
    date: "Dec 8, 2024",
    readTime: "8 min read",
  },
  {
    id: "seo-optimization-guide-2024",
    title: "Complete SEO Optimization Guide for 2024",
    excerpt: "A comprehensive guide to SEO optimization techniques that will help your website rank higher.",
    image: "/seo-optimization-guide-2024.jpg",
    category: "SEO",
    date: "Dec 5, 2024",
    readTime: "10 min read",
  },
  {
    id: "startup-website-essentials",
    title: "Essential Website Features Every Startup Needs",
    excerpt: "Discover the must-have website features that can help your startup establish credibility.",
    image: "/startup-website-essentials.jpg",
    category: "Startup",
    date: "Dec 3, 2024",
    readTime: "5 min read",
  },
]

interface BlogRelatedProps {
  currentSlug: string
}

export function BlogRelated({ currentSlug }: BlogRelatedProps) {
  const filteredPosts = relatedPosts.filter((post) => post.id !== currentSlug)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
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
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
