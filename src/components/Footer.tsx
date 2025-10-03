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
      { name: "Energieberatung", href: "#services" },
      { name: "Elektrotechnik-Planung", href: "#services" },
      { name: "Beratung", href: "#services" },
    ],
    company: [
      { name: "Über uns", href: "#about" },
      { name: "Unser Team", href: "#about" },
      { name: "Referenzen", href: "#portfolio" },
      { name: "Partnerfirmen", href: "#partners" },
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
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="relative bg-white border-t-2 border-gray-200 overflow-hidden">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="mb-4">
                <h3 className="text-xl font-pe-solutions font-bold mb-1">
                  <span className="text-green-600">pe</span>
                  <span className="text-black ml-1">solutions.</span>
                </h3>
                <p className="text-xs text-gray-600 font-pe-solutions-light">
                  Beratung | Planung | Ausführung
                </p>
                <p className="text-xs text-green-600 font-pe-solutions-light">
                  Elektrotechnik, die verbindet.
                </p>
              </div>

              <p className="text-gray-700 font-pe-solutions-light text-sm mb-4 leading-relaxed">
                Elektrotechnik aus Österreich. Beratung, Planung und Ausführung
                mit höchster Qualität und Innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-pe-solutions-light text-sm">
                    +43 664 142 6563
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="font-pe-solutions-light text-sm">
                    office@pe-solutions.at
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="font-pe-solutions-light text-sm">
                    2604 Theresienfeld, Bahnstraße 31
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="font-pe-solutions-light text-sm">
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
              <h4 className="text-lg font-pe-solutions font-bold text-black mb-4">
                Dienst<span className="text-green-600">leistungen</span>
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 font-pe-solutions-light text-sm hover:text-green-600 transition-colors duration-200"
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
              <h4 className="text-lg font-pe-solutions font-bold text-black mb-4">
                Unter<span className="text-green-600">nehmen</span>
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 font-pe-solutions-light text-sm hover:text-green-600 transition-colors duration-200"
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
              <h4 className="text-lg font-pe-solutions font-bold text-black mb-4">
                Kon<span className="text-green-600">takt</span>
              </h4>

              {/* Compact Team Info */}
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-black font-pe-solutions font-semibold text-sm">
                    Ing. Mijo Petrovic
                  </p>
                  <span className="inline-block px-2 py-1 bg-green-50 border border-green-200 text-green-700 rounded text-xs font-pe-solutions-light">
                    Geschäftsführer
                  </span>
                </div>
                <div>
                  <p className="text-black font-pe-solutions font-semibold text-sm">
                    Magdalena Petrovic
                  </p>
                  <span className="inline-block px-2 py-1 bg-green-50 border border-green-200 text-green-700 rounded text-xs font-pe-solutions-light">
                    Assistenz der Geschäftsführung
                  </span>
                </div>
              </div>

              <h5 className="text-base font-pe-solutions font-bold text-black mb-2">
                Recht<span className="text-green-600">liches</span>
              </h5>
              <ul className="space-y-1.5">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 font-pe-solutions-light text-sm hover:text-green-600 transition-colors duration-200"
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
        <div className="border-t-2 border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 ${social.color} transition-all duration-200`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-700 font-pe-solutions-light text-sm">
                  © {currentYear} PE Solutions e.U. Alle Rechte vorbehalten.
                </p>
                <p className="text-gray-500 font-pe-solutions-light text-xs mt-0.5">
                  Zertifiziert • Versichert • Professionelle Elektrotechnik
                </p>
                <p className="text-gray-700 font-pe-solutions-light text-xs mt-1">
                  Made with <span className="text-red-500">❤️</span> by{" "}
                  <span className="text-black font-bold">MASOUD</span>
                </p>
              </div>

              {/* Legal Information */}
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="px-2.5 py-0.5 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-pe-solutions-light">
                  UID: ATU78204006
                </div>
                <div className="px-2.5 py-0.5 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-pe-solutions-light">
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
