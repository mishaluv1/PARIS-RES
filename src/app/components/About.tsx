import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Paris Restaurant, where authentic Indian flavors come alive. Located in the heart
              of Mandya, we've been serving our community with traditional Indian cuisine crafted from the
              finest ingredients and time-honored recipes.
            </p>
            <p className="text-gray-700 mb-4">
              Our chefs bring decades of culinary expertise, specializing in North and South Indian dishes
              that celebrate the rich diversity of Indian cooking. From aromatic biryanis to flavorful curries,
              every dish tells a story.
            </p>
            <p className="text-gray-700">
              Every meal is prepared with love and attention to detail, ensuring that each visit
              to Paris Restaurant is a memorable celebration of great food and warm hospitality.
            </p>
          </div>
          <div className="relative h-96 md:h-full min-h-[400px]">
            <ImageWithFallback
            src='https://www.image2url.com/r2/default/images/1777297357717-ed782308-4faf-4592-bea2-77768e4d0b4d.jpeg'
              alt="Restaurant interior"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
