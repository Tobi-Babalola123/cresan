"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import Eyebrow from "@/components/ui/Eyebrow";

const SERIF = "'DM Serif Display', Georgia, serif";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <MapPin size={19} />,
      label: "Office Address",
      value:
        "Plot 1234 Muhammadu Buhari Way, Central Business District, Abuja, FCT, Nigeria",
    },
    { icon: <Phone size={19} />, label: "Phone", value: "+234 803 000 1234" },
    { icon: <Mail size={19} />, label: "Email", value: "info@cresan.org.ng" },
  ];

  return (
    <section ref={ref} id="contact" className="py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Get In Touch</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-[#1C2332]"
            style={{ fontFamily: SERIF }}
          >
            Contact CRESAN
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#0F5B3A]/10 flex items-center justify-center text-[#0F5B3A] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#1C2332] font-medium text-sm leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3 mb-10">
              {[
                { icon: <FaTwitter size={16} />, label: "Twitter" },
                { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
                { icon: <FaFacebookF size={16} />, label: "Facebook" },
                { icon: <FaInstagram size={16} />, label: "Instagram" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-[#1C2332] text-white flex items-center justify-center hover:bg-[#0F5B3A] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden aspect-video bg-gray-200"
            >
              <Image
                src="https://images.unsplash.com/photo-1629726797843-618688139f5a?w=700&h=400&fit=crop&auto=format"
                alt="Map showing CRESAN office location in Abuja"
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F5B3A]/30 to-[#1C2332]/40 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2 text-sm font-semibold text-[#1C2332]">
                  <MapPin size={16} className="text-[#0F5B3A]" />
                  Abuja, FCT, Nigeria
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-2xl"
          >
            <h3
              className="text-2xl font-bold text-[#1C2332] mb-7"
              style={{ fontFamily: SERIF }}
            >
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Full Name", type: "text" },
                  {
                    name: "email",
                    placeholder: "Email Address",
                    type: "email",
                  },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-[#F8FAF8] border border-gray-200 text-[#1C2332] placeholder-gray-400 focus:outline-none focus:border-[#0F5B3A] transition-colors duration-200 text-sm"
                  />
                ))}
              </div>
              {[
                {
                  name: "org",
                  placeholder: "Organization (Optional)",
                  type: "text",
                },
                { name: "subject", placeholder: "Subject", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-[#F8FAF8] border border-gray-200 text-[#1C2332] placeholder-gray-400 focus:outline-none focus:border-[#0F5B3A] transition-colors duration-200 text-sm"
                />
              ))}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-[#F8FAF8] border border-gray-200 text-[#1C2332] placeholder-gray-400 focus:outline-none focus:border-[#0F5B3A] transition-colors duration-200 text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#C9971C] hover:bg-[#b8861a] text-white py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
