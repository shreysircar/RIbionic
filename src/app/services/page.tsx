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

    </main>
  );
}