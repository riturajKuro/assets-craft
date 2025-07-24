"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-2 md:py-3" : "bg-transparent py-3 md:py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-1">
              <div className="relative">
                <Image
                  src="/images/assets-craft-logo.png"
                  alt="Assets Craft Logo"
                  width={48}
                  height={48}
                  className={cn(
                    "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:scale-105 transition-transform duration-300"
                  )}
                />
              </div>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 group-hover:text-rose-400">
                <span className="font-serif">Assets</span>
                <span className="text-rose-500 font-serif">Craft</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-300 hover:text-white transition-all duration-300 relative group transform hover:scale-105",
                  pathname === item.href && "text-white",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full",
                    pathname === item.href && "w-full",
                  )}
                />
              </Link>
            ))}
            <GetStartedButton
              className="ml-4 bg-rose-600 hover:bg-rose-700 text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book Consultation
            </GetStartedButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0",
          )}
        >
          <nav role="navigation" className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-300 hover:text-white transition-colors px-2 py-1",
                  pathname === item.href && "text-white border-l-2 border-rose-500 pl-3",
                )}
              >
                {item.name}
              </Link>
            ))}
            <GetStartedButton
              className="mt-2 bg-rose-600 hover:bg-rose-700 text-white"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
            >
              Book Consultation
            </GetStartedButton>
          </nav>
        </div>
      </div>
    </header>
  )
}
