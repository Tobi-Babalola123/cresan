"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Eyebrow from "@/components/ui/Eyebrow";

const SERIF = "'DM Serif Display', Georgia, serif";
const PROGRAMS = [
  {
    img: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=600&h=400&fit=crop&auto=format",
    category: "Solar Initiative",
    title: "National Solar Adoption Programme",
    desc: "A flagship initiative to deploy solar power systems across 10,000 rural households, schools, and healthcare facilities in underserved communities.",
  },
  {
    img: "https://images.unsplash.com/photo-1562519990-50eb51e282b2?w=600&h=400&fit=crop&auto=format",
    category: "Wind Energy",
    title: "Wind Resource Mapping Project",
    desc: "A comprehensive study of Nigeria's wind energy potential, providing data that guides investment in wind farms and distributed generation systems.",
  },
  {
    img: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&h=400&fit=crop&auto=format",
    category: "Capacity Building",
    title: "Clean Energy Skills Academy",
    desc: "Equipping 5,000 engineers, technicians, and entrepreneurs with certified competencies in renewable energy installation and maintenance.",
  },
];

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

export default function FeaturedPrograms() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="bg-[#F8FAF8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Featured Programs</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-[#1C2332] lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Flagship Initiatives
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.22,
                },
              }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-7">
                <span className="rounded-full bg-[#C9971C]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9971C]">
                  {program.category}
                </span>

                <h3
                  className="mt-5 mb-3 text-xl font-bold leading-tight text-[#1C2332]"
                  style={{ fontFamily: SERIF }}
                >
                  {program.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {program.desc}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5B3A] transition-all duration-200 hover:gap-3">
                  Read More
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
