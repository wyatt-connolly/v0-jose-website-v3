"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const areas = [
  "Downtown San Diego",
  "La Jolla",
  "Pacific Beach",
  "Mission Valley",
  "Coronado",
  "North Park",
  "Hillcrest",
  "Ocean Beach",
  "Point Loma",
  "Clairemont",
  "Kearny Mesa",
  "Mission Bay",
  "University City",
  "Mira Mesa",
  "Rancho Bernardo",
  "Carmel Valley",
  "Del Mar",
  "Encinitas",
  "Carlsbad",
  "Chula Vista",
  "National City",
  "El Cajon",
  "La Mesa",
  "Santee",
]

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas in San Diego County</h2>
          <p className="text-xl text-muted-foreground">
            We provide plumbing services throughout San Diego County, including these locations and surrounding areas.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <MapPin className="h-4 w-4 text-primary mr-2 shrink-0" />
              <span className="text-sm">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
