"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
// use icons from react-icons
import {
  FaHardHat,
  FaTree,
  FaSpellCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Container } from "@/ui/Container";

const COMPLIANCE_METRICS = [
  {
    icon: FaHardHat,
    title: "Zero Lost Time Injuries (LTI)",
    description:
      "Strict enforcement of OHSAS occupational safety protocols across all multi-billion Naira rural and urban engineering frontlines.",
  },
  {
    icon: FaTree,
    title: "Zero Environmental Impact",
    description:
      "Bio-remediation and careful ecological mitigation frameworks verified through historical World Bank and NEWMAP hydraulic interventions.",
  },
  {
    icon: FaSpellCheck,
    title: "Full Statutory Compliance",
    description:
      "100% adherence to NCDMB Local Content directives, DPR/NUPRC licensing parameters, and federal engineering acts.",
  },
];

export default function ComplianceTeaser() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#090D1A] py-24 lg:py-32 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#EAB308]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Ticket Target Zero Brand Lockup */}
          <div className="col-span-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3">
                Risk Management & Governance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight leading-none mb-6">
                TARGET ZERO.
              </h2>
              <p className="text-slate-300 leading-relaxed font-light mb-8">
                In heavy infrastructural engineering, structural integrity is
                only half the battle. Our institutional partners require
                flawless execution risks parameters. Akpaven operates under a
                zero-compromise health, safety, and environmental architecture.
              </p>

              {/* Heavy Industrial Warning Callout Box */}
              <div className="relative border-l-2 border-[#EAB308] bg-[#0F172A] p-5 rounded-r shadow-xl overflow-hidden">
                <div className="flex gap-4 items-start">
                  <FaExclamationTriangle className="text-[#EAB308] w-6 h-6 shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC] tracking-tight uppercase font-mono">
                      Institutional Mandate
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1 font-light">
                      Every project site undergoes independent environmental
                      impact assessments (EIA) matching international
                      operational safeguards before mobilization.
                    </p>
                  </div>
                </div>
                {/* Subtle Industrial Pattern lines inside box */}
                <div className="absolute right-0 bottom-0 top-0 w-2 bg-[linear-gradient(45deg,#eab308_25%,transparent_25%,transparent_50%,#eab308_50%,#eab308_75%,transparent_75%,transparent)] bg-[size:10px_10px] opacity-20" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three-Tier Compliance Architecture Pillars */}
          <div className="col-span-1 lg:col-span-7 space-y-4">
            {COMPLIANCE_METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative flex flex-col sm:flex-row gap-5 p-6 sm:p-8 bg-[#0F172A] border border-slate-850 rounded hover:border-slate-700/60 transition-all duration-300 shadow-lg"
                >
                  {/* Left Side: Glowing Node Icon Container */}
                  <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-[#EAB308] group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-all duration-300 shadow-md shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Right Side: Text Architecture Details */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#EAB308] transition-colors duration-200">
                      {metric.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-200 leading-relaxed font-light">
                      {metric.description}
                    </p>
                  </div>

                  {/* Structural Tech-Grid Indicator Line Element */}
                  <div className="absolute right-4 top-4 w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#EAB308] transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
