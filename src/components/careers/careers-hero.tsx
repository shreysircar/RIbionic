import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <Image
        src="/images/careers-banner.png"
        alt="Careers at Ribionic"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Career Paths at Ribionic
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Explore Our Range of Opportunities
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-200 md:text-lg">
 Build the Future of Enterprise Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}