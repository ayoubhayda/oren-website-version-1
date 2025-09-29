"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, FileText } from "lucide-react"

interface ServiceDetailCTAProps {
  service: {
    title: string
  }
}

export function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-xl text-primary-foreground/90 text-pretty mb-8">
            Let's discuss your project requirements and create a custom solution that drives results for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Call
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Free project proposal</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>No commitment consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
