"use client"

import { Target, Eye, Heart } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We believe in the power of technology to transform businesses and create meaningful connections between
              brands and their audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-pretty">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences,
                and deliver measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To be the leading digital partner for businesses seeking innovative, scalable, and impactful web
                solutions that stand the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground text-pretty">
                Excellence, integrity, and collaboration guide everything we do. We're committed to building lasting
                relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
