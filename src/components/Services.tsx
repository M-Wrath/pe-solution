import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  PenTool,
  HardHat,
  FileText,
  Lightbulb,
  Wrench,
  Battery,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: PenTool,
      title: "Technischer Zeichner",
      description:
        "Professionelle technische Zeichnungen und Planungen für elektrotechnische Anlagen",
      features: [
        "CAD-Zeichnungen",
        "Schaltpläne",
        "Anlagenpläne",
        "3D-Visualisierungen",
      ],
      color: "primary",
      price: "Auf Anfrage",
    },
    {
      icon: HardHat,
      title: "Örtliche Bauaufsicht",
      description:
        "Überwachung und Koordination elektrotechnischer Arbeiten vor Ort",
      features: [
        "Baustellenüberwachung",
        "Qualitätskontrolle",
        "Terminkoordination",
        "Sicherheitsmanagement",
      ],
      color: "accent",
      price: "Auf Anfrage",
    },
    {
      icon: FileText,
      title: "Projektaufsicht",
      description:
        "Umfassende Projektleitung und -überwachung elektrotechnischer Vorhaben",
      features: [
        "Projektplanung",
        "Ressourcenmanagement",
        "Fortschrittskontrolle",
        "Dokumentation",
      ],
      color: "primary",
      price: "Auf Anfrage",
    },
    {
      icon: Lightbulb,
      title: "Energieberater",
      description:
        "Beratung zur Energieeffizienz und nachhaltigen Elektrotechnik-Lösungen",
      features: [
        "Energieanalyse",
        "Effizienzoptimierung",
        "Fördermittelberatung",
        "Nachhaltigkeitskonzepte",
      ],
      color: "accent",
      price: "Auf Anfrage",
    },
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

  const cardVariants = {
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
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Zap className="w-24 h-24 text-primary-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Battery className="w-20 h-20 text-accent-400 animate-pulse" />
        </div>
      </div>

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
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-1.5 mb-4"
          >
            <Wrench className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 font-pe-solutions-light font-medium text-sm">
              Unsere Dienstleistungen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-5xl font-pe-solutions font-black mb-4"
          >
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Professionelle Elektrotechnik
            </span>
            <br />
            <span className="text-white">Lösungen</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-lg text-secondary-300 font-pe-solutions-light max-w-2xl mx-auto leading-relaxed"
          >
            Von der Planung bis zur Ausführung bieten wir
            <span className="text-accent-400 font-semibold">
              {" "}
              erstklassige elektrotechnische Dienstleistungen
            </span>{" "}
            mit modernster Technologie und unvergleichlicher Expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className={`relative group text-center transition-all duration-300 cursor-pointer bg-secondary-800/30 border border-secondary-700/50 rounded-xl p-4 hover:border-primary-500/50 backdrop-blur-sm`}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  service.color === "primary"
                    ? "bg-primary-500/20 group-hover:bg-primary-500/30 border border-primary-500/30"
                    : "bg-accent-500/20 group-hover:bg-accent-500/30 border border-accent-500/30"
                }`}
              >
                <service.icon
                  className={`w-8 h-8 ${
                    service.color === "primary"
                      ? "text-primary-400"
                      : "text-accent-400"
                  }`}
                />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-pe-solutions font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-secondary-400 font-pe-solutions-light mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Feature List - Horizontal Pills */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-md text-xs font-pe-solutions-light transition-all duration-300 ${
                      service.color === "primary"
                        ? "bg-primary-500/10 text-primary-300 group-hover:bg-primary-500/20"
                        : "bg-accent-500/10 text-accent-300 group-hover:bg-accent-500/20"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price Badge */}
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full font-pe-solutions-light font-semibold text-xs transition-all duration-300 ${
                  service.color === "primary"
                    ? "bg-primary-500/20 text-primary-300 group-hover:bg-primary-500/30"
                    : "bg-accent-500/20 text-accent-300 group-hover:bg-accent-500/30"
                }`}
              >
                {service.price}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(132, 204, 22, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-accent-400 to-accent-500 text-secondary-900 font-pe-solutions font-bold text-base rounded-full transition-all duration-300 hover:from-accent-300 hover:to-accent-400"
          >
            Kostenlose Beratung vereinbaren
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
