"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, CheckCircle2, ArrowRight, Clock } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function RepairsPage() {
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
                Service & Repairs
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Fast, Reliable Plumbing Repairs in San Diego
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Expert repair services for leaks, clogs, water heaters, and all plumbing emergencies, available 24/7
                throughout San Diego County.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="px-8">
                    Request Repair
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+16197232139" className="px-8 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    24/7 Emergency: (619) 723-2139
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
                src="/plumber-repairing-leak.png"
                alt="Plumbing repair services in San Diego"
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
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Expert Plumbing Repair Services</h2>
              <p className="text-lg text-muted-foreground">
                When plumbing problems strike, you need a reliable team that can respond quickly and fix the issue right
                the first time. Our experienced technicians are equipped to handle all types of plumbing repairs, from
                minor leaks to major emergencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Leak detection and repair</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Drain cleaning and unclogging</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Water heater repair and replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Toilet and faucet repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Pipe repair and replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Sewer line repairs</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact" className="flex items-center">
                  Schedule Repair Service <ArrowRight className="ml-2 h-4 w-4" />
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
                src="/water-heater-installation.jpeg"
                alt="Water heater repair"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Plumbing Repairs</h2>
            <p className="text-xl text-muted-foreground">
              Our experienced technicians can handle all types of plumbing repairs throughout San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leak Repair",
                description:
                  "Fast detection and repair of leaks in pipes, fixtures, and appliances before they cause water damage.",
                image: "/gallery/sink-drain-installation.jpeg",
              },
              {
                title: "Drain Cleaning",
                description:
                  "Professional solutions for clogged drains in sinks, tubs, showers, and toilets to restore proper flow.",
                image: "/gallery/drain-cleaning-service.jpeg",
              },
              {
                title: "Water Heater Repair",
                description:
                  "Expert diagnosis and repair of traditional and tankless water heater issues to restore hot water.",
                image: "/gallery/water-heater-installation.jpeg",
              },
              {
                title: "Toilet Repair",
                description:
                  "Solutions for running toilets, leaks, clogs, and other common toilet problems in homes and businesses.",
                image: "/gallery/residential-wall-plumbing.jpeg",
              },
              {
                title: "Sewer Line Repair",
                description:
                  "Advanced techniques to repair damaged or clogged sewer lines with minimal disruption to your property.",
                image: "/gallery/sewer-line-installation.jpeg",
              },
              {
                title: "Fixture Repair",
                description:
                  "Professional repair of leaky faucets, showerheads, and other fixtures to eliminate drips and restore function.",
                image: "/gallery/commercial-bathroom-sink.jpeg",
              },
            ].map((repair, index) => (
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
                    src={repair.image || "/placeholder.svg"}
                    alt={repair.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{repair.title}</h3>
                  <p className="text-muted-foreground">{repair.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">24/7 Emergency Plumbing Services</h2>
              <p className="text-xl text-white/90">
                Plumbing emergencies don't wait for business hours. That's why we offer round-the-clock emergency
                plumbing services throughout San Diego County.
              </p>

              <div className="space-y-4 pt-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Fast Response Times</h3>
                  <p className="text-white/80">
                    Our emergency team is on standby 24/7 to respond quickly to your urgent plumbing needs.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Fully Equipped Service Vehicles</h3>
                  <p className="text-white/80">
                    Our trucks are stocked with parts and equipment to handle most repairs on the first visit.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Experienced Emergency Plumbers</h3>
                  <p className="text-white/80">
                    Our technicians are specially trained to handle emergency situations calmly and efficiently.
                  </p>
                </div>
              </div>

              <Button variant="secondary" size="lg" asChild>
                <Link href="tel:+16197232139" className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Call Our Emergency Line: (619) 723-2139
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/plumber-working.png"
                alt="24/7 Emergency plumbing service"
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
