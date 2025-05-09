"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#0078b4] to-[#005a8c] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Plumbing Help in San Diego?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether it's an emergency repair or a planned installation, our team of expert plumbers is ready to help you
            with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="px-8">
                Request a Quote
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="tel:+16197232139" className="px-8 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call (619) 723-2139
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
