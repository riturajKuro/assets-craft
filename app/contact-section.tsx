import ContactForm from "@/components/contact-form"

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-rose-500">Touch</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Have questions or ready to start planning your financial future? Reach out to us today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-rose-900/30 flex items-center justify-center mr-3">
                    <span className="text-rose-500">📱</span>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+91 98310 63235</p>
                    <p className="text-gray-400">+91 94336 80719</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-rose-900/30 flex items-center justify-center mr-3">
                    <span className="text-rose-500">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">info@assetscraft.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-rose-900/30 flex items-center justify-center mr-3">
                    <span className="text-rose-500">📍</span>
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-gray-400">Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-gray-400">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-gray-400">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
