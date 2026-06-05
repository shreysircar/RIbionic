import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#4a9eb3]">
            Opportunities With Us
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-gray-900">
            Interested in Joining Ribionic?
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Share your profile with us and we'll reach out when an
            opportunity aligns with your expertise and experience.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-[#025a6a] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Submit Your Profile
          </Link>
        </div>
      </div>
    </section>
  );
}