"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-12 w-12 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Get the latest insights, tips, and trends delivered straight to your inbox. No spam, just valuable content.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg text-primary-foreground/90 mb-4">Thank you for subscribing!</p>
              <p className="text-sm text-primary-foreground/70">
                You'll receive our latest articles and insights in your inbox.
              </p>
            </div>
          )}

          <p className="text-sm text-primary-foreground/70 mt-6">
            Join 5,000+ professionals who trust our insights • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  )
}
