"use client";

import { useEffect, useState } from "react";
import { HeroSlide as HeroSlideType } from "@/types/hero";
import HeroSlide from "./HeroSlide";
import HeroControls from "./HeroControls";
import HeroIndicators from "./HeroIndicators";

interface HeroBannerProps {
  slides: HeroSlideType[];
}

export default function HeroBanner({
  slides,
}: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
<section className="relative h-[60vh] min-h-[500px] max-h-[700px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      <HeroControls
        onPrev={prevSlide}
        onNext={nextSlide}
      />

      <HeroIndicators
        total={slides.length}
        active={currentSlide}
        onSelect={setCurrentSlide}
      />
    </section>
  );
}