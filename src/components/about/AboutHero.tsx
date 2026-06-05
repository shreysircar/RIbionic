import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">
      <Image
        src="/about/about-hero.png"
        alt="About Ribionic"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white">
          About Us
        </p>

        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          Building Value Through
          <br />
          Technology & Innovation
        </h1>

        <p className="text-xl text-slate-300">
          Trusted consulting, digital transformation and
          technology expertise for modern enterprises.
        </p>
      </div>
    </section>
  );
}