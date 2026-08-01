"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LekhaJokhaPage() {
  return (
    <>


     <main className="relative overflow-hidden text-[#292524]">
        {/* Top Gradient */}
<div className="absolute inset-x-0 top-0 h-[420px] -z-10 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#025a6a] via-[#4a9eb3]/35 to-[#FAFAFA]" />
</div>

        {/* Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#025a6a]/10 blur-3xl" />
          <div className="absolute right-0 top-[300px] h-[450px] w-[450px] rounded-full bg-[#4a9eb3]/10 blur-3xl" />
        </div>

        {/* HERO */}

        <section className="mx-auto max-w-7xl px-6 pt-44 pb-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

<span className="inline-flex rounded-full bg-[#025a6a]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#025a6a]">
  PRODUCT
</span>

<h2 className="mt-5 text-3xl lg:text-4xl font-bold text-[#025a6a] leading-tight">
  LekhaJokha
</h2>

<p className="mt-2 text-lg text-slate-600 font-medium">
  Your Personal Life Organizer
</p>

<p className="mt-4 text-base text-slate-500">
  Developed & Operated by{" "}
  <span className="font-semibold text-[#025a6a]">
    Ribionic Solutions
  </span>
</p>
              <p className="mt-8 uppercase tracking-[0.25em] text-sm text-slate-500 leading-relaxed">
                All your expenses, documents, subscriptions, reminders and
                renewals in one private place - your CV, academic certificates,
                visa copies, contracts etc. Plan your tasks and ToDo's, track
                renewals - subscriptions, insurance - life, medical, vehicle,
                AMC's...
              </p>

              <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">

                One app to{" "}

                <span className="bg-gradient-to-r from-[#025a6a] to-[#4a9eb3] bg-clip-text text-transparent">
                  hold your life together
                </span>

                .
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">

                Stop digging through email, WhatsApp, random folders or box
                files at home.

                Keep <b>every document</b>, bill, certificate,
                memories (videos, audio, photos - your <b>Insta</b> at your
                command) and reminders in one place — on your device, under
                your lock.

                Plan and track your <b>ToDo's</b> and all your{" "}
                <b>expenses</b> effortlessly.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#download"
                  className="rounded-full bg-[#025a6a] px-8 py-4 text-white font-medium shadow-lg transition hover:-translate-y-1 hover:bg-[#014a57]"
                >
                  Download the App
                </Link>

                <Link
                  href="#how"
                  className="rounded-full border border-[#025a6a] px-8 py-4 font-medium text-[#025a6a] transition hover:bg-[#025a6a] hover:text-white"
                >
                  See how it works
                </Link>

              </div>

              <p className="mt-8 text-sm text-slate-500">
                <span className="font-semibold text-[#025a6a]">
                  On-device only.
                </span>{" "}
                Your personal content remains under your control. No data
                mining. Just calm, organized control.
              </p>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="rounded-[40px] bg-gradient-to-br from-[#025a6a] to-[#4a9eb3] p-1 shadow-2xl">

                <div className="rounded-[38px] bg-white p-8">

                  <div className="space-y-4">

                    <div className="rounded-2xl bg-[#F5F5F4] p-5 shadow-sm">
                      <h3 className="font-semibold">
                        Graduation & Career
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Mark sheets, degrees, resumes, offer letters
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F5F5F4] p-5 shadow-sm">
                      <h3 className="font-semibold">
                        Home & Family
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Bills, insurance, AMCs, medical records
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F5F5F4] p-5 shadow-sm">
                      <h3 className="font-semibold">
                        Business & GST
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Invoices, contracts, licenses
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F5F5F4] p-5 shadow-sm">
                      <h3 className="font-semibold">
                        Sales Trips
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Multi-currency expense tracking
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              <div className="absolute -top-6 -right-6 rounded-full bg-white px-5 py-3 shadow-xl text-sm">
                📈 12-Month Expense Graph
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-full bg-white px-5 py-3 shadow-xl text-sm">
                🌫 Live AQI Updates
              </div>

            </motion.div>

          </div>

        </section>

        {/* LIFE MOMENTS */}

        <section className="mx-auto max-w-7xl px-6 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Students",
                text: "The day HR asks for that one certificate—you already know where it is.",
                icon: "🎓",
              },
              {
                title: "Household",
                text: "The day the washing machine breaks—you don't scramble for the warranty.",
                icon: "🏠",
              },
              {
                title: "Business",
                text: "The day your CA needs last year's invoices—you send them in one go.",
                icon: "💼",
              },
              {
                title: "Sales",
                text: "The day finance asks for trip bills—you finish in minutes.",
                icon: "✈️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 font-bold text-[#025a6a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* HOW IT WORKS */}

        <section
          id="how"
          className="mx-auto max-w-7xl px-6 py-24"
        >

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-[#025a6a] text-sm">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Organize your life in minutes, not days.
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              LekhaJokha is designed to feel natural. No complicated setup.
              Just start and build your system gradually.
            </p>

          </div>

              <div className="mt-20 grid lg:grid-cols-2 gap-10">

            {[
              {
                step: "1",
                title: "Add your documents",
                desc:
                  "Tap the + button to upload documents, photos, videos or bills. Create folders the way you think — Car, Home, Doctor's Prescriptions, Kids School.",
              },
              {
                step: "2",
                title: "Track tasks & reminders",
                desc:
                  "Add your tasks and expiry reminders. Completed tasks disappear while unfinished ones automatically roll over to the next day.",
              },
              {
                step: "3",
                title: "Secure everything",
                desc:
                  "Lock your Personal Vault with a PIN. Keep sensitive documents private while everything remains under your control.",
              },
              {
                step: "4",
                title: "Backup & stay in control",
                desc:
                  "Backup locally and restore anytime. Track expenses with a 12-month graph and view spending in one currency.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#025a6a] text-lg font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#025a6a] to-[#4a9eb3] p-10 text-white">

            <h3 className="text-2xl font-bold">
              Why people love LekhaJokha
            </h3>

            <ul className="mt-8 grid gap-5 lg:grid-cols-2">

              <li>
                ✓ <b>Peace of mind:</b> Your important documents are not
                "somewhere". They're here.
              </li>

              <li>
                ✓ <b>Future-you will be grateful:</b> Renewals, policies,
                AMCs and reminders arrive before panic does.
              </li>

              <li>
                ✓ <b>No judgment, just order:</b> Organize folders the way
                you naturally think.
              </li>

              <li>
                ✓ <b>Private by design:</b> Your documents, photos,
                videos, audio files and backups remain under your control.
              </li>

            </ul>

          </div>

          {/* Replace */}

          <div className="mt-20 rounded-[32px] bg-white p-10 shadow-lg">

            <h3 className="text-3xl font-bold">
              Imagine one screen quietly replacing...
            </h3>

            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "ToDo Lists",
                "Unbilled Expenses",
                "Email attachments",
                "WhatsApp forwards",
                "Random downloads",
                "Screenshots",
                "Loose PDFs",
                "Scattered bills",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#025a6a]/10 px-5 py-3 font-medium text-[#025a6a]"
                >
                  {item}
                </span>
              ))}

            </div>

            <div className="mt-12 grid gap-5 text-slate-600">

              <p>
                • Personal IDs, certificates, policies, AMCs, PUCs
              </p>

              <p>
                • Bills, invoices, warranties and contracts
              </p>

              <p>
                • Photos, videos and audio files
              </p>

              <p>
                • Multi-currency expenses with instant conversion
              </p>

              <p>
                • AQI-aware reminders for your day
              </p>

            </div>

          </div>

        </section>

        {/* AUDIENCE */}

        <section
          id="who"
          className="bg-[#F5F5F4] py-28"
        >

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center max-w-3xl mx-auto">

              <p className="uppercase tracking-[0.3em] text-[#025a6a] text-sm">
                WHO IT'S BUILT FOR
              </p>

              <h2 className="mt-4 text-5xl font-bold">
                One app. Four lives.
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                Whether you're graduating, running a home,
                building a business or constantly travelling,
                LekhaJokha becomes your quiet superpower.
              </p>

            </div>

            <div className="mt-20 grid lg:grid-cols-2 gap-8">

              {[
                {
                  icon: "🎓",
                  title: "Graduating Students",
                  text:
                    "Lock your mark sheets, resumes, internship letters, certificates and portfolios. Be ready for jobs, higher studies or visa applications.",
                  line:
                    "You focus on your future. We'll guard your past.",
                },
                {
                  icon: "🏠",
                  title: "Household Managers",
                  text:
                    "Store appliance bills, insurance, medical records, school documents, warranties and renewal reminders in one place.",
                  line:
                    "You've managed everything for everyone. Let this app manage things for you.",
                },
                {
                  icon: "💼",
                  title: "Business & Professionals",
                  text:
                    "Licenses, GST documents, invoices, agreements and contracts organised by client or project with expense analytics.",
                  line:
                    "Less hunting. More building.",
                },
                {
                  icon: "✈️",
                  title: "Sales & Field Teams",
                  text:
                    "Capture hotel, flight, taxi and meal bills instantly with multi-currency support and quick reimbursement reports.",
                  line:
                    "You bring in the revenue. We'll bring your money back.",
                },
              ].map((card) => (

                <motion.div
                  key={card.title}
                  whileHover={{ y: -8 }}
                  className="rounded-[32px] bg-white p-10 shadow-lg"
                >

                  <div className="text-5xl">
                    {card.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    {card.text}
                  </p>

                  <p className="mt-8 font-semibold text-[#025a6a]">
                    {card.line}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

              {/* PRIVACY */}

        <section
          id="privacy"
          className="mx-auto max-w-7xl px-6 py-28"
        >

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#025a6a] to-[#4a9eb3] p-14 text-white shadow-2xl">

            <div className="grid lg:grid-cols-2 gap-14">

              <div>

                <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm">
                  🔒 Privacy First
                </span>

                <h2 className="mt-8 text-5xl font-bold leading-tight">
                  Because your life isn't meant to be mined.
                </h2>

                <p className="mt-8 text-lg leading-8 text-white/90">
                  Your documents live on your phone or wherever you choose
                  to save them. No data mining. No ads. No algorithms
                  watching your life.
                </p>

                <div className="mt-10 space-y-5">

                  <div>✓ On-device only storage</div>

                  <div>✓ Personal Vault with PIN</div>

                  <div>✓ Encrypted backups</div>

                  <div>✓ You remain in complete control</div>

                </div>

              </div>

              <div className="flex flex-col justify-center">

                <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

                  <h3 className="text-2xl font-semibold">
                    More than document storage
                  </h3>

                  <p className="mt-6 leading-8 text-white/90">
                    Life is more than paperwork.
                    Get real-time AQI updates every 15 minutes
                    so you can decide when to walk,
                    exercise or send children outdoors.
                  </p>

                  <div className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#025a6a]">
                    AQI 78 • Updated 2 mins ago
                  </div>

                  <p className="mt-8 text-white/90">
                    We don't just organize your life.
                    We respect it.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* DOWNLOAD */}

        <section
          id="download"
          className="bg-[#F5F5F4] py-28"
        >

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-5xl font-bold">
              Ready to stop searching and
              start living organised?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              It takes minutes to set up and saves you
              hours every month, plus a lifetime of
              "Where did I keep that?"
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="https://ribionic.com/downloads/lekhajokha.apk"
                className="rounded-full bg-[#025a6a] px-10 py-4 font-medium text-white shadow-lg transition hover:-translate-y-1"
              >
                Download for Android
              </Link>

              <button
                className="rounded-full border border-[#025a6a] px-10 py-4 font-medium text-[#025a6a]"
              >
                iOS Coming Soon
              </button>

            </div>

          </div>

        </section>

        {/* SUPPORT */}

        <section
          id="support"
          className="mx-auto max-w-7xl px-6 py-28"
        >

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h2 className="text-4xl font-bold">
                Need Help?
              </h2>

              <div className="mt-10 space-y-5">

                <Link
                  href="/privacy/lekhajokha"
                  className="block rounded-xl bg-[#F5F5F4] p-5 hover:bg-[#025a6a] hover:text-white transition"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/privacy/lekhajokha/delete-account"
                  className="block rounded-xl bg-[#F5F5F4] p-5 hover:bg-[#025a6a] hover:text-white transition"
                >
                  Delete Account
                </Link>

                <Link
                  href="/contact"
                  className="block rounded-xl bg-[#F5F5F4] p-5 hover:bg-[#025a6a] hover:text-white transition"
                >
                  Contact Ribionic
                </Link>

              </div>

            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-[#025a6a] to-[#4a9eb3] p-10 text-white">

              <h2 className="text-4xl font-bold">
                Ribionic Solutions
              </h2>

              <p className="mt-8 leading-8 text-white/90">
                We'd love to hear from you.
                Whether you need help with
                <strong> LekhaJokha </strong>,
                have a feature request or want to
                report an issue,
                our team is here to help.
              </p>

              <div className="mt-10 space-y-6">

                <div>

                  <h3 className="font-semibold">
                    General Enquiries
                  </h3>

                  <a
                    href="mailto:support@ribionic.com"
                    className="text-white/90 underline"
                  >
                    support@ribionic.com
                  </a>

                </div>

                <div>

                  <h3 className="font-semibold">
                    Google Play & Subscription Support
                  </h3>

                  <a
                    href="mailto:playstore@ribionic.com"
                    className="text-white/90 underline"
                  >
                    playstore@ribionic.com
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}