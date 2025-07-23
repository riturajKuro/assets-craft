"use client"

import type React from "react"

import { useState } from "react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value

    try {
      await emailjs.send(
        "service_33lsrsi", // updated Service ID
        "template_3zvjqhu", // updated Template ID
        {
          name,
          email,
          phone,
          service,
          message,
        },
        "q2yJOFGPWxY5_1HA4" // updated Public Key
      )
      // Send to Airtable as well
      await fetch("/api/contact-airtable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      })
      setIsSubmitted(true)
    } catch (error) {
      alert("There was an error sending your message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Contact Us</CardTitle>
        <CardDescription className="text-gray-300">
          Fill out the form below and we'll get back to you shortly.
        </CardDescription>
      </CardHeader>

      {isSubmitted ? (
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-rose-900/30 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-semibold">Thank You!</h3>
            <p className="text-gray-300">Your message has been received. We'll contact you shortly.</p>
            <GetStartedButton
              className="mt-4 bg-rose-600 hover:bg-rose-700 text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </GetStartedButton>
          </div>
        </CardContent>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Full Name
              </label>
              <Input id="name" placeholder="John Doe" required className="bg-gray-700 border-gray-600 text-white" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <Input id="phone" placeholder="+91 98765 43210" className="bg-gray-700 border-gray-600 text-white" />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-200">
                Service Interested In
              </label>
              <select id="service" className="w-full rounded-md bg-gray-700 border-gray-600 text-white p-2">
                <option value="">Select a service</option>
                <option value="insurance">Insurance</option>
                <option value="investments">Investments</option>
                <option value="loans">Loans</option>
                <option value="tax">Tax & Compliance</option>
                <option value="real-estate">Real Estate</option>
                <option value="planning">Financial Planning</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-200">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={4}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </CardContent>

          <CardFooter>
            <GetStartedButton type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
              {isSubmitting ? "Sending..." : "Send Message"}
            </GetStartedButton>
          </CardFooter>
        </form>
      )}
    </Card>
  )
}
