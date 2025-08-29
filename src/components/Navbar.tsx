import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Zap,
  Menu,
  X,
  Phone,
  Mail,
  Shield,
  Award,
  Clock,
  Home,
  Wrench,
  Users,
  MessageSquare,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: Wrench },
    { name: "Portfolio", href: "#portfolio", icon: Award },
    { name: "About", href: "#about", icon: Users },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-power-900/95 backdrop-blur-lg shadow-lg"
          : "bg-power-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-electric-500 to-voltage-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-orbitron font-black text-white">
                <span className="text-electric-400">VOLT</span>
                <span className="text-voltage-400">CRAFT</span>
              </h1>
              <p className="text-xs text-power-400 font-rajdhani">
                PRO ELECTRICAL
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative group flex items-center gap-2 px-3 py-2 text-power-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-4 h-4 group-hover:text-electric-400 transition-colors duration-300" />

                <span className="font-rajdhani font-medium">{item.name}</span>

                {/* Simple underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Emergency Contact */}
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span className="font-rajdhani font-bold text-sm">
                Emergency: (555) 123-4567
              </span>
            </motion.a>

            {/* Get Quote Button */}
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-electric-500 to-voltage-500 text-white font-rajdhani font-bold rounded-lg hover:shadow-lg hover:shadow-electric-500/25 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-power-800/40 via-power-700/60 to-power-800/40 hover:from-electric-500/20 hover:via-voltage-500/20 hover:to-electric-500/20 border border-electric-500/30 hover:border-electric-400/60 backdrop-blur-sm shadow-lg hover:shadow-electric-500/25 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-voltage-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 180, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -180, scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative w-6 h-6 flex items-center justify-center"
                  >
                    <motion.div
                      className="absolute w-5 h-0.5 bg-gradient-to-r from-electric-400 via-voltage-400 to-electric-400 rounded-full shadow-sm"
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute w-5 h-0.5 bg-gradient-to-r from-voltage-400 via-electric-400 to-voltage-400 rounded-full shadow-sm"
                      animate={{ rotate: -45 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -180, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 180, scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-1.5"
                  >
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-electric-400 via-voltage-400 to-electric-400 rounded-full shadow-sm"
                      whileHover={{ scale: 1.1, x: 2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="w-5 h-0.5 bg-gradient-to-r from-voltage-400 to-electric-400 rounded-full shadow-sm ml-1"
                      whileHover={{ scale: 1.1, x: -2 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-electric-400 via-voltage-400 to-electric-400 rounded-full shadow-sm"
                      whileHover={{ scale: 1.1, x: 2 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden absolute top-full left-0 right-0 bg-power-900 backdrop-blur-xl border-t border-electric-500/20 shadow-xl max-h-[80vh] overflow-y-auto"
            >
              <div className="py-4 px-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-power-200 hover:text-white bg-power-800/30 hover:bg-electric-500/10 rounded-lg border border-transparent hover:border-electric-500/30 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 text-electric-400" />
                    <span className="font-rajdhani font-medium">
                      {item.name}
                    </span>
                  </motion.a>
                ))}

                {/* Contact Section */}
                <div className="mt-4 pt-4 border-t border-electric-500/20">
                  <motion.a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 px-4 py-3 mb-3 text-red-400 hover:text-red-300 bg-red-900/20 hover:bg-red-900/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 animate-pulse" />
                    <div>
                      <p className="font-rajdhani font-bold text-xs">
                        EMERGENCY
                      </p>
                      <p className="font-rajdhani font-bold text-sm text-white">
                        (555) 123-4567
                      </p>
                    </div>
                  </motion.a>

                  <motion.button
                    className="w-full px-4 py-3 bg-gradient-to-r from-electric-500 to-voltage-500 hover:from-electric-400 hover:to-voltage-400 text-white font-rajdhani font-bold rounded-lg shadow-lg transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
