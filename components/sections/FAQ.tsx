"use client";

import { useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const FAQS = [
  {
    q: "What is CRESAN and what does it do?",
    a: "CRESAN — The Office of Clean and Renewable Energy/Safety Advocacy of Nigeria — is an NGO that promotes renewable energy adoption through advocacy, policy development, training, and stakeholder collaboration across all 36 Nigerian states.",
  },
  {
    q: "How can I become a CRESAN member?",
    a: "Membership is open to individuals, organizations, and institutions committed to clean energy. You can apply online or attend any of our events to connect with the membership team. Annual dues vary by membership category.",
  },
  {
    q: "Does CRESAN offer funding or grants?",
    a: "While CRESAN does not provide direct grants, we connect members with funding opportunities from our international partners including UNDP, the World Bank, and the EU Energy Fund. We also assist with grant applications and proposal writing.",
  },
  {
    q: "How can my organization partner with CRESAN?",
    a: "We welcome partnerships from private companies, government agencies, research institutions, and international organizations. Contact our partnerships team at partnerships@cresan.org.ng to explore collaboration opportunities.",
  },
  {
    q: "What training programs does CRESAN offer?",
    a: "Our training portfolio covers solar PV installation and maintenance, wind energy fundamentals, energy audit and efficiency, renewable energy policy and financing, and entrepreneurship in the clean energy sector. Most programs offer internationally recognized certification.",
  },
  {
    q: "Is CRESAN a government organization?",
    a: "CRESAN is a non-governmental organization (NGO). However, we work closely with federal and state government agencies including the Rural Electrification Agency, NERC, and the Federal Ministry of Power to advance clean energy policy and implementation.",
  },
];

export default function FAQ() {
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
            <Eyebrow>FAQ</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-[#1C2332] lg:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Accordion.Item
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-[#F8FAF8] transition-all duration-300 data-[state=open]:border-[#0F5B3A]/30 data-[state=open]:bg-white"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between p-6 text-left font-semibold text-[#1C2332] transition-colors duration-200 hover:text-[#0F5B3A]">
                      <span className="pr-4">{faq.q}</span>

                      <ChevronDown
                        size={18}
                        className="shrink-0 text-[#0F5B3A] transition-transform duration-300 group-data-[state=open]:rotate-180"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-gray-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    {faq.a}
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
