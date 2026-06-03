"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">

          <h2 className="text-4xl font-semibold text-slate-900">
            Industries Worked For
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {servicesData.map((service) => (

              <div 
              key={service.id}
              className="relative aspect-[3/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-x-0 bottom-5 px-4">
                  <h3 className="text-center text-xl font-medium text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}