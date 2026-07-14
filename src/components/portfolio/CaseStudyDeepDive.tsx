"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";

interface Stage {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  metrics: { value: string; label: string }[];
}

const CASE_STAGES: Stage[] = [
  {
    num: "01",
    title: "Structural Assessment & Slope Stabilization",
    subtitle: "Hydrological Mapping & Geotechnical Core Sampling",
    desc: "Before physical mobilization, engineering teams mapped the 18-meter-deep fault lines. We deployed heavy hydraulic sheet pile drivers and deep concrete retaining walls to prevent localized land slips and secure adjacent residential zones.",
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSlIVAoajtQvOPNFZuiDLtYvXVXiEcJAfaMlZ0of4O1pe2IbSY1lsal5XmC8FSJXay1_XXxImGV0qJbGPM",
    metrics: [
      { value: "18 Meters", label: "Max Gully Depth" },
      { value: "32 Core Samples", label: "Geotechnical Profile" },
    ],
  },
  {
    num: "02",
    title: "Hydraulic Channel Construction",
    subtitle: "Excavating High-Output Reinforced Storm-Water Channels",
    desc: "To manage extreme flash flood runoff patterns characteristic of Calabar's climate, we excavated and cast heavy reinforced concrete drainage channels and stepped cascade structures designed to dissipate water kinetic energy.",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTW4ETsYOEEoHMFiAar4xiqvjqX9sK5kU6bYDyf5rRNkxPmxueyKCINw00vw4cOcHZey9Gin8VZkU5vubM",
    metrics: [
      { value: "1,200m+", label: "Continuous Cast Channel" },
      { value: "₦2.8B+", label: "Hydraulic Capital Dev" },
    ],
  },
  {
    num: "03",
    title: "Bio-Remediation & Ecological Restoration",
    subtitle: "Deploying Vetiver Grass Systems & Sustainable Slope Mats",
    desc: "Aligning strictly with World Bank Environmental Safeguards, we deployed thousands of deep-root Vetiver grass units alongside structural geo-textile mats. This bio-engineered layer locks down topsoil and naturally controls soil runoff.",
    img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000",
    metrics: [
      { value: "15,000+", label: "Vetiver Roots Planted" },
      { value: "100%", label: "Soil Erosion Arrested" },
    ],
  },
];

export default function CaseStudyDeepDive() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % CASE_STAGES.length);
  };

  const handlePrev = () => {
    setActiveStage(
      (prev) => (prev - 1 + CASE_STAGES.length) % CASE_STAGES.length,
    );
  };

  const stage = CASE_STAGES[activeStage];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0F19] py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] bg-[#EAB308]/10 border border-[#EAB308]/20 px-3 py-1.5 rounded-sm backdrop-blur-md inline-block mb-4">
            Flagship Case Study Highlight
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none mb-4">
            Ikot Nkebre Gully Stabilization.
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            A comprehensive, multi-billion Naira environmental remediation
            initiative in Calabar, Cross River State, completed in strict
            compliance with World Bank / NEWMAP requirements.
          </p>
        </div>

        {/* 50/50 Interactive Slider Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stage Text Details & Milestones */}
          <div className="col-span-1 lg:col-span-6 space-y-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stage Counter */}
                <div className="flex items-center gap-4">
                  <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-[#EAB308] to-amber-700/20 font-mono">
                    {stage.num}
                  </span>
                  <div className="h-px w-12 bg-slate-800" />
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Phase Sequence
                  </span>
                </div>

                {/* Typography Header */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                    {stage.title}
                  </h3>
                  <h4 className="text-sm font-mono text-[#EAB308] uppercase tracking-wider mt-1.5 font-semibold">
                    {stage.subtitle}
                  </h4>
                </div>

                {/* Narrative description */}
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {stage.desc}
                </p>

                {/* Dynamic Metrics Row */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
                  {stage.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black text-[#F8FAFC] tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls Bar */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded border border-slate-800 bg-[#0F172A] text-slate-400 hover:text-[#EAB308] hover:border-slate-700 transition-colors select-none outline-none"
                aria-label="Previous Stage"
              >
                <HiOutlineArrowLongLeft className="text-xl" />
              </button>

              {/* Slide Progress Node indicators */}
              <div className="flex gap-2">
                {CASE_STAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStage(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      i === activeStage
                        ? "w-8 bg-[#EAB308]"
                        : "w-2 bg-slate-800"
                    }`}
                    aria-label={`Go to phase ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded border border-slate-800 bg-[#0F172A] text-slate-400 hover:text-[#EAB308] hover:border-slate-700 transition-colors select-none outline-none"
                aria-label="Next Stage"
              >
                <HiOutlineArrowLongRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Right Column: Panoramic Stage Image */}
          <div className="col-span-1 lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative h-80 sm:h-112.5 rounded border border-slate-800/80 overflow-hidden shadow-2xl bg-[#0F172A]"
              >
                <div
                  className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-750 ease-out"
                  style={{ backgroundImage: `url('${stage.img}')` }}
                />

                {/* Subtle vignette overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-transparent to-transparent z-10" />

                {/* Hover HUD Badge */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0B0F19]/90 border border-slate-800 shadow-lg text-xs text-[#EAB308] font-mono">
                  <IoShieldCheckmark className="animate-pulse text-sm" />
                  <span>QC Sign-off Active</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
