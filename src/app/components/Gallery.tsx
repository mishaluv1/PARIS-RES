import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    url: "https://www.image2url.com/r2/default/images/1777297357717-ed782308-4faf-4592-bea2-77768e4d0b4d.jpeg",
    alt: "Elegant table setting",
  },
  {
    url: "https://www.image2url.com/r2/default/images/1777297454241-54e04bdd-49ee-45c3-bf2f-f2f089a28fe6.jpeg",
    alt: "Cozy dining area",
  },
  {
    url: "https://www.image2url.com/r2/default/images/1777297610924-625d89c7-1bda-426c-9e1d-d6f1d3c5e155.jpeg",
    alt: "Plush seating area",
  },
];

export function Gallery() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // ---------------- Scroll Reveal ----------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-amber-600 tracking-[0.3em] uppercase text-sm mb-3">
            Visual Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Our Gallery
          </h2>

          <p className="text-gray-600">
            Step inside our elegant dining space
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white
                transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >

              {/* IMAGE */}
              <div className="h-80 overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700 ease-out"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CAPTION */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-sm tracking-wide">
                  {image.alt}
                </p>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute -inset-1 bg-amber-200/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}