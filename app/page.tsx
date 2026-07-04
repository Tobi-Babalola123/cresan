import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Missions from "@/components/sections/Missions";
import FocusAreas from "@/components/sections/FocusAreas";
import FeaturedPrograms from "@/components/sections/FeaturedPrograms";
import Timeline from "@/components/sections/Timeline";
import Partners from "@/components/sections/Partners";
import News from "@/components/sections/News";
import Events from "@/components/sections/Events";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Missions />
      <FocusAreas />
      <FeaturedPrograms />
      <Timeline />
      <Partners />
      <News />
      <Events />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
