"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-800 p-3 rounded-full">
            <CheckCircle2 className="h-10 w-10" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been received. One of our plumbing experts will contact you shortly to discuss your needs.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <Input id="name" placeholder="John Smith" required />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <Input id="phone" type="tel" placeholder="(619) 555-1234" required />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service Needed
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="commercial">Commercial Plumbing</SelectItem>
            <SelectItem value="residential">Residential Plumbing</SelectItem>
            <SelectItem value="repair">Repair & Maintenance</SelectItem>
            <SelectItem value="emergency">Emergency Service</SelectItem>
            <SelectItem value="installation">New Installation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea id="message" placeholder="Please describe your plumbing needs..." rows={4} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Request"}
      </Button>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        We'll get back to you within 24 hours with a free quote.
      </p>
    </form>
  )
}
