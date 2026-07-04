"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ImageAsset {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  meta?: string; // Optional field for metrics like "Completed" or "World Bank Funded"
}

interface ShowcaseImageProps {
  layout: "single" | "dual";
  images: ImageAsset[];
}

export default function ShowcaseImage({
  layout = "single",
  images,
}: ShowcaseImageProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Safety filter to prevent breaks if data doesn't align with layout parameters
  const activeImages = layout === "single" ? [images[0]] : images.slice(0, 2);

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-transparent overflow-hidden select-none"
    >
      <div
        className={`grid gap-6 ${layout === "single" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
      >
        {activeImages.map((img, idx) => {
          if (!img) return null;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: idx * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative w-full rounded border border-slate-800/60 overflow-hidden shadow-2xl bg-[#0F172A] ${
                layout === "single"
                  ? "h-[450px] sm:h-[600px]"
                  : "h-[350px] sm:h-[480px]"
              }`}
            >
              {/* 1. Imagery Layer */}
              <div
                className="w-full h-full bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none ease-out"
                style={{ backgroundImage: `url('${img.src}')` }}
              />

              {/* 2. Asymmetric Shadow Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/95 via-[#0B0F19]/40 to-transparent z-10 transition-opacity duration-500 group-hover:from-[#0B0F19]/100" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/60 via-transparent to-transparent z-10" />

              {/* 3. Floating Project Details Dashboard (Bottom-Left Alignment) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-25 flex flex-col items-start pointer-events-none">
                {img.meta && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="mb-3 px-2.5 py-1 rounded-sm border border-[#EAB308]/30 bg-[#0B0F19]/80 backdrop-blur-sm text-[#EAB308] font-mono text-[10px] uppercase tracking-widest font-bold shadow-md"
                  >
                    {img.meta}
                  </motion.span>
                )}

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight group-hover:text-[#EAB308] transition-colors duration-300 drop-shadow-md"
                >
                  {img.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-xs sm:text-sm text-slate-300 font-light mt-2 max-w-sm leading-relaxed drop-shadow"
                >
                  {img.subtitle}
                </motion.p>
              </div>

              {/* Technical Precision Border Highlight Accent Line */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-slate-800 group-hover:bg-[#EAB308] transition-colors duration-300 z-30" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
