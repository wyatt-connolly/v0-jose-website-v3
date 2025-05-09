"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Award, Users, Clock, Shield } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                San Diego's Trusted Plumbing Experts Since 2005
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                We've built our reputation on quality workmanship, exceptional customer service, and honest business
                practices throughout San Diego County.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="px-8">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/placeholder.svg?key=nhlv5"
                alt="El Charracas Plumbing team"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="/plumber-working.png"
                alt="Professional plumbing work"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                El Charracas Plumbing was founded with a simple mission: to provide honest, reliable, and high-quality
                plumbing services to the San Diego community. What started as a small family business has grown into one
                of the most trusted plumbing companies in San Diego County.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the years, we've built our reputation on a foundation of integrity, expertise, and exceptional
                customer service. Our team of licensed plumbers brings decades of combined experience to every job,
                whether it's a simple faucet repair or a complex commercial plumbing project.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to serve residential and commercial clients throughout San Diego with the same
                dedication to quality and service that has defined our company from the beginning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              These principles guide everything we do and have helped us become San Diego's trusted plumbing experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our work, from customer service to the quality of our plumbing solutions.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices that build trust with our customers.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Reliability",
                description:
                  "We show up on time, complete work as promised, and remain available when our customers need us most.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Expertise",
                description:
                  "We invest in ongoing training and education to ensure our team delivers the highest level of plumbing expertise.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
              >
                <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Our experienced plumbing professionals are dedicated to providing exceptional service to every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Jose A. Hernandez Sr.",
                position: "Owner & Master Plumber",
                bio: "With decades of experience, Jose Sr. founded El Charracas Plumbing to provide honest, quality plumbing services throughout San Diego.",
                image: "/hispanic-plumber-portrait.png",
              },
              {
                name: "Jose A. Hernandez",
                position: "Lead Plumber",
                bio: "Following in his father's footsteps, Jose brings technical expertise and a commitment to customer satisfaction to every project.",
                image: "/young-hispanic-plumber.png",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-[4/3] object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Commitment to San Diego</h2>
              <p className="text-lg text-muted-foreground">
                As a locally owned and operated business, we're proud to be part of the San Diego community. We're
                committed to providing exceptional plumbing services while also giving back to the community we call
                home.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Our team understands San Diego's unique plumbing challenges, from coastal corrosion issues to
                      local building codes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Community Involvement</h3>
                    <p className="text-muted-foreground">
                      We actively support local charities and community initiatives throughout San Diego County.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Environmental Responsibility</h3>
                    <p className="text-muted-foreground">
                      We're committed to eco-friendly plumbing practices and water conservation solutions for our
                      drought-prone region.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/san-diego-skyline.png"
                alt="San Diego skyline"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
