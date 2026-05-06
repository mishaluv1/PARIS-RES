import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-transparent to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}
          <div className="space-y-6">

            <p className="text-amber-600 tracking-[0.3em] uppercase text-sm text-center md:text-left">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center md:text-left leading-tight">
              A Journey of Authentic
              <span className="text-amber-600"> Indian Flavors</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Welcome to Paris Restaurant, where authentic Indian flavors come alive.
              Located in the heart of Mandya, we’ve been serving our community with
              traditional cuisine crafted from the finest ingredients and time-honored recipes.
            </p>

            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Our chefs bring decades of culinary expertise, specializing in North and South
              Indian dishes that celebrate the rich diversity of Indian cooking. From aromatic
              biryanis to flavorful curries, every dish tells a story.
            </p>

            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Every meal is prepared with precision, passion, and care — making every visit
              a memorable celebration of food and hospitality.
            </p>

            {/* optional CTA */}
            <div className="flex justify-center md:justify-start pt-4">
              <button className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition shadow-md">
                Explore Menu
              </button>
            </div>

          </div>

          {/* IMAGE SIDE */}
          <div className="relative">

            {/* decorative border glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200/40 to-transparent blur-2xl rounded-2xl" />

            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

              <ImageWithFallback
                src="https://www.image2url.com/r2/default/images/1777297357717-ed782308-4faf-4592-bea2-77768e4d0b4d.jpeg"
                alt="Restaurant interior"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}