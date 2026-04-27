import { ImageWithFallback } from './figma/ImageWithFallback';
import TypingText from './Typingtext';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
  {/* Mobile / small screens */}
  <img
    src="https://www.image2url.com/r2/default/images/1777304576070-4acc1f94-9329-44db-b6d6-74824e3ef867.png"
    alt="Restaurant"
    className="block md:hidden w-full h-full object-cover"
  />

  {/* Desktop / larger screens */}
  <img
    src="https://www.image2url.com/r2/default/images/1777304194388-6c9ce44b-c329-4788-8e40-654e23e26624.png"
    alt="Restaurant"
    className="hidden md:block w-full h-full object-cover"
  />
</div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl mb-4">Paris Restaurant</h1>
        <p className="text-xl md:text-2xl mb-8"><TypingText  text={"Authentic Indian Cuisine in Mandya"} /></p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className=" bg-white/20 backdrop-blur-md border border-white/30 text-black px-4 py-2 rounded-lg bg-white-600 hover:bg-gray-700 text-white px-8 py-3 rounded-md transition-colors"
        >
          Contact Now
        </button>
      </div>
    </section>
  );
}
