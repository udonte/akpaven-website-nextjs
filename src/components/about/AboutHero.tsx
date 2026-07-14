"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

const SLIDE_IMAGES = [
  {
    url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSHPM-K5l6WpUpbSx61d6Jyi-OhOjl5Mb-sRaOeJckre8mdsXOXsLq3LsQ_BLWc01oPmuScEPcdrTkzvHA",
    alt: "Akpaven engineering site survey team aligning structures",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTHk5jQBiJn7ATSguQrSRC5Z_t6qQ2uYSUN2dfFQ678QePYuJwo0m9eKJacGmg3Lzwk14K1v3DAJ6g1cNg",
    alt: "Modern industrial structural steel fabrication layout",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQDxiciiu-yWA1aNh-MsiC_8i1sdzD2hbMnCyBeVQ7hmoWAAqjhVYrdyPzChtusu_JAIlMCrWx3_SThyXQ",
    alt: "Heavy machinery and earthmovers grading critical highway line",
  },
];

export default function AboutHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Background slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax bindings to shift background assets gracefully
  const ghostTextX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[85vh] min-h-145 flex items-center justify-center bg-[#090D1A] overflow-hidden border-b border-slate-800/60"
    >
      {/* 1. Dynamic Slide Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#090D1A] via-transparent to-[#0F172A]/40 z-10" />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center grayscale contrast-115"
            style={{
              backgroundImage: `url('${SLIDE_IMAGES[activeSlide].url}')`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* 2. Drifting Ghost Text Layer ("EST. 2003") */}
      <motion.div
        style={{ x: ghostTextX }}
        className="absolute bottom-10 left-12 z-0 text-[10vw] sm:text-[12vw] font-black tracking-tighter text-slate-800/10 uppercase select-none pointer-events-none font-mono leading-none"
      >
        EST. 2003
      </motion.div>

      {/* 3. Main Foreground Typography Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div style={{ y: foregroundY }} className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] bg-[#EAB308]/10 border border-[#EAB308]/20 px-3 py-1.5 rounded-sm backdrop-blur-md inline-block mb-6">
            Corporate Pedigree & HSE Compliance
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
            Two Decades of <br />
            <span className="bg-linear-to-r from-[#EAB308] via-amber-400 to-[#F8FAFC] bg-clip-text text-transparent">
              Unrivaled Execution.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            Incorporated in 2003, Akpaven has transitioned from an ambitious
            engineering firm into a key indigenous partner for multi-billion
            Naira environmental systems and civil conglomerates across West
            Africa.
          </p>

          {/* Micro stats banner overlay */}
          <div className="flex gap-6 items-center mt-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse" />
              <span>NCDMB Compliant</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <div>ISO 9001 Integration</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-25 pointer-events-none" />
    </section>
  );
}
