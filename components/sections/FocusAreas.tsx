"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sun,
  BookOpen,
  Building2,
  GraduationCap,
  Megaphone,
  Handshake,
} from "lucide-react";

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

export default function FocusAreas() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const areas = [
    {
      icon: <Sun size={22} />,
      title: "Solar Energy Promotion",
      desc: "Driving the deployment of solar PV systems for residential, commercial, and industrial applications nationwide.",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Renewable Energy Policy",
      desc: "Developing evidence-based policy recommendations that create an enabling environment for clean energy investment.",
    },
    {
      icon: <Building2 size={22} />,
      title: "Government Collaboration",
      desc: "Partnering with federal and state agencies to embed renewable energy targets into national development plans.",
    },
    {
      icon: <GraduationCap size={22} />,
      title: "Training & Workshops",
      desc: "Building human capital through specialized training programs, certifications, and hands-on technical workshops.",
    },
    {
      icon: <Megaphone size={22} />,
      title: "Public Awareness",
      desc: "Educating communities about the benefits, safety, and accessibility of renewable energy solutions.",
    },
    {
      icon: <Handshake size={22} />,
      title: "Strategic Partnerships",
      desc: "Forging alliances with international organizations, NGOs, and private sector leaders to amplify our impact.",
    },
  ];

  return (
    <section ref={ref} id="programs" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>What We Focus On</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-xl text-4xl font-bold leading-tight text-[#1C2332] lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Six Pillars of Clean Energy Action
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group cursor-default rounded-2xl border border-gray-100 bg-[#F8FAF8] p-8 transition-all duration-300 hover:border-[#0F5B3A]/30 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F5B3A] text-white transition-transform duration-300 group-hover:scale-110">
                {area.icon}
              </div>

              <h3
                className="mb-3 text-lg font-bold text-[#1C2332]"
                style={{ fontFamily: SERIF }}
              >
                {area.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
