const benefits = [
  "Specialized training for elevated technical and professional skills",
  "Valuable connections as you build your network and explore our culture",
  "Mentorship and coaching from experienced professionals",
];

export default function EarlyCareers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#4a9eb3]">
          Early Careers
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-gray-900">
          You define our future
        </h2>

        <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
          <p>
            At Ribionic Solutions, we offer a journey of growth, learning, and
            impact. Our internship and full-time employment opportunities for
            undergraduates, graduates and postgraduates are designed to prepare
            you for a rewarding and successful career.
          </p>

          <p>
            Whether you're just starting out or looking to build on your
            academic achievements, our programs provide exciting career paths
            that allow you to flourish in an inclusive environment alongside
            smart, driven professionals who are all committed to continuous
            learning leading to success.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#4a9eb3]/40 hover:shadow-sm"
          >
            <div className="mb-4 h-1 w-10 rounded-full bg-[#4a9eb3]" />

            <p className="text-sm leading-7 text-gray-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}