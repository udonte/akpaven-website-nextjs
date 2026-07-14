"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { HiMapPin } from "react-icons/hi2";

// Active regional project nodes to map onto the geographic visual overlay
const REGIONAL_HOTSPOTS = [
  {
    name: "Calabar, Cross River",
    details:
      "Ikot Nkebre Gully Erosion & Bio-Remediation (World Bank / NEWMAP)",
    top: "76%",
    left: "78%",
  },
  {
    name: "Uyo, Akwa Ibom",
    details: "Okop Nko-Okop Ndua & Adadia Road Corridors (RAAMP)",
    top: "78%",
    left: "72%",
  },
  {
    name: "Port Harcourt, Rivers",
    details: "Oil & Gas Mechanical Pipeline Integrity Asset Sourcing Hub",
    top: "75%",
    left: "64%",
  },
  {
    name: "Lagos Hub",
    details: "Corporate EPCI Headquarters & Technical Procurement Gateway",
    top: "73%",
    left: "30%",
  },
];

export default function PortfolioHero() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll effects to translate background map elements slightly slower than foreground headers
  const mapY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[85vh] min-h-150 flex items-center justify-center bg-[#090D1A] overflow-hidden border-b border-slate-800/60"
    >
      {/* 1. Absolute Geographic Mapping Overlay */}
      <motion.div
        style={{ y: mapY }}
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0 flex items-center justify-center opacity-30 lg:opacity-40"
      >
        {/* Subtle radial shadows to blend map borders */}
        <div className="absolute inset-0 bg-linear-to-r from-[#090D1A] via-transparent to-[#090D1A] z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#090D1A] via-transparent to-[#090D1A] z-10" />

        <div className="relative w-[320px] sm:w-120 lg:w-137.5 aspect-square pointer-events-none select-none">
          {/* Main Dark Nigeria Silhouette Vector map tag */}
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat opacity-40 mix-blend-screen grayscale"
            style={{
              backgroundImage: `url('https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSTzIgRRdZXXdzPjq1AXs6MeBHI0RHmlnchrPs_j4rXMUpBPBShuNYLNQdFKS0FoQj8f46dDWXHAR0Y8VQ')`,
            }}
          />

          {/* Interactive Project Hotspot Ping Nodes */}
          {REGIONAL_HOTSPOTS.map((spot, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                delay: 0.6 + i * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              className="absolute group/pin cursor-pointer"
              style={{ top: spot.top, left: spot.left }}
            >
              {/* Outer Pulsing Radio Wave Ring */}
              <span className="absolute -inset-2.5 rounded-full bg-[#EAB308]/20 animate-ping pointer-events-none" />

              {/* Central Solid Point Node */}
              <div className="relative w-3.5 h-3.5 rounded-full bg-[#EAB308] border-2 border-[#090D1A] shadow-md z-10" />

              {/* Hover Tooltip - Engineering Details HUD */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 p-3 rounded border border-slate-800 bg-[#0F172A]/95 backdrop-blur-md shadow-2xl opacity-0 group-hover/pin:opacity-100 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none transition-all duration-300 z-30">
                <div className="flex items-center gap-1.5 text-[#EAB308] text-[10px] font-mono font-bold uppercase tracking-wider">
                  <HiMapPin />
                  {spot.name}
                </div>
                <div className="text-[11px] text-slate-300 font-light mt-1.5 leading-relaxed">
                  {spot.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 2. Primary Foreground Copy Block */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div style={{ y: contentY }} className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] bg-[#EAB308]/10 border border-[#EAB308]/20 px-3 py-1.5 rounded-sm backdrop-blur-md inline-block mb-6">
            Track Record & Case Studies
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
            Two Decades of <br />
            <span className="bg-linear-to-r from-[#EAB308] via-amber-400 to-[#F8FAFC] bg-clip-text text-transparent">
              Structural Triumphs.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            Explore our comprehensive portfolio of completed and ongoing civil,
            environmental, and mechanical engineering projects. Verified assets,
            compliant workflows, and proven execution timelines built to stand
            the test of time.
          </p>

          <div className="flex items-center gap-3 mt-10 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-pulse" />
            Hover map targets to view active regional locations
          </div>
        </motion.div>
      </div>

      {/* Industrial Accent Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-20" />
    </section>
  );
}
