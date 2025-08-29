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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-power-900 via-power-800 to-electric-900 pt-16 sm:pt-20">
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
              className="absolute w-1 h-1 bg-voltage-400 rounded-full"
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
          {/* Emergency Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-sm text-sm sm:text-base"
          >
            <Zap className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-300 font-rajdhani font-medium">
              24/7 Emergency Service Available
            </span>
          </motion.div>

          {/* Clean & Professional Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 leading-tight"
          >
            <motion.span
              className="bg-gradient-to-r from-electric-400 via-electric-300 to-voltage-400 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(14, 165, 233, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              VOLT
            </motion.span>
            <motion.span
              className="text-white ml-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              CRAFT
            </motion.span>
            <br />
            <motion.span
              className="text-voltage-400"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(252, 211, 77, 0.5)",
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              PRO
            </motion.span>
          </motion.h1>

          {/* Clean Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-power-300 font-exo font-light mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Premium Electrical Services in the{" "}
            <span className="text-electric-400 font-medium">Florida Keys</span>
            <br />
            <span className="text-voltage-300">
              Where Innovation Meets Excellence
            </span>
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: Shield, text: "Licensed & Insured", color: "electric" },
              { icon: Award, text: "10+ Years Experience", color: "voltage" },
              { icon: Clock, text: "Same Day Service", color: "electric" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 magnetic floating electric-card ${
                  feature.color === "electric"
                    ? "border-electric-500/30 bg-electric-500/10 hover:bg-electric-500/20 hover:shadow-glow-blue"
                    : "border-voltage-500/30 bg-voltage-500/10 hover:bg-voltage-500/20 hover:shadow-glow-yellow"
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon
                  className={`w-5 h-5 ${
                    feature.color === "electric"
                      ? "text-electric-400 icon-electric"
                      : "text-voltage-400 icon-voltage"
                  }`}
                />
                <span
                  className={`font-rajdhani font-medium text-glow-hover ${
                    feature.color === "electric"
                      ? "text-electric-100"
                      : "text-voltage-100"
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
              className="px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-rajdhani font-bold text-lg rounded-xl shadow-lg hover:shadow-electric-500/25 transition-all duration-300 voltage-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(14, 165, 233, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>

            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-3 px-8 py-4 border-2 border-voltage-500 text-voltage-400 font-rajdhani font-bold text-lg rounded-xl hover:bg-voltage-500/10 transition-all duration-300 electric-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call Emergency: (555) 123-4567
            </motion.a>
          </motion.div>

          {/* Professional Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-power-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-electric-400" />
              <span className="font-rajdhani">Fully Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-voltage-400" />
              <span className="font-rajdhani">A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-electric-400" />
              <span className="font-rajdhani">Master Electricians</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
