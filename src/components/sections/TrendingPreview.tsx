import Link from "next/link";

const trendingItems = [
  {
    id: 1,
    gif: "/trending/cloud.mp4",
    description:
      "Super cycles have influenced economics, geopolitics, industrialization and our way of life. Where is the AI wave taking us?",
    link: "/insights/super-cycles-and-super-states",
  },
  {
    id: 2,
    gif: "/trending/ai-wave.mp4",
    description:
      "With the ever increasing cloud complexity, and the multi cloud conundrum bound to stay, is there a way out?",
    link: "/insights/taking-complexity-out-of-the-cloud/",
  },
  {
    id: 3,
    gif: "/trending/workforce.mp4",
    description:
      "The white-collar knowledge employees are being challenged like never before — what does the future hold for them?",
    link: "/insights/knowledge-workers-in-the-age-of-generative-ai",
  },
];

export default function TrendingPreview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-10 text-4xl font-semibold text-slate-900">
          Trending
        </h2>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {trendingItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group block"
            >
              {/* GIF */}
              <div className="overflow-hidden">
<video
  autoPlay
  muted
  loop
  playsInline
  className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
>
  <source src={item.gif} type="video/mp4" />
</video>
              </div>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-lg
                  leading-relaxed
                  text-slate-800
                "
              >
                {item.description}
              </p>

              {/* Button */}
              <div className="mt-6">
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-md
                    border
                    border-slate-300
                    px-6
                    py-2.5
                    text-base
                    font-medium
                    text-slate-900
                    transition
                    hover:border-[#4a9eb3]
                    hover:text-[#4a9eb3]
                  "
                >
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}