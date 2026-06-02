import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function HeroControls({
  onPrev,
  onNext,
}: HeroControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronRight size={28} />
      </button>
    </>
  );
}