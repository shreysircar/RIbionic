"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AboutSection } from "@/types/about";

interface Props {
  data: AboutSection;
}

export default function AboutPreview({ data }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
<section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
       <div className="grid gap-8 lg:gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">

            <h2 className="mb-4 text-3xl sm:text-4xl font-semibold leading-tight text-black">
              {data.heading}
            </h2>

            <p className="text-base leading-relaxed text-slate-400">
              {data.description}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
className="
  hidden sm:flex
  h-12 w-12 flex-shrink-0 items-center justify-center
  rounded-full border border-white/10
  bg-white/5 text-grey
  transition-all duration-300
  hover:border-[#4a9eb3]
  hover:bg-white/10
"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel */}
            <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {data.images.map((image) => (
                  <div
                    key={image.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                  >
<div className="group">
  <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-3xl">
    <Image
      src={image.imageUrl}
      alt={image.title}
      fill
      className="object-cover transition duration-700 group-hover:scale-105"
    />

    {/* Gradient only on tablet & desktop */}
    <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

    {/* Desktop title inside image */}
    <div className="absolute bottom-6 left-6 hidden sm:block">
      <h3 className="text-2xl font-bold text-white">
        {image.title}
      </h3>
    </div>
  </div>

  {/* Mobile title below image */}
  <h3 className="mt-4 text-center text-xl font-semibold text-slate-900 sm:hidden">
    {image.title}
  </h3>
</div>
                  </div>
                ))}
              </div>
            </div>

                     {/* Right Arrow */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="
                hidden sm:flex
                h-12 w-12 flex-shrink-0 items-center justify-center
                rounded-full border border-white/10
                bg-white/5 text-grey
                transition-all duration-300
                hover:border-[#4a9eb3]
                hover:bg-white/10
              "
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Arrows */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button
              onClick={() => emblaApi?.scrollPrev()}
           className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-[#4a9eb3] hover:text-[#4a9eb3]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-[#4a9eb3] hover:text-[#4a9eb3]"
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}