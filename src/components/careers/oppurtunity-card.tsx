"use client";

import { useState } from "react";

type Props = {
  title: string;
  requirements: string[];
};

export default function OpportunityCard({
  title,
  requirements,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:bg-gray-50"
      >
        <h3 className="text-lg font-medium text-gray-900">
          {title}
        </h3>

        <span
          className={`text-xl font-light text-[#4a9eb3] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[4000px] pb-6" : "max-h-0"
        }`}
      >
        <ul className="space-y-3 pl-1">
          {requirements.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-sm leading-7 text-gray-600"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4a9eb3] flex-shrink-0" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}