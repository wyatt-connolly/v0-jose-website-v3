import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact San Diego Plumbing Pros | Request a Quote",
  description:
    "Contact San Diego Plumbing Pros for all your commercial and residential plumbing needs. Available 24/7 for emergency services throughout San Diego County.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
