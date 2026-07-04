"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Flag } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animation";

const SERIF = "'DM Serif Display', Georgia, serif";

// import { fadeUp, stagger } from "@/lib/animations";
import Eyebrow from "@/components/ui/Eyebrow";

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const cards = [
    {
      icon: <Target size={30} />,
      label: "Mission",
      title: "What We Do",
      desc: "To promote and advocate for the adoption of clean and renewable energy technologies across Nigeria, fostering energy security, environmental sustainability, and socioeconomic development for all Nigerians.",
    },
    {
      icon: <Eye size={30} />,
      label: "Vision",
      title: "Where We Are Going",
      desc: "A Nigeria powered entirely by clean, affordable, and sustainable energy — where every community has access to reliable electricity and the environment is preserved for future generations.",
    },
    {
      icon: <Flag size={30} />,
      label: "Objectives",
      title: "How We Get There",
      desc: "Through strategic advocacy, policy engagement, capacity building, public awareness campaigns, international partnerships, and driving innovation in Nigeria's renewable energy sector.",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#1C2332] py-28">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#0F5B3A]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#C9971C]/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow light>Our Foundation</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-white lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Mission, Vision &amp; Objectives
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.22 },
              }}
              className="group relative cursor-default rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0F5B3A]/50 bg-[#0F5B3A]/40 text-[#C9971C] transition-colors duration-300 group-hover:bg-[#0F5B3A]/60">
                {card.icon}
              </div>

              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9971C]">
                {card.label}
              </span>

              <h3
                className="mb-4 text-xl font-bold text-white"
                style={{ fontFamily: SERIF }}
              >
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/55">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
