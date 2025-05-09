import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Charracas Plumbing | Commercial & Residential Plumbing Services",
  description:
    "San Diego's trusted plumbing experts providing commercial, residential, and repair services throughout San Diego County. Available 24/7 for emergency plumbing needs.",
  keywords:
    "plumbing, San Diego plumber, commercial plumbing, residential plumbing, plumbing repairs, emergency plumber, San Diego County, plumbing services",
  authors: [{ name: "El Charracas Plumbing" }],
  openGraph: {
    title: "El Charracas Plumbing | Commercial & Residential Plumbing Services",
    description:
      "San Diego's trusted plumbing experts providing commercial, residential, and repair services throughout San Diego County. Available 24/7 for emergency plumbing needs.",
    url: "https://elcharracasplumbingsd.com",
    siteName: "El Charracas Plumbing",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
                
                window.addEventListener('beforeunload', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
