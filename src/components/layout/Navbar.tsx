"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
  <header
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
    }
  `}
>
      <nav className="mx-auto grid h-14 max-w-7xl grid-cols-3 items-center px-6">
        
        {/* Logo */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="flex items-center gap-1"
          >
<Image
  src={scrolled ? "/ribionic(blue).png" : "/logo.png"}
  alt="Ribionic Logo"
  width={50}
  height={50}
  priority
  className="transition-all duration-300"
/>

          <span
  className={`
    text-xl font-semibold tracking-wider transition-colors duration-300
    ${
      scrolled
        ? "text-[#4a9eb3]"
        : "text-white"
    }
  `}
>
              Ribionic
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
className={`
  relative
  transition-all
  duration-300
  hover:text-cyan-400
  hover:-translate-y-0.5
  hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]
  after:absolute
  after:left-0
  after:-bottom-1
  after:h-[2px]
  after:w-0
  after:bg-cyan-400
  after:transition-all
  after:duration-300
  hover:after:w-full
  ${scrolled ? "text-slate-700" : "text-white/90"}
`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="justify-self-end md:hidden">
<button
  className={`
  transition-colors duration-300
  ${scrolled ? "text-slate-900" : "text-white"}
`}
  onClick={() => setMobileOpen(!mobileOpen)}
>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-white
            backdrop-blur-lg
            md:hidden
          "
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}