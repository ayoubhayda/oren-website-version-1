"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Users className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8">
            We'd love to learn about your project and discuss how we can help you achieve your digital goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Join the growing list of businesses that trust oren with their digital presence.
          </p>
        </div>
      </div>
    </section>
  )
}
