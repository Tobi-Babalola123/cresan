"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Building2, Globe, Award, ArrowRight } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { fadeUp, stagger } from "@/lib/animation";

const SERIF = "'DM Serif Display', Georgia, serif";

const features = [
  {
    icon: Sun,
    title: "Renewable Energy Advocacy",
    desc: "...",
  },
  {
    icon: Building2,
    title: "Government Policy Support",
    desc: "...",
  },
  {
    icon: Globe,
    title: "Sustainable Development",
    desc: "...",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sun,
      title: "Renewable Energy Advocacy",
      desc: "Championing solar, wind, and clean energy solutions across Nigeria's energy landscape.",
    },
    {
      icon: Building2,
      title: "Government Policy Support",
      desc: "Working directly with federal and state governments to shape enabling energy policy frameworks.",
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      desc: "Driving long-term growth that balances economic development with environmental responsibility.",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-28 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=700&h=875&fit=crop&auto=format"
                alt="CRESAN team in a collaborative session"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#C9971C]/12 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0F5B3A]/10 rounded-2xl -z-10" />

            {/* Badge */}
            <div className="absolute bottom-8 left-8 bg-[#0F5B3A] text-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <Award size={28} className="text-[#C9971C]" />
                <div>
                  <div
                    className="font-bold text-lg"
                    style={{ fontFamily: SERIF }}
                  >
                    Since 2011
                  </div>
                  <div className="text-white/60 text-xs">
                    NGO Registered & Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Who We Are</Eyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-[#1C2332] leading-tight mb-6"
              style={{ fontFamily: SERIF }}
            >
              Nigeria's Premier Voice for Clean Energy
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-lg leading-relaxed mb-8"
            >
              CRESAN — The Office of Clean and Renewable Energy/Safety Advocacy
              of Nigeria — is a non-governmental organization committed to
              accelerating Nigeria's transition to clean, affordable, and
              sustainable energy. Since 2011, we have been at the forefront of
              renewable energy advocacy, partnering with governments, industry
              leaders, and communities to create lasting change.
            </motion.p>

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="flex gap-4 p-5 mt-4 rounded-xl bg-white border border-gray-100 hover:border-[#0F5B3A]/25 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F5B3A]/10 flex items-center justify-center text-[#0F5B3A] shrink-0">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1C2332] mb-0.5">
                      {feature.title}
                    </h4>

                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.button
              variants={fadeUp}
              className="inline-flex mt-4 items-center gap-2 bg-[#0F5B3A] hover:bg-[#0d4f33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Learn More About CRESAN <ArrowRight size={17} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
