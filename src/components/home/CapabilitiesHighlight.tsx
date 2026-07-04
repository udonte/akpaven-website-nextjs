"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { HiArrowUpRight } from "react-icons/hi2";
import { GiSpill } from "react-icons/gi";
import { LuUtilityPole } from "react-icons/lu";
import {
  MdOutlinePrecisionManufacturing,
  MdOutlineElectricalServices,
} from "react-icons/md";
import { Container } from "@/ui/Container";

const DISCIPLINES = [
  {
    id: "civil",
    title: "Civil & Structural Engineering",
    description:
      "Constructing high-load industrial infrastructure, critical rural road networks (RAAMP projects), heavy concrete bridges, and drainage systems adapted to unstable terrain.",
    icon: MdOutlinePrecisionManufacturing,
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000",
    tags: ["Road Networks", "Bridges", "Heavy Foundations", "RAAMP Access"],
  },
  {
    id: "environmental",
    title: "Environmental & Hydraulic Engineering",
    description:
      "Executing complex watershed frameworks, multi-billion Naira gully erosion mitigation installations (NEWMAP), bio-remediation, and advanced drainage channels.",
    icon: GiSpill,
    img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000",
    tags: [
      "Erosion Control",
      "NEWMAP Actions",
      "Bio-Remediation",
      "Hydraulics",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical & Pipeline Construction",
    description:
      "Procurement, technical fabrication, and high-pressure asset integrity installations for heavy onshore facilities and industrial process networks.",
    icon: LuUtilityPole,
    img: "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?q=80&w=1000",
    tags: [
      "Asset Fabrication",
      "Pipeline Layouts",
      "Procurement Log",
      "EPCI Flow",
    ],
  },
  {
    id: "electrical",
    title: "Electrical & Instrumentation Construction",
    description:
      "Installing high-voltage power lines, sub-station grids, automated industrial instrumentation panels, and critical system monitoring controls.",
    icon: MdOutlineElectricalServices,
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000",
    tags: [
      "High-Voltage Sub-grids",
      "SCADA Control",
      "Instrumentation",
      "Automation",
    ],
  },
];

export default function CapabilitiesHighlight() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0F19] py-24 lg:py-32 border-b border-slate-800/50 overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3"
          >
            Core Competencies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-none"
          >
            Industrial Capabilities Matrix.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 font-light text-base sm:text-lg max-w-2xl"
          >
            Providing optimized end-to-end EPCI execution pipelines mapped
            meticulously to global compliance and local content requirements.
          </motion.p>
        </div>

        {/* Four Quadrant Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-800 rounded overflow-hidden">
          {DISCIPLINES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative min-h-[380px] lg:min-h-[450px] p-8 sm:p-12 bg-[#0F172A] border border-slate-900 overflow-hidden flex flex-col justify-between transition-all duration-500 cursor-pointer"
              >
                {/* Visual Background Transition Layer */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-[#0F172A] group-hover:bg-[#0F172A]/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0F172A]/90 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  />
                </div>

                {/* Top Level: Icon and Directional Indicator Arrow */}
                <div className="relative z-20 flex items-start justify-between">
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800 text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-all duration-300 shadow-lg">
                    <IconComponent className="text-2xl sm:text-3xl" />
                  </div>
                  <div className="text-slate-600 group-hover:text-[#EAB308] transition-colors duration-300 p-1">
                    <HiArrowUpRight className="text-xl sm:text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Bottom Level: Text Layout Information & Active Chips */}
                <div className="relative z-20 mt-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#EAB308] transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed font-light mb-6 max-w-xl">
                    {item.description}
                  </p>

                  {/* Operational Tags Display */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:border-slate-700/50 group-hover:text-slate-300 transition-all duration-300 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Fine Grid Overlay Accent Line */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#eab308_1px,transparent_1px),linear-gradient(to_bottom,#eab308_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
