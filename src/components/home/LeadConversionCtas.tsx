"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { HiArrowRight, HiDocumentArrowDown } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";

export default function LeadConversionCtas() {
  const panelRef = useRef(null);
  const isInView = useInView(panelRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={panelRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden"
    >
      {/* Structural Engineering Wireframe Grid Asset */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0b0f19_1px,transparent_1px),linear-gradient(to_bottom,#0b0f19_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/50 via-transparent to-[#0B0F19]/90 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3"
          >
            Engagement Gateway
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight"
          >
            Accelerate Your Infrastructure Pipeline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 font-light text-base sm:text-lg max-w-xl mx-auto"
          >
            Connect instantly with our project assessment teams to mobilize
            technical assets, machinery fleets, and certified personnel.
          </motion.p>
        </div>

        {/* Asymmetric Dual Funnel Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Funnel Card 1: Capability Profile Download (NCDMB/Technical Specs) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#0B0F19]/80 backdrop-blur-md border border-slate-800 p-8 sm:p-12 rounded flex flex-col justify-between shadow-2xl hover:border-slate-700 transition-all duration-300 min-h-[340px]"
          >
            <div>
              <div className="w-12 h-12 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-[#EAB308] mb-6 group-hover:bg-[#EAB308] group-hover:text-[#0F172A] transition-all duration-300">
                <HiDocumentArrowDown className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                Download Corporate Capability Profile
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-md">
                Access Akpaven's complete, unified technical dossier. Contains
                our audited equipment listings, indigenous content
                certifications (NCDMB), HSE matrix details, and past World Bank
                performance logs.
              </p>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-[#EAB308] text-[#F8FAFC] hover:text-[#EAB308] px-6 py-3 rounded text-sm font-semibold tracking-wide transition-all duration-300 bg-transparent w-full sm:w-auto justify-center select-none">
                Get Capability PDF
              </button>
            </div>
          </motion.div>

          {/* Funnel Card 2: Direct Tender Gateway (High-Ticket Lead) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-[#EAB308] p-8 sm:p-12 rounded flex flex-col justify-between shadow-2xl min-h-[340px] overflow-hidden"
          >
            {/* Geometric industrial accent block */}
            <div className="absolute right-0 bottom-0 top-0 w-24 bg-[#0F172A]/[0.03] skew-x-12 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded bg-[#0F172A] flex items-center justify-center text-[#EAB308] mb-6 shadow-md">
                <LiaFileContractSolid className="text-2xl" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] tracking-tight mb-3">
                Submit Request for Tender / Bidding Inquiry
              </h3>
              <p className="text-sm text-[#0F172A]/80 font-medium leading-relaxed max-w-md">
                Ready to review project specifications? Access our secure
                gateway portal directly to upload complex structural blueprints,
                engineering requirements, and formal requests for proposals
                (RFP).
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#0F172A]/90 text-[#F8FAFC] px-6 py-3 rounded text-sm font-bold tracking-wide transition-all duration-300 w-full sm:w-auto justify-center group shadow-lg"
              >
                Enter Tender Portal
                <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
