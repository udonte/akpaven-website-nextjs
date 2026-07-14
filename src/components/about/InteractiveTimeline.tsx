"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import {
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MILESTONES: Milestone[] = [
  {
    year: "2003",
    title: "Company Incorporation",
    description:
      "Akpaven Integrated Services Limited was founded as an indigenous Nigerian engineering firm, establishing local hubs to support domestic infrastructure development.",
    icon: HiOutlineBuildingOffice2,
  },
  {
    year: "2011",
    title: "Regional Pipeline & Civil Expansion",
    description:
      "Expanded core disciplines into heavy mechanical pipeline assets and public civil networks, securing key corporate frameworks across the Niger Delta.",
    icon: HiOutlineBriefcase,
  },
  {
    year: "2018",
    title: "World Bank / NEWMAP Accreditation",
    description:
      "Successfully accredited as an elite infrastructure contractor, mobilizing multi-billion Naira environmental remediation works, starting with the Calabar Ikot Nkebre complex.",
    icon: HiOutlineGlobeAlt,
  },
  {
    year: "2026",
    title: "RAAMP Milestones & Modernization",
    description:
      "Leading extensive rural access road developments under the national RAAMP framework, achieving over 20 years of uncompromised, zero-injury execution records.",
    icon: HiOutlineBriefcase,
  },
];

export default function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Scroll tracking for the vertical progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden border-b border-slate-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            The Timeline of Growth.
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-xl mx-auto">
            Following over two decades of technical evolution, local capacity
            expansion, and successful structural milestones.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Timeline Axis Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full" />

          {/* Active Progress Filling Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#EAB308] rounded-full z-10"
          />

          {/* Timeline Events Loop */}
          <div className="space-y-16">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  {/* Left Column (Even on Left, Odd is empty spacer on desktop) */}
                  <div
                    className={`order-2 md:order-1 ${isEven ? "md:text-right" : "md:col-start-2 order-2"}`}
                  >
                    <TimelineCard
                      milestone={milestone}
                      isEven={isEven}
                      index={index}
                    />
                  </div>

                  {/* Right Column (Odd on Right, Even is empty spacer on desktop) */}
                  {!isEven && <div className="hidden md:block md:order-1" />}

                  {/* Central Node Dot Highlight */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B0F19] border-4 border-slate-800 flex items-center justify-center text-slate-400 z-20 group-hover:border-[#EAB308] transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual card elements to clean up viewports
function TimelineCard({
  milestone,
  isEven,
  index,
}: {
  milestone: Milestone;
  isEven: boolean;
  index: number;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  const initialX = isEven ? -40 : 40;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: initialX }}
      animate={isCardInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-6 sm:p-8 bg-[#0B0F19]/80 backdrop-blur-sm border border-slate-800 rounded shadow-xl flex flex-col ${
        isEven ? "md:items-end" : "md:items-start"
      }`}
    >
      <span className="text-3xl font-black text-[#EAB308] font-mono tracking-tight leading-none mb-2">
        {milestone.year}
      </span>
      <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight mb-2">
        {milestone.title}
      </h3>
      <p
        className={`text-xs sm:text-sm text-slate-400 font-light leading-relaxed ${
          isEven ? "md:text-right" : "md:text-left"
        }`}
      >
        {milestone.description}
      </p>

      {/* Industrial Grid Accents on Card Corners */}
      <div
        className={`absolute top-3 w-1.5 h-1.5 rounded-full bg-slate-800 ${isEven ? "left-3" : "right-3"}`}
      />
    </motion.div>
  );
}
