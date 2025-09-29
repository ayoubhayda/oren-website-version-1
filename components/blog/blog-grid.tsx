"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react"

const blogPosts = [
  {
    id: "future-web-development-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the web development landscape and how they can benefit your business in the coming year.",
    content:
      "The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly...",
    image: "/modern-web-development-trends-2024.jpg",
    category: "Web Development",
    author: "Sarah Johnson",
    authorImage: "/professional-woman-ceo.png",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    tags: ["Web Development", "Trends", "Technology", "2024"],
    featured: true,
  },
  {
    id: "scalable-ecommerce-platforms",
    title: "Building Scalable E-commerce Platforms: Best Practices",
    excerpt:
      "Learn the essential strategies for creating e-commerce platforms that can grow with your business and handle increasing traffic.",
    content:
      "Building a scalable e-commerce platform requires careful planning and the right architectural decisions...",
    image: "/scalable-ecommerce-platform-architecture.jpg",
    category: "E-commerce",
    author: "Michael Chen",
    authorImage: "/professional-founder-headshot.png",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    tags: ["E-commerce", "Scalability", "Architecture", "Performance"],
    featured: false,
  },
  {
    id: "digital-marketing-strategies-2024",
    title: "Digital Marketing Strategies That Actually Work in 2024",
    excerpt:
      "Discover proven digital marketing tactics that drive real results for modern businesses in today's competitive landscape.",
    content:
      "Digital marketing has become more sophisticated and competitive than ever. Here are the strategies that work...",
    image: "/digital-marketing-strategies-2024.jpg",
    category: "Marketing",
    author: "Emily Rodriguez",
    authorImage: "/professional-woman-doctor-headshot.png",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["Digital Marketing", "Strategy", "ROI", "Growth"],
    featured: false,
  },
  {
    id: "responsive-design-best-practices",
    title: "Responsive Design Best Practices for Modern Websites",
    excerpt:
      "Master the art of responsive design with these proven techniques and best practices for creating websites that work on all devices.",
    content: "Responsive design is no longer optional in today's mobile-first world...",
    image: "/responsive-web-design-best-practices.jpg",
    category: "Design",
    author: "David Park",
    authorImage: "/professional-cto-headshot.png",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    tags: ["Design", "Responsive", "Mobile", "UX"],
    featured: false,
  },
  {
    id: "seo-optimization-guide-2024",
    title: "Complete SEO Optimization Guide for 2024",
    excerpt:
      "A comprehensive guide to SEO optimization techniques that will help your website rank higher in search engine results.",
    content: "Search engine optimization continues to evolve with new algorithms and ranking factors...",
    image: "/seo-optimization-guide-2024.jpg",
    category: "SEO",
    author: "Sarah Johnson",
    authorImage: "/professional-woman-ceo.png",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    tags: ["SEO", "Optimization", "Search", "Rankings"],
    featured: false,
  },
  {
    id: "startup-website-essentials",
    title: "Essential Website Features Every Startup Needs",
    excerpt:
      "Discover the must-have website features that can help your startup establish credibility and attract customers from day one.",
    content: "Starting a new business requires making smart decisions about your digital presence...",
    image: "/startup-website-essentials.jpg",
    category: "Startup",
    author: "Michael Chen",
    authorImage: "/professional-founder-headshot.png",
    date: "Dec 3, 2024",
    readTime: "5 min read",
    tags: ["Startup", "Website", "Business", "Growth"],
    featured: false,
  },
]

const categories = ["All", "Web Development", "E-commerce", "Marketing", "Design", "SEO", "Startup"]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory
    const searchMatch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-16">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="default">{featuredPost.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-balance">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
