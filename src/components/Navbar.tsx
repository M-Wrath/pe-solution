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
  Handshake,
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
    { name: "Dienstleistungen", href: "#services", icon: Wrench },
    { name: "Referenzen", href: "#portfolio", icon: Award },
    { name: "Partnerfirmen", href: "#partners", icon: Handshake },
    { name: "Über uns", href: "#about", icon: Users },
    { name: "Bewertungen", href: "#testimonials", icon: MessageSquare },
    { name: "Kontakt", href: "#contact", icon: Phone },
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
          ? "bg-secondary-900/95 backdrop-blur-lg shadow-lg"
          : "bg-secondary-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left Side */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h1 className="text-xl font-pe-solutions font-bold text-white">
                <span className="text-primary-400">pe</span>
                <span className="text-white ml-1">solutions.</span>
              </h1>
              <p className="text-xs text-secondary-400 font-pe-solutions-light">
                Beratung | Planung | Ausführung
              </p>
              <p className="text-xs text-accent-400 font-pe-solutions-light">
                Elektrotechnik, die verbindet.
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative group flex items-center gap-2 px-3 py-2 text-secondary-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 group-hover:text-primary-400 transition-colors duration-300" />
                  <span className="font-pe-solutions-light font-medium text-sm whitespace-nowrap">
                    {item.name}
                  </span>
                  {/* Simple underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side Spacer - For Balance */}
          <div className="hidden lg:block flex-shrink-0 w-32"></div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-secondary-800/40 via-secondary-700/60 to-secondary-800/40 hover:from-primary-500/20 hover:via-primary-600/20 hover:to-primary-500/20 border border-primary-500/30 hover:border-primary-400/60 backdrop-blur-sm shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

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
                      className="absolute w-5 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full shadow-sm"
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute w-5 h-0.5 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 rounded-full shadow-sm"
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
                      className="w-6 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full shadow-sm"
                      whileHover={{ scale: 1.1, x: 2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="w-5 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full shadow-sm ml-1"
                      whileHover={{ scale: 1.1, x: -2 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full shadow-sm"
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
              className="lg:hidden absolute top-full left-0 right-0 bg-secondary-900 backdrop-blur-xl border-t border-primary-500/20 shadow-xl max-h-[80vh] overflow-y-auto"
            >
              <div className="py-4 px-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-secondary-200 hover:text-white bg-secondary-800/30 hover:bg-primary-500/10 rounded-lg border border-transparent hover:border-primary-500/30 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 text-primary-400" />
                    <span className="font-pe-solutions-light font-medium">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
