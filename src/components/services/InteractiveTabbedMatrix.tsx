"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  HiOutlineArrowRight,
  HiCpuChip,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import {
  GiBulldozer,
  GiWaterSplash,
  GiSpanner,
  GiPowerGenerator,
} from "react-icons/gi";

interface DisciplineSpec {
  id: string;
  tabLabel: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  metrics: { value: string; label: string }[];
  equipment: string[];
  capabilities: string[];
  representativeProject: {
    title: string;
    details: string;
  };
}

const MATRIX_DATA: DisciplineSpec[] = [
  {
    id: "civil",
    tabLabel: "Civil & Structural",
    title: "Heavy Civil & Rural Infrastructure",
    shortDesc:
      "Delivering massive concrete foundations, heavy road networks, and rural corridor integration under national frameworks.",
    icon: GiBulldozer,
    metrics: [
      { value: "120km+", label: "Rural Access Roads Laid" },
      { value: "₦5B+", label: "Civil Capital Managed" },
    ],
    equipment: [
      "Cat 16M Motor Graders",
      "Vibratory Soil Compactors (15-Ton Class)",
      "Mobile Concrete Batching Plants",
      "Heavy Excavators & Earthmovers",
    ],
    capabilities: [
      "Asphaltic Concrete Road Laying",
      "Box Culverts & Structural Abutments",
      "High-Load Piling & Foundations",
      "Geo-Technical Ground Stabilization",
    ],
    representativeProject: {
      title: "Okop Nko - Okop Ndua Access Road (RAAMP)",
      details:
        "Constructed standard rural links utilizing optimized drainage architectures to connect isolated farming hubs in Akwa Ibom State.",
    },
  },
  {
    id: "environmental",
    tabLabel: "Environmental & Hydraulic",
    title: "Watershed Management & Soil Remediation",
    shortDesc:
      "Designing systems to mitigate extreme hydrological erosion and land degradation alongside global financial institutions.",
    icon: GiWaterSplash,
    metrics: [
      { value: "100%", label: "Bio-Remediation Compliance" },
      { value: "18m+", label: "Deep Gully Formations Stabilized" },
    ],
    equipment: [
      "Dredging Systems & Slurry Pumps",
      "Hydraulic Sheet Pile Drivers",
      "Articulated Heavy Dump Trucks",
      "High-Output Hydroseeders",
    ],
    capabilities: [
      "Multi-Tier Gully Erosion Stabilization",
      "Hydraulic Control Structures & Spillways",
      "Bio-Engineered Soil Retention Layers",
      "Watershed Catchment Management Plans",
    ],
    representativeProject: {
      title: "Ikot Nkebre Gully Mitigation (NEWMAP)",
      details:
        "Implemented multi-billion Naira hydraulic structures and bio-remediation profiles funded directly by the World Bank.",
    },
  },
  {
    id: "mechanical",
    tabLabel: "Mechanical & Pipeline",
    title: "Onshore Mechanical & Pipeline Integrity",
    shortDesc:
      "Procuring, fabricating, and executing asset integrity works for complex heavy industrial pipelines and processing facilities.",
    icon: GiSpanner,
    metrics: [
      { value: "ISO 9001", label: "Quality Procurement Standards" },
      { value: "Zero LTI", label: "Pipeline Fabrication Runs" },
    ],
    equipment: [
      "Heavy Industrial Welding Inverters",
      "Automatic Pipe-Facing Machines",
      "High-Pressure Hydrostatic Pumps",
      "Crawler-Mounted Welding Rigs",
    ],
    capabilities: [
      "High-Pressure Pipe Laying & Tie-ins",
      "Structural Steel Fabrication & Erection",
      "Hydrostatic Testing & NDT Evaluations",
      "Oil & Gas Process Asset Maintenance",
    ],
    representativeProject: {
      title: "Onshore Pipeline Loop Expansion",
      details:
        "Managed material procurement and execution processes to secure structural asset integrity boundaries under indigenous regulations.",
    },
  },
  {
    id: "electrical",
    tabLabel: "Electrical & Instrumentation",
    title: "High-Voltage Grid Systems & SCADA Integration",
    shortDesc:
      "Deploying technical control systems, substation configurations, and industrial instrumentation automation loops.",
    icon: GiPowerGenerator,
    metrics: [
      { value: "33kV / 11kV", label: "Grid Lines Deployed" },
      { value: "100%", label: "Automation Loop Accuracy" },
    ],
    equipment: [
      "Calibrated Process Loop Simulators",
      "High-Voltage Cable Splicing Rigs",
      "Industrial Power Analyzer Systems",
      "Telemetry Integration Terminals",
    ],
    capabilities: [
      "Substation Installation & Power Audits",
      "Industrial SCADA & Control Architecture",
      "Fiber Optic & Telemetry Cabling",
      "Process Instrumentation Calibration",
    ],
    representativeProject: {
      title: "Automated Control Station Integration",
      details:
        "Integrated real-time system monitoring control loops to manage flow operations with zero-tolerance downtime parameters.",
    },
  },
];

