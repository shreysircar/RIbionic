import ArticleLayout from "@/components/insights/article-layout";
import ArticleImage from "@/components/insights/article-image";
export default function Page() {
  return (
    <ArticleLayout title="Transition to the next level in GenAI - LLMs to LAMs">
      <div className="space-y-12 text-gray-700">

        <section>
          <p className="leading-8">
            The paradigm shift provided by{" "}
            <span className="font-semibold text-[#025a6a]">
              Large Language Models (LLMs)
            </span>{" "}
            with seemingly human-like capability to comprehend and interact
            has got businesses embedding AI into their core strategies,
            processes and systems with investment continuing to flow
            unabated with the global market projected to surpass
            $65 billion in 2024.
          </p>

          <p className="mt-6 leading-8">
            As more and more LLMs evolve leveraging technologies like
            fine tuning, retrieval augmented generation, specialized
            knowledge graph models in different vertical domains
            (finance, healthcare etc), multi-model input processing
            and the like, we now have the specter of these models
            not only understanding humans but converting human
            instructions into action.
          </p>

          <div className="mt-8 rounded-xl border-l-4 border-[#4a9eb3] bg-[#f6fbfc] p-6">
            <p className="leading-8">
              The next evolution of Generative AI is moving beyond
              understanding and responding to users toward
              <span className="font-semibold text-[#025a6a]">
                {" "}taking intelligent actions{" "}
              </span>
              across systems, applications and workflows.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Large Action Models{" "}
            <span className="text-[#025a6a]">(LAMs)</span>
          </h2>

          <p className="mt-5 leading-8">
            LLMs form the genesis of models which extend their capabilities
            to include actions like we do in our day-to-day work. These
            models called LAMs are based on neuro-symbolic AI, combining
            symbolic AI using pre-defined rules and logic for solving
            problems with neural networks which discern patterns from data.
          </p>
        </section>


<ArticleImage
  src="/images/insights/diag1.png"
  alt="LLM to LAM Flowchart"
/>

        <section>
          <p className="leading-8">
            In this model the user can outline tasks to be performed and
            not just query for inputs. Tasks from end users are converted
            into prompt chains or chain of thoughts (CoT) by LLM / SLM
            (small / specialized language models) orchestrators
            (LangChain etc) with large models accessible to them.
          </p>

          <p className="mt-6 leading-8">
            These specialized action models have proliferated in multiple
            domains offering vertically integrated solutions. With the
            advent of models like Toolformer from Meta, as part of another
            orchestrator they channel the language model outputs to drive
            actions through tools on applications.
          </p>

          <p className="mt-6 leading-8">
            In healthcare domain such timely actions may just be the
            difference in saving precious lives. In a way it is an
            extension of AI agents by making tool interaction more
            generic than specific.
          </p>

          <p className="mt-6 leading-8">
            In short, these LAMs are essentially evolved AI agents with
            a combination of tools and chains of LLM calls with some
            prompt engineering. They can then decide which tool they
            need to use to accomplish a specific task.
          </p>

          <p className="mt-6 leading-8">
            In the deployed state, LLMOps are leveraged to continuously
            evaluate and optimize these models wherein measures like
            model accuracy, hallucinations, F1 score, recall and other
            indicators are employed as shown in Figure 1 above.
          </p>
        </section>

        <div className="border-t border-gray-100" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            The Next Frontier
          </h2>

          <p className="mt-5 leading-8">
            However, there is a limitation while using tools if an
            application does not have an API or one needs to use a new
            platform for say, booking flight tickets.
          </p>

          <p className="mt-6 leading-8">
            What if the LAM can automatically discover the platform
            leveraging its UI (user interface) without going into the
            complexity of integrating through APIs?
          </p>

          <p className="mt-6 leading-8">
            This revolution heralded by
            <span className="font-semibold text-[#025a6a]">
              {" "}Rabbit AI
            </span>
            , is now trying to automatically understand and discover
            application user interfaces enabling them to interact
            with them like humans.
          </p>
        </section>

<div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
<ArticleImage
  src="/images/insights/diag2.png"
  alt="UI Enabled LAM Architecture"
/>

</div>

        <section>
          <p className="leading-8">
            AI agents (or LLM agents) have for some time been driving
            specific workloads in organizations. However these UI-enabled
            LAMs immensely enhance their scope to potentially cover
            applications across the enterprise bringing in an era of
            autonomous LAMs.
          </p>

          <p className="mt-6 leading-8">
            Another revolution foreseen is the ability of end-user
            devices, industrial IoTs, applications and systems
            communicating in natural language themselves, leading to
            NLP-driven interfaces democratizing technology with LAMs
            leading the way.
          </p>
        </section>

        <div className="border-t border-gray-100" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900">
            Business Use Cases
          </h2>

          <p className="mt-5 leading-8">
            In terms of application areas for LLMs, industry has so far
            got the biggest leverage from chatbots and enterprise search.
            LAMs open several business use cases, especially in customer
            support.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-3">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#4a9eb3]" />
              <span>
                <strong className="text-[#025a6a]">
                  Customer Support
                </strong>{" "}
                – Client problems can be replicated and solved quickly
                and interactively. Ticket lifecycles can drastically
                reduce while automating troubleshooting manuals,
                knowledge bases and user support processes.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#4a9eb3]" />
              <span>
                <strong className="text-[#025a6a]">
                  Personalized Marketing Campaigns
                </strong>{" "}
                – LAMs can leverage behavioral modeling to understand
                customer preferences and behavior, creating targeted
                campaigns that lead to higher conversion rates.
              </span>
            </li>
          </ul>
        </section>

<div className="my-10 overflow-hidden rounded-xl border border-gray-200 bg-white">
<ArticleImage
  src="/images/insights/diag3.png"
  alt="Generative AI Action Models Across Industries"
/>
</div>

        <section>
          <p className="leading-8">
            As investments continue, there are many use cases where
            accelerated adoption of LAMs could lead to material gains
            in efficiency, precision and productivity for organizations,
            impacting both their top and bottom lines.
          </p>

          <p className="mt-6 leading-8">
            The impact of generative AI action models is being felt
            across vertical domains including supply chains,
            manufacturing, finance, risk and compliance along with
            functional areas in marketing, customer operations,
            software engineering and sales.
          </p>

          <p className="mt-6 leading-8">
            The resulting economies of scale, scope and innovation
            promise significant gains for industry.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-8">
          <p className="text-gray-600">
            For any queries, please reach out to us at
            <a
              href="mailto:practice@ribionic.com"
              className="ml-1 font-medium text-[#025a6a] hover:underline"
            >
              practice@ribionic.com
            </a>
          </p>
        </section>

      </div>
      </ArticleLayout>
  );
}