"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPageClient() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch With El Charracas Plumbing</h1>
              <p className="text-xl text-muted-foreground">
                We're here to help with all your plumbing needs. Contact us for a free quote or emergency service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions or need to schedule service? Reach out to our team using any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-muted-foreground">
                      PO BOX: 5173
                      <br />
                      San Diego, CA 92165
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground">Main: (619) 723-2139</p>
                    <p className="text-primary font-semibold">License #1113661</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground break-all">jose@elcharracasplumbingsd.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="font-medium mt-1">Regular Hours:</p>
                    <p className="text-muted-foreground">Monday-Friday: 7am-4pm</p>
                    <p className="text-muted-foreground">Saturday: 7am-2pm</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>

                    <p className="font-medium mt-3">After Hours:</p>
                    <p className="text-muted-foreground">Monday-Friday: 4pm-8pm</p>
                    <p className="text-muted-foreground">Saturday: 2pm-7pm</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>

                    <p className="text-primary font-semibold mt-2">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-lg mb-4">Service Area</h3>
                <p className="text-muted-foreground">
                  We provide plumbing services throughout San Diego County, including Downtown, La Jolla, Pacific Beach,
                  Mission Valley, Coronado, North Park, Hillcrest, Ocean Beach, Point Loma, Clairemont, Kearny Mesa,
                  Mission Bay, University City, Mira Mesa, Rancho Bernardo, Carmel Valley, Del Mar, Encinitas, Carlsbad,
                  Chula Vista, National City, El Cajon, La Mesa, and Santee.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Our central location allows us to serve all of San Diego County efficiently.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107207.95548877376!2d-117.20880754179685!3d32.715738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1715271654000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="El Charracas Plumbing Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0078b4] to-[#005a8c] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Emergency Plumbing Help?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our emergency plumbing team is available 24/7 to handle urgent plumbing issues throughout San Diego
              County.
            </p>
            <div className="inline-block bg-white text-primary px-6 py-4 rounded-lg text-2xl font-bold">
              Call Now: (619) 723-2139
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
