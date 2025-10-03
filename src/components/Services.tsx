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
  LayoutGrid,
  MessageCircle,
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
        "Dokumentation",
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
      title: "Energieberatung",
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
    {
      icon: LayoutGrid,
      title: "Elektrotechnik-Planung",
      description: "Umfassende Planung elektrotechnischer Anlagen und Systeme",
      features: [
        "Konzepterstellung",
        "Systemplanung",
        "Lastberechnung",
        "Normenkonformität",
      ],
      color: "primary",
      price: "Auf Anfrage",
    },
    {
      icon: MessageCircle,
      title: "Beratung",
      description:
        "Professionelle Beratung für alle elektrotechnischen Fragestellungen",
      features: [
        "Erstberatung",
        "Lösungskonzepte",
        "Kostenplanung",
        "Technische Empfehlungen",
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
            <Wrench className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-pe-solutions-light font-medium text-sm">
              Unsere Dienstleistungen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-pe-solutions font-black mb-6 text-black leading-tight"
          >
            Professionelle{" "}
            <span className="text-green-600">Elektrotechnik</span> Lösungen
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg text-black font-pe-solutions-light max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-black font-medium">
              Von der Planung bis zur Ausführung
            </span>{" "}
            bieten wir{" "}
            <span className="text-green-600 font-semibold">
              erstklassige elektrotechnische Dienstleistungen
            </span>{" "}
            mit <span className="text-black">modernster Technologie</span> und{" "}
            <span className="text-black">unvergleichlicher Expertise</span>.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
              }}
              transition={{ duration: 0.2 }}
              className="relative group text-center transition-all duration-200 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-600 hover:shadow-xl"
            >
              {/* Service Icon */}
              <div className="w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-5 transition-all duration-200 bg-gray-100 border border-gray-300 group-hover:bg-green-50 group-hover:border-green-600">
                <service.icon className="w-7 h-7 text-black group-hover:text-green-600 transition-colors duration-200" />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-pe-solutions font-bold text-black mb-3 group-hover:text-green-600 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-black font-pe-solutions-light mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Feature List - Horizontal Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-black border border-gray-200 group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-800 transition-all duration-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-lg font-pe-solutions-light font-semibold text-xs bg-gray-100 text-black border border-gray-300 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-200">
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
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{
              y: -1,
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-green-600 text-white font-pe-solutions-light font-semibold text-sm rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Kostenlose Beratung vereinbaren
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
