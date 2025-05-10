"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

// Gallery categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "featured", name: "Featured Projects" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "new-construction", name: "New Construction" },
  { id: "repairs", name: "Repairs" },
  { id: "installations", name: "Installations" },
  { id: "bathrooms", name: "Bathrooms" },
  { id: "kitchens", name: "Kitchens" },
  { id: "sewer", name: "Sewer & Drainage" },
  { id: "water-lines", name: "Water Lines" },
  { id: "industrial", name: "Industrial" },
  { id: "company", name: "Our Company" },
]

// Gallery items with your actual photos
const galleryItems = [
  // New photos - July 2025 (Second Batch)
  {
    id: 40,
    title: "New Construction PVC Rough-In",
    category: "new-construction",
    description:
      "PVC plumbing rough-in installation in new construction with proper pipe placement and support through wall studs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2976-pBBjL4a58AMe5u4gCvkbBIZvCoBgDt.webp",
    date: "July 2025",
    featured: true,
  },
  {
    id: 41,
    title: "Navien Tankless Water Heater Installation",
    category: "installations",
    description:
      "Professional installation of a Navien tankless water heater with proper gas line, water connections, and insulation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2767-2IzAMj0NcmFMTCWLrZ2oCjSy0nUm3k.webp",
    date: "July 2025",
  },
  {
    id: 42,
    title: "Crawl Space Plumbing",
    category: "repairs",
    description:
      "Under-house plumbing system with properly installed drain pipes and insulated ductwork in a residential crawl space.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3057-0JdmK3HUDNFDJUSdoJgCLTUBD2fbFn.webp",
    date: "July 2025",
  },
  {
    id: 43,
    title: "Exterior Tankless Water Heater",
    category: "installations",
    description:
      "Exterior wall-mounted tankless water heater installation with proper water and gas connections for a residential property.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3543-4AonK4RFAS33cjqeAnf04MmkcPjSeI.webp",
    date: "July 2025",
  },
  {
    id: 44,
    title: "Toilet Flange Installation",
    category: "bathrooms",
    description:
      "Toilet flange installation with proper drain connection on decorative tile flooring during bathroom renovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3623-secm7A6aMVncYlw83F4TKCZqPTMfJm.webp",
    date: "July 2025",
  },
  {
    id: 45,
    title: "Rheem Tankless Water Heater",
    category: "installations",
    description:
      "Rheem tankless water heater installation on exterior wall with professional copper pipe connections and proper venting.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3702-Mg2nozXnq2CLEzMrpz7kO12xMsZsHY.webp",
    date: "July 2025",
    featured: true,
  },
  {
    id: 46,
    title: "ABS Drain Pipe Installation",
    category: "repairs",
    description: "ABS drain pipe installation with proper support clamps and connections in a residential crawl space.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3503-zwAPWacRv1Uph6ay16T16gSlewmEjB.webp",
    date: "July 2025",
  },
  {
    id: 47,
    title: "Outdoor Water Line Repair",
    category: "water-lines",
    description:
      "Professional plumber repairing an outdoor water line with proper excavation and pipe connection techniques.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3594-LBqaHkntTFkqdatHZzb0oOboyeDKhd.webp",
    date: "July 2025",
  },

  // New photos - July 2025 (First Batch)
  {
    id: 30,
    title: "Professional P-Trap Installation",
    category: "repairs",
    description:
      "Chrome P-trap and drain assembly installation with proper connections and secure mounting for optimal drainage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2017-ySRVou8szrFcJQOFpFbtusg5GjkzK8.webp",
    date: "July 2025",
  },
  {
    id: 31,
    title: "Gas Line Installation",
    category: "installations",
    description:
      "Yellow-coated gas line installation with proper support brackets and safety features for a residential property.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2420-yaeErTbUoU65Zpg0V6GuEvW4ByzoJD.webp",
    date: "July 2025",
  },
  {
    id: 32,
    title: "Pipe Repair Service",
    category: "repairs",
    description:
      "Professional pipe repair using specialized tools to ensure proper connection and prevent future leaks.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2579-AmpCe3VZUwTcY8TjZE2Bd0zlRLDoXh.webp",
    date: "July 2025",
  },
  {
    id: 33,
    title: "Bathroom Plumbing Rough-In",
    category: "new-construction",
    description:
      "Complete bathroom rough-in plumbing with proper drain lines, vents, and water supply installation during renovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2594-MqJgCupnaH5UMO7k2574u3nLG1txHM.webp",
    date: "July 2025",
    featured: true,
  },
  {
    id: 34,
    title: "Copper Pipe Installation",
    category: "installations",
    description:
      "Copper water supply lines with proper soldering and connection to mixing valve in residential wall cavity.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1996-xyKOI8662EYWVCWhrr0KMpLt4uZ4eO.webp",
    date: "July 2025",
  },
  {
    id: 35,
    title: "Shower Plumbing Installation",
    category: "bathrooms",
    description:
      "Rough-in plumbing for shower installation with proper drain placement and water supply lines in new construction.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3321-IPdnMHj50RIEmVHvmZ8bcorRfWOYZm.webp",
    date: "July 2025",
    featured: true,
  },
  {
    id: 36,
    title: "PVC Drain Installation",
    category: "kitchens",
    description:
      "Clean PVC P-trap and drain assembly installation for kitchen sink with proper alignment and connections.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3675-9APci3LHOZ6Cj84LDsSH5zRlNP2z80.webp",
    date: "July 2025",
  },
  {
    id: 37,
    title: "Laundry Connection Installation",
    category: "installations",
    description:
      "Washing machine box installation with color-coded hot and cold connections and proper pipe routing through wall studs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2658-cKZSPIJLOtyt9529JDq8FeOeLVd56S.webp",
    date: "July 2025",
  },
  {
    id: 38,
    title: "Ceiling Drain Installation",
    category: "repairs",
    description:
      "Ceiling plumbing installation with proper venting and drain pipes for second-floor bathroom renovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3709-mjCup2RysiwsYKc3zYvUbJfvGo5Rom.webp",
    date: "July 2025",
  },
  {
    id: 39,
    title: "Bathroom Wall Plumbing",
    category: "bathrooms",
    description:
      "Exposed plumbing behind bathroom wall showing proper drain and vent pipe installation during renovation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3554-5sy9rdEWhdNdqG4ieUipKUwqf5svJW.webp",
    date: "July 2025",
  },

  // Existing photos - June 2025
  {
    id: 1,
    title: "Luxury Shower Installation",
    category: "bathrooms",
    description:
      "Custom shower installation featuring marble-look tile, ceiling-mounted rain shower head, handheld fixture, and LED-lit decorative niche.",
    image: "/gallery/luxury-shower-installation.jpeg",
    date: "June 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Completed Shower Project",
    category: "bathrooms",
    description:
      "Our team proudly showcasing a completed luxury shower installation with premium fixtures and custom tile work.",
    image: "/gallery/completed-shower-project.jpeg",
    date: "June 2025",
    featured: true,
  },
  {
    id: 3,
    title: "Sink Drain Installation",
    category: "kitchens",
    description:
      "Professional sink drain installation with proper P-trap configuration and ABS piping for optimal drainage.",
    image: "/gallery/sink-drain-installation.jpeg",
    date: "June 2025",
  },
  {
    id: 4,
    title: "Tankless Water Heater Team Installation",
    category: "installations",
    description:
      "Our expert team installing a high-efficiency tankless water heater with proper venting and copper pipe connections.",
    image: "/gallery/tankless-water-heater-team.jpeg",
    date: "June 2025",
    featured: true,
  },
  {
    id: 5,
    title: "Copper Pipe Rough-In",
    category: "new-construction",
    description:
      "Precision copper pipe installation during the rough-in phase of a bathroom renovation, ensuring proper water supply.",
    image: "/gallery/copper-pipe-rough-in.jpeg",
    date: "June 2025",
  },

  // May 2025 photos
  {
    id: 6,
    title: "Kitchen Sink with Garbage Disposal",
    category: "kitchens",
    description:
      "Professional installation of a Moen GXP50c 1/2 HP garbage disposal with proper drain connections and P-trap configuration.",
    image: "/gallery/kitchen-sink-garbage-disposal.jpeg",
    date: "May 2025",
  },
  {
    id: 7,
    title: "Under-Sink Plumbing Installation",
    category: "kitchens",
    description:
      "Detailed view of under-sink plumbing with ABS drain pipes and proper P-trap installation for optimal drainage and code compliance.",
    image: "/gallery/under-sink-plumbing.jpeg",
    date: "May 2025",
  },
  {
    id: 8,
    title: "Professional Drain Cleaning",
    category: "repairs",
    description:
      "Our technician using specialized equipment to clear a drain blockage, ensuring proper water flow and preventing future clogs.",
    image: "/gallery/drain-cleaning-service.jpeg",
    date: "May 2025",
  },
  {
    id: 9,
    title: "Rheem Water Heater Installation",
    category: "installations",
    description:
      "Installation of a Rheem Performance water heater with proper gas line connection, expansion tank, and safety features.",
    image: "/gallery/water-heater-installation.jpeg",
    date: "May 2025",
  },
  {
    id: 10,
    title: "El Charracas Plumbing Service Van",
    category: "company",
    description:
      "Our fully equipped service vehicle ready to provide prompt, professional plumbing services throughout San Diego County.",
    image: "/gallery/ec-plumbing-service-van.jpeg",
    date: "May 2025",
  },

  // April 2025 photos
  {
    id: 11,
    title: "Commercial Drainage System",
    category: "commercial",
    description:
      "Installation of black ABS drainage pipes with proper supports and hangers in a commercial building ceiling.",
    image: "/gallery/commercial-drainage-system.jpeg",
    date: "April 2025",
  },
  {
    id: 12,
    title: "Foundation Plumbing Rough-In",
    category: "new-construction",
    description:
      "PVC pipe installation in concrete foundation with proper drainage connections for a new construction project.",
    image: "/gallery/foundation-plumbing-rough-in.jpeg",
    date: "April 2025",
  },
  {
    id: 13,
    title: "New Construction Plumbing Installation",
    category: "new-construction",
    description:
      "El Charracas Plumbing technician installing PVC drainage pipes in a new construction trench with proper slope and alignment.",
    image: "/gallery/new-construction-plumbing.jpeg",
    date: "April 2025",
  },
  {
    id: 14,
    title: "Industrial Water Treatment System",
    category: "industrial",
    description:
      "Custom-designed industrial water treatment system with PVC piping, valves, and control mechanisms for a commercial facility.",
    image: "/gallery/industrial-water-system.jpeg",
    date: "April 2025",
  },
  {
    id: 15,
    title: "Commercial Foundation Plumbing",
    category: "commercial",
    description:
      "Large-scale commercial building foundation with plumbing rough-in work, featuring moisture barrier and properly positioned drain pipes.",
    image: "/gallery/commercial-foundation-plumbing.jpeg",
    date: "April 2025",
  },
  {
    id: 16,
    title: "Residential Wall Plumbing",
    category: "residential",
    description:
      "Behind-the-wall plumbing installation showing proper ABS drain pipe configuration during a bathroom renovation.",
    image: "/gallery/residential-wall-plumbing.jpeg",
    date: "April 2025",
  },

  // March 2025 photos
  {
    id: 17,
    title: "Commercial Ceiling Plumbing Installation",
    category: "commercial",
    description:
      "Installation of ceiling plumbing systems including water lines, drain pipes, and ventilation in a commercial building renovation in San Diego.",
    image: "/gallery/commercial-ceiling-plumbing.jpeg",
    date: "March 2025",
  },
  {
    id: 18,
    title: "Commercial Bathroom Sink Installation",
    category: "bathrooms",
    description:
      "Double-basin commercial bathroom sink with wall-mounted faucets and soap dispensers installed in a San Diego office building.",
    image: "/gallery/commercial-bathroom-sink.jpeg",
    date: "March 2025",
  },
  {
    id: 19,
    title: "Sewer Line Installation",
    category: "sewer",
    description:
      "Underground sewer line installation with proper drainage and connection to main sewer system for a residential property.",
    image: "/gallery/sewer-line-installation.jpeg",
    date: "March 2025",
  },
  {
    id: 20,
    title: "Backflow Prevention System",
    category: "installations",
    description:
      "Installation of backflow prevention device and water line connections for a commercial property in San Diego County.",
    image: "/gallery/backflow-prevention-installation.jpeg",
    date: "March 2025",
  },
  {
    id: 21,
    title: "Water Line Trench Installation",
    category: "water-lines",
    description:
      "PVC water line installation in a properly excavated trench with El Charracas Plumbing team ensuring precise alignment and connections.",
    image: "/gallery/water-line-trench-installation.jpeg",
    date: "March 2025",
  },

  // February 2025 photos
  {
    id: 22,
    title: "Commercial Kitchen Plumbing",
    category: "commercial",
    description: "Complete plumbing installation for a restaurant kitchen in Downtown San Diego.",
    image: "/commercial-kitchen-plumbing.png",
    date: "February 2025",
  },
  {
    id: 23,
    title: "Bathroom Renovation",
    category: "residential",
    description: "Full bathroom remodel with new fixtures and piping in La Jolla residence.",
    image: "/modern-bathroom-plumbing.png",
    date: "February 2025",
    featured: true,
  },
  {
    id: 24,
    title: "Emergency Pipe Repair",
    category: "repairs",
    description: "Emergency repair of burst pipe in Pacific Beach apartment complex.",
    image: "/plumber-repairing-leak.png",
    date: "February 2025",
  },
  {
    id: 25,
    title: "Tankless Water Heater Installation",
    category: "installations",
    description: "Energy-efficient tankless water heater installation in Coronado home.",
    image: "/tankless-water-heater-installation.png",
    date: "February 2025",
  },
  {
    id: 26,
    title: "Office Building Plumbing System",
    category: "commercial",
    description: "Complete plumbing system for new office building in Mission Valley.",
    image: "/commercial-plumbing-system.png",
    date: "February 2025",
  },
  {
    id: 27,
    title: "Kitchen Sink Replacement",
    category: "kitchens",
    description: "Modern kitchen sink and faucet installation in North Park home.",
    image: "/kitchen-sink-installation.png",
    date: "February 2025",
  },
  {
    id: 28,
    title: "Bathroom Fixture Upgrade",
    category: "bathrooms",
    description: "Complete bathroom fixture upgrade in Hillcrest condominium.",
    image: "/bathroom-fixtures-upgrade.png",
    date: "February 2025",
  },
  {
    id: 29,
    title: "Hotel Plumbing Maintenance",
    category: "commercial",
    description: "Ongoing plumbing maintenance for hotel in Downtown San Diego.",
    image: "/hotel-plumbing-maintenance.png",
    date: "January 2025",
  },
]

// Filter featured projects
const featuredProjects = galleryItems.filter((item) => item.featured)

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const itemsPerPage = 12

  // Filter gallery items based on active category
  let filteredItems = galleryItems

  // Filter by category
  if (activeCategory === "featured") {
    filteredItems = featuredProjects
  } else if (activeCategory !== "all") {
    filteredItems = galleryItems.filter((item) => item.category === activeCategory)
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredItems.slice(startIndex, endIndex)

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Open lightbox
  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Navigate through lightbox images
  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredItems[newIndex].id)
  }

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
                Our Work
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Project Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Browse our portfolio of completed plumbing projects throughout San Diego County.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(item.id)}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white h-10 w-10" />
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-sm text-primary mb-2">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-10">
            <Button variant="ghost" size="icon" onClick={closeLightbox} className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateLightbox("prev")}
              className="text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateLightbox("next")}
              className="text-white hover:bg-white/20"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="max-w-5xl max-h-[80vh] w-full">
            {filteredItems.find((item) => item.id === selectedImage) && (
              <>
                <img
                  src={filteredItems.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                  alt={filteredItems.find((item) => item.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-bold">
                    {filteredItems.find((item) => item.id === selectedImage)?.title}
                  </h3>
                  <div className="flex justify-center items-center gap-3 mt-1">
                    <span className="text-primary">
                      {
                        categories.find(
                          (cat) => cat.id === filteredItems.find((item) => item.id === selectedImage)?.category,
                        )?.name
                      }
                    </span>
                    <span className="text-white/60 text-sm">
                      {filteredItems.find((item) => item.id === selectedImage)?.date}
                    </span>
                  </div>
                  <p className="text-white/80 mt-2">
                    {filteredItems.find((item) => item.id === selectedImage)?.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
