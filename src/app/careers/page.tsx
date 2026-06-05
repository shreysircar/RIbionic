import CareersHero from "@/components/careers/careers-hero";
import EarlyCareers from "@/components/careers/early-careers";
import ProfessionalCulture from "@/components/careers/professional-culture";
import OpportunitiesAccordion from "@/components/careers/opportunities-accordion";
import CareersCTA from "@/components/careers/careers-cta";

export default function CareersPage() {
  return (
<main className="min-h-screen bg-white">
      <CareersHero />

      <EarlyCareers />

      <ProfessionalCulture />

      <OpportunitiesAccordion />

      <CareersCTA />
    </main>
  );
}