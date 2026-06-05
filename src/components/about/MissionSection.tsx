import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="relative h-[380px] overflow-hidden rounded-3xl">
          <Image
            src="/about/mission.png"
            alt="Mission"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="mb-8 text-5xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            To help deliver innovative business and technology
            solutions as true value partners to our esteemed
            clients assuring both business and technology agility.
          </p>

          <p className="text-lg leading-relaxed text-slate-600">
            We leverage the top talents from B-schools and
            engineering colleges in India and abroad who bring
            vast experience spread across Silicon Valley startups
            to Fortune 500 setups.
          </p>
        </div>

      </div>
    </section>
  );
}