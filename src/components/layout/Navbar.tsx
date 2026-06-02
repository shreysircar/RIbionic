"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  return (
   <header
  className="
    fixed
    top-0
    left-0
    right-0
    z-50
   bg-transparent
  "
>
      <nav className="mx-auto grid h-14 max-w-7xl grid-cols-3 items-center px-6">
        
        {/* Logo */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Ribionic Logo"
              width={50}
              height={50}
              priority
            />

            <span className="text-xl font-semibold tracking-wider text-white">
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
className="
  relative
  text-white/90
  transition-all
  duration-300
  hover:text-cyan-300
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
"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="justify-self-end md:hidden">
<button
  className="text-white"
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
            bg-black/40
            backdrop-blur-lg
            md:hidden
          "
        >
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-white/90"
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