"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { HiCheck } from "react-icons/hi2";
import { LiaShipSolid } from "react-icons/lia";
import { GiCrane } from "react-icons/gi";

export default function ProcurementShowcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Mouse tracking state for cards to enable subtle 3D parallax offsets
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    cardIdx: number,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // Normalized value between -0.5 and 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
    setHoveredCard(cardIdx);
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0F19] py-24 lg:py-32 overflow-hidden border-b border-slate-800/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Interactive Grid with Real Visual Assets */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Top/Left: Global Logistics Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredCard === 0
                    ? `perspective(1000px) rotateX(${coords.y * 8}deg) rotateY(${coords.x * -8}deg) translateY(-5px)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
                transition:
                  hoveredCard === 0 ? "none" : "transform 0.5s ease-out",
              }}
              className="relative h-75 md:h-100 rounded overflow-hidden border border-slate-800 group shadow-2xl bg-[#0F172A]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-750 ease-out"
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRRgUKxjhTZSY6aSmQO03Lqu9ABhDPoiTPggI4KdsSPBeBPmGMgBoOZwXZGVHwPaA-tYaNZpGz8vTl9iY')`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                <div className="w-10 h-10 rounded bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#EAB308] mb-3">
                  <LiaShipSolid className="text-xl" />
                </div>
                <h4 className="text-lg font-bold text-[#F8FAFC]">
                  Global Sourcing Pipeline
                </h4>
                <p className="text-xs text-[#EAB308] mt-1 font-light leading-relaxed">
                  International procurement hubs securing raw components and
                  steel stocks directly from OEM factories.
                </p>
              </div>
            </motion.div>

            {/* Bottom/Right: Heavy Fleet Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  hoveredCard === 1
                    ? `perspective(1000px) rotateX(${coords.y * 8}deg) rotateY(${coords.x * -8}deg) translateY(-5px)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
                transition:
                  hoveredCard === 1 ? "none" : "transform 0.5s ease-out",
              }}
              className="relative h-75 md:h-100 md:translate-y-12 rounded overflow-hidden border border-slate-800 group shadow-2xl bg-[#0F172A]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-750 ease-out"
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0w2dv3cSgNirTZt6XrRL7eAR3aW0JjIWESvLs0OADuf0oVGFr2mgmlxIND3b5V3Hd2yvjuhJOGOdmLoo')`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                <div className="w-10 h-10 rounded bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#EAB308] mb-3">
                  <GiCrane className="text-xl" />
                </div>
                <h4 className="text-lg font-bold text-[#F8FAFC]">
                  In-Country Heavy Equipment
                </h4>
                <p className="text-xs text-[#EAB308] mt-1 font-light leading-relaxed">
                  Fully-owned earthmoving machines, high-tonnage cranes, and
                  piling plants ready for rapid field mobilization.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Value Statement & Operations Check */}
          <div className="col-span-1 lg:col-span-5 space-y-8 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3">
                Logistical Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-none mb-6">
                Procurement & Asset Sourcing Excellence.
              </h2>
              <p className="text-slate-300 font-light leading-relaxed mb-4">
                Managing large engineering initiatives requires constant access
                to materials, raw steel, and industrial assets. Akpaven
                maintains an active global supply network to bypass localized
                supply bottlenecks.
              </p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                By maintaining a robust in-house heavy equipment fleet, we
                minimize startup lag, maintain strict quality controls, and
                accelerate field mobilization across the complex terrains of the
                Niger Delta and wider West Africa.
              </p>
            </motion.div>

            {/* Checkmark List */}
            <ul className="space-y-4">
              {[
                {
                  title: "Direct OEM Partnerships",
                  desc: "Sourcing structural steel, valves, and heavy components straight from certified global manufacturers.",
                },
                {
                  title: "In-House Heavy Fleet Ownership",
                  desc: "No third-party dry-lease bottlenecks; our heavy graders, excavators, and plants are owned and maintained by Akpaven.",
                },
                {
                  title: "Strategic Local Content Delivery",
                  desc: "100% aligned with Nigerian Content Development (NCDMB) parameters to optimize regional labor networks.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308] shrink-0 mt-1">
                    <HiCheck className="text-xs" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#F8FAFC] tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 font-light mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
