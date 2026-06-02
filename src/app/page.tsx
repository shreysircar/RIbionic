import HeroBanner from "@/components/hero/HeroBanner";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProductsPreview from "@/components/sections/ProductsPreview";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";

import { heroSlides } from "@/lib/data/hero";

export default function HomePage() {
  return (
    <main className="bg-slate-900">
      <HeroBanner slides={heroSlides} />

      <ServicesPreview />

      <ProductsPreview />

      <WhyChooseUs />

      <AboutPreview />

      <ArticlesPreview />

      <CTASection />
    </main>
  );
}