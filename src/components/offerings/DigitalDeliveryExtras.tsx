export default function DigitalDeliveryExtras() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-slate-900">
          Our Engagement Models
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Choose the base model that best suits your need and
          delivers value for you.
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">

        {/* Dedicated Team */}
        <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg">
          <h4 className="text-3xl font-semibold text-slate-900">
            Dedicated Team
          </h4>

          <p className="mt-2 text-slate-500">
            (Product oriented development)
          </p>

          <p className="mt-8 leading-relaxed text-slate-600">
            It is a self-sufficient, expert team comprising
            skilled resources in different roles (e.g. project
            manager, software development engineers, QA
            engineers, Scrum Master and other roles)
            delivering advanced state-of-the-art high-quality
            solutions efficiently.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            The roles are well defined for each project.
            Suitable for startups, new product design or
            product companies.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            The delivery criteria is typically a minimum
            viable product.
          </p>
        </div>

        {/* Project Based */}
        <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg">
          <h4 className="text-3xl font-semibold text-slate-900">
            Project Based
          </h4>

          <p className="mt-2 text-slate-500">
            (For small-mid scale projects)
          </p>

          <p className="mt-8 leading-relaxed text-slate-600">
            When project specifications, scope, deliverables
            and acceptance criteria are clearly defined,
            a fixed quote can be estimated for the project.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            This is mostly suitable for short projects
            with well documented specifications.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            These are typically fixed price models with
            variations like unit-based pricing.
          </p>
        </div>

        {/* Team Augmentation */}
        <div className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg">
          <h4 className="text-3xl font-semibold text-slate-900">
            Team Augmentation
          </h4>

          <p className="mt-2 text-slate-500">
            (Time and Material)
          </p>

          <p className="mt-8 leading-relaxed text-slate-600">
            Deployed for projects that have undefined
            or dynamic scope requirements or complicated
            business requirements and long-term initiatives.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            Suitable for every scale of business and project,
            team augmentation helps add required talent to
            fill the talent gap.
          </p>

          <p className="mt-6 leading-relaxed text-slate-600">
            The augmented team members work as part of your
            local or distributed team, attend daily meetings,
            and report directly to your managers.
          </p>
        </div>

      </div>
    </section>
  );
}