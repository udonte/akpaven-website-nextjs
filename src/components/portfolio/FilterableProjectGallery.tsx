"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineClock,
} from "react-icons/hi2";

interface Project {
  id: string;
  title: string;
  category: "civil" | "environmental" | "oil-gas";
  client: string;
  scope: string;
  status: "Completed" | "Ongoing" | "Maintenance Phase";
  location: string;
  img: string;
}

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "civil", label: "Civil Roads" },
  { id: "environmental", label: "Environmental Remediation" },
  { id: "oil-gas", label: "Oil & Gas Facilities" },
];

const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Ikot Nkebre Gully Erosion & Bio-Remediation Complex",
    category: "environmental",
    client: "World Bank / NEWMAP / Cross River State Government",
    scope:
      "Multi-billion Naira gully stabilization, deep hydraulic structures, storm-water channels, and bio-engineered soil retention layers.",
    status: "Completed",
    location: "Calabar, Cross River State",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRh_aKBx4Toov_xqLFRDuoHHqbSRgT4YlSWqLr9uPIS7VrWrMFTeDW5JBTLdJr5eQgq1juJN03JDYcFdO0",
  },
  {
    id: "proj-2",
    title: "Okop Nko - Okop Ndua Rural Access Road Corridor",
    category: "civil",
    client: "RAAMP / Akwa Ibom State Government",
    scope:
      "Civil subgrade optimization, asphaltic concrete laying, and structural side drainage systems connecting agricultural hubs.",
    status: "Completed",
    location: "Akwa Ibom State",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQFZvKLTAIm2zfbKnZnDuU1FK4vdXgoDuZCMi97OYmL1awILke4U_IjuSe6GQOY6mMKMRcKBPDvsbn50QA",
  },
  {
    id: "proj-3",
    title: "Akwa-Ibiaku Obio Ndobo - Adadia Civil Road Network",
    category: "civil",
    client: "RAAMP / Federal Republic of Nigeria",
    scope:
      "Grading, heavy soil stabilization, box culvert installations, and structural earthworks for deep rural market access.",
    status: "Completed",
    location: "Adadia, Akwa Ibom State",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR9tBiUXpR8MeGwGekCW7ScPoE6YODrvJ2EtJk30kb48u0H92LsVXitdurWCo5s6v9U54qnIIlDwLktYrQ",
  },
  {
    id: "proj-4",
    title: "Onshore Flowline & Pipeline Integrity Remediation",
    category: "oil-gas",
    client: "Indigenous Joint Venture Operator",
    scope:
      "Procurement of API-grade pipe stocks, mechanical fabrication, NDT testing, trench excavation, and pipeline tie-in installation.",
    status: "Completed",
    location: "Niger Delta Region",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSZDmQ7VmeI5SzVyXHX7_jgOg3ej7WaBDJjZcRABDyq68i1rKcVvnYnCPOyFmgh19BH11Fz0PwEfOkgjFQ",
  },
  {
    id: "proj-5",
    title: "Regional Watershed Protective Barriers",
    category: "environmental",
    client: "Federal Ministry of Environment",
    scope:
      "Critical soil stabilization barriers, heavy gabion installations, and bio-remediation of degraded coastal environments.",
    status: "Ongoing",
    location: "Rivers State",
    img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000",
  },
  {
    id: "proj-6",
    title: "High-Pressure Gas Asset Procurement & Assembly",
    category: "oil-gas",
    client: "Midstream Energy Logistics Board",
    scope:
      "EPCI assembly of high-pressure control manifolds, skid integration, and automated monitoring safety instrumentation loops.",
    status: "Ongoing",
    location: "Port Harcourt Hub",
    img: "https://images.unsplash.com/photo-1513828583835-c527ebc5003e?q=80&w=1000",
  },
];

export default function FilterableProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={galleryRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden border-b border-slate-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation Menu Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-slate-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-2">
              Verified Deliveries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Project Execution Ledger.
            </h2>
          </div>

          {/* Tab Button Bar */}
          <div className="flex flex-wrap gap-2 bg-[#0B0F19]/50 p-1.5 rounded border border-slate-800/80 backdrop-blur-sm self-start md:self-center">
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === activeFilter;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded transition-colors duration-350 select-none outline-none ${
                    isSelected
                      ? "text-[#0F172A]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="galleryTabAccent"
                      className="absolute inset-0 bg-[#EAB308] rounded z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid with Fluid Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="group relative h-105 rounded overflow-hidden border border-slate-800 bg-[#0B0F19] shadow-2xl flex flex-col justify-end"
              >
                {/* 1. Project Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/45 to-transparent z-10 transition-opacity duration-500 group-hover:from-[#0B0F19]" />
                  <div className="absolute inset-0 bg-[#0B0F19]/25 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ backgroundImage: `url('${project.img}')` }}
                  />
                </div>

                {/* 2. Visual Corner Info Tag (Static) */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded-sm border backdrop-blur-md shadow-md ${
                      project.status === "Completed"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-[#EAB308]/10 border-[#EAB308]/30 text-[#EAB308]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* 3. Sliding Content Overlay Panel (Interactive) */}
                <div className="relative z-20 p-6 sm:p-8 space-y-4">
                  {/* Categorical Label */}
                  <span className="text-[10px] font-mono font-black text-[#EAB308] uppercase tracking-[0.2em]">
                    {project.location}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#EAB308] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Collapsible/Expandable Meta Information Frame */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 space-y-3 pt-2 border-t border-slate-800/60">
                    {/* Client Metadata */}
                    <div className="flex gap-2.5 items-start text-xs text-slate-300 font-light">
                      <HiOutlineUser className="text-base text-[#EAB308] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block">
                          Client
                        </strong>
                        {project.client}
                      </div>
                    </div>

                    {/* Scope of Work Metadata */}
                    <div className="flex gap-2.5 items-start text-xs text-slate-350 font-light">
                      <HiOutlineBriefcase className="text-base text-[#EAB308] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block">
                          Execution Scope
                        </strong>
                        {project.scope}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Precision Bottom Anchor Line */}
                <div className="absolute inset-x-0 bottom-0 h-0.75 bg-slate-800 group-hover:bg-[#EAB308] transition-colors duration-300 z-30" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
