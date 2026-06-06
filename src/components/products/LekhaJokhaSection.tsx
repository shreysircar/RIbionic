import Link from "next/link";
import { ArrowRight, Download, Smartphone } from "lucide-react";

const features = [
  "Expense Tracking",
  "Billed & Unbilled Expenses",
  "Secure Document Vault",
  "To-Do List Planning",
  "Renewal Reminders",
  "AMC Tracking",
  "Purchase Tracking",
  "Bill Storage",
  "Document Backups",
  "Professional Portfolios",
];

export default function LekhaJokhaSection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-sm font-medium text-green-400">
              LIVE PRODUCT
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white">
              LekhaJokha App
            </h2>

            <p className="mt-3 text-xl font-medium text-[#4a9eb3]">
              It can make your day, every day!!
            </p>

            <div className="mt-8 space-y-5 text-slate-300 leading-relaxed">
              <p>
                Monitor all your expenses, billed or unbilled, create your own
                vault for personal documents visible only to you, plan your day
                with ToDo List, get reminded of renewals or new recent purchases
                or expiring AMCs, or save all your bills as a secure store.
              </p>

              <p>
                Professionals can create their portfolios (photos, videos) and
                maintain them securely within the platform.
              </p>

              <p>
                You can also create backups for all your documents, ensuring
                that your important information is always available whenever
                you need it.
              </p>
            </div>

       <div className="mt-10 flex flex-wrap gap-4">
  <Link
    href="https://app.ribionic.com"
    target="_blank"
    className="inline-flex items-center gap-2 rounded-xl bg-[#025a6a] px-6 py-3 font-medium text-white transition hover:bg-[#4a9eb3]"
  >
    Visit Product
    <ArrowRight size={18} />
  </Link>

  <a
    href="/downloads/lekhajokha.apk"
    download
    className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-3 font-medium text-green-400 transition hover:bg-green-500/20"
  >
    Download Android App
    <Download size={18} />
  </a>

  <div
    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-400 cursor-not-allowed"
  >
    iOS Coming Soon
    <Smartphone size={18} />
  </div>
</div>
</div>
          {/* Right Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="
                  rounded-2xl
                  border border-slate-800
                  bg-slate-950
                  p-5
                  transition-all
                  duration-300
                  hover:border-[#4a9eb3]/40
                  hover:-translate-y-1
                "
              >
                <p className="font-medium text-white">
                  {feature}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}