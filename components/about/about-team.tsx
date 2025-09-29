"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 10 years of experience in web development and business strategy, Sarah leads oren's vision and growth.",
    image: "/professional-woman-ceo.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO & Lead Developer",
    bio: "Michael brings deep technical expertise in modern web technologies and leads our development team.",
    image: "/professional-founder-headshot.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Emily creates beautiful, user-centered designs that convert visitors into customers and enhance brand identity.",
    image: "/professional-woman-doctor-headshot.png",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Park",
    role: "Digital Marketing Director",
    bio: "David develops data-driven marketing strategies that help our clients reach their target audiences effectively.",
    image: "/professional-cto-headshot.png",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in web development, design, and digital
            marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6 text-pretty">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent" asChild>
                      <Link href={member.social.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent" asChild>
                      <Link href={member.social.twitter}>
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {member.social.github && (
                    <Button size="icon" variant="outline" className="h-8 w-8 bg-transparent" asChild>
                      <Link href={member.social.github}>
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
