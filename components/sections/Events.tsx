"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
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

const EVENTS = [
  {
    type: "Workshop",
    dateNum: "18",
    dateMonth: "Jul",
    dateLabel: "Jul 18, 2025",
    location: "Abuja, FCT",
    title: "Solar Installation & Safety Workshop",
    desc: "Hands-on training for installers, electricians, and energy entrepreneurs across the FCT.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    type: "Conference",
    dateNum: "5",
    dateMonth: "Aug",
    dateLabel: "Aug 5–7, 2025",
    location: "Lagos, Nigeria",
    title: "Nigeria Clean Energy Summit 2025",
    desc: "West Africa's premier renewable energy conference bringing together 1,200+ stakeholders.",
    color: "bg-purple-50 text-purple-700",
  },
  {
    type: "Training",
    dateNum: "22",
    dateMonth: "Aug",
    dateLabel: "Aug 22, 2025",
    location: "Port Harcourt, Rivers",
    title: "Offshore Wind Energy Fundamentals",
    desc: "Specialized training on wind resource assessment and offshore wind development.",
    color: "bg-green-50 text-green-700",
  },
  {
    type: "Seminar",
    dateNum: "10",
    dateMonth: "Sep",
    dateLabel: "Sep 10, 2025",
    location: "Kano, Kano State",
    title: "Energy Access for Northern Nigeria",
    desc: "Policy seminar on expanding renewable energy reach to underserved northern communities.",
    color: "bg-amber-50 text-amber-700",
  },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} id="events" className="bg-[#F8FAF8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Upcoming Events</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-[#1C2332] lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Join the Conversation
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group flex gap-6 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#0F5B3A]/30 hover:shadow-xl"
            >
              {/* Date */}
              <div className="w-14 shrink-0 text-center">
                <div
                  className="text-2xl font-bold text-[#0F5B3A]"
                  style={{ fontFamily: SERIF }}
                >
                  {event.dateNum}
                </div>

                <div className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  {event.dateMonth}
                </div>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${event.color}`}
                  >
                    {event.type}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={11} />
                    {event.location}
                  </span>
                </div>

                <h3
                  className="mb-1.5 leading-snug font-bold text-[#1C2332] transition-colors duration-200 group-hover:text-[#0F5B3A]"
                  style={{ fontFamily: SERIF }}
                >
                  {event.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  {event.desc}
                </p>

                <button className="rounded-full bg-[#0F5B3A] px-4 py-2 text-xs font-bold text-white transition-colors duration-200 hover:bg-[#0d4f33]">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
