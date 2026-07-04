"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { BiMenu } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position to alter transparency states dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when full screen mobile architecture menu is deployed
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0F172A]/90 backdrop-blur-md py-3 border-slate-800/80 shadow-lg"
            : "bg-transparent py-5 border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* High-Ticket Identity Brand Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-1 group select-none bg-black p-2 rounded"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC]">
              AKPAVEN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] block animate-pulse mt-2" />
          </Link>

          {/* Center Column: Elegant Desktop Navigation Menu Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-5 py-2 text-xs font-mono tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-[#0F172A]"
                      : "text-slate-350 hover:text-[#EAB308]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#EAB308] rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 font-bold">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Column: CTA Gateway Link Option */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-transparent border-2 border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-[#0F172A] px-5 py-2.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
            >
              Partner With Us
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trigger Interface Mechanism for Small Screens */}
          <button
            type="button"
            className="relative z-50 p-2 text-slate-300 hover:text-[#EAB308] transition-colors md:hidden select-none outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Advanced Fullscreen Animated Menu Overlays */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0B0F19] z-40 flex flex-col justify-between px-6 pt-32 pb-12 md:hidden"
          >
            {/* Background Decorative Tech Element */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            {/* Main Mobile Navigation Map */}
            <nav className="relative z-10 w-full">
              <ul className="space-y-6">
                {navLinks.map(({ href, label }, idx) => {
                  const isActive = pathname === href;
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={href}
                        className={`block text-3xl font-extrabold tracking-tight ${
                          isActive ? "text-[#EAB308]" : "text-[#F8FAFC]/90"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-xs font-mono mr-3 text-slate-600">
                          0{idx + 1}.
                        </span>
                        {label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Panel Component Inside Mobile System */}
            <motion.div
              className="relative z-10 w-full space-y-6 border-t border-slate-800 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                EPCI Tendering & Procurement Hub
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#EAB308] text-[#0F172A] font-bold py-4 rounded shadow-lg text-sm uppercase font-mono tracking-wider"
                onClick={() => setMobileOpen(false)}
              >
                Access Tender Gateway
                <HiArrowRight className="text-base" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
