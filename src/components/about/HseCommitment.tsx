const commitments = [
  {
    title: "Zero Injuries",
    description: "Comprehensive safety protocols on every project site.",
  },
  {
    title: "Zero Environmental Impact",
    description: "Sustainable practices aligned with watershed management standards.",
  },
  {
    title: "Total Compliance",
    description: "Full adherence to national and international regulatory frameworks.",
  },
];

export function HseCommitment() {
  return (
    <section
      className="bg-navy py-20 text-white"
      aria-label="Health, Safety, and Environment commitment"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">
            HSE Commitment
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Target Zero
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Zero Injuries, Zero Environmental Impact, Total Compliance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {commitments.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-amber/30"
            >
              <h3 className="text-xl font-bold text-amber">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
