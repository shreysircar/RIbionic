"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#4a9eb3]/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-[#4a9eb3]">
              Ribionic Solutions
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Transforming businesses through ERP consulting,
              automation, analytics and digital innovation.
            </p>

            <div className="mt-5 space-y-1 text-sm text-slate-400">
              <p>India</p>
              <p>Noida, Uttar Pradesh - 201301</p>
              <p>sales@ribionic.com</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/ribionic-solutions/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#4a9eb3] hover:text-[#4a9eb3]"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="https://www.instagram.com/ribionic/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#4a9eb3] hover:text-[#4a9eb3]"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://x.com/ribionics"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-[#4a9eb3] hover:text-[#4a9eb3]"
              >
                <FaXTwitter size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Services
            </h3>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-400">

              <span className="text-slate-400">
  Data Dynamics
</span>
               
              

             <span className="text-slate-400">
 Consulting
</span>

             <span className="text-slate-400">
  Digital Delivery
</span>

<span className="text-slate-400">
 Accelerate ERP Development
</span>

              <span className="text-slate-400">

                Application Lifecycle Services
              </span>

              <span className="text-slate-400">
                Virtuous Infrastructure
              </span>

              <span className="text-slate-400">
                AI Value Chain
              </span>

              <span className="text-slate-400">
                Experience First Services
              </span>

              <span className="text-slate-400">
                Business Assurance Testing
              </span>

            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white">
              Monthly Newsletter
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Get the latest ERP insights, automation trends,
              technology updates and business transformation
              strategies directly in your inbox.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-xl border border-slate-800">
              <input
                type="email"
                placeholder="Your corporate email"
                className="
                  flex-1
                  bg-transparent
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-slate-500
                "
              />

              <button
                className="
                  flex items-center gap-2
                  bg-[#025a6a]
                  px-5
                  font-medium
                  transition
                  hover:bg-[#4a9eb3]
                "
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Ribionic Solutions.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}