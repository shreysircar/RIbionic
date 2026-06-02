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
    border-b
    border-white/10
    bg-white/[0.06]
backdrop-blur-xl
    backdrop-blur-md
  "
>
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
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

<span className="text-xl font-bold tracking-wider text-white">
  Ribionic
</span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
  text-white/90
  transition
  hover:text-white
"
            >
              {link.label}
            </Link>
          ))}
        </div>



        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
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
                className="py-3 text-gray-700"
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