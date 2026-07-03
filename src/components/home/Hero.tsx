"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HiArrowRight } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const headlineLine1 = ["Engineering", "the", "Future", "of"];
const headlineLine2 = ["African", "Infrastructure."];

const easeOut = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeOut },
  },
};

const reducedMotionWordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeOut },
  },
});

function AnimatedWords({
  words,
  className,
  reducedMotion,
  delay = 0.35,
}: {
  words: string[];
  className?: string;
  reducedMotion: boolean;
  delay?: number;
}) {
  return (
    <motion.span
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.09, delayChildren: delay },
        },
      }}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap gap-x-[0.3em] ${className ?? ""}`}
      aria-hidden="true"
    >
      {words.map((word) => (
        <motion.span
          key={word}
          variants={reducedMotion ? reducedMotionWordVariants : wordVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-navy">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          initial={
            reducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.08 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: easeOut }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/home/hero-section-video.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 z-10 bg-linear-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 z-10 bg-linear-to-t from-navy via-transparent to-navy/40" />
      </div>

      {/* Blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-5 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto flex h-full w-full flex-col justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-amber backdrop-blur-sm sm:text-sm"
          >
            <IoShieldCheckmarkSharp className="text-base" />
            ISO 9001:2015 Certified EPCI Firm
          </motion.div>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate sm:text-6xl lg:text-7xl">
            <span className="sr-only">
              Engineering the Future of African Infrastructure.
            </span>
            <AnimatedWords
              words={headlineLine1}
              className="text-slate"
              reducedMotion={!!reducedMotion}
            />
            <AnimatedWords
              words={headlineLine2}
              delay={0.75}
              className="mt-1 bg-linear-to-r from-amber via-amber-300 to-slate bg-clip-text text-transparent"
              reducedMotion={!!reducedMotion}
            />
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.85)}
            className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl"
          >
            Delivering world-class Engineering, Procurement, Construction, and
            Installation (EPCI) solutions across Nigeria since 2003. Partnered
            with global bodies to execute critical public utilities.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(1.05)}
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/portfolio"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded bg-amber px-8 py-4 font-bold text-navy shadow-lg transition-all duration-300 hover:bg-amber/90"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Projects
                <HiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center rounded border-2 border-slate-400 bg-transparent px-8 py-4 font-semibold text-slate transition-all duration-300 hover:border-amber hover:text-amber"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating stat badges */}
      <div className="absolute right-12 bottom-12 z-20 hidden flex-col gap-4 lg:flex">
        {[
          { metric: "23+", label: "Years Experience" },
          { metric: "100%", label: "HSE Compliance" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 + i * 0.15, ease: easeOut }}
            className="w-48 rounded border border-slate-800 bg-navy/80 p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="text-2xl font-black text-amber">{stat.metric}</div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
