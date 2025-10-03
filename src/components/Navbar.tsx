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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white shadow-sm"
      }`}
      style={{
        boxShadow: isScrolled
          ? "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
          : "0 1px 3px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left Side */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle background highlight on hover */}
            <motion.div
              className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-green-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <div className="relative z-10">
              <h1 className="text-xl font-pe-solutions font-bold">
                <span
                  className="text-green-600"
                  style={{
                    textShadow: "0 1px 4px rgba(22, 163, 74, 0.12)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  pe
                </span>
                <span
                  className="text-black ml-1"
                  style={{
                    textShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                    letterSpacing: "-0.01em",
                    background:
                      "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  solutions.
                </span>
              </h1>
              <p className="text-xs text-black font-pe-solutions-light">
                Beratung | Planung | Ausführung
              </p>
              <p
                className="text-xs text-green-600 font-pe-solutions-light"
                style={{
                  textShadow: "0 1px 3px rgba(22, 163, 74, 0.1)",
                }}
              >
                Elektrotechnik, die verbindet.
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative group flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-green-600 transition-all duration-300 rounded-lg hover:bg-green-50/50"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-4 h-4 group-hover:text-green-600 transition-colors duration-300" />
                  </motion.div>
                  <span className="font-pe-solutions-light font-medium text-sm whitespace-nowrap">
                    {item.name}
                  </span>
                  {/* Enhanced underline effect with shadow */}
                  <motion.div
                    className="absolute bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      boxShadow: "0 2px 8px rgba(22, 163, 74, 0.3)",
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side Spacer - For Balance */}
          <div className="hidden lg:block flex-shrink-0 w-32"></div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-3 rounded-xl border border-gray-300 bg-white hover:bg-green-50 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            style={{
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
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
                      className="absolute w-5 h-0.5 bg-black rounded-full"
                      style={{
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                        background:
                          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                      }}
                      animate={{ rotate: 45 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute w-5 h-0.5 bg-black rounded-full"
                      style={{
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                        background:
                          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                      }}
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
                      className="w-6 h-0.5 bg-black rounded-full"
                      style={{
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                        background:
                          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="w-5 h-0.5 bg-black rounded-full ml-1"
                      style={{
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                        background:
                          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                      }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-6 h-0.5 bg-black rounded-full"
                      style={{
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                        background:
                          "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
                      }}
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
              className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-200 max-h-[80vh] overflow-y-auto"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div className="py-5 px-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:text-green-600 bg-gradient-to-r from-gray-50 to-gray-50/50 hover:from-green-50 hover:to-green-50/50 rounded-xl transition-all duration-300 border border-transparent hover:border-green-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ x: 4 }}
                    style={{
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 group-hover:border-green-600 transition-all duration-300">
                      <item.icon className="w-5 h-5 group-hover:text-green-600" />
                    </div>
                    <span className="font-pe-solutions-light font-medium text-base">
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
