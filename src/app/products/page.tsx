import ProductsHero from "@/components/products/ProductsHero";
import LekhaJokhaSection from "@/components/products/LekhaJokhaSection";
import NeevPlatformSection from "@/components/products/NeevPlatformSection";
import WhyNeev from "@/components/products/WhyNeev";
import NeevModulesGrid from "@/components/products/NeevModulesGrid";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <LekhaJokhaSection />
      <NeevPlatformSection />
      <WhyNeev />
      <NeevModulesGrid />
      <ProductsCTA />
    </main>
  );
}