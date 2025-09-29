"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, DollarSign } from "lucide-react"

interface ServiceDetailContentProps {
  service: {
    deliverables: string[]
    targetAudience: Array<{
      type: string
      description: string
      examples: string[]
    }>
    process: Array<{
      step: string
      description: string
      timeline: string
    }>
    pricing: {
      starting: string
      factors: string[]
    }
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What You Get */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable) => (
                <div key={deliverable} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Who It's For */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.targetAudience.map((audience) => (
                <Card key={audience.type}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {audience.type}
                    </CardTitle>
                    <CardDescription>{audience.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Examples:</h4>
                      {audience.examples.map((example) => (
                        <Badge key={example} variant="secondary" className="mr-2 mb-2">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <Card key={step.step}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{step.step}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {step.timeline}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Pricing & Investment</h2>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Starting at {service.pricing.starting}
                </CardTitle>
                <CardDescription>Final pricing depends on your specific requirements and project scope</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-4">Pricing factors include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.pricing.factors.map((factor) => (
                      <div key={factor} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
}
