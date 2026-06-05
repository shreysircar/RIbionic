import OpportunityCard from "@/components/careers/oppurtunity-card";
import { careerOpportunities } from "@/lib/data/career-opportunities";

export default function OpportunitiesAccordion() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#4a9eb3]">
          Opportunities With Us
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-gray-900">
          Explore Career Opportunities
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600">
          Explore professional opportunities across engineering,
          architecture, ERP, AI, testing, cloud and enterprise platforms.
        </p>
      </div>

      <div className="mt-10">
        {careerOpportunities.map((role) => (
          <OpportunityCard
            key={role.title}
            title={role.title}
            requirements={role.requirements}
          />
        ))}
      </div>
    </section>
  );
}