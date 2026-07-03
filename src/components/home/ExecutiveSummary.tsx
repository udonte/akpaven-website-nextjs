import { StatCounter } from "@/ui/StatCounter";

const stats = [
  { value: 20, suffix: "+", label: "Years of Engineering Excellence" },
  { value: 100, suffix: "%", label: "Safe & Timely Delivery Records" },
];

export function ExecutiveSummary() {
  return (
    <section className="bg-slate py-20" aria-label="Executive summary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div
          className="aspect-[4/3] rounded-xl bg-navy/10 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%)",
          }}
          role="img"
          aria-label="Field engineers on infrastructure project site"
        />

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            Executive Summary
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
            Two Decades of Flawless Delivery
          </h2>
          <p className="mt-6 leading-relaxed text-navy/70">
            Akpaven Integrated Services Limited has built a proven track record
            of safe, timely project execution across complex African terrain.
            From World Bank-funded erosion control to RAAMP rural access roads,
            we deliver infrastructure that transforms communities while
            maintaining strict environmental safety compliance.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
            <div className="text-center sm:col-span-2">
              <p className="text-4xl font-bold text-amber md:text-5xl">
                Multi-Billion
              </p>
              <p className="mt-2 text-sm text-navy/70 md:text-base">
                Naira Managed Infrastructure Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
