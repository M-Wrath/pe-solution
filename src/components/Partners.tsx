import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Handshake } from "lucide-react";

const Partners = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Partner logos - using your uploaded logos
  const partners = [
    {
      id: 1,
      name: "pe solutions",
      logo: "/logo_quadratisch_240x.png",
    },
    {
      id: 2,
      name: "Eagle Power Systems",
      logo: "/vecteezy_illustration-of-eagle-head-logo-with_24684356.png",
    },
    {
      id: 3,
      name: "Majestic Energy",
      logo: "/vecteezy_majestic-bald-eagle-logo-exudes-power-ai-generated_48218998.png",
    },
    {
      id: 4,
      name: "Lion Industries",
      logo: "/vecteezy_lion-head-logo-mascot_44300318.png",
    },
    {
      id: 5,
      name: "Meta Dynamics",
      logo: "/vecteezy_metallic-style-logo_33659577.png",
    },
    {
      id: 6,
      name: "Gaming Tech Corp",
      logo: "/vecteezy_game-emblem-logo_23266844.png",
    },
    {
      id: 7,
      name: "Balance Solutions",
      logo: "/vecteezy_artistic-design-of-yin-yang-sign-logo-illustration-no_48123613.png",
    },
    {
      id: 8,
      name: "E-Sport Ventures",
      logo: "/vecteezy_logo-e-sport-variation-character-and-creatures-transparent_44778417.png",
    },
    {
      id: 9,
      name: "Creative Swirl Co",
      logo: "/vecteezy_a-colorful-abstract-swirl-logo-on-transparent-background_48041693.png",
    },
    {
      id: 10,
      name: "Tech Innovators",
      logo: "/vecteezy_the-logo-for-the-national-association-of-independent_50544462.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4"
          >
            <Handshake className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-pe-solutions-light font-medium text-sm">
              Partnerfirmen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-pe-solutions font-black mb-6 text-black leading-tight"
          >
            Unsere Kunden & <span className="text-green-600">Partner</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg text-gray-600 font-pe-solutions-light max-w-3xl mx-auto leading-relaxed"
          >
            Wir betreuen{" "}
            <span className="text-green-600 font-semibold">
              Kunden in Österreich
            </span>{" "}
            und darüber hinaus
          </motion.p>
        </motion.div>

        {/* Partners Logo Strip - Clean & Professional */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Main logo container */}
          <div className="relative bg-white border-2 border-gray-200 rounded-xl p-8 sm:p-10 shadow-sm hover:border-green-600 hover:shadow-lg transition-all duration-300">
            {/* Logo grid - clean and spacious */}
            <div className="relative z-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  variants={cardVariants}
                  className={`flex items-center justify-center ${
                    partner.name === "pe solutions"
                      ? "w-full h-32"
                      : "w-full h-28"
                  }`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`object-contain ${
                      partner.name === "pe solutions"
                        ? "max-w-32 max-h-32"
                        : "max-w-full max-h-24"
                    }`}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://via.placeholder.com/120x48/e5e7eb/6b7280?text=${partner.name.replace(
                        /\s+/g,
                        "+"
                      )}`;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subtle bottom text */}
          <motion.p
            variants={cardVariants}
            className="text-center mt-6 text-sm text-gray-600 font-pe-solutions-light"
          >
            Vertrauen Sie auf unsere{" "}
            <span className="text-green-600 font-medium">
              bewährten Partnerschaften
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
