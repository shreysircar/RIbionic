const modules = [
  {
    name: "Neev Projects",
    description:
      "Plan, track, and execute projects efficiently while maintaining visibility across teams, timelines, and deliverables.",
  },
  {
    name: "Neev Finance",
    description:
      "Manage financial operations, accounting workflows, and business performance from a unified platform.",
  },
  {
    name: "Neev Expenses",
    description:
      "Capture, monitor, approve, and analyze expenses with streamlined workflows and reporting.",
  },
  {
    name: "Neev SalesCRM",
    description:
      "Manage leads, opportunities, customer interactions, and sales pipelines to accelerate business growth.",
  },
  {
    name: "Neev Intel",
    description:
      "Transform business data into actionable insights through dashboards, analytics, and intelligent reporting.",
  },
];

export default function NeevModulesGrid() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#4a9eb3]">
            Neev Ecosystem
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Core Platform Modules
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Neev is being developed as a connected ecosystem of business
            applications. The initial suite focuses on finance, projects,
            customer management, intelligence, and operational efficiency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.name}
              className="
                group
                rounded-2xl
                border border-slate-800
                bg-slate-950
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#4a9eb3]/50
              "
            >
              <div
                className="
                  mb-5
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-[#025a6a]/20
                  text-[#4a9eb3]
                  text-lg
                  font-bold
                "
              >
                N
              </div>

              <h3 className="text-xl font-semibold text-white">
                {module.name}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {module.description}
              </p>
            </div>
          ))}

          {/* Future Modules Card */}
          <div
            className="
              rounded-2xl
              border border-dashed border-[#4a9eb3]/30
              bg-slate-950
              p-7
            "
          >
            <div
              className="
                mb-5
                flex h-12 w-12 items-center justify-center
                rounded-xl
                bg-[#4a9eb3]/10
                text-[#4a9eb3]
                text-lg
                font-bold
              "
            >
              +
            </div>

            <h3 className="text-xl font-semibold text-white">
              Future Modules
            </h3>

            <p className="mt-4 leading-relaxed text-slate-400">
              Marketing, Service Management, Timesheets, Rentals,
              Procurement, Inventory Management, Supply Chain Management
              and several other applications are planned as part of the
              expanding Neev ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}