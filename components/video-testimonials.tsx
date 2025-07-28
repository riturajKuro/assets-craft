import React from "react";

const testimonials = [
  {
    name: "Saibal Roy",
    position: "Ex Sr Manager (HR) - IBM",
    video: "/videos/Saibal Roy - Ex Sr Manager (HR) - IBM/Saibal Roy - Ex Sr Manager (HR) - IBM.mp4",
  },
  {
    name: "Goutam Das",
    position: "Tatto Artist",
    video: "/videos/Goutam Das - Tatto Artist/Goutam Das - Tatto Artist.mp4",
  },
  {
    name: "Anupam Nath",
    position: "Businessman",
    video: "/videos/Anupam Nath - Businessman/Anupam Nath - Businessman.mp4",
  },
  {
    name: "Debabrata Banerjee",
    position: "Associate Director - Prodapt Solutions PVT LTD",
    video: "/videos/Debabrata Banerjee - Associate Director - Prodapt Solutions PVT LTD/Debabrata Banerjee - Associate Director - Prodapt Solutions PVT LTD.mp4",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-950/90 to-gray-900/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">
          Don't take our words, <span className="text-rose-500">Listen to what our clients say about us</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 shadow-lg flex flex-col items-center border border-gray-700 hover:border-rose-500 transition-all duration-300"
            >
              <video
                src={t.video}
                controls
                preload="none"
                className="rounded-lg w-full max-w-xs aspect-video mb-4 border-2 border-gray-800 shadow-md bg-black"
                poster="/images/placeholder.jpg"
                aria-label={`Testimonial video from ${t.name}, ${t.position}`}
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-white mb-1">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 