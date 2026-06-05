export default function WhyNeev() {
  const reasons = [
    {
      title: "Unified Platform",
      description:
        "Bring multiple business functions together through a connected ecosystem instead of managing disconnected tools and applications.",
    },
    {
      title: "Scalable",
      description:
        "Designed for organizations of every size, from MSMEs and growing businesses to large enterprises with evolving operational needs.",
    },
    {
      title: "Cost Effective",
      description:
        "Access enterprise-grade capabilities while maintaining affordability, simplicity, and ease of adoption.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#4a9eb3]">
            Why Neev?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Built for Modern Business Operations
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Neev is being developed to provide organizations with an intuitive,
            integrated, and affordable business platform that simplifies
            operations while supporting future growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="
                rounded-2xl
                border border-slate-800
                bg-slate-950
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#4a9eb3]/40
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}