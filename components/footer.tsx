import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SimplifiedLogo from "./simplified-logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="inline-block">
              <SimplifiedLogo className="scale-125 mb-4" />
            </div>
            <p className="text-muted-foreground">
              San Diego's trusted plumbing experts providing commercial, residential, and repair services throughout San
              Diego County.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/commercial"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Commercial Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/residential"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Residential Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-muted-foreground hover:text-primary transition-colors">
                  Service & Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-muted-foreground hover:text-primary transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/installation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  New Installations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  PO BOX: 5173
                  <br />
                  San Diego, CA 92165
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <Link href="tel:+16197232139" className="text-muted-foreground hover:text-primary transition-colors">
                  (619) 723-2139
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div className="break-all">
                  <Link
                    href="mailto:jose@elcharracasplumbingsd.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jose@elcharracasplumbingsd.com
                  </Link>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} El Charracas Plumbing. All rights reserved. License #1113661
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
