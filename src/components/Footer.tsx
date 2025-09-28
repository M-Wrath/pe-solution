import { motion } from "framer-motion";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Technischer Zeichner", href: "#services" },
      { name: "Örtliche Bauaufsicht", href: "#services" },
      { name: "Projektaufsicht", href: "#services" },
      { name: "Energieberater", href: "#services" },
      { name: "Elektrotechnik-Planung", href: "#services" },
      { name: "Beratung", href: "#services" },
    ],
    company: [
      { name: "Über uns", href: "#about" },
      { name: "Unser Team", href: "#about" },
      { name: "Referenzen", href: "#portfolio" },
      { name: "Partnerfirmen", href: "#partners" },
      { name: "Bewertungen", href: "#testimonials" },
      { name: "Kontakt", href: "#contact" },
    ],
    legal: [
      { name: "Impressum", href: "#" },
      { name: "Datenschutz", href: "#" },
      { name: "AGB", href: "#" },
      { name: "Widerrufsrecht", href: "#" },
      { name: "Haftungsausschluss", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-400",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-300" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-power-800 to-power-900 overflow-hidden">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-pe-solutions font-bold text-white mb-2">
                  <span className="text-primary-400">pe</span>
                  <span className="text-white ml-1">solutions.</span>
                </h3>
                <p className="text-sm text-secondary-300 font-pe-solutions-light">
                  Beratung | Planung | Ausführung
                </p>
                <p className="text-sm text-accent-400 font-pe-solutions-light">
                  Elektrotechnik, die verbindet.
                </p>
              </div>

              <p className="text-power-300 font-pe-solutions-light mb-6 leading-relaxed">
                Professionelle Elektrotechnik-Lösungen aus Österreich. Beratung,
                Planung und Ausführung mit höchster Qualität und Innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-power-300">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="font-pe-solutions-light">
                    +43 664 142 6563
                  </span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <Mail className="w-4 h-4 text-accent-400" />
                  <span className="font-pe-solutions-light">
                    office@pe-solutions.at
                  </span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="font-pe-solutions-light">
                    2604 Theresienfeld, Bahnstraße 31
                  </span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <Clock className="w-4 h-4 text-accent-400" />
                  <span className="font-pe-solutions-light">
                    Mo-Fr: 8:00-17:00
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-pe-solutions font-bold text-white mb-6">
                Dienstleistungen
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-pe-solutions-light hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-pe-solutions font-bold text-white mb-6">
                Unternehmen
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-pe-solutions-light hover:text-accent-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-pe-solutions font-bold text-white mb-6">
                Kontakt
              </h4>

              {/* Compact Team Info */}
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-primary-300 font-pe-solutions font-semibold text-sm">
                    Ing. Mijo Petrovic
                  </p>
                  <p className="text-power-300 font-pe-solutions-light text-xs">
                    Geschäftsführer
                  </p>
                </div>
                <div>
                  <p className="text-accent-300 font-pe-solutions font-semibold text-sm">
                    Magdalena Petrovic
                  </p>
                  <p className="text-power-300 font-pe-solutions-light text-xs">
                    Assistenz der Geschäftsführung
                  </p>
                </div>
              </div>

              <h5 className="text-lg font-pe-solutions font-bold text-white mb-3">
                Rechtliches
              </h5>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-pe-solutions-light text-sm hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-power-700/50">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-power-700/50 rounded-full flex items-center justify-center text-power-400 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-power-400 font-pe-solutions-light">
                  © {currentYear} PE Solutions e.U. Alle Rechte vorbehalten.
                </p>
                <p className="text-power-500 font-pe-solutions-light text-sm mt-1">
                  Zertifiziert • Versichert • Professionelle Elektrotechnik
                </p>
                <p className="text-power-400 font-pe-solutions-light text-sm mt-2">
                  Made with{" "}
                  <span className="text-red-400 animate-pulse">❤️</span> by{" "}
                  <span className="text-primary-400 font-bold">MASOUD</span>
                </p>
              </div>

              {/* Legal Information */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-pe-solutions-light">
                  UID: ATU78204006
                </div>
                <div className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-pe-solutions-light">
                  FB: 582554y
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
