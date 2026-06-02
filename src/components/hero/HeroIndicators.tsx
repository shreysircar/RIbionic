interface HeroIndicatorsProps {
  total: number;
  active: number;
  onSelect: (index: number) => void;
}

export default function HeroIndicators({
  total,
  active,
  onSelect,
}: HeroIndicatorsProps) {
  return (
    <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-3 w-3 rounded-full transition-all ${
            active === index
              ? "bg-white w-8"
              : "bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}