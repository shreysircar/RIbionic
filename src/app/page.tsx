import HeroBanner from "@/components/hero/HeroBanner";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import StatsSection from "@/components/sections/StatsSection";
import { heroSlides } from "@/lib/data/hero";
import { aboutData } from "@/lib/data/about";
import TrendingPreview from "@/components/sections/TrendingPreview";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroBanner slides={heroSlides} />

      <AboutPreview data={aboutData} />

      <ServicesPreview />

      <ArticlesPreview />

<StatsSection />


  
      <TrendingPreview />
    </main>
  );
}