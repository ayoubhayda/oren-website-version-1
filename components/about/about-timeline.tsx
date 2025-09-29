"use client"

import { Calendar } from "lucide-react"

const milestones = [
  {
    year: "2019",
    title: "oren Founded",
    description: "Started as a small web development studio with a vision to help businesses grow online.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew to a team of 5 specialists covering design, development, and digital marketing.",
  },
  {
    year: "2021",
    title: "First Major Platform",
    description: "Launched our first enterprise-scale platform, establishing our reputation for complex projects.",
  },
  {
    year: "2022",
    title: "50+ Projects Milestone",
    description: "Reached 50 successful project deliveries with 100% client satisfaction rate.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received recognition for innovative web solutions and outstanding client service.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Expanding our services and team to serve more businesses with cutting-edge solutions.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Our Journey</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            From a small startup to a trusted digital partner, here's how we've grown over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold relative z-10">
                    {milestone.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pt-3">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-pretty">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
