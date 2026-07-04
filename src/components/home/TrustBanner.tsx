"use client";

import React from "react";
import { motion } from "motion/react";
import { Container } from "@/ui/Container";

// Corporate / Institutional Partners list
const PARTNERS = [
  { name: "The World Bank", type: "Global Funding Body" },
  { name: "NEWMAP", type: "Watershed Management" },
  { name: "RAAMP", type: "Rural Infrastructure" },
  { name: "Federal Republic of Nigeria", type: "Statutory Authority" },
  { name: "NCDMB", type: "Local Content Compliant" },
  { name: "NNPC", type: "Energy Infrastructure" },
];

export default function TrustBanner() {
  // Duplicate the array to ensure perfectly seamless endless wrapping animation loops
  const doublePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="relative w-full bg-[#0B0F19] border-y border-slate-800/60 py-8 overflow-hidden z-20">
      {/* Background Gradient Vignette Overlay to Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-linear-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-linear-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <Container className="mb-4 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-500">
          Trusted Framework Partner For Global & National Frameworks
        </p>
      </Container>

      {/* Infinite Motion Scroll Track */}
      <div className="flex w-full overflow-hidden mask-linear">
        <motion.div
          className="flex gap-8 sm:gap-16 items-center whitespace-nowrap min-w-full"
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {doublePartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center px-4 min-w-[200px] sm:min-w-[260px] select-none group"
            >
              {/* Institutional Logo Placeholder Shell */}
              <div className="text-lg sm:text-xl font-black text-slate-400 group-hover:text-[#EAB308] tracking-tight transition-colors duration-300">
                {partner.name}
              </div>

              {/* Engineering Sector Label */}
              <div className="text-[10px] uppercase font-mono tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors duration-300 mt-0.5">
                {partner.type}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
