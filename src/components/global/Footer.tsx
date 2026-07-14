"use client";

import React from "react";
import Link from "next/link";
import { HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Project Portfolio" },
    { href: "/contact", label: "Tender Gateway" },
  ],
  sectors: [
    { label: "Oil & Gas Engineering", spec: "EPCI Pipeline Flow" },
    { label: "Public Infrastructure", spec: "Bridges & Highways" },
    { label: "Environmental Management", spec: "NEWMAP Soil Control" },
    { label: "Rural Access Roads", spec: "RAAMP Corridor Links" },
  ],
  offices: [
    {
      city: "Lagos Headquarters",
      address: "Victoria Island Industrial Hub, Lagos, Nigeria",
      phone: "+234 (1) 460-0000",
    },
    {
      city: "Port Harcourt Operations",
      address: "Trans-Amadi Industrial Layout, Port Harcourt, Rivers State",
      phone: "+234 (803) 000-0000",
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0F19] border-t border-slate-800/80 text-[#F8FAFC] overflow-hidden z-20">
      {/* Subtle background blueprint grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-35 pointer-events-none" />

      {/* Main Grid Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Column 1: Brand & Identity (4 Span) */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="flex items-center gap-1 group select-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC]">
              AKPAVEN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] block animate-pulse mt-2" />
          </Link>

          <p className="text-sm leading-relaxed text-slate-400 font-light max-w-md">
            Indigenous Nigerian Engineering, Procurement, Construction, and
            Installation (EPCI) giant. Delivering world-class civil, mechanical,
            and environmental systems since 2003 in strict alignment with global
            and local regulatory bodies.
          </p>

          {/* Verification Badges (ISO / NCDMB) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <LiaCertificateSolid className="text-[#EAB308] text-sm" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse" />
              <span>NCDMB Compliant</span>
            </div>
          </div>
        </div>

        {/* Column 2: Structural Directory (2 Span) */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#EAB308]">
            Company
          </p>
          <ul className="space-y-3">
            {footerLinks.company.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-slate-450 hover:text-[#EAB308] transition-colors duration-250 font-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Sector Specifics (3 Span) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#EAB308]">
            Key Sectors
          </p>
          <ul className="space-y-4">
            {footerLinks.sectors.map((sector) => (
              <li key={sector.label} className="group flex flex-col">
                <span className="text-sm font-bold text-slate-300 group-hover:text-[#EAB308] transition-colors duration-200">
                  {sector.label}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-0.5">
                  {sector.spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Operational Hub Directory (3 Span) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#EAB308]">
            Operational Hubs
          </p>
          <ul className="space-y-5">
            {footerLinks.offices.map((office) => (
              <li key={office.city} className="space-y-1 text-xs">
                <span className="font-bold text-slate-300 block">
                  {office.city}
                </span>
                <div className="flex items-start gap-1.5 text-slate-450 font-light">
                  <HiOutlineMapPin className="text-[#EAB308] text-sm shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-450 font-light pt-0.5">
                  <HiOutlinePhone className="text-[#EAB308] text-xs shrink-0" />
                  <span>{office.phone}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="relative z-10 border-t border-slate-900 bg-[#070A12] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 text-center md:text-left">
            &copy; {currentYear} Akpaven Integrated Services Limited. All Rights
            Reserved.
          </div>
          <div className="text-[10px] font-mono text-slate-650 uppercase tracking-widest text-center md:text-right">
            Engineering the Future of African Infrastructure • Est. 2003
          </div>
        </div>
      </div>
    </footer>
  );
}
