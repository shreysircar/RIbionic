export default function ProfessionalCulture() {
  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#4a9eb3]">
              Experienced Professionals
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-gray-900">
              Culture & Vision
            </h2>

            <p className="mt-8 text-base leading-8 text-gray-600">
              Ribionic operates at the intersection of complex code and data
              engineering and predictive business insights. The work environment
              is engineered for continuous learning, fast iteration, and
              scalable digital delivery. Employees are empowered to build,
              automate, and de-risk high-stakes projects, transforming legacy
              infrastructures into agile, modern ecosystem realities.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Elite Pedigree
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Collaborate with a world-class team drawing on extensive
                expertise from Silicon Valley tech hubs to enterprise-level
                environments.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Next-Gen Tech Focus
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Engage with forward-looking engineering paradigms, such as the
                convergence of Generative AI, super clouds, and advanced
                automation.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                True Business Impact
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Focus heavily on delivering actionable analytics, business
                continuous testing, and infrastructure optimization that visibly
                move client metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}