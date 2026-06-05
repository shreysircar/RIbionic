export default function NeevPlatformSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
            UNDER ACTIVE DEVELOPMENT
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Neev Platform
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            The platform offers a bundle of applications for Finance,
            Expense Management, Sales CRM, Marketing, Project Management,
            Intelligence, Work Management, Service Management, Timesheet,
            Rentals, Procurement, Inventory Management, Supply Chain
            Management among several others which are planned.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            The ease of interaction with the apps makes it an ideal platform
            for any organization of any scale, from MSMEs to Enterprises,
            while maintaining affordability and operational simplicity.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            The platform is currently under active development and is planned
            to be launched this financial year. It offers an alternative to
            Odoo or Zoho for many areas of business operations and management.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Unified Ecosystem",
              description:
                "Multiple business applications operating within a single integrated platform.",
            },
            {
              title: "Built for Growth",
              description:
                "Designed for startups, MSMEs, growing businesses, and enterprises.",
            },
            {
              title: "Cost Effective",
              description:
                "Enterprise-grade capabilities without enterprise-grade complexity.",
            },
            {
              title: "Scalable Architecture",
              description:
                "Expand functionality as your business requirements evolve.",
            },
            {
              title: "Business Intelligence",
              description:
                "Data-driven insights through analytics, reporting, and intelligence modules.",
            },
            {
              title: "ERP Alternative",
              description:
                "A practical alternative to large ERP ecosystems for many operational areas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border border-slate-800
                bg-slate-900
                p-6
                transition-all
                duration-300
                hover:border-[#4a9eb3]/40
                hover:-translate-y-1
              "
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}