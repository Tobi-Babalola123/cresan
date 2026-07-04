"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

const SERIF = "'DM Serif Display', Georgia, serif";

const NAV_LINKS = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C2332]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0F5B3A] flex items-center justify-center shrink-0">
              <Leaf size={18} className="text-white" />
            </div>

            <div className="leading-none">
              <span
                className="block text-[17px] font-bold tracking-tight text-white"
                style={{ fontFamily: SERIF }}
              >
                CRESAN
              </span>

              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#C9971C]">
                Clean Energy Nigeria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-[#C9971C]"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#C9971C] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#b8861a] hover:shadow-lg"
          >
            Become a Member
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white lg:hidden"
            aria-label="Toggle Navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-white/10 bg-[#1C2332] py-4 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:text-[#C9971C]"
              >
                {link}
              </Link>
            ))}

            <div className="px-4 pt-4">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-[#C9971C] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#b8861a]"
              >
                Become a Member
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
