import type { Metadata } from "next"
import GalleryPageClient from "./GalleryPageClient"

export const metadata: Metadata = {
  title: "Project Gallery | El Charracas Plumbing",
  description:
    "View our portfolio of completed plumbing projects throughout San Diego County. See examples of our commercial, residential, and repair work.",
}

export default function GalleryPage() {
  return <GalleryPageClient />
}
