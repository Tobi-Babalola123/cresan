"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
// import AnimatedCounter from "./AnimatedCounter";
import { fadeUp, stagger } from "@/lib/animation";

const SERIF = "'DM Serif Display', Georgia, serif";

function AnimatedCounter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl lg:text-6xl font-bold text-[#0F5B3A]"
        style={{ fontFamily: SERIF }}
      >
        {count}
        {suffix}
      </div>
      <p className="text-gray-500 mt-3 text-xs font-semibold tracking-[0.15em] uppercase">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  const stats = [
    {
      target: 12,
      suffix: "+",
      label: "Years of Advocacy",
    },
    {
      target: 500,
      suffix: "+",
      label: "Professionals Trained",
    },
    {
      target: 40,
      suffix: "+",
      label: "Partner Organizations",
    },
    {
      target: 36,
      suffix: "",
      label: "States Reached",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
