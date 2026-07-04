"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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

const PARTNERS = [
  {
    name: "REA",
    logo: "/partners/cbn.png",
  },
  {
    name: "NERC",
    logo: "/partners/iso.png",
  },
  {
    name: "SON",
    logo: "/partners/nemsa.png",
  },
  {
    name: "Federal Ministry of Power",
    logo: "/partners/nerc.png",
  },
  {
    name: "UNDP",
    logo: "/partners/undps.png",
  },
  {
    name: "World Bank",
    logo: "/partners/worldbank.png",
  },
];

const logos = [...PARTNERS, ...PARTNERS]; // duplicate for infinite loop

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section ref={ref} className="border-y border-gray-100 bg-[#F8FAF8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400"
        >
          Partners &amp; Affiliations
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F8FAF8] via-[#F8FAF8]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F8FAF8] via-[#F8FAF8]/80 to-transparent" />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div
              className="flex w-max items-center gap-16 lg:gap-20"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {logos.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group flex shrink-0 justify-center"
                >
                  <div className="relative h-28 w-52 lg:h-32 lg:w-60">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="240px"
                      className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_15px_30px_rgba(15,91,58,0.25)]"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
