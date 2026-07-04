"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

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

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#1C2332] overflow-hidden flex items-center"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-[#0F5B3A]/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-[#C9971C]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-[#C9971C] text-[10px] font-bold tracking-[0.25em] uppercase mb-6">
                <span className="w-8 h-px bg-[#C9971C]" />
                Accelerating Nigeria's Clean Energy Future
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-7"
              style={{ fontFamily: SERIF }}
            >
              Accelerating Nigeria's Transition to{" "}
              <em className="not-italic text-[#C9971C]">Clean & Renewable</em>{" "}
              Energy
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/55 text-lg leading-relaxed mb-9 max-w-[480px]"
            >
              Promoting renewable energy adoption through advocacy, policy
              development, industry collaboration, training, public awareness,
              and sustainable energy initiatives across Nigeria.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button className="inline-flex items-center gap-2 bg-[#0F5B3A] hover:bg-[#0d4f33] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
                Become a Member <ArrowRight size={17} />
              </button>
              <button className="border border-white/25 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-white/5">
                Explore Programs
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              {[
                "Government Advocacy",
                "Renewable Energy",
                "National Impact",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <CheckCircle size={15} className="text-[#C9971C]" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0F5B3A]/20">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=1000&fit=crop&auto=format"
                alt="Solar panels field powering communities"
                fill
                priority
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2332]/70 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              className="absolute -left-6 top-10 bg-white rounded-2xl p-5 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="text-3xl font-bold text-[#0F5B3A]"
                style={{ fontFamily: SERIF }}
              >
                12+
              </div>
              <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
                Years of Advocacy
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-6 top-[38%] bg-[#0F5B3A] rounded-2xl p-5 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div
                className="text-3xl font-bold text-white"
                style={{ fontFamily: SERIF }}
              >
                500+
              </div>
              <div className="text-xs text-white/70 font-semibold mt-1 uppercase tracking-wide">
                Professionals Trained
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-12 bg-[#C9971C] rounded-2xl p-5 shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <div
                className="text-3xl font-bold text-white"
                style={{ fontFamily: SERIF }}
              >
                40+
              </div>
              <div className="text-xs text-white/80 font-semibold mt-1 uppercase tracking-wide">
                Partner Organizations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
