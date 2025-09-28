import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, Sparkles, Zap } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    <section className="py-20 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10">
          <Zap className="w-16 h-16 text-primary-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10">
          <Sparkles className="w-12 h-12 text-accent-400 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-spark"></div>
        </div>
        <div className="absolute top-1/3 right-1/3">
          <div className="w-1 h-1 bg-accent-400 rounded-full animate-spark [animation-delay:1s]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-2 mb-8"
          >
            <Clock className="w-5 h-5 text-primary-400" />
            <span className="text-primary-300 font-pe-solutions-light font-medium">
              Über uns
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-pe-solutions font-black mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Bald
            </span>
            <br />
            <span className="text-white">verfügbar</span>
          </motion.h2>

          {/* Coming Soon Message */}
          <motion.div variants={itemVariants} className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-secondary-800/50 border border-primary-500/30 rounded-3xl p-12 backdrop-blur-sm">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                <Clock className="w-16 h-16 mx-auto text-accent-400" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-pe-solutions font-bold text-white mb-4">
                In Bearbeitung
              </h3>

              <p className="text-xl text-secondary-300 font-pe-solutions-light leading-relaxed mb-6">
                Diese Sektion wird gerade überarbeitet und mit
                <span className="text-primary-400 font-semibold">
                  {" "}
                  interessanten Inhalten{" "}
                </span>
                über unser Unternehmen gefüllt.
              </p>

              <div className="flex items-center justify-center gap-2 text-accent-400">
                <span className="text-lg font-pe-solutions-light">
                  Kommt bald
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-primary-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: [
                    "rgba(34, 197, 94, 0.3)",
                    "rgba(34, 197, 94, 0.8)",
                    "rgba(34, 197, 94, 0.3)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
