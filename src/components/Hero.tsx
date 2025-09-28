import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Phone, Shield, Award, Clock } from "lucide-react";

const Hero = () => {
  const [sparkPositions, setSparkPositions] = useState<
    Array<{ left: string; top: string }>
  >([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSparkPositions(
      Array.from({ length: 8 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      {/* Floating Sparks */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {sparkPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 text-center relative z-10 pt-16 sm:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Professional Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-sm text-sm sm:text-base"
          >
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 font-rajdhani font-medium">
              Professionelle Elektrotechnik-Lösungen
            </span>
          </motion.div>

          {/* Clean & Professional Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-pe-solutions font-black mb-6 leading-tight"
          >
            <motion.span
              className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              pe
            </motion.span>
            <br />
            <motion.span
              className="text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              solutions
            </motion.span>
            <motion.span
              className="text-accent-400 text-6xl md:text-8xl lg:text-9xl"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(132, 204, 22, 0.5)",
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              .
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-secondary-300 font-pe-solutions-light mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            <div className="text-primary-400 font-medium mb-2">
              Beratung | Planung | Ausführung
            </div>
            <div className="text-accent-300">
              Elektrotechnik, die verbindet.
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              {
                icon: Shield,
                text: "Zertifiziert & Versichert",
                color: "primary",
              },
              { icon: Award, text: "15+ Jahre Erfahrung", color: "accent" },
              { icon: Clock, text: "Termintreue Garantie", color: "primary" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 magnetic floating ${
                  feature.color === "primary"
                    ? "border-primary-500/30 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-glow-green"
                    : "border-accent-500/30 bg-accent-500/10 hover:bg-accent-500/20 hover:shadow-glow-accent"
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon
                  className={`w-5 h-5 ${
                    feature.color === "primary"
                      ? "text-primary-400"
                      : "text-accent-400"
                  }`}
                />
                <span
                  className={`font-rajdhani font-medium text-glow-hover ${
                    feature.color === "primary"
                      ? "text-primary-100"
                      : "text-accent-100"
                  }`}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-rajdhani font-bold text-lg rounded-xl shadow-lg hover:shadow-primary-600/20 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(22, 163, 74, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Kostenlose Beratung
            </motion.button>

            <motion.a
              href="tel:+4915123456789"
              className="flex items-center gap-3 px-8 py-4 border-2 border-accent-500 text-accent-400 font-rajdhani font-bold text-lg rounded-xl hover:bg-accent-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Tel: +49 151 234 56789
            </motion.a>
          </motion.div>

          {/* Professional Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-secondary-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              <span className="font-rajdhani">Vollständig Zertifiziert</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-400" />
              <span className="font-rajdhani">Qualitätsgarantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-400" />
              <span className="font-rajdhani">Meisterqualität</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
