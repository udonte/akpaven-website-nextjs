"use client";

import { useState } from "react";
import { motion } from "motion/react";

type ProjectCategory = "all" | "civil" | "environmental" | "oil-gas";

type Project = {
  id: string;
  title: string;
  location: string;
  category: Exclude<ProjectCategory, "all">;
  client: string;
  scope: string;
  status: "Completed" | "Ongoing";
};

const projects: Project[] = [
  {
    id: "ikot-nkebre",
    title: "Ikot Nkebre Gully Erosion & Bio-Remediation Facility",
    location: "Calabar, Cross River State",
    category: "environmental",
    client: "World Bank / NEWMAP",
    scope: "Multi-billion Naira hydraulic installation and bio-remediation",
    status: "Completed",
  },
  {
    id: "raamp-roads",
    title: "RAAMP Rural Access Road Networks",
    location: "Akwa Ibom State",
    category: "civil",
    client: "RAAMP Initiative",
    scope: "Okop Nko-Okop Ndua and Akwa-Ibiaku Obio Ndobo-Adadia roads",
    status: "Completed",
  },
  {
    id: "pipeline-placeholder",
    title: "Oil & Gas Facility Installation",
    location: "Niger Delta Region",
    category: "oil-gas",
    client: "Confidential",
    scope: "Mechanical procurement and pipeline asset integrity",
    status: "Ongoing",
  },
];

const filters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "civil", label: "Civil Roads" },
  { id: "environmental", label: "Environmental" },
  { id: "oil-gas", label: "Oil & Gas" },
];

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20" aria-label="Project portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Proven Track Record
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === id
                  ? "bg-amber text-navy"
                  : "bg-navy/5 text-navy hover:bg-navy/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-navy"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-600 to-navy" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy via-navy/80 to-transparent p-6">
                <span
                  className={`mb-2 inline-block w-fit rounded-full px-3 py-0.5 text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-amber/20 text-amber"
                  }`}
                >
                  {project.status}
                </span>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-white/70">{project.location}</p>
                <dl className="mt-4 space-y-1 text-xs text-white/60">
                  <div>
                    <dt className="inline font-semibold text-white/80">
                      Client:{" "}
                    </dt>
                    <dd className="inline">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-white/80">
                      Scope:{" "}
                    </dt>
                    <dd className="inline">{project.scope}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
