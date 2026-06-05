import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import ExpertiseGrid from "@/components/about/ExpertiseGrid";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />

      <MissionSection />

      <LeadershipSection />

      <ExpertiseGrid />

      <div className="pb-14 pt-4 text-center">
        <p className="text-slate-500">
          Questions? Contact us at{" "}
          <a
            href="mailto:info@ribionic.com"
            className="font-semibold text-[#025a6a]"
          >
            info@ribionic.com
          </a>
        </p>
      </div>
    </main>
  );
}