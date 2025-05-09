"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import SimplifiedLogo from "./simplified-logo"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <SimplifiedLogo className="scale-110" />

          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services/commercial" className="text-foreground hover:text-primary transition-colors">
                Commercial
              </Link>
              <Link href="/services/residential" className="text-foreground hover:text-primary transition-colors">
                Residential
              </Link>
              <Link href="/services/repairs" className="text-foreground hover:text-primary transition-colors">
                Repairs
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <Button asChild className="animate-fade-in">
              <Link href="tel:+16197232139" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(619) 723-2139</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <SimplifiedLogo />
            <button className="text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-down z-50">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services/commercial"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Commercial
                </Link>
                <Link
                  href="/services/residential"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Residential
                </Link>
                <Link
                  href="/services/repairs"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Repairs
                </Link>
                <Link
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="w-full">
                  <Link href="tel:+16197232139" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(619) 723-2139</span>
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
