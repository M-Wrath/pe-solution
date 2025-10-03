import { motion } from "framer-motion";
import { Zap, Phone, Shield, Award, Clock } from "lucide-react";

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Clean & Professional Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-pe-solutions font-black mb-8 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              <motion.span
                className="text-green-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  textShadow: "0 2px 8px rgba(22, 163, 74, 0.15)",
                  letterSpacing: "-0.03em",
                }}
              >
                pe
              </motion.span>
              <br />
              <motion.span
                className="text-black"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  textShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
                  letterSpacing: "-0.02em",
                  background:
                    "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                solutions
              </motion.span>
              <motion.span
                className="text-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 200,
                }}
                style={{
                  textShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  background:
                    "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                .
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-inter font-medium mb-8 max-w-2xl leading-relaxed"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-black font-semibold mb-3"
                style={{
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
                }}
              >
                Beratung | Planung | Ausführung
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-green-600 text-base sm:text-lg md:text-xl lg:text-2xl"
                style={{
                  letterSpacing: "0.01em",
                  textShadow: "0 2px 6px rgba(22, 163, 74, 0.12)",
                }}
              >
                Elektrotechnik, die verbindet.
              </motion.div>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 mb-10"
            >
              {[
                {
                  icon: Shield,
                  text: "Zertifiziert & Versichert",
                },
                { icon: Clock, text: "Termintreue Garantie" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-gray-300 bg-white hover:border-green-600 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />
                  </motion.div>
                  <span className="font-inter font-semibold text-sm sm:text-base text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start mb-12"
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-6 py-3 bg-green-600 text-white font-inter font-semibold text-sm rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
              >
                Kostenlose Beratung
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                href="tel:+436641426563"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-inter font-bold text-sm rounded-lg hover:border-green-600 hover:text-green-600 transition-colors duration-200 shadow-sm hover:shadow-md"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
              >
                <Phone className="w-4 h-4" />
                <span className="whitespace-nowrap">+43 664 142 6563</span>
              </motion.a>
            </motion.div>

            {/* Professional Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 sm:gap-6 items-center text-gray-700"
            >
              {[
                { icon: Shield, text: "Vollständig Zertifiziert" },
                { icon: Award, text: "Qualitätsgarantie" },
                { icon: Zap, text: "Meisterqualität" },
              ].map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  className="group flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 border border-gray-200 group-hover:border-green-600 group-hover:bg-green-50 transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <indicator.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />
                  </motion.div>
                  <span className="font-inter font-semibold text-sm sm:text-base group-hover:text-green-600 transition-colors duration-300">
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Circuit Board Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative order-1 lg:order-2 flex items-center justify-center h-[400px] lg:h-[600px]"
          >
            {/* Animated Circuit Board SVG */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background circles */}
              <motion.circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.circle
                cx="250"
                cy="250"
                r="150"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.circle
                cx="250"
                cy="250"
                r="100"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: 1.2 }}
              />

              {/* Central node */}
              <motion.circle
                cx="250"
                cy="250"
                r="20"
                fill="#16a34a"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
              />
              <motion.circle
                cx="250"
                cy="250"
                r="20"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
              />

              {/* Circuit lines - Top */}
              <motion.path
                d="M 250 250 L 250 100 L 350 50"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
              <motion.circle
                cx="350"
                cy="50"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.5 }}
              />

              {/* Circuit lines - Top Right */}
              <motion.path
                d="M 250 250 L 350 200 L 450 150"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.8 }}
              />
              <motion.circle
                cx="450"
                cy="150"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.7 }}
              />

              {/* Circuit lines - Right */}
              <motion.path
                d="M 250 250 L 400 250 L 450 300"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2 }}
              />
              <motion.circle
                cx="450"
                cy="300"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.9 }}
              />

              {/* Circuit lines - Bottom Right */}
              <motion.path
                d="M 250 250 L 350 300 L 400 400"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2.2 }}
              />
              <motion.circle
                cx="400"
                cy="400"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.1 }}
              />

              {/* Circuit lines - Bottom */}
              <motion.path
                d="M 250 250 L 250 380 L 150 450"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2.4 }}
              />
              <motion.circle
                cx="150"
                cy="450"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.3 }}
              />

              {/* Circuit lines - Left */}
              <motion.path
                d="M 250 250 L 100 250 L 50 200"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2.6 }}
              />
              <motion.circle
                cx="50"
                cy="200"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.5 }}
              />

              {/* Circuit lines - Top Left */}
              <motion.path
                d="M 250 250 L 150 150 L 100 80"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 2.8 }}
              />
              <motion.circle
                cx="100"
                cy="80"
                r="8"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.7 }}
              />

              {/* Small connection nodes */}
              <motion.circle
                cx="250"
                cy="100"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
              />
              <motion.circle
                cx="350"
                cy="200"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.4 }}
              />
              <motion.circle
                cx="400"
                cy="250"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.6 }}
              />
              <motion.circle
                cx="350"
                cy="300"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.8 }}
              />
              <motion.circle
                cx="250"
                cy="380"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3 }}
              />
              <motion.circle
                cx="100"
                cy="250"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.2 }}
              />
              <motion.circle
                cx="150"
                cy="150"
                r="5"
                fill="#6b7280"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 3.4 }}
              />

              {/* Data flow animations (moving dots) */}
              <motion.circle
                cx="250"
                cy="250"
                r="3"
                fill="#16a34a"
                transition={{
                  duration: 3,
                  delay: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 250 250 L 250 100 L 350 50"
                  begin="4s"
                />
              </motion.circle>
              <motion.circle cx="250" cy="250" r="3" fill="#16a34a">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 250 250 L 400 250 L 450 300"
                  begin="4.5s"
                />
              </motion.circle>
              <motion.circle cx="250" cy="250" r="3" fill="#16a34a">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 250 250 L 250 380 L 150 450"
                  begin="5s"
                />
              </motion.circle>
            </svg>

            {/* Floating tech labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-md"
            >
              <div className="text-xs font-inter font-bold text-gray-700">
                Smart Grid
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4 }}
              className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 shadow-md"
            >
              <div className="text-xs font-inter font-bold text-gray-700">
                IoT Connected
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.2 }}
              className="absolute top-1/2 right-5 bg-white/90 backdrop-blur-sm border border-green-200 rounded-lg px-3 py-2 shadow-md"
            >
              <div className="text-xs font-inter font-semibold text-green-600">
                Active
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
