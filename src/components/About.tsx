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
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-2 mb-8">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-pe-solutions-light font-medium">
              Über uns
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-pe-solutions font-black leading-tight text-black">
            Demnächst verfügbar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
