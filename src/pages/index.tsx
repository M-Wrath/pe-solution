import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Emergency from "@/components/Emergency";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleSystem from "@/components/ParticleSystem";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-power-900 via-power-800 to-power-900"
    >
      {/* ⚡ NAVBAR - PROFESSIONAL ELECTRICAL NAVIGATION ⚡ */}
      <Navbar />

      {/* ⚡ PARTICLE SYSTEM - MAGICAL ELECTRICAL EFFECTS ⚡ */}
      <ParticleSystem />

      <main className="relative overflow-hidden z-20">
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-voltage-400 rounded-full animate-spark opacity-60"></div>
          <div
            className="absolute top-40 right-20 w-1 h-1 bg-electric-400 rounded-full animate-spark opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-voltage-300 rounded-full animate-spark opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-60 right-1/3 w-1 h-1 bg-electric-300 rounded-full animate-spark opacity-30"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <Emergency />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </motion.div>
  );
}
