import OfferingsHero from "@/components/offerings/OfferingsHero";
import OfferingsGrid from "@/components/offerings/OfferingsGrid";
import OfferingSection from "@/components/offerings/OfferingSection";
import { offerings } from "@/lib/data/offerings";

export default function ServicesPage() {
  return (
    <main className="bg-white">

      <OfferingsHero />

      <OfferingsGrid offerings={offerings} />

      {offerings.map((offering) => (
        <OfferingSection
          key={offering.id}
          offering={offering}
        />
      ))}

<div className="pb-12 pt-4 text-center">
  <p className="text-sm tracking-wide text-slate-500">
    For queries, please reach out to us at{" "}
    <a
      href="mailto:info@ribionic.com"
      className="font-medium text-[#025a6a] transition hover:text-[#4a9eb3]"
    >
      info@ribionic.com
    </a>
  </p>
</div>

    </main>
  );
}