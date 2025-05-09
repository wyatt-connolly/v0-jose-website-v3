"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "La Jolla, San Diego",
    rating: 5,
    text: "San Diego Plumbing Pros saved us during a major water leak emergency. They arrived within 30 minutes and fixed the issue quickly. Their team was professional and courteous. Highly recommend!",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Jennifer Thompson",
    location: "Gaslamp Quarter, San Diego",
    rating: 5,
    text: "As a restaurant owner, plumbing issues can be devastating for business. The commercial team at SD Plumbing Pros has been maintaining our systems for years with exceptional service and reliability.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "David Wilson",
    location: "Pacific Beach, San Diego",
    rating: 5,
    text: "I needed a complete bathroom remodel with new plumbing fixtures. Their team provided excellent advice, quality workmanship, and finished on schedule. The results exceeded my expectations!",
    image: "/middle-aged-man-headshot.png",
  },
  {
    name: "Sarah Martinez",
    location: "Coronado, San Diego",
    rating: 5,
    text: "After struggling with low water pressure for months, SD Plumbing Pros diagnosed and fixed the issue in one visit. Fair pricing, transparent communication, and excellent service.",
    image: "/young-woman-headshot.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Here's what San Diego residents and businesses have to say about our
            plumbing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="testimonial-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic text-muted-foreground">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
