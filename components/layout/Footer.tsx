"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SERIF = "'DM Serif Display', Georgia, serif";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Advocacy", href: "#advocacy" },
  { label: "Resources", href: "#resources" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const programLinks = [
  "National Solar Adoption Programme",
  "Wind Resource Mapping",
  "Clean Energy Skills Academy",
  "Policy Advocacy",
  "Rural Electrification",
];

const socialLinks = [
  {
    icon: <FaTwitter size={15} />,
    label: "Twitter",
    href: "#",
  },
  {
    icon: <FaLinkedinIn size={15} />,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: <FaFacebookF size={15} />,
    label: "Facebook",
    href: "#",
  },
  {
    icon: <FaInstagram size={15} />,
    label: "Instagram",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2332] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10">
        <div className="mb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F5B3A]">
                <Leaf size={18} className="text-white" />
              </div>

              <span
                className="text-[17px] font-bold text-white"
                style={{ fontFamily: SERIF }}
              >
                CRESAN
              </span>
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-white/45">
              The Office of Clean and Renewable Energy/Safety Advocacy of
              Nigeria — driving Nigeria&apos;s clean energy future since 2011.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-[#0F5B3A]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-[#C9971C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
              Programs
            </h4>

            <ul className="space-y-3">
              {programLinks.map((program) => (
                <li key={program}>
                  <Link
                    href="#"
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-[#C9971C]"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
              Newsletter
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-white/45">
              Stay updated on clean energy news and CRESAN activities.
            </p>

            <form className="mb-8 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#C9971C] focus:outline-none transition-colors duration-200"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#C9971C] py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#b8861a]"
              >
                Subscribe
              </button>
            </form>

            <div className="space-y-1.5 text-xs text-white/30">
              <p>info@cresan.org.ng</p>
              <p>+234 803 000 1234</p>
              <p>Abuja, FCT, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} CRESAN Nigeria. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-white/30 transition-colors duration-200 hover:text-white/70"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
