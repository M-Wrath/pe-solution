import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: Zap },
    { number: "100%", label: "Licensed & Insured", icon: Shield },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-power-900 to-power-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-6 py-2 mb-6"
            >
              <Award className="w-5 h-5 text-electric-400" />
              <span className="text-electric-300 font-rajdhani font-medium">
                About VoltCraft Pro
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-orbitron font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
                Powering the
              </span>
              <br />
              <span className="text-white">Florida Keys</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-power-300 font-exo mb-8 leading-relaxed"
            >
              For over a decade, VoltCraft Pro has been the{" "}
              <span className="text-voltage-400 font-semibold">
                premier electrical contractor
              </span>{" "}
              serving the Florida Keys. We combine traditional craftsmanship
              with cutting-edge technology to deliver electrical solutions that
              exceed expectations.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-electric-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-orbitron font-bold mb-2">
                    Licensed & Certified
                  </h3>
                  <p className="text-power-300 font-exo">
                    Fully licensed electrical contractors with all necessary
                    certifications and insurance coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-voltage-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-orbitron font-bold mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-power-300 font-exo">
                    Deep understanding of Florida Keys' unique electrical
                    challenges and local building codes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-electric-400 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-orbitron font-bold mb-2">
                    Innovation First
                  </h3>
                  <p className="text-power-300 font-exo">
                    Embracing the latest electrical technologies and smart home
                    innovations for modern living.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-400 to-electric-500 text-white font-exo font-bold text-lg rounded-full transition-all duration-300 hover:from-electric-300 hover:to-electric-400"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    index % 2 === 0
                      ? "0 10px 30px rgba(14, 165, 233, 0.3)"
                      : "0 10px 30px rgba(253, 224, 71, 0.3)",
                }}
                className={`relative group p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ${
                  index % 2 === 0
                    ? "border-electric-500/30 bg-electric-500/5 hover:bg-electric-500/10"
                    : "border-voltage-500/30 bg-voltage-500/5 hover:bg-voltage-500/10"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    index % 2 === 0
                      ? "bg-electric-500/20 group-hover:bg-electric-500/30"
                      : "bg-voltage-500/20 group-hover:bg-voltage-500/30"
                  }`}
                >
                  <stat.icon
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? "text-electric-400" : "text-voltage-400"
                    }`}
                  />
                </div>

                {/* Number */}
                <div
                  className={`text-4xl font-orbitron font-black mb-2 ${
                    index % 2 === 0 ? "text-electric-400" : "text-voltage-400"
                  }`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-power-300 font-rajdhani font-medium">
                  {stat.label}
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse ${
                    index % 2 === 0 ? "bg-electric-400" : "bg-voltage-400"
                  }`}
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
