import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://www.image2url.com/r2/default/images/1777297357717-ed782308-4faf-4592-bea2-77768e4d0b4d.jpeg',
    alt: 'Elegant table setting'
  },
  {
    url: 'https://www.image2url.com/r2/default/images/1777297454241-54e04bdd-49ee-45c3-bf2f-f2f089a28fe6.jpeg',
    alt: 'Cozy dining area'
  },
  {
    url: 'https://www.image2url.com/r2/default/images/1777297610924-625d89c7-1bda-426c-9e1d-d6f1d3c5e155.jpeg',
    alt: 'Plush seating area'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Gallery</h2>
          <p className="text-gray-600">Step inside our elegant dining space</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-80 overflow-hidden rounded-lg shadow-md shadow-gray hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
