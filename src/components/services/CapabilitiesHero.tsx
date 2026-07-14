"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { HiArrowDown } from "react-icons/hi2";

const BACKGROUND_SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    caption: "Heavy Infrastructure & Road Engineering",
  },
  {
    url: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070",
    caption: "Hydraulic Installation & Environmental Mitigation",
  },
  {
    url: "https://images.unsplash.com/photo-1513828583835-c527ebc5003e?q=80&w=2070",
    caption: "Mechanical Assets & Industrial Procurement",
  },
];

export default function CapabilitiesHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Scroll bindings for scaling structural wireframe down on viewport scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const wireframeOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [0.35, 0.05],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Rotational slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center bg-[#090D1A] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#090D1A] via-transparent to-[#0F172A]/50 z-10" />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center grayscale contrast-115"
            style={{
              backgroundImage: `url('${BACKGROUND_SLIDES[currentSlide].url}')`,
              scale: backgroundScale as any,
            }}
          />
        </AnimatePresence>
      </div>

      {/* 2. Scroll-Linked Blueprint Grid Mask */}
      <motion.div
        style={{ opacity: wireframeOpacity }}
        className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#eab308_1px,transparent_1px),linear-gradient(to_bottom,#eab308_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"
      />

      {/* 3. Main Operational Copy Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          {/* Breadcrumb indicator */}
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] bg-[#EAB308]/10 border border-[#EAB308]/20 px-3 py-1.5 rounded-sm backdrop-blur-md inline-block mb-6">
            Technical Capabilities Profile
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight leading-[1.05] mb-6">
            The Architecture of <br />
            <span className="bg-linear-to-r from-[#EAB308] via-amber-400 to-slate-100 bg-clip-text text-transparent">
              Precision Engineering.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-12">
            Akpaven integrates engineering rigor with sophisticated execution
            workflows to deliver tier-1 civil networks, watershed structures,
            and energy infrastructure across Nigeria.
          </p>

          {/* Technical Data Status Bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-800/80 pt-8">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-550">
                Active Display
              </div>
              <div className="text-sm font-bold text-[#EAB308] mt-1 font-mono">
                {BACKGROUND_SLIDES[currentSlide].caption}
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-slate-800" />
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-550">
                Operational Standards
              </div>
              <div className="text-sm font-bold text-slate-300 mt-1">
                ISO 9001:2015 / ISO 14001
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          Explore Capabilities
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-lg text-[#EAB308]" />
        </motion.div>
      </div>
    </section>
  );
}
