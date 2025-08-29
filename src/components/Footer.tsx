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
      { name: "Residential Electrical", href: "#" },
      { name: "Commercial Electrical", href: "#" },
      { name: "Emergency Services", href: "#" },
      { name: "Smart Home Integration", href: "#" },
      { name: "LED Lighting", href: "#" },
      { name: "Safety Inspections", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Certifications", href: "#" },
      { name: "Insurance", href: "#" },
      { name: "Warranties", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "Get Quote", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Service Areas", href: "#" },
      { name: "Emergency Hotline", href: "#" },
      { name: "Maintenance Plans", href: "#" },
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

  const serviceAreas = [
    "Key Largo",
    "Islamorada",
    "Marathon",
    "Big Pine Key",
    "Key West",
    "Tavernier",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-power-800 to-power-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Zap className="w-64 h-64 text-electric-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Zap className="w-48 h-48 text-voltage-400 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-400 to-voltage-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">
                    VoltCraft
                  </h3>
                  <span className="text-voltage-400 font-orbitron">Pro</span>
                </div>
              </div>

              <p className="text-power-300 font-exo mb-6 leading-relaxed">
                Premium electrical services across the Florida Keys. Licensed,
                insured, and committed to powering your success with innovative
                electrical solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-power-300">
                  <Phone className="w-4 h-4 text-electric-400" />
                  <span className="font-exo">(305) 555-VOLT</span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <Mail className="w-4 h-4 text-voltage-400" />
                  <span className="font-exo">info@voltcraft-pro.com</span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <MapPin className="w-4 h-4 text-electric-400" />
                  <span className="font-exo">Key Largo, FL 33037</span>
                </div>
                <div className="flex items-center gap-3 text-power-300">
                  <Clock className="w-4 h-4 text-voltage-400" />
                  <span className="font-exo">24/7 Emergency Service</span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-orbitron font-bold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-exo hover:text-electric-400 transition-colors duration-300"
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
              <h4 className="text-xl font-orbitron font-bold text-white mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-exo hover:text-voltage-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-orbitron font-bold text-white mb-6">
                Support
              </h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-power-300 font-exo hover:text-electric-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="text-lg font-orbitron font-bold text-white mb-4">
                Service Areas
              </h5>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-sm font-rajdhani"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Emergency CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border border-red-500/30 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                  Electrical Emergency?
                </h3>
                <p className="text-power-300 font-exo">
                  Our emergency response team is standing by 24/7 to help
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-exo font-bold text-lg rounded-full transition-all duration-300 hover:from-red-500 hover:to-red-600"
              >
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-power-700/50">
          <div className="container mx-auto px-6 py-8">
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
                <p className="text-power-400 font-exo">
                  © {currentYear} VoltCraft Pro. All rights reserved.
                </p>
                <p className="text-power-500 font-exo text-sm mt-1">
                  Licensed • Insured • Certified Electrical Contractors
                </p>
                <p className="text-power-400 font-exo text-sm mt-2">
                  Made with{" "}
                  <span className="text-red-400 animate-pulse">❤️</span> by{" "}
                  <span className="text-electric-400 font-bold">MASOUD</span>
                </p>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-voltage-500/20 text-voltage-400 rounded-full text-sm font-rajdhani">
                  FL License #EC13007834
                </div>
                <div className="px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-sm font-rajdhani">
                  Fully Insured
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
