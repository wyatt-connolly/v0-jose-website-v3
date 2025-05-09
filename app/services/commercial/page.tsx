"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, CheckCircle2, ArrowRight, Clock } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function CommercialPlumbingPage() {
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
                Commercial Plumbing Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Expert Commercial Plumbing Solutions in San Diego
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Comprehensive commercial plumbing services for businesses, offices, restaurants, and properties
                throughout San Diego County.
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
                src="/commercial-plumber-pipes.png"
                alt="Commercial plumbing services in San Diego"
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
                src="/commercial-kitchen-plumbing.png"
                alt="Commercial kitchen plumbing"
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
              <div className="bg-primary/10 p-3 rounded-full inline-block">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Comprehensive Commercial Plumbing Services</h2>
              <p className="text-lg text-muted-foreground">
                We understand that plumbing issues can disrupt your business operations and affect your bottom line. Our
                team of licensed commercial plumbers provides fast, reliable service to minimize downtime and keep your
                business running smoothly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Commercial pipe repair and replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Water heater installation and repair</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Drain cleaning and maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Backflow prevention and testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Sewer line services</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Commercial fixture installation</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact" className="flex items-center">
                  Schedule Commercial Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Our commercial plumbing expertise extends across various industries throughout San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurants & Food Service",
                description:
                  "Specialized plumbing solutions for commercial kitchens, including grease traps, disposal systems, and health code compliance.",
                image: "/restaurant-kitchen-plumbing.png",
              },
              {
                title: "Office Buildings",
                description:
                  "Comprehensive plumbing services for office complexes, from routine maintenance to emergency repairs with minimal disruption.",
                image: "/office-building-plumbing.png",
              },
              {
                title: "Retail Spaces",
                description:
                  "Reliable plumbing solutions for retail establishments, ensuring customer facilities and water systems function properly.",
                image: "/retail-store-plumbing.png",
              },
              {
                title: "Hotels & Hospitality",
                description:
                  "Specialized services for hotels, including water conservation solutions and 24/7 emergency support.",
                image: "/placeholder.svg?key=qvv45",
              },
              {
                title: "Healthcare Facilities",
                description:
                  "Code-compliant plumbing services for medical offices, clinics, and hospitals with strict sanitation requirements.",
                image: "/placeholder.svg?height=300&width=400&query=hospital plumbing system",
              },
              {
                title: "Industrial & Manufacturing",
                description:
                  "Heavy-duty plumbing solutions for industrial facilities, including specialized pipe systems and water treatment.",
                image: "/placeholder.svg?height=300&width=400&query=industrial plumbing system",
              },
            ].map((industry, index) => (
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
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Plumbing Process</h2>
            <p className="text-xl text-muted-foreground">
              We follow a systematic approach to ensure your commercial plumbing needs are addressed efficiently and
              effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We begin with a thorough assessment of your commercial plumbing needs and discuss your specific requirements.",
              },
              {
                step: "2",
                title: "Detailed Inspection",
                description:
                  "Our licensed plumbers conduct a comprehensive inspection to identify existing or potential issues.",
              },
              {
                step: "3",
                title: "Custom Solution",
                description:
                  "We develop a tailored plan with transparent pricing and timeline for your commercial plumbing project.",
              },
              {
                step: "4",
                title: "Professional Execution",
                description:
                  "Our experienced team completes the work efficiently, with minimal disruption to your business operations.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <div className="absolute -top-5 -left-5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Plumbing Services</h2>
          <p className="text-xl mb-8">
            Plumbing emergencies don't wait, and neither do we. We're available around the clock to handle any urgent
            plumbing issues.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="tel:+16197232139" className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Call Our Emergency Line: (619) 723-2139
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
