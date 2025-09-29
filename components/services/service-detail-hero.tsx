"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

interface ServiceDetailHeroProps {
  service: {
    title: string
    subtitle: string
    description: string
    pricing: {
      starting: string
    }
  }
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">{service.title}</h1>
          <p className="text-2xl text-muted-foreground text-balance mb-6">{service.subtitle}</p>
          <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">{service.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Starting at {service.pricing.starting}</div>
              <div className="text-sm text-muted-foreground">Custom quote based on requirements</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>30-Day Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
