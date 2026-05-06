"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 120;
const FADE_START = 0.75;

const getFramePath = (index: number) => {
  const padded = (index + 1).toString().padStart(3, "0");
  return `/ezgif-frame-${padded}.png`;
};

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // ---------------- PRELOAD ----------------
  useEffect(() => {
    let mounted = true;

    const loadImages = async () => {
      const imgs = await Promise.all(
        Array.from({ length: FRAME_COUNT }, (_, i) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img);
          });
        })
      );

      if (mounted) {
        imagesRef.current = imgs;
        setLoaded(true);
      }
    };

    loadImages();

    return () => {
      mounted = false;
    };
  }, []);

  // ---------------- RESIZE ----------------
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ---------------- DRAW ----------------
  const draw = (index: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;

    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    const cw = canvas.width;
    const ch = canvas.height;

    const scale = Math.max(cw / img.width, ch / img.height);

    const w = img.width * scale;
    const h = img.height * scale;

    const x = (cw - w) / 2;
    const y = (ch - h) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  };

  // ---------------- SCROLL ----------------
  useEffect(() => {
    if (!loaded) return;

    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = containerRef.current!.getBoundingClientRect();

          const scrollTop = -rect.top;
          const maxScroll = rect.height - window.innerHeight;

          const p = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

          setProgress(p);

          const frame = Math.floor(p * (FRAME_COUNT - 1));
          draw(frame);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    draw(0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  // ---------------- EFFECTS ----------------
  const canvasOpacity =
    progress < FADE_START
      ? 1
      : 1 - (progress - FADE_START) / (1 - FADE_START);

  const textOpacity = Math.min(Math.max((progress - 0.1) * 2.2, 0), 1);
  const textTranslate = (1 - textOpacity) * 30;

  return (
    <div ref={containerRef} className="relative h-[1400vh] w-full bg-black">

      {/* HERO SECTION */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">

        {/* FLOATING FRAME */}
        <div className="relative w-[92%] max-w-[1200px] h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10">

          {/* VIGNETTE */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-black/60" />

          {/* NAVBAR */}
          <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-xl border-b border-white/10">

            <img
              className="w-[65px]"
              src="https://www.image2url.com/r2/default/images/1777305686038-fc691d77-488b-46ba-a74d-823723449288.png"
              alt="logo"
            />

            <div className="hidden md:flex gap-8 text-sm tracking-wide font-sans">
              {["home", "about", "menu", "gallery", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() =>
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-white/70 hover:text-white transition"
                >
                  {id.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>

          {/* CANVAS */}
          <div
            style={{
              opacity: canvasOpacity,
              transition: "opacity 0.4s ease-out",
              width: "100%",
              height: "100%",
            }}
          >
            <canvas ref={canvasRef} className="w-full h-full block" />
          </div>

          {/* TEXT (NEW TYPOGRAPHY SYSTEM) */}
          <div
            className="absolute z-20 text-center px-6 max-w-2xl"
            style={{
              top: "50%",
              left: "50%",
              opacity: textOpacity,
              transform: `translate(-50%, -50%) translateY(${textTranslate}px)`,
            }}
          >
            <p className="font-sans text-amber-300 tracking-[0.5em] uppercase text-[11px] mb-5 opacity-80">
              Authentic Indian Dining Experience
            </p>

            <h1 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Exquisite <span className="text-amber-300">Dining</span>
            </h1>

            <p className="font-serif italic text-2xl md:text-3xl text-white/80 mt-4">
              Unforgettable Moments
            </p>

            <p className="font-sans text-white/60 mt-6 leading-relaxed text-sm md:text-base max-w-md mx-auto">
              Experience premium Indian cuisine crafted with tradition, passion,
              and modern elegance.
            </p>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <div className="w-[20px] h-[35px] border border-white/40 rounded-full flex justify-center">
              <div className="w-[4px] h-[8px] bg-white/70 rounded-full animate-bounce mt-2" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}