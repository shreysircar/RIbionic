"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-700 ${
        hide
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="splash-ring" />

        <Image
          src="/ribionic(blue).png"
          alt="Ribionic"
          width={110}
          height={110}
          priority
          className="splash-logo"
        />
      </div>

      <p className="mt-8 text-sm tracking-[0.2em] text-slate-600 uppercase splash-text text-[#025a6a]">
        Transforming Ideas Into Intelligent Solutions
      </p>
    </div>
  );
}