import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsCTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="
            rounded-3xl
            border border-[#4a9eb3]/20
            bg-gradient-to-br
            from-[#025a6a]/20
            via-slate-900
            to-slate-950
            p-10
            text-center
            md:p-14
          "
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Building the Future, One Platform at a Time
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            From LekhaJokha for personal productivity and document management
            to the upcoming Neev Platform for enterprise operations, Ribionic
            Solutions continues to build technology solutions that simplify,
            streamline, and transform the way people and businesses work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://app.ribionic.com"
              target="_blank"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-[#025a6a]
                px-6 py-3
                font-medium
                text-white
                transition
                hover:bg-[#4a9eb3]
              "
            >
              Explore LekhaJokha
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="
                rounded-xl
                border border-slate-700
                px-6 py-3
                font-medium
                text-white
                transition
                hover:border-[#4a9eb3]
              "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}