import type React from "react"
import "@/app/globals.css"
import { DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Assets Craft Financial Solution | Best Financial Advisor in Kolkata | Investment & Insurance Services",
  description:
    "Leading financial advisory firm in Kolkata offering expert investment planning, insurance solutions, loans, and tax services. IRDA, AMFI & NISM certified consultant Dibyendu Dey. Book free consultation today!",
  keywords:
    "financial advisor Kolkata, investment planning, insurance services, mutual funds, stock trading, home loans, tax planning, IRDA certified, AMFI certified, financial consultant",
  authors: [{ name: "Assets Craft Financial Solution" }],
  creator: "Assets Craft Financial Solution",
  publisher: "Assets Craft Financial Solution",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://assetscraft.com",
    title: "Assets Craft Financial Solution | Best Financial Advisor in Kolkata",
    description:
      "Leading financial advisory firm in Kolkata offering expert investment planning, insurance solutions, loans, and tax services.",
    siteName: "Assets Craft Financial Solution",
    images: [
      {
        url: "/images/assets-craft-logo.png",
        width: 1200,
        height: 630,
        alt: "Assets Craft Financial Solution Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assets Craft Financial Solution | Best Financial Advisor in Kolkata",
    description:
      "Leading financial advisory firm in Kolkata offering expert investment planning, insurance solutions, loans, and tax services.",
    images: ["/images/assets-craft-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://assetscraft.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f43f5e" />
        <link rel="icon" href="/images/assets-craft-logo.png" />
        <link rel="apple-touch-icon" href="/images/assets-craft-logo.png" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />
        <meta name="geo.position" content="22.5726;88.3639" />
        <meta name="ICBM" content="22.5726, 88.3639" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Assets Craft Financial Solution",
              description:
                "Leading financial advisory firm in Kolkata offering expert investment planning, insurance solutions, loans, and tax services.",
              url: "https://assetscraft.com",
              logo: "https://assetscraft.com/images/assets-craft-logo.png",
              image: "https://assetscraft.com/images/assets-craft-logo.png",
              telephone: ["+91-98310-63235", "+91-94336-80719"],
              email: "info@assetscraft.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.5726",
                longitude: "88.3639",
              },
              openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00"],
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "22.5726",
                  longitude: "88.3639",
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Financial Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Investment Planning",
                      description: "Stocks, Mutual Funds, Portfolio Management",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Insurance Services",
                      description: "Life, Health, Motor, Property Insurance",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Loan Services",
                      description: "Home Loans, Personal Loans, Business Loans",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tax Services",
                      description: "Income Tax, GST Filing, Auditing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
