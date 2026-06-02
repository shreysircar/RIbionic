"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    value: 10,
    suffix: "+",
    label: "Innovations",
  },
  {
    value: 7,
    suffix: "+",
    label: "Transformations Done",
  },
  {
    value: 11,
    suffix: "+",
    label: "Repeat Clients",
  },
];

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
<section
  ref={sectionRef}
  className="bg-[#4a9eb3]/5 py-12"
>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
          We Innovate and Transform
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="mb-1 text-4xl font-bold text-[#025a6a]">
                {visible ? (
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </h3>

              <p className="text-base italic text-slate-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}