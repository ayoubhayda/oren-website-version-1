"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Twitter, Linkedin, Facebook, ArrowLeft } from "lucide-react"

interface BlogArticleProps {
  post: {
    title: string
    excerpt: string
    content: string
    image: string
    category: string
    author: string
    authorImage: string
    date: string
    readTime: string
    tags: string[]
  }
}

export function BlogArticle({ post }: BlogArticleProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = post.title

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  return (
    <article className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <Badge variant="default" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{post.excerpt}</p>
          </div>

          {/* Author and meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button size="icon" variant="outline" onClick={() => handleShare("twitter")} className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleShare("linkedin")} className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => handleShare("facebook")} className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace("# ", "")}
                  </h1>
                )
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <p key={index} className="font-semibold mb-2">
                    {paragraph.replace(/\*\*/g, "")}
                  </p>
                )
              }
              if (paragraph.trim() === "") {
                return <br key={index} />
              }
              return (
                <p key={index} className="mb-4 text-pretty leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
