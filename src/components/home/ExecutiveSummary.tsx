"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { HiCheckCircle } from "react-icons/hi2";
import { Container } from "@/ui/Container";

// Reusable micro-counter component for data precision
function AnimatedCounter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 15 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function ExecutiveSummary() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0F172A] py-24 lg:py-32 overflow-hidden border-b border-slate-800/50"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Heavy Engineering Montage / Structural Parallax Layout */}
          <div className="col-span-1 lg:col-span-6 relative h-[450px] sm:h-[600px] w-full">
            <motion.div
              className="absolute inset-0 bg-slate-900/40 rounded border border-slate-800 z-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isContainerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            />

            {/* Primary Massive Infrastructure Image */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full  rounded overflow-hidden shadow-2xl border border-slate-700/30 z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('/images/home/executive-summary.png')`,
                  //   backgroundImage: `url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1920')`,
                }}
              />
            </motion.div>

            {/* Floating Layered Execution Field Image */}
            <motion.div
              className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded overflow-hidden shadow-2xl border-2 border-[#0F172A] z-20"
              initial={{ opacity: 0, x: 40 }}
              animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=1000')`,
                }}
              />
            </motion.div>

            {/* Industrial Stamp Accent Badge */}
            <motion.div
              className="absolute bottom-8 left-8 p-4 bg-[#EAB308] text-[#0F172A] rounded shadow-xl z-30 hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isContainerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest font-black leading-none mb-1">
                Incorporated
              </p>
              <p className="text-3xl font-black tracking-tight leading-none">
                2003
              </p>
            </motion.div>
          </div>

          {/* Right Side: The Value Proposal Narrative & Animated Core Pillars Counter */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#EAB308] block mb-3">
                Executive Briefing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-6">
                Over Two Decades of Uncompromised Heavy Civil Delivery.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                Akpaven Integrated Services Limited stands as a premier
                indigenous Nigerian engineering force. For over 20 years, we
                have mastered complex localized geologies and challenging
                African terrains to deliver massive infrastructural systems that
                meet international regulatory and quality benchmarks.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 font-light text-sm">
                From multi-billion Naira hydraulic erosion control complexes
                managed alongside the World Bank to critical agricultural
                corridors under the RAAMP framework, our technical footprint
                guarantees local content optimization backed by global
                structural safety norms.
              </p>
            </motion.div>

            {/* Animated Stat Grid Matrix */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-800 py-6 mb-8 bg-[#0B0F19]/30 px-4 rounded">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#EAB308] tracking-tight">
                  <AnimatedCounter value={23} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                  Years active
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight">
                  <AnimatedCounter value={100} />%
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                  HSE compliance
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#EAB308] tracking-tight">
                  ₦<AnimatedCounter value={10} />
                  B+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1">
                  Managed Value
                </div>
              </div>
            </div>

            {/* Quick Compliance Value Bullets */}
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={isContainerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                "Fully compliant with NCDMB (Nigerian Content Development Framework) criteria.",
                "Proven institutional delivery capacity for major World Bank-funded models.",
                "Heavy field-ready equipment fleet fully owned and deployed natively.",
              ].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <HiCheckCircle className="text-[#EAB308] text-xl shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
