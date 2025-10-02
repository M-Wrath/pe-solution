import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-white"
    >
      {/* Clean White Background */}
      <div className="fixed inset-0 z-0 bg-white"></div>

      {/* Navbar */}
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
        <section id="partners">
          <Partners />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </motion.div>
  );
}
