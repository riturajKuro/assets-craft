"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  ChevronRight,
  BarChart3,
  Shield,
  Users,
  Briefcase,
  Calculator,
  FileText,
  Home,
  Building,
  PieChart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Linkedin,
  Twitter,
  Clock,
  Calendar,
  Star,
} from "lucide-react"
import { ContactSection } from "./contact-section"
import Header from "@/components/header"
import VideoTestimonials from "@/components/video-testimonials";
import ContactForm from "@/components/contact-form";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden scroll-container">
      {/* Enhanced Stock Market Background Pattern */}
      <div className="fixed inset-0 fixed-bg pointer-events-none stock-pattern market-data-bg">
        <Image
          src="/images/financial-data-bg.png"
          alt=""
          fill
          className="object-cover opacity-8 mix-blend-overlay"
          priority
        />
      </div>

      {/* All content with relative z-index */}
      <div className="relative content-layer">
        {/* Header */}
        <Header />

        {/* Hero Section - Enhanced with Single Background Image */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Single Hero Background Image with Animation */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-13%20021540-dJEJFEiyQVy4i6thGDDZsCM8rGAjn8.png"
              alt="Financial market data and stock charts visualization"
              fill
              className="object-cover opacity-75 hero-bg-animate"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-3/5 space-y-6 text-center lg:text-left">
                {/* Enhanced Hero Words with Animations */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="block hero-word-1 opacity-0">Secure.</span>
                  <span className="block hero-word-2 opacity-0">Grow.</span>
                  <span className="block hero-word-3 opacity-0">Prosper.</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-slide-up animation-delay-1000">
                  Trusted Financial Guidance for Every Stage of Life
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-1000">
                  <Dialog>
                    <DialogTrigger asChild>
                      <GetStartedButton className="bg-rose-600 hover:bg-rose-700 text-white transform hover:scale-105 transition-all duration-300 animate-pulse-glow">
                        Book Your Free Consultation
                      </GetStartedButton>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">Book Your Free Consultation</DialogTitle>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-rose-600 text-rose-500 hover:bg-rose-950/20 transform hover:scale-105 transition-all duration-300 bg-transparent"
                    onClick={() => {
                      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="text-gray-400 text-sm pt-6 animate-slide-up animation-delay-1000">
                  <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Kolkata</span>
                    <span className="hidden sm:inline">|</span>
                    <Phone className="h-4 w-4 ml-2 flex-shrink-0" />
                    <a href="tel:+919831063235" className="hover:text-rose-500 transition-colors">
                      +91 98310 63235
                    </a>
                    <span className="hidden sm:inline">|</span>
                    <a href="tel:+919433680719" className="hover:text-rose-500 transition-colors">
                      +91 94336 80719
                    </a>
                  </p>
                </div>
              </div>
              <div className="lg:w-2/5 w-full max-w-md animate-slide-left animation-delay-800">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-600 to-purple-600 opacity-75 blur animate-pulse"></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-rose-500 transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-4">Get Expert Financial Advice</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center animate-slide-right animation-delay-1000">
                        <CheckCircle className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                        <span>Personalized Investment Strategy</span>
                      </li>
                      <li className="flex items-center animate-slide-right animation-delay-1000">
                        <CheckCircle className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                        <span>Health & Life Insurance Coverage Analysis</span>
                      </li>
                      <li className="flex items-center animate-slide-right animation-delay-1000">
                        <CheckCircle className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                        <span>Tax Optimization Planning</span>
                      </li>
                      <li className="flex items-center animate-slide-right animation-delay-1000">
                        <CheckCircle className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0" />
                        <span>Retirement Planning</span>
                      </li>
                    </ul>
                    <GetStartedButton
                      className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white"
                      onClick={() => {
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Schedule Now
                    </GetStartedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
                About <span className="text-rose-500">Assets Craft</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-slide-up animation-delay-200 mb-12">
                Led by IRDA, AMFI & NISM Certified Financial Consultant Dibyendu Dey, Assets Craft helps you protect
                your future, maximize your money, and simplify your finances — all under one roof.
              </p>
              <div className="flex justify-center animate-slide-up animation-delay-400">
                <Image
                  src="/images/financial-data-bg.png"
                  alt="Financial market data and investment analytics dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg opacity-90 hover:opacity-100 transition-all duration-500 transform hover:scale-105 max-w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - COMPLETELY SIMPLIFIED */}
        <section id="services" className="py-16 sm:py-20 bg-gray-900/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Our <span className="text-rose-500">Services</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg">
              Comprehensive financial solutions tailored to your unique needs and goals
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Insurance */}
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-colors duration-300">
                <div className="h-14 w-14 rounded-full bg-rose-900/30 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Insurance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Life Insurance</li>
                  <li>Health Insurance</li>
                  <li>Mediclaim</li>
                  <li>Motor Insurance</li>
                  <li>Property Insurance</li>
                </ul>
              </div>

              {/* Investments */}
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-colors duration-300">
                <div className="h-14 w-14 rounded-full bg-rose-900/30 flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Investments</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Stocks & Stock Trading</li>
                  <li>Mutual Funds</li>
                  <li>Portfolio Management</li>
                  <li>Retirement Planning</li>
                </ul>
              </div>

              {/* Loans */}
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-colors duration-300">
                <div className="h-14 w-14 rounded-full bg-rose-900/30 flex items-center justify-center mb-6">
                  <Home className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Loans</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Home Loans</li>
                  <li>Personal Loans</li>
                  <li>Business Loans</li>
                  <li>Loan Restructuring</li>
                </ul>
              </div>

              {/* Tax & Compliance */}
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-colors duration-300">
                <div className="h-14 w-14 rounded-full bg-rose-900/30 flex items-center justify-center mb-6">
                  <Calculator className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tax & Compliance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Income Tax Returns</li>
                  <li>GST Filing</li>
                  <li>Auditing</li>
                  <li>Accounting</li>
                </ul>
              </div>

              {/* Real Estate */}
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-colors duration-300">
                <div className="h-14 w-14 rounded-full bg-rose-900/30 flex items-center justify-center mb-6">
                  <Building className="h-7 w-7 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Real Estate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Land</li>
                  <li>Flat-House</li>
                  <li>Bungalow</li>
                  <li>New-Resell</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-black/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center animate-fade-in">
              Why <span className="text-rose-500">Choose Us</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg animate-slide-up animation-delay-200">
              4 reasons why our clients trust us with their financial future
            </p>

            <div className="relative max-w-5xl mx-auto mb-16 overflow-hidden rounded-lg animate-slide-up animation-delay-400">
              <Image
                src="/images/bull-market.png"
                alt="Bull market financial chart showing upward growth trends"
                width={1200}
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center p-6 animate-slide-up animation-delay-200 hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-rose-900/30 flex items-center justify-center mx-auto mb-4 hover:bg-rose-900/50 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certified & Transparent</h3>
                <p className="text-gray-400">
                  IRDA, AMFI & NISM certified consultant with complete transparency in all dealings
                </p>
              </div>

              <div className="text-center p-6 animate-slide-up animation-delay-400 hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-rose-900/30 flex items-center justify-center mx-auto mb-4 hover:bg-rose-900/50 transition-colors duration-300">
                  <Briefcase className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">All Services Under One Roof</h3>
                <p className="text-gray-400">
                  From insurance to investments, loans to tax planning - everything in one place
                </p>
              </div>

              <div className="text-center p-6 animate-slide-up animation-delay-600 hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-rose-900/30 flex items-center justify-center mx-auto mb-4 hover:bg-rose-900/50 transition-colors duration-300">
                  <Building className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Knowledge & Support</h3>
                <p className="text-gray-400">Deep understanding of local market conditions and personalized support</p>
              </div>

              <div className="text-center p-6 animate-slide-up animation-delay-800 hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-rose-900/30 flex items-center justify-center mx-auto mb-4 hover:bg-rose-900/50 transition-colors duration-300">
                  <PieChart className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Financial Planning</h3>
                <p className="text-gray-400">
                  Customized strategies aligned with your unique financial goals and risk appetite
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Consultant */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-950/90 to-gray-900/90">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Meet Your Consultant</h2>
            <div className="flex justify-center mb-6">
              <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-rose-600 shadow-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                <Image
                  src="/images/consultant.jpg"
                  alt="Dibyendu Dey - Financial Consultant"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full rounded-full border-0 shadow-lg"
                  priority
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Dibyendu Dey</h3>
            <p className="text-gray-300 mb-4">
              IRDA, AMFI & NISM Certified Financial Consultant with extensive experience in helping clients
              achieve their financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-rose-600 hover:bg-rose-700 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("tel:+919831063235")}
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 98310 63235
              </Button>
              <Button
                variant="outline"
                className="border-rose-600 text-rose-500 hover:bg-rose-950/20 transform hover:scale-105 transition-all duration-300 bg-transparent"
                onClick={() => window.open("tel:+919433680719")}
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 94336 80719
              </Button>
            </div>
          </div>
        </section>

        <VideoTestimonials />

        {/* Who We Serve */}
        <section className="py-16 sm:py-20 bg-black/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center animate-fade-in">
              Who We <span className="text-rose-500">Serve</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg animate-slide-up animation-delay-200">
              Tailored financial solutions for various client profiles
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Salaried Professionals", desc: "Maximize savings & investments" },
                { title: "Families", desc: "Secure future & education planning" },
                { title: "Business Owners & Professionals", desc: "Business growth & tax optimization" },
                { title: "New Investors", desc: "Start your investment journey" },
                { title: "Seniors", desc: "Retirement & estate planning" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-rose-500 transition-all duration-300 text-center transform hover:scale-105 hover:-translate-y-2 animate-slide-up animation-delay-${200 + index * 200}`}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-black/95 to-gray-900/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center animate-fade-in">
              Client <span className="text-rose-500">Testimonials</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg animate-slide-up animation-delay-200">
              What our clients say about our services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  name: "Rajib Dutta",
                  role: "Satisfied Client",
                  initials: "RD",
                  text: "If u need any financial advise, without any hesitate u can discussed that with Dibyendu da. He will guide u the ri8 way. Best Advisor 👌. He is like my family member now❤️.",
                },
                {
                  name: "Samir Saha",
                  role: "Investment Client",
                  initials: "SS",
                  text: "Very good mentor, I am very much thankful to Dibyendu Da, he give me a new way of investment & changed my vision on management of personal finance. Thanks a lot Dada",
                },
                {
                  name: "Shankar Gangopadhyay",
                  role: "Long-term Client",
                  initials: "SG",
                  text: "Excellent, Dependable, appears to be trustworthy. Knowledgeable. One stop solution for any financial services.",
                },
                {
                  name: "Soumava Bhatta",
                  role: "Business Client",
                  initials: "SB",
                  text: "An extremely matured & reliable organisation for financial, taxation & investment needs... An organisation, tested & trusted in due course of time...",
                },
                {
                  name: "Suddhadeep Sinha",
                  role: "Personal Finance Client",
                  initials: "SS",
                  text: "Good financial service. Handles all my financial needs with utmost care.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className={`bg-gray-800/90 backdrop-blur-sm border-gray-700 hover:border-rose-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up animation-delay-${200 + index * 200}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-rose-900/30 flex items-center justify-center mr-3">
                        <span className="text-rose-500 font-semibold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gray-900/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-rose-500 transition-all duration-300 animate-slide-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
                Ready to Take Control of Your <span className="text-rose-500">Financial Life?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <ul className="space-y-4">
                    {[
                      "Get clarity on your financial situation",
                      "Make smart decisions with expert guidance",
                      "Grow your wealth with confidence",
                      "Secure your family's financial future",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-start animate-slide-right animation-delay-${200 + index * 200}`}
                      >
                        <CheckCircle className="h-6 w-6 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center animate-slide-left animation-delay-400">
                  <Dialog>
                    <DialogTrigger asChild>
                      <GetStartedButton className="bg-rose-600 hover:bg-rose-700 text-white w-full md:w-auto transform hover:scale-105 transition-all duration-300 animate-pulse-glow">
                        Book My Free Consultation
                      </GetStartedButton>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">Book Your Free Consultation</DialogTitle>
                      </DialogHeader>
                      <ContactForm />
                    </DialogContent>
                  </Dialog>
                  <p className="text-sm text-gray-400 mt-4">No obligation, just professional advice</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section - EXPANDED WITH NEW PARTNERS */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900/95 to-black/95">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                Our <span className="text-rose-500">Trusted Partners</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-slide-up animation-delay-200">
                We collaborate with India's leading financial institutions including insurance companies, mutual fund
                houses, banks, and housing finance providers to offer you comprehensive financial solutions with the
                best rates and expert service across all investment categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-8xl mx-auto">
              {[
                // General Insurance Partners
                {
                  name: "ICICI Lombard General Insurance",
                  image: "/images/partners/icici-lombard.png",
                  description: "Comprehensive general insurance solutions",
                  category: "General Insurance",
                },
                {
                  name: "Digit Insurance",
                  image: "/images/partners/digit-insurance.png",
                  description: "Digital-first insurance experience",
                  category: "General Insurance",
                },
                {
                  name: "Tata AIG Insurance",
                  image: "/images/partners/tata-aig.png",
                  description: "Trusted insurance with global expertise",
                  category: "General Insurance",
                },
                {
                  name: "Bajaj Allianz General Insurance",
                  image: "/images/partners/bajaj-allianz.png",
                  description: "Jiyo Befikar - Live fearlessly with comprehensive coverage",
                  category: "General Insurance",
                },
                {
                  name: "Royal Sundaram General Insurance",
                  image: "/images/partners/royal-sundaram.png",
                  description: "Reliable general insurance solutions",
                  category: "General Insurance",
                },
                {
                  name: "National Insurance",
                  image: "/images/partners/national-insurance.png",
                  description: "Trusted government insurance provider",
                  category: "General Insurance",
                },
                {
                  name: "The New India Assurance Company Ltd.",
                  image: "/images/partners/new-india-assurance.png",
                  description: "India's largest general insurance company",
                  category: "General Insurance",
                },
                {
                  name: "HDFC ERGO General Insurance",
                  image: "/images/partners/hdfc-ergo.webp",
                  description: "Har pal aapke saath - Always with you",
                  category: "General Insurance",
                },

                // Health Insurance Partners
                {
                  name: "Care Health Insurance",
                  image: "/images/partners/care-health-insurance.png",
                  description: "Comprehensive health insurance solutions",
                  category: "Health Insurance",
                },
                {
                  name: "Niva Bupa Health Insurance",
                  image: "/images/partners/niva-bupa.jpeg",
                  description: "Personal and caring health insurance",
                  category: "Health Insurance",
                },
                {
                  name: "Aditya Birla Health Insurance",
                  image: "/images/partners/aditya-birla-health.png",
                  description: "Innovative health insurance solutions",
                  category: "Health Insurance",
                },
                {
                  name: "Star Health Insurance",
                  image: "/images/partners/star-health.png",
                  description: "The Health Insurance Specialist",
                  category: "Health Insurance",
                },

                // Life Insurance Partners
                {
                  name: "Life Insurance Corporation of India (LIC)",
                  image: "/images/partners/lic-life-insurance.png",
                  description: "India's largest life insurance company",
                  category: "Life Insurance",
                },
                {
                  name: "HDFC Life Insurance",
                  image: "/images/partners/hdfc-life.jpeg",
                  description: "Sar utha ke jiyo! - Live with your head held high",
                  category: "Life Insurance",
                },
                {
                  name: "ICICI Prudential Life Insurance",
                  image: "/images/partners/icici-prudential-life.png",
                  description: "Comprehensive mutual fund solutions",
                  category: "Mutual Funds",
                },
                {
                  name: "Bajaj Allianz Life Insurance",
                  image: "/images/partners/bajaj-allianz-life.jpeg",
                  description: "Comprehensive life insurance solutions",
                  category: "Life Insurance",
                },
                {
                  name: "Max Life Insurance",
                  image: "/images/partners/max-life-insurance.png",
                  description: "Comprehensive life insurance with innovative solutions",
                  category: "Life Insurance",
                },
                {
                  name: "Tata AIA Life Insurance",
                  image: "/images/partners/tata-aia-life-insurance.png",
                  description: "Joint venture offering comprehensive life insurance",
                  category: "Life Insurance",
                },
                {
                  name: "PNB MetLife",
                  image: "/images/partners/pnb-metlife.png",
                  description: "Milkar life aage badhaein - Together, let's take life forward",
                  category: "Life Insurance",
                },

                // Mutual Fund Partners
                {
                  name: "HDFC Mutual Fund",
                  image: "/images/partners/hdfc-mutual-fund.png",
                  description: "India's leading mutual fund company",
                  category: "Mutual Funds",
                },
                {
                  name: "ICICI Prudential Mutual Fund",
                  image: "/images/partners/icici-prudential-life.png",
                  description: "Comprehensive mutual fund solutions",
                  category: "Mutual Funds",
                },
                {
                  name: "Axis Mutual Fund",
                  image: "/images/partners/axis-mutual-fund.jpeg",
                  description: "Innovative investment solutions",
                  category: "Mutual Funds",
                },
                {
                  name: "Kotak Mutual Fund",
                  image: "/images/partners/kotak-mutual-fund.png",
                  description: "Think Investment, Think Kotak",
                  category: "Mutual Funds",
                },
                {
                  name: "Aditya Birla Sun Life Mutual Fund",
                  image: "/images/partners/aditya-birla-capital-mutual-fund.jpeg",
                  description: "Protecting, Investing, Financing, Advising",
                  category: "Mutual Funds",
                },
                {
                  name: "Franklin Templeton Investments",
                  image: "/images/partners/franklin-templeton-investments.jpeg",
                  description: "Global investment management expertise",
                  category: "Mutual Funds",
                },
                {
                  name: "DSP Mutual Fund",
                  image: "/images/partners/dsp-mutual-fund.png",
                  description: "Professional investment management",
                  category: "Mutual Funds",
                },
                {
                  name: "Nippon India Mutual Fund",
                  image: "/images/partners/nippon-india-mutual-fund.png",
                  description: "Wealth sets you free",
                  category: "Mutual Funds",
                },
                {
                  name: "Mirae Asset Mutual Fund",
                  image: "/images/partners/mirae-asset-mutual-fund.png",
                  description: "Global investment expertise",
                  category: "Mutual Funds",
                },
                {
                  name: "Invesco Mutual Fund",
                  image: "/images/partners/invesco-mutual-fund.jpeg",
                  description: "Investment excellence for long-term growth",
                  category: "Mutual Funds",
                },
                {
                  name: "Canara Robeco Mutual Fund",
                  image: "/images/partners/canara-robeco-mutual-fund.png",
                  description: "Joint venture mutual fund expertise",
                  category: "Mutual Funds",
                },
                {
                  name: "Baroda BNP Paribas Mutual Fund",
                  image: "/images/partners/baroda-bnp-paribas-mutual-fund.png",
                  description: "International investment management",
                  category: "Mutual Funds",
                },
                {
                  name: "HSBC Mutual Fund",
                  image: "/images/partners/hsbc-mutual-fund.png",
                  description: "Global banking expertise in investments",
                  category: "Mutual Funds",
                },
                {
                  name: "Edelweiss Mutual Fund",
                  image: "/images/partners/edelweiss-mutual-fund.jpeg",
                  description: "Comprehensive wealth management solutions",
                  category: "Mutual Funds",
                },
                {
                  name: "Motilal Oswal Mutual Fund",
                  image: "/images/partners/motilal-oswal-mutual-fund.png",
                  description: "Research-driven investment solutions",
                  category: "Mutual Funds",
                },
                {
                  name: "PGIM India Mutual Fund",
                  image: "/images/partners/pgim-india-mutual-fund.jpeg",
                  description: "Global investment management with local expertise",
                  category: "Mutual Funds",
                },

                // Housing & Loan Partners
                {
                  name: "State Bank of India Home Loans",
                  image: "/images/partners/sbi-home-loans.jpeg",
                  description: "India's largest bank for home financing",
                  category: "Home Loans",
                },
                {
                  name: "HDFC Home Loans",
                  image: "/images/partners/hdfc-home-loans.jpeg",
                  description: "With you, right through your home buying journey",
                  category: "Home Loans",
                },
                {
                  name: "LIC Housing Finance Ltd",
                  image: "/images/partners/lic-housing-finance.webp",
                  description: "Trusted housing finance solutions",
                  category: "Home Loans",
                },
                {
                  name: "Aditya Birla Housing Finance",
                  image: "/images/partners/aditya-birla-housing.png",
                  description: "Premium housing finance solutions",
                  category: "Home Loans",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className={`group bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-rose-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-slide-up animation-delay-${100 + index * 50}`}
                >
                  <div className="relative h-16 mb-3 flex items-center justify-center">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-rose-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-slide-up animation-delay-800">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-rose-500 transition-all duration-300 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-3 text-rose-400">Why Choose Our Partner Network?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Best Rates</p>
                      <p className="text-sm text-gray-400">Competitive premiums across all partners</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Quick Claims</p>
                      <p className="text-sm text-gray-400">Fast and hassle-free claim processing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Expert Support</p>
                      <p className="text-sm text-gray-400">Dedicated assistance throughout your policy term</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Enhanced Footer with Bigger Business Hours */}
        <footer className="py-12 bg-black/95 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="animate-slide-up">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/assets-craft-logo.png"
                    alt="Assets Craft Financial Solution Logo"
                    width={100}
                    height={100}
                    className="w-24 h-24 hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold">
                    Assets Craft <span className="text-rose-500">Financial Solution</span>
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Your trusted partner for comprehensive financial planning and solutions in Kolkata.
                </p>
                <div className="flex space-x-4">
                  {[
                    { href: "https://www.facebook.com/profile.php?id=61578885141126", icon: Facebook, label: "Facebook" },
                    { href: "https://www.instagram.com/assetscraft", icon: Instagram, label: "Instagram" },
                    { href: "https://www.linkedin.com/in/dibyendu-dey-97064b376", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://x.com/assetscraft", icon: Twitter, label: "Twitter" },
                    { href: "https://wa.me/919831063235", icon: MessageCircle, label: "WhatsApp" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-rose-500 transform hover:scale-110 transition-all duration-300"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      {social.icon ? (
                        <social.icon className="h-6 w-6" />
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="animate-slide-up animation-delay-200">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start hover:text-white transition-colors duration-200">
                    <Phone className="h-5 w-5 mr-2 mt-0.5 text-rose-500 flex-shrink-0" />
                    <div>
                      <p>
                        <a href="tel:+919831063235" className="hover:text-rose-500 transition-colors">
                          +91 98310 63235
                        </a>
                      </p>
                      <p>
                        <a href="tel:+919433680719" className="hover:text-rose-500 transition-colors">
                          +91 94336 80719
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors duration-200">
                    <Mail className="h-5 w-5 mr-2 mt-0.5 text-rose-500 flex-shrink-0" />
                    <a href="mailto:info@assetscraft.com" className="hover:text-rose-500 transition-colors">
                      info@assetscraft.com
                    </a>
                  </li>
                  <li className="flex items-start hover:text-white transition-colors duration-200">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-rose-500 flex-shrink-0" />
                    <span>Kolkata, West Bengal, India</span>
                  </li>
                </ul>
              </div>

              <div className="animate-slide-up animation-delay-400">
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2 text-gray-400">
                  {[
                    "Life & Health Insurance",
                    "Stocks & Investments",
                    "Home & Personal Loans",
                    "Income Tax & GST",
                    "Real Estate Services",
                    "Financial Planning",
                  ].map((service, index) => (
                    <li key={index}>
                      <Link href="#services" className="hover:text-rose-500 transition-colors duration-200">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Business Hours Section - Made Bigger */}
              <div className="animate-slide-up animation-delay-600 lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-rose-500" />
                  Business Hours
                </h3>

                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-rose-500 transition-all duration-300 transform hover:scale-105">
                  <div className="space-y-4">
                    {[
                      { days: "Monday - Friday", hours: "9:00 AM - 8:00 PM", color: "text-green-400" },
                      { days: "Saturday", hours: "10:00 AM - 6:00 PM", color: "text-yellow-400" },
                      { days: "Sunday", hours: "Closed", color: "text-red-400" },
                    ].map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg gap-2 min-w-0 flex-wrap">
                        <div className="flex items-center min-w-0">
                          <Calendar className="h-4 w-4 mr-2 text-rose-500 flex-shrink-0" />
                          <span className="font-medium text-white whitespace-nowrap text-sm truncate min-w-0">{schedule.days}</span>
                        </div>
                        <span className={`${schedule.color} font-semibold whitespace-nowrap text-sm truncate min-w-0 text-right`}>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-rose-900/20 rounded-lg border border-rose-500/30">
                    <p className="text-sm text-rose-300 text-center">
                      <strong>Emergency Consultations Available</strong>
                      <br />
                      Call us anytime for urgent financial matters
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-3">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    {[
                      { name: "About Us", href: "#about" },
                      { name: "Services", href: "#services" },
                      { name: "Testimonials", href: "#testimonials" },
                      { name: "Contact", href: "#contact" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="hover:text-rose-500 transition-colors duration-200">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} Assets Craft Financial Solution. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-gray-400">
                  {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item, index) => (
                    <Link key={index} href="#" className="hover:text-rose-500 transition-colors duration-200">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8 text-sm">
            Powered by <a href="https://www.clickmorph.org/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline font-semibold">ClickMorph</a> — Marketing & AI Automation.
          </div>
        </footer>
      </div>
    </div>
  )
}
