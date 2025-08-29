import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Home,
  Building,
  ShieldCheck,
  Wrench,
  Lightbulb,
  Cpu,
  Battery,
  AlertTriangle,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description:
        "Complete home electrical solutions from wiring to smart home automation",
      features: [
        "Home Rewiring",
        "Outlet Installation",
        "Circuit Breaker Upgrades",
        "Smart Home Setup",
      ],
      color: "electric",
      price: "Starting at $150",
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description:
        "Professional commercial electrical services for businesses and facilities",
      features: [
        "Office Wiring",
        "Lighting Systems",
        "Power Distribution",
        "Emergency Systems",
      ],
      color: "voltage",
      price: "Custom Quote",
    },
    {
      icon: ShieldCheck,
      title: "Electrical Safety Inspections",
      description:
        "Comprehensive electrical safety assessments and code compliance checks",
      features: [
        "Safety Audits",
        "Code Compliance",
        "Risk Assessment",
        "Certification",
      ],
      color: "electric",
      price: "Starting at $200",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Repairs",
      description:
        "24/7 emergency electrical repair services for urgent electrical issues",
      features: [
        "Power Outages",
        "Electrical Fires",
        "Dangerous Wiring",
        "Emergency Lighting",
      ],
      color: "voltage",
      price: "24/7 Available",
    },
    {
      icon: Lightbulb,
      title: "LED Lighting Solutions",
      description:
        "Energy-efficient LED lighting installation and smart lighting systems",
      features: [
        "LED Conversion",
        "Smart Switches",
        "Landscape Lighting",
        "Energy Savings",
      ],
      color: "electric",
      price: "Starting at $75",
    },
    {
      icon: Cpu,
      title: "Smart Home Integration",
      description:
        "Modern smart home electrical systems and IoT device integration",
      features: [
        "Home Automation",
        "Smart Panels",
        "IoT Integration",
        "Voice Control",
      ],
      color: "voltage",
      price: "Custom Quote",
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
    <section className="py-20 bg-gradient-to-b from-power-900 to-power-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Zap className="w-32 h-32 text-electric-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Battery className="w-28 h-28 text-voltage-400 animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Wrench className="w-5 h-5 text-electric-400" />
            <span className="text-electric-300 font-rajdhani font-medium">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-orbitron font-black mb-6"
          >
            <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
              Premium Electrical
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-power-300 font-exo max-w-3xl mx-auto leading-relaxed"
          >
            From residential upgrades to commercial installations, we deliver
            <span className="text-voltage-400 font-semibold">
              {" "}
              world-class electrical services
            </span>{" "}
            with cutting-edge technology and unmatched expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  service.color === "electric"
                    ? "0 20px 40px rgba(14, 165, 233, 0.3)"
                    : "0 20px 40px rgba(253, 224, 71, 0.3)",
              }}
              className={`relative group p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                service.color === "electric"
                  ? "border-electric-500/30 bg-electric-500/5 hover:bg-electric-500/10"
                  : "border-voltage-500/30 bg-voltage-500/5 hover:bg-voltage-500/10"
              }`}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  service.color === "electric"
                    ? "bg-electric-500/20 group-hover:bg-electric-500/30"
                    : "bg-voltage-500/20 group-hover:bg-voltage-500/30"
                }`}
              >
                <service.icon
                  className={`w-8 h-8 ${
                    service.color === "electric"
                      ? "text-electric-400"
                      : "text-voltage-400"
                  }`}
                />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-electric-300 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-power-300 font-exo mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-power-400 font-rajdhani"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        service.color === "electric"
                          ? "bg-electric-400"
                          : "bg-voltage-400"
                      }`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price Badge */}
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full font-exo font-semibold transition-all duration-300 ${
                  service.color === "electric"
                    ? "bg-electric-500/20 text-electric-300 group-hover:bg-electric-500/30"
                    : "bg-voltage-500/20 text-voltage-300 group-hover:bg-voltage-500/30"
                }`}
              >
                {service.price}
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  service.color === "electric"
                    ? "bg-gradient-to-br from-electric-500/10 to-transparent"
                    : "bg-gradient-to-br from-voltage-500/10 to-transparent"
                }`}
              ></div>

              {/* Spark Effect */}
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${
                  service.color === "electric"
                    ? "bg-electric-400"
                    : "bg-voltage-400"
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(253, 224, 71, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-voltage-400 to-voltage-500 text-power-900 font-exo font-bold text-lg rounded-full transition-all duration-300 hover:from-voltage-300 hover:to-voltage-400"
          >
            Schedule Your Service Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
