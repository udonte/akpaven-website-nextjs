"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  HiOutlineShieldCheck,
  HiOutlineExclamationTriangle,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { GiSafetyPin } from "react-icons/gi";

const HSE_PILLARS = [
  {
    title: "Occupational Safety Standard",
    metric: "0.00 LTI",
    icon: HiOutlineShieldCheck,
    desc: "Maintaining a flawless track record of Zero Lost Time Injuries across deep excavation, civil works, and mechanical pipeline alignments.",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQgQc-wq4xquCWXtfqFYKzYMbFMzAvrwj705naj0b_lIlTbR632PnfdKznEmFwXPMxczQ9AX0iI5a2UX2g",
  },
  {
    title: "Environmental Remediation",
    metric: "0% Runoff",
    icon: HiOutlineSparkles,
    desc: "Integrating geo-engineered protective barriers, silt fences, and Vetiver grass systems to halt topsoil loss on fragile structural slopes.",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT2elxGzAWKNsQAPBhbf0o-LENvt8uFaVPJKiN-bQYvV0UqqeSFO_1afrqL2zCMSV5NVEx-BrLCgcl6JeI",
  },
];

export default function HseTargetZero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0B0F19] py-24 lg:py-32 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background Graphic Vignette */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EAB308]/1 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Statements & Caution Highlights */}
          <div className="col-span-1 lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] block">
                Health, Safety, & Environment
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight leading-none">
                TARGET ZERO.
              </h2>
              <p className="text-slate-300 font-light leading-relaxed">
                For Akpaven, structural performance is bound directly to
                systemic safety. Our field operations execute risk-control
                workflows to completely eliminate hazards before they occur.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                We operate in strict alignment with ISO 45001:2018 guidelines,
                ensuring that every engineer, field laborer, and local
                communities member remains completely protected on our project
                frontlines.
              </p>
            </motion.div>

            {/* Industrial Warning Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative border-l-2 border-[#EAB308] bg-[#0F172A] p-6 rounded-r overflow-hidden shadow-2xl"
            >
              <div className="flex gap-4 items-start">
                <HiOutlineExclamationTriangle className="text-[#EAB308] text-2xl shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
                    Site Mandate Verification
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1.5 font-light">
                    Every active site maintains independent daily toolbox safety
                    briefs and formal PPE compliance audits before equipment
                    mobilization begins.
                  </p>
                </div>
              </div>

              {/* Caution stripe background accent */}
              <div className="absolute right-0 bottom-0 top-0 w-2.5 bg-[linear-gradient(45deg,#eab308_25%,transparent_25%,transparent_50%,#eab308_50%,#eab308_75%,transparent_75%,transparent)] bg-size-[10px_10px] opacity-20 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Dynamic Horizontal Cards */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            {HSE_PILLARS.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group relative flex flex-col md:flex-row rounded border border-slate-800 bg-[#0F172A] overflow-hidden shadow-2xl"
                >
                  {/* Left Side (or Top on Mobile): High-Contrast Image Node */}
                  <div className="relative w-full md:w-48 h-48 shrink-0 overflow-hidden bg-[#0F172A]">
                    <div
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-750 ease-out"
                      style={{ backgroundImage: `url('${pillar.img}')` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0F172A]/90 hidden md:block" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/90 to-transparent block md:hidden" />
                  </div>

                  {/* Right Side: Narrative Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-mono font-black text-[#EAB308] uppercase tracking-wider">
                          {pillar.title}
                        </span>
                        <span className="text-xl font-mono font-black text-[#F8FAFC]">
                          {pillar.metric}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      <PillarIcon className="text-[#EAB308] text-sm" />
                      <span>Regulatory Verified</span>
                    </div>
                  </div>

                  {/* Tech boundary indicator */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#EAB308] transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
