import { Offering } from "@/types/offering";

interface Props {
  offerings: Offering[];
}

export default function OfferingsGrid({
  offerings,
}: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Explore Our Capabilities
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <a
              key={offering.id}
              href={`#${offering.slug}`}
              className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:border-[#4a9eb3]"
            >
              <h3 className="mb-3 text-2xl font-bold">
                {offering.title}
              </h3>

              <p className="text-slate-600">
                {offering.shortDescription}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}