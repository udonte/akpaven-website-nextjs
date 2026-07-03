"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const capabilities = [
  {
    id: "civil",
    tabLabel: "Civil & Structural",
    title: "Civil & Structural Engineering",
    description:
      "Road networks, bridges, rural access infrastructure, and heavy foundations engineered for durability across challenging terrain.",
    metrics: ["RAAMP rural roads", "Bridge foundations", "Heavy civil works"],
  },
  {
    id: "environmental",
    tabLabel: "Environmental",
    title: "Environmental & Hydraulic Engineering",
    description:
      "Multi-billion Naira watershed management, bio-remediation, and gully erosion mitigation systems for sustainable land use.",
    metrics: ["NEWMAP projects", "Bio-remediation", "Watershed control"],
  },
  {
    id: "mechanical",
    tabLabel: "Mechanical",
    title: "Mechanical & Pipeline Construction",
    description:
      "Oil & Gas facilities procurement, fabrication, and asset integrity installation with full lifecycle support.",
    metrics: ["Pipeline systems", "Fabrication", "Asset integrity"],
  },
  {
    id: "electrical",
    tabLabel: "Electrical",
    title: "Electrical & Instrumentation",
    description:
      "High-voltage systems, industrial instrumentation, and automated control networks for mission-critical operations.",
    metrics: ["HV systems", "Control networks", "Instrumentation"],
  },
];

export function CapabilitiesGrid() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeTab)!;

  return (
    <section className="py-20" aria-label="Core capabilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Engineering Disciplines
          </h2>
        </div>

        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Service categories"
        >
          {capabilities.map(({ id, tabLabel }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === id
                  ? "bg-navy text-white"
                  : "bg-navy/5 text-navy hover:bg-navy/10"
              }`}
            >
              {tabLabel}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 rounded-2xl border border-navy/10 bg-white p-8 shadow-sm lg:p-12"
          >
            <h3 className="text-2xl font-bold text-navy">{active.title}</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-navy/70">
              {active.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {active.metrics.map((metric) => (
                <li
                  key={metric}
                  className="rounded-full bg-amber/10 px-4 py-1.5 text-sm font-medium text-navy"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
