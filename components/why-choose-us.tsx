"use client"

import { motion } from "framer-motion"
import { Clock, Award, ThumbsUp, Shield, BadgeCheck, Headphones } from "lucide-react"

const reasons = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "24/7 Emergency Service",
    description: "Available around the clock for all your plumbing emergencies in San Diego County.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured plumbing professionals you can trust.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Satisfaction Guaranteed",
    description: "We're not satisfied until you're completely happy with our work.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises. We provide clear, detailed estimates before work begins.",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Experienced Technicians",
    description: "Our plumbers have years of experience solving complex plumbing issues.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: "Exceptional Customer Service",
    description: "Friendly, professional service from the first call to project completion.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose San Diego Plumbing Pros?</h2>
          <p className="text-xl text-muted-foreground">
            We've earned the trust of homeowners and businesses throughout San Diego with our commitment to quality and
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
