"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechStart Inc.",
    avatar: "/professional-woman-ceo.png",
    content:
      "oren transformed our vision into a stunning platform that exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder",
    company: "EcoShop",
    avatar: "/professional-founder-headshot.png",
    content:
      "The team at oren delivered our e-commerce platform on time and within budget. The results speak for themselves - 150% increase in conversions!",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Director",
    company: "HealthCare Connect",
    avatar: "/professional-woman-doctor-headshot.png",
    content:
      "Working with oren was a game-changer for our healthcare platform. They understood our complex requirements and delivered a solution that truly works.",
    rating: 5,
  },
  {
    name: "David Park",
    title: "CTO",
    company: "FinanceFlow",
    avatar: "/professional-cto-headshot.png",
    content:
      "oren's expertise in building scalable financial dashboards is impressive. They delivered a robust solution that handles our complex data requirements perfectly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with oren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg text-pretty mb-6">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
