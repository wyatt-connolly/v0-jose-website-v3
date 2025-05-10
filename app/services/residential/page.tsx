"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, CheckCircle2, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function ResidentialPlumbingPage() {
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
                Residential Plumbing Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Expert Residential Plumbing for San Diego Homes
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Professional plumbing services for homes and apartments throughout San Diego County, from minor fixes to
                complete repiping.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="px-8">
                    Request Service
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+16197232139" className="px-8">
                    Call (619) 723-2139
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
                src="/residential-bathroom-plumbing.png"
                alt="Residential plumbing services in San Diego"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-primary/10 p-3 rounded-full inline-block">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Complete Home Plumbing Solutions</h2>
              <p className="text-lg text-muted-foreground">
                From leaky faucets to complete bathroom remodels, our licensed residential plumbers provide expert
                service for all your home plumbing needs. We treat your home with respect and ensure quality workmanship
                on every job.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Faucet and fixture repair/replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Toilet repair and installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Drain cleaning and unclogging</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Water heater services</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Pipe repair and replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Sewer line services</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact" className="flex items-center">
                  Schedule Home Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/modern-bathroom-plumbing.png"
                alt="Bathroom plumbing installation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Residential Plumbing Services</h2>
            <p className="text-xl text-muted-foreground">
              We provide comprehensive plumbing solutions for homes throughout San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Plumbing",
                description:
                  "Expert services for sinks, faucets, garbage disposals, dishwashers, and all kitchen plumbing needs.",
                image: "/kitchen-sink-installation.png",
              },
              {
                title: "Bathroom Plumbing",
                description:
                  "Complete solutions for toilets, showers, tubs, sinks, and all bathroom fixtures and pipes.",
                image: "/bathroom-fixtures-upgrade.png",
              },
              {
                title: "Water Heater Services",
                description: "Installation, repair, and maintenance for traditional and tankless water heaters.",
                image: "/tankless-water-heater-installation.png",
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain cleaning services to eliminate clogs and ensure proper water flow.",
                image: "/gallery/drain-cleaning-service.jpeg",
              },
              {
                title: "Repiping Services",
                description:
                  "Complete home repiping with copper or PEX piping for improved water quality and pressure.",
                image: "/gallery/copper-pipe-rough-in.jpeg",
              },
              {
                title: "Leak Detection & Repair",
                description: "Advanced techniques to locate and repair hidden leaks before they cause major damage.",
                image: "/gallery/sink-drain-installation.jpeg",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
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
            >
              <img
                src="/young-hispanic-plumber.png"
                alt="Plumber consulting with homeowner"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Why San Diego Homeowners Choose Us</h2>
              <p className="text-lg text-muted-foreground">
                We've earned the trust of homeowners throughout San Diego County with our commitment to quality service,
                fair pricing, and professional expertise.
              </p>

              <div className="space-y-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Licensed & Experienced Technicians</h3>
                  <p className="text-muted-foreground">
                    Our plumbers are fully licensed, insured, and have years of experience solving complex residential
                    plumbing issues.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Transparent, Upfront Pricing</h3>
                  <p className="text-muted-foreground">
                    We provide detailed estimates before beginning work, with no hidden fees or surprise charges.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Prompt, Reliable Service</h3>
                  <p className="text-muted-foreground">
                    We arrive on time, work efficiently, and clean up thoroughly after completing the job.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    We stand behind our work with a 100% satisfaction guarantee on all residential plumbing services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
