const expertise = [
  "Banking",
  "Finance",
  "Insurance",
  "Manufacturing",
  "Energy",
  "Retail",
  "Hi-Tech",
  "Strategy",
  "Sales",
  "Technology",
  "Human Resources",
];

export default function ExpertiseGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Industry Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Deep experience across industries and business
            functions enabling successful transformation
            initiatives.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                text-center
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#4a9eb3]
                hover:text-[#025a6a]
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}