import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,158,179,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#4a9eb3]/30 bg-[#4a9eb3]/10 px-4 py-1 text-sm font-medium text-[#4a9eb3]">
            PRODUCTS & PLATFORMS
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Building Solutions for Individuals,
            <span className="block text-[#4a9eb3]">
              Professionals & Enterprises
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Ribionic Solutions develops intelligent digital products that
            simplify personal productivity, business operations, and enterprise
            management. From personal expense tracking and secure document
            management to integrated ERP platforms, our solutions are designed
            to make technology more accessible, scalable, and impactful.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="https://ribionic.com/lekhajokha/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-[#025a6a] px-6 py-3 font-medium text-white transition hover:bg-[#4a9eb3]"
            >
              Explore LekhaJokha
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}