"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0F5B3A] py-36">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[450px] w-[450px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-[#C9971C]/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow light>Take Action</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-tight text-white lg:text-6xl"
            style={{ fontFamily: SERIF }}
          >
            Join Nigeria&apos;s Renewable Energy Movement
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-12 max-w-2xl text-xl text-white/65"
          >
            Be part of the change. Whether you are an individual, organization,
            or business—there is a place for you in Nigeria&apos;s clean energy
            future.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="rounded-full bg-[#C9971C] px-10 py-5 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#b8861a] hover:shadow-2xl">
              Become a Member
            </button>

            <button className="rounded-full border-2 border-white/35 px-10 py-5 text-lg font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10">
              Partner With Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
