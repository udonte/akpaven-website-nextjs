"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { FaShield } from "react-icons/fa6";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    question:
      "Is Akpaven Integrated Services Limited fully NCDMB and local content compliant?",
    answer: (
      <>
        Yes. Akpaven is a 100% indigenous Nigerian Engineering, Procurement,
        Construction, and Installation (EPCI) company. We are fully registered
        and compliant with the{" "}
        <strong>
          Nigerian Content Development and Monitoring Board (NCDMB)
        </strong>
        . Our corporate structure, engineering workforce, and equipment
        logistics pipelines are designed to maximize local capacities,
        prioritizing host communities in the Niger Delta and wider Nigerian
        regions while strictly maintaining international quality benchmarks.
      </>
    ),
  },
  {
    question:
      "How does the firm ensure compliance with World Bank procurement and environmental safeguards?",
    answer: (
      <>
        Having successfully served as the primary contractor on critical World
        Bank-funded
        <strong>
          {" "}
          NEWMAP (Nigeria Erosion and Watershed Management Project)
        </strong>{" "}
        and
        <strong>
          {" "}
          RAAMP (Rural Access and Agricultural Marketing Project)
        </strong>{" "}
        projects, we work in strict alignment with the World Bank’s
        Environmental and Social Framework (ESF). This includes performing
        exhaustive Environmental Impact Assessments (EIA), managing waste
        streams systematically, maintaining occupational health checklists
        (OSHAS standards), and conducting open, transparent grievance redress
        sessions within local project host communities.
      </>
    ),
  },
  {
    question:
      "What is Akpaven's current heavy equipment mobilization timeline for regional projects?",
    answer: (
      <>
        Because we fully own our heavy equipment fleet (including Caterpillar
        motor graders, soil compactors, high-tonnage cranes, and specialized
        piling rigs), we eliminate dry-lease negotiation friction. For standard
        site locations in
        <strong> Akwa Ibom, Cross River, Rivers, and Lagos states</strong>, we
        can achieve complete asset mobilization, engineering survey setups, and
        site team deployments within 7 to 14 business days of contract
        finalization.
      </>
    ),
  },
  {
    question:
      "What specific quality standards guide your civil and environmental installations?",
    answer: (
      <>
        Our execution protocols are governed by our integrated management
        system, adhering strictly to
        <strong> ISO 9001:2015 (Quality Management Systems)</strong>,{" "}
        <strong>ISO 14001:2015 (Environmental Management Systems)</strong>, and{" "}
        <strong>ISO 45001:2018 (Occupational Health and Safety)</strong>{" "}
        guidelines. Every concrete batch, asphaltic mix, pipeline welding run,
        and hydraulic spillway installation undergoes stringent non-destructive
        testing (NDT) and structural verifications before sign-off.
      </>
    ),
  },
];

export default function SeoFaqCollapse() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first panel
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/30 text-[#EAB308] text-xs font-mono font-bold uppercase tracking-wider mb-4"
          >
            <FaShield className="w-4 h-4" />
            Compliance & Technical FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4"
          >
            Procurement & Engineering Standards.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-light text-sm sm:text-base max-w-xl mx-auto"
          >
            Review our technical compliance structures, project mobilization
            timelines, and alignment with international development bank
            frameworks.
          </motion.p>
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0B0F19] border-slate-700/80 shadow-2xl"
                    : "bg-[#0B0F19]/30 border-slate-800/40 hover:border-slate-800"
                }`}
              >
                {/* Accordion Trigger Head */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-6 text-left group select-none outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                      isOpen
                        ? "text-[#EAB308]"
                        : "text-[#F8FAFC]/90 group-hover:text-[#F8FAFC]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`p-1.5 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#EAB308]/40 bg-[#EAB308] text-[#0F172A]"
                        : "border-slate-800 text-slate-400 group-hover:border-slate-700"
                    }`}
                  >
                    {isOpen ? (
                      <HiMinus className="text-sm font-black" />
                    ) : (
                      <HiPlus className="text-sm font-black" />
                    )}
                  </div>
                </button>

                {/* Collapsible Content Body Container */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
