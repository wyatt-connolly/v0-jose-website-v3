"use client"

import { motion } from "framer-motion"
import { Building2, Home, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Commercial Plumbing",
    description:
      "Comprehensive plumbing solutions for businesses, offices, restaurants, and commercial properties throughout San Diego.",
    link: "/services/commercial",
    image: "/commercial-plumbing-system.png",
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Residential Plumbing",
    description:
      "Expert plumbing services for homes and apartments, from minor fixes to complete repiping and installations.",
    link: "/services/residential",
    image: "/residential-bathroom-plumbing.png",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Service & Repairs",
    description:
      "Fast, reliable repair services for leaks, clogs, water heaters, and all plumbing emergencies, available 24/7.",
    link: "/services/repairs",
    image: "/plumber-repairing-leak.png",
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Plumbing Services</h2>
          <p className="text-xl text-muted-foreground">
            Providing top-quality plumbing solutions throughout San Diego County for both commercial and residential
            clients.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={service.link} className="flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
