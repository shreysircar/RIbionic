import Image from "next/image";

export default function OfferingsHero() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/offerings/hero.png"
        alt="Services Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.3em] text-[#4a9eb3]">
          Our Services
        </p>

        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Engineering Business Transformation
        </h1>

        <p className="text-xl text-slate-300">
          ERP, AI, Automation and Digital Innovation
          tailored for modern enterprises.
        </p>
      </div>
    </section>
  );
}