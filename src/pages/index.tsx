import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      {/* 🌟 ULTIMATE WOW BACKGROUND 🌟 */}
      <div className="fixed inset-0 z-0">
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-power-900 via-power-800 to-secondary-900"></div>

        {/* Subtle Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,200 Q400,100 800,200 T1600,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0,400 Q600,300 1200,400 T2400,400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        </svg>
      </div>
      {/* ⚡ NAVBAR - PROFESSIONAL ELECTRICAL NAVIGATION ⚡ */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative overflow-hidden z-20">
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
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </motion.div>
  );
}