export default function InteractiveTabbedMatrix() {
  const [activeTab, setActiveTab] = useState<string>("civil");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const activeSpec =
    MATRIX_DATA.find((item) => item.id === activeTab) || MATRIX_DATA[0];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden border-b border-slate-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Typography Intro */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3"
          >
            Capabilities Deep Dive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-none mb-4"
          >
            The Capabilities Architecture Matrix.
          </motion.h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Toggle our specialized divisions to evaluate standard equipment
            inventories, technical capability vectors, and verified project
            deliveries.
          </p>
        </div>

        {/* Dynamic Dual Grid Column: Tabs Selector Left & Display Matrix Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Nav Tab Bar Grid */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-3">
            {MATRIX_DATA.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-4 p-5 rounded text-left transition-all duration-300 border ${
                    isSelected
                      ? "border-slate-800 bg-[#0B0F19] shadow-xl"
                      : "border-slate-800/30 bg-[#0B0F19]/25 hover:bg-[#0B0F19]/50 hover:border-slate-800"
                  }`}
                >
                  {/* Selected Pill Background Slider Effect */}
                  {isSelected && (
                    <motion.div
                      layoutId="servicesTabAccent"
                      className="absolute inset-y-0 left-0 w-1 bg-[#EAB308]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <div
                    className={`p-2 rounded transition-colors duration-300 ${
                      isSelected
                        ? "bg-[#EAB308] text-[#0F172A]"
                        : "bg-slate-900 text-slate-400 group-hover:text-[#EAB308]"
                    }`}
                  >
                    <TabIcon className="text-xl" />
                  </div>

                  <div>
                    <div
                      className={`text-sm font-bold tracking-wide transition-colors ${
                        isSelected
                          ? "text-[#EAB308]"
                          : "text-slate-300 group-hover:text-slate-100"
                      }`}
                    >
                      {tab.tabLabel}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                      Technical Specs Matrix
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Selected Division Display Container Grid */}
          <div className="col-span-1 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0B0F19]/70 backdrop-blur-sm border border-slate-800 p-8 sm:p-12 rounded shadow-2xl space-y-10"
              >
                {/* 1. Sub-Header Section inside Display Card */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                    {activeSpec.title}
                  </h3>
                  <p className="text-slate-350 text-sm leading-relaxed mt-3 font-light max-w-2xl">
                    {activeSpec.shortDesc}
                  </p>
                </div>

                {/* 2. Key Statistical Metrics Display Row */}
                <div className="grid grid-cols-2 gap-6 border-y border-slate-800/80 py-6">
                  {activeSpec.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-black text-[#EAB308] tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Operational Grid Spec lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Capabilities List */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#EAB308] mb-4">
                      <HiCpuChip className="text-base" />
                      Core Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.capabilities.map((cap, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-300 font-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Heavy Fleet Assets List */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#EAB308] mb-4">
                      <HiWrenchScrewdriver className="text-base" />
                      Active Asset Fleet
                    </h4>
                    <ul className="space-y-2.5">
                      {activeSpec.equipment.map((eq, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-300 font-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]/40 shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Flagship Case Study Snapshot Banner */}
                <div className="bg-[#0F172A] border border-slate-800/80 p-6 rounded relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAB308]/1 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[9px] font-mono tracking-wider font-bold uppercase bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20 px-2 py-0.5 rounded-sm inline-block">
                        Representative Client Work
                      </div>
                      <h5 className="text-base font-bold text-[#F8FAFC] tracking-tight mt-2">
                        {activeSpec.representativeProject.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-xl font-light">
                        {activeSpec.representativeProject.details}
                      </p>
                    </div>
                    <a
                      href="/portfolio"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#EAB308] hover:text-[#F8FAFC] uppercase tracking-wider transition-colors shrink-0 group select-none self-start sm:self-center"
                    >
                      View Gallery
                      <HiOutlineArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
