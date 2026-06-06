import Image from "next/image";
import Link from "next/link";
import { HeroSlide as HeroSlideType } from "@/types/hero";

interface HeroSlideProps {
  slide: HeroSlideType;
  isActive: boolean;
}

export default function HeroSlide({
  slide,
  isActive,
}: HeroSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive
          ? "opacity-100 z-10"
          : "opacity-0 z-0"
      }`}
    >
      {/* Background */}
<Image
  src={slide.imageUrl}
  alt={slide.title}
  fill
  priority
className="hero-zoom object-cover brightness-90 saturate-90"
/>

      {/* Content */}
      <div className="relative z-20 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-8 pb-12 lg:pb-16">
          <div className="max-w-2xl ml-8 lg:ml-20">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">
              {slide.title}
            </h1>

            <p className="mb-10 text-base text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-lg">
              {slide.subtitle}
            </p>

            <Link
              href={slide.buttonLink}
              className="inline-flex items-center rounded-xl border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}