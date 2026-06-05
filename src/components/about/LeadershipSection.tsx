import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Leadership
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              The company is led by industry veterans with
              several decades of international experience
              working with global corporate giants and from
              leading institutes like IIT, FMS and IIMs.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              They bring their expertise across multiple
              industrial domains like banking, finance,
              insurance, manufacturing, energy, retail,
              hi-tech and others while leading with excellence
              and redefining practices in operational areas
              like strategy, sales, technology and human
              resources.
            </p>
          </div>

          <div className="relative h-[380px] overflow-hidden rounded-3xl">
            <Image
              src="/about/leadership.png"
              alt="Leadership"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}