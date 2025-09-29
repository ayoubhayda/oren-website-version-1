"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function PortfolioCTA() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            Let's discuss how we can help you achieve similar results for your business with a custom digital solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                <MessageCircle className="mr-2 h-5 w-5" />
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
