import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ChefHat, Sparkles, Clock, MapPin, Star, Utensils, Wine } from "lucide-react";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://www.image2url.com/r2/default/images/1777297357717-ed782308-4faf-4592-bea2-77768e4d0b4d.jpeg",
  "https://www.image2url.com/r2/default/images/1777297454241-54e04bdd-49ee-45c3-bf2f-f2f089a28fe6.jpeg",
  "https://www.image2url.com/r2/default/images/1777297610924-625d89c7-1bda-426c-9e1d-d6f1d3c5e155.jpeg",
  // "https://images.unsplash.com/photo-1761095596765-c8abe01d3aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
  // "https://images.unsplash.com/photo-1755811248324-3c9b7c8865fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
];

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 2,
}));

export  function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollToContact = () => {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
 const scrollToMenu = () => {
  const section = document.getElementById("menu");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="size-full relative overflow-hidden bg-black mt-20">
      {/* Animated Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={backgroundImages[currentImage]}
            alt="Restaurant ambiance"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 " />
        </motion.div>
      </AnimatePresence>

      {/* Animated Particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y}vh`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-amber-400/40 rounded-full blur-sm"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
        />
      ))}

      {/* Animated Light Rays */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none"
      />

      {/* Hero Content */}
      <div className="relative mt-5 z-40 size-full flex flex-col items-center justify-center px-6 text-center">
        {/* Animated Icons Cloud */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative mb-8"
        >
          {/* <ChefHat className="w-20 h-20 text-amber-400" strokeWidth={1.5} /> */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2"
          >
            {/* <Sparkles className="w-6 h-6 text-yellow-300" /> */}
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -left-2"
          >
            {/* <Star className="w-5 h-5 text-amber-300 fill-amber-300" /> */}
          </motion.div>
        </motion.div>

        {/* Main Heading with Letter Animation */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 max-w-5xl"
        >
          <motion.span
            className=" text-md"
            animate={{ textShadow: ["0 0 20px rgba(251, 191, 36, 0.5)", "0 0 40px rgba(251, 191, 36, 0.8)", "0 0 20px rgba(251, 191, 36, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Exquisite Dining
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block text-amber-400 italic mt-5 text-md"
          >
            Unforgettable Moments
          </motion.span>
        </motion.h1>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8"
        />

        {/* Subtitle with Typewriter Effect */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
        >
          Authentic Indian Cuisine in Mandya.
        </motion.p>

        {/* Floating Icons with Stagger */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {[
            { icon: Utensils, text: "Fine Cuisine", delay: 0.2 },
            // { icon: Wine, text: "Premium Wines", delay: 0.4 },
            { icon: Clock, text: "5PM-11PM", delay: 0.6 },
            { icon: MapPin, text: "Mandya", delay: 0.8 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + item.delay, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
              >
                <item.icon className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-sm text-white/90">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Advanced Animations */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}

            animate={{ boxShadow: ["0 0 0 0 rgba(251, 191, 36, 0.4)", "0 0 0 10px rgba(251, 191, 36, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-full transition-all duration-300 shadow-lg relative overflow-hidden group"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative z-10 " >Contact</span>
          </motion.button>
          <motion.button
            onClick={scrollToMenu}

            whileHover={{ scale: 1.05, borderColor: "rgb(251, 191, 36)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-white/50 hover:border-amber-400 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
          >
            View Menu
          </motion.button>
        </motion.div>

        {/* Image Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex gap-2 m-8"
        >
          {backgroundImages.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: currentImage === index ? 1.2 : 1,
              
                backgroundColor: currentImage === index ? "rgb(251, 191, 36)" : "rgba(255, 255, 255, 0.3)",
              }}
              className="w-2 h-2 rounded-full cursor-pointer "
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          // className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            // className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              // className="w-1.5 h-1.5 bg-amber-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
