
import ArticleLayout from "@/components/insights/article-layout";

const transformationRequirements = [
  "Well defined business architecture",
  "An information architecture with gen AI or AI readiness",
  "Technology architecture landscape addressing the business architecture and leveraging the information architecture",
  "Standards of compliance pertaining to regulatory, governance, domain specific and process related areas",
];

const maturityLevels = [
  "Foundation",
  "Adoption",
  "Accelerate",
  "Invent",
];

const enaParameters = [
  {
    title: "Efficiency",
    description:
      "operational, cost related and productivity improvements",
  },
  {
    title: "Effectiveness",
    description:
      "business growth and process optimization",
  },
  {
    title: "Experience",
    description:
      "customer, employee and vendor experience",
  },
  {
    title: "Environment",
    description:
      "cloud, hybrid and native ecosystems, availability and resilience",
  },
  {
    title: "Enlighten",
    description:
      "business and operational insights, actionable inputs and problem management",
  },
  {
    title: "Envision",
    description:
      "strategic ability to redefine the future",
  },
  {
    title: "Agility",
    description:
      "business agility, turnaround times and cycle times",
  },
  {
    title: "Awareness",
    description:
      "alignment, skilling, re-skilling and training",
  },
  {
    title: "Automation",
    description:
      "hyper-automation, business flows, process automation and auto-resiliency",
  },
];

export default function Page() {
  return (
    <ArticleLayout title="Transform your Digital Landscape">
      <div className="space-y-12 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Ribionic’s{" "}
            <span className="text-[#025a6a]">
              TransFix© Framework
            </span>
          </h2>

          <p className="mt-5 leading-8">
            Enterprises today are at various levels of their digital
            transformation journey exploiting different technology stacks
            to attain their envisioned coherent ecosystem. We also often
            find setups where technology not only supports but defines the
            business itself.
          </p>

          <div className="mt-8 rounded-xl border-l-4 border-[#4a9eb3] bg-[#f6fbfc] p-6">
            <p className="leading-8 text-gray-700">
              The{" "}
              <span className="font-semibold text-[#025a6a]">
                TransFix© Framework
              </span>{" "}
              helps organizations assess digital maturity, identify
              transformation gaps and build an actionable roadmap aligned
              with strategic business priorities.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            To enable a real transformation, businesses need
          </h3>

          <ul className="mt-6 space-y-4">
            {transformationRequirements.map((item) => (
              <li
                key={item}
                className="flex gap-3 leading-8"
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#4a9eb3]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-gray-100" />

        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Digital Maturity Levels
          </h3>

          <p className="mt-5 leading-8">
            At Ribionic Solutions, our{" "}
            <span className="font-semibold text-[#025a6a]">
              TransFix© Framework
            </span>{" "}
            gives an index of digital maturity at four levels:
          </p>

          <ul className="mt-6 space-y-3 pl-1">
            {maturityLevels.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#4a9eb3]" />
                <span className="font-medium text-[#025a6a]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 leading-8">
            It captures your current business state, assesses your
            maturity level and maps the gaps in attaining your aspired
            target state. At another level of engagement, we also provide
            an actionable maturity roadmap which becomes a journey our
            clients undertake based on their priorities and future
            business objectives.
          </p>
        </section>

        <div className="border-t border-gray-100" />

        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            EnA Parameters
          </h3>

          <p className="mt-4 leading-8">
            The framework evaluates various EnA parameters helping
            organizations deliver measurable outcomes across business,
            technology and operational domains:
          </p>

          <ul className="mt-6 space-y-5">
            {enaParameters.map((item) => (
              <li
                key={item.title}
                className="flex gap-3 leading-8"
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#4a9eb3]" />

                <span>
                  <strong className="text-[#025a6a]">
                    {item.title}
                  </strong>{" "}
                  – {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-gray-200 pt-8">
          <p className="text-gray-600">
            For any queries, please reach out to us at
            <a
              href="mailto:info@ribionic.com"
              className="ml-1 font-medium text-[#025a6a] hover:underline"
            >
              info@ribionic.com
            </a>
          </p>
        </section>
      </div>
    </ArticleLayout>
  );
}
