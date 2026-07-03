"use client";

import { useState } from "react";
import { motion } from "motion/react";

const milestones = [
  {
    year: 2003,
    title: "Company Incorporation",
    description:
      "Akpaven Integrated Services Limited founded as an indigenous Nigerian EPCI firm.",
  },
  {
    year: 2010,
    title: "Public Infrastructure Expansion",
    description:
      "Expanded civil and structural engineering capabilities across the Niger Delta region.",
  },
  {
    year: 2016,
    title: "NEWMAP Partnership",
    description:
      "Selected as contractor for World Bank-funded erosion and watershed management in Cross River State.",
  },
  {
    year: 2020,
    title: "RAAMP Rural Access Projects",
    description:
      "Delivered key rural access roads in Akwa Ibom State under the RAAMP initiative.",
  },
  {
    year: 2024,
    title: "Preferred World Bank Contractor",
    description:
      "Recognized as a trusted partner for multi-billion Naira infrastructural and environmental projects.",
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20" aria-label="Company history">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Our Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Company History
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-navy/10 md:left-1/2 md:-translate-x-px" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 md:left-1/2 ${
                  activeIndex === index
                    ? "border-amber bg-amber text-navy"
                    : "border-navy/20 bg-white text-navy"
                }`}
                aria-label={`${milestone.year}: ${milestone.title}`}
              >
                <span className="text-xs font-bold">{index + 1}</span>
              </button>

              <div
                className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                }`}
              >
                <p className="text-sm font-bold text-amber">{milestone.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-navy">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
