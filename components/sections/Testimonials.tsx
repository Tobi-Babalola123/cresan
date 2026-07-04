"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animation";

import Eyebrow from "@/components/ui/Eyebrow";

const SERIF = "'DM Serif Display', Georgia, serif";

const TESTIMONIALS = [
  {
    quote:
      "CRESAN's advocacy has been instrumental in shaping Nigeria's renewable energy policy. Their evidence-based approach and consistent government engagement has delivered real, measurable change.",
    name: "Dr. Amina Yusuf",
    role: "Director, Rural Electrification Agency",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format",
  },
  {
    quote:
      "CRESAN's training programs gave me both the technical skills and the business framework to build a successful solar installation company. Truly transformative for my career and community.",
    name: "Chukwuemeka Obi",
    role: "CEO, SolarSafe Nigeria",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&auto=format",
  },
  {
    quote:
      "Our partnership with CRESAN on the Northern Nigeria Energy Access project has been one of the most impactful collaborations in our portfolio. They bring credibility, networks, and genuine commitment.",
    name: "Sarah Mitchell",
    role: "Country Representative, UNDP Nigeria",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&auto=format",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="bg-[#1C2332] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow light>Voices of Impact</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-white lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            What Our Partners Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.22,
                },
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-300 hover:bg-white/10"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={15}
                    className="fill-[#C9971C] text-[#C9971C]"
                  />
                ))}
              </div>

              <p className="mb-8 text-[0.95rem] italic leading-relaxed text-white/65">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-600">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div>
                  <div className="text-sm font-bold text-white">
                    {testimonial.name}
                  </div>

                  <div className="mt-0.5 text-xs text-[#C9971C]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
