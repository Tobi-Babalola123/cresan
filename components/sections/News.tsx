"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
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

const NEWS = [
  {
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop&auto=format",
    date: "June 15, 2025",
    title: "CRESAN Launches Solar for Schools Initiative in Northern Nigeria",
    excerpt:
      "A new program targeting 200 public schools in Kano, Kaduna, and Sokoto states will bring clean energy and digital connectivity to 80,000 students.",
  },
  {
    img: "https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?w=600&h=400&fit=crop&auto=format",
    date: "May 28, 2025",
    title: "Nigeria's Wind Energy Potential: CRESAN Releases Landmark Report",
    excerpt:
      "A comprehensive two-year study identifies 15 high-potential wind corridors that could generate up to 40GW of clean electricity for Nigeria.",
  },
  {
    img: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=600&h=400&fit=crop&auto=format",
    date: "May 10, 2025",
    title: "CRESAN Signs MoU with World Bank for Renewable Energy Training",
    excerpt:
      "A new partnership will fund skills development programs for 1,500 young energy engineers over the next three years.",
  },
];

export default function News() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <motion.div variants={fadeUp}>
              <Eyebrow>Latest News</Eyebrow>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-[#1C2332] lg:text-5xl"
              style={{ fontFamily: SERIF }}
            >
              From the Newsroom
            </motion.h2>
          </div>

          <motion.button
            variants={fadeUp}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0F5B3A] transition-all duration-200 hover:gap-3"
          >
            View All News
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {NEWS.map((item, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group cursor-pointer"
            >
              <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>

              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-400">
                <Calendar size={12} />
                {item.date}
              </div>

              <h3
                className="mb-3 text-lg font-bold leading-tight text-[#1C2332] transition-colors duration-200 group-hover:text-[#0F5B3A]"
                style={{ fontFamily: SERIF }}
              >
                {item.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-gray-500">
                {item.excerpt}
              </p>

              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5B3A] transition-all duration-200 hover:gap-3">
                Read More
                <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
