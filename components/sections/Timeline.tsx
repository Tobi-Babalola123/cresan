"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

const SERIF = "'DM Serif Display', Georgia, serif";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
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

const TIMELINE = [
  {
    year: "2011",
    title: "Organization Founded",
    desc: "CRESAN established as Nigeria's dedicated clean energy advocacy body, with a mandate to advance renewable energy adoption nationally.",
  },
  {
    year: "2014",
    title: "First National Initiative",
    desc: "Launched the inaugural National Renewable Energy Awareness Campaign, reaching over 500,000 Nigerians across 12 states.",
  },
  {
    year: "2018",
    title: "Government Partnerships",
    desc: "Signed landmark MoUs with the Rural Electrification Agency (REA) and the Nigerian Electricity Regulatory Commission (NERC).",
  },
  {
    year: "2022",
    title: "National Renewable Campaign",
    desc: "Coordinated the largest renewable energy policy summit in West Africa, attended by government officials, investors, and international organizations.",
  },
  {
    year: "Today",
    title: "Driving Clean Energy Across Nigeria",
    desc: "Actively shaping Nigeria's energy transition with programs in 36 states and a network of 40+ partner organizations.",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Our Journey</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-[#1C2332] lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            A Decade of Impact
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0F5B3A] via-[#C9971C] to-[#0F5B3A]/20" />

          <div className="space-y-10">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-8"
              >
                {/* Timeline Marker */}
                <div className="flex shrink-0 flex-col items-center gap-1.5 pt-1">
                  <div
                    className={`z-10 flex h-[55px] w-[55px] items-center justify-center rounded-full text-xs font-bold text-white shadow-lg ${
                      item.year === "Today" ? "bg-[#C9971C]" : "bg-[#0F5B3A]"
                    }`}
                  >
                    {item.year === "Today" ? "★" : item.year.slice(2)}
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="flex-1 pb-2">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#C9971C]">
                    {item.year}
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-[#F8FAF8] p-5 transition-all duration-300 hover:border-[#0F5B3A]/30 hover:shadow-lg">
                    <h3
                      className="mb-2 font-bold text-[#1C2332]"
                      style={{ fontFamily: SERIF }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
