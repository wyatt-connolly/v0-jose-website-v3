import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import ServiceAreas from "@/components/service-areas"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "El Charracas Plumbing | Expert Commercial & Residential Plumbing Services",
  description:
    "San Diego's trusted plumbing experts providing commercial, residential, and repair services throughout San Diego County. Available 24/7 for emergency plumbing needs.",
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <WhyChooseUs />

      <TestimonialsSection />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact El Charracas Plumbing</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need commercial plumbing, residential services, or emergency repairs, our team is ready to
                help with all your plumbing needs in San Diego County.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Our Plumbing Services Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Commercial plumbing installation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Residential plumbing repairs and installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>24/7 emergency plumbing services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Drain cleaning and sewer line services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Water heater repair and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Leak detection and repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fixture installation and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Repiping and plumbing renovations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Service Hours</h3>
                <p className="mb-2">
                  <span className="font-semibold">Regular Hours:</span>
                </p>
                <ul className="mb-4">
                  <li>Monday-Friday: 7am-4pm</li>
                  <li>Saturday: 7am-2pm</li>
                  <li>Sunday: Closed</li>
                </ul>

                <p className="mb-2">
                  <span className="font-semibold">After Hours:</span>
                </p>
                <ul className="mb-4">
                  <li>Monday-Friday: 4pm-8pm</li>
                  <li>Saturday: 2pm-7pm</li>
                  <li>Sunday: Closed</li>
                </ul>

                <p className="text-primary font-semibold">24/7 Emergency Service Available</p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <CTASection />
    </>
  )
}
