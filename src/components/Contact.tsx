import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    emergency: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(305) 555-VOLT", "24/7 Emergency Line"],
      color: "electric",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@voltcraft-pro.com", "emergency@voltcraft-pro.com"],
      color: "voltage",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Electrical Way", "Key Largo, FL 33037"],
      color: "electric",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7AM-6PM", "Emergency: 24/7"],
      color: "voltage",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-power-900 to-power-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-6 py-2 mb-6">
            <Send className="w-5 h-5 text-electric-400" />
            <span className="text-electric-300 font-rajdhani font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6">
            <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
              Ready to Power
            </span>
            <br />
            <span className="text-white">Your Project?</span>
          </h2>

          <p className="text-xl text-power-300 font-exo max-w-3xl mx-auto leading-relaxed">
            Contact VoltCraft Pro today for a{" "}
            <span className="text-voltage-400 font-semibold">
              free consultation
            </span>{" "}
            and discover how we can transform your electrical systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-400/20 via-voltage-400/20 to-electric-400/20 rounded-2xl blur-xl opacity-50"></div>

            <div className="relative bg-gradient-to-br from-power-800/60 to-power-900/60 border border-electric-500/30 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-4 py-2 mb-4">
                  <Send className="w-4 h-4 text-electric-400" />
                  <span className="text-electric-300 font-rajdhani font-medium text-sm">
                    Contact Form
                  </span>
                </div>
                <h3 className="text-2xl font-orbitron font-black text-white mb-2">
                  Let's Get{" "}
                  <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
                    Connected
                  </span>
                </h3>
                <p className="text-power-300 font-exo text-sm">
                  Tell us about your electrical project
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-power-200 font-rajdhani font-semibold mb-3 text-sm uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-exo group-hover:border-power-500/70"
                        placeholder="Your full name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-power-200 font-rajdhani font-semibold mb-3 text-sm uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-exo group-hover:border-power-500/70"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-power-200 font-rajdhani font-semibold mb-3 text-sm uppercase tracking-wide">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-exo group-hover:border-power-500/70"
                        placeholder="(305) 555-0123"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-power-200 font-rajdhani font-semibold mb-3 text-sm uppercase tracking-wide">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        title="Select a service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-exo appearance-none cursor-pointer group-hover:border-power-500/70"
                      >
                        <option value="" className="bg-power-800">
                          Select a service
                        </option>
                        <option value="residential" className="bg-power-800">
                          Residential Electrical
                        </option>
                        <option value="commercial" className="bg-power-800">
                          Commercial Electrical
                        </option>
                        <option value="emergency" className="bg-power-800">
                          Emergency Service
                        </option>
                        <option value="smart-home" className="bg-power-800">
                          Smart Home Installation
                        </option>
                        <option value="led-lighting" className="bg-power-800">
                          LED Lighting
                        </option>
                        <option value="inspection" className="bg-power-800">
                          Safety Inspection
                        </option>
                        <option value="other" className="bg-power-800">
                          Other
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-power-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-power-200 font-rajdhani font-semibold mb-3 text-sm uppercase tracking-wide">
                    Project Details
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-exo resize-none group-hover:border-power-500/70"
                      placeholder="Tell us about your electrical project, timeline, and any specific requirements..."
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <input
                    type="checkbox"
                    name="emergency"
                    id="emergency"
                    checked={formData.emergency}
                    onChange={handleChange}
                    className="w-5 h-5 text-red-500 bg-power-700/50 border-red-500/50 rounded focus:ring-red-500 focus:ring-2 mt-0.5"
                  />
                  <div>
                    <label
                      htmlFor="emergency"
                      className="text-red-300 font-exo font-medium cursor-pointer"
                    >
                      🚨 Emergency Service Required
                    </label>
                    <p className="text-red-400/80 text-sm font-exo mt-1">
                      Check for immediate priority response (24/7)
                    </p>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`relative w-full py-4 rounded-xl font-exo font-bold text-lg transition-all duration-300 shadow-lg overflow-hidden ${
                    isSubmitted
                      ? "bg-green-600 text-white shadow-green-500/25"
                      : formData.emergency
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-red-500/25"
                      : "bg-gradient-to-r from-electric-400 to-electric-500 text-white hover:from-electric-300 hover:to-electric-400 shadow-electric-500/25"
                  }`}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  <span className="relative z-10">
                    {isSubmitted ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </div>
                    ) : formData.emergency ? (
                      <div className="flex items-center justify-center gap-2">
                        <span>🚨 Send Emergency Request</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </span>
                </motion.button>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-power-600/30">
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-exo">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-exo">24/7 Emergency</span>
                  </div>
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-exo">Licensed & Insured</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 backdrop-blur-sm transition-all duration-300 ${
                    info.color === "electric"
                      ? "border-electric-500/30 bg-electric-500/5 hover:bg-electric-500/10 hover:border-electric-500/50"
                      : "border-voltage-500/30 bg-voltage-500/5 hover:bg-voltage-500/10 hover:border-voltage-500/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        info.color === "electric"
                          ? "bg-electric-500/20"
                          : "bg-voltage-500/20"
                      }`}
                    >
                      <info.icon
                        className={`w-5 h-5 ${
                          info.color === "electric"
                            ? "text-electric-400"
                            : "text-voltage-400"
                        }`}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-orbitron font-bold text-white mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-power-300 font-exo text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-power-800/40 to-power-900/40 border border-electric-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-electric-500/40 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-electric-400" />
                  <h3 className="text-white font-orbitron font-bold text-lg">
                    Find Us
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Key+Largo,+FL+33037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-400 hover:text-electric-300 font-exo text-sm underline transition-colors"
                >
                  Open in Maps
                </a>
              </div>

              <div className="relative h-48 rounded-xl overflow-hidden bg-power-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57834.79934833219!2d-80.4494!3d25.0854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d0c096947f71c1%3A0x5b85b3e6b9b4a6a1!2sKey%20Largo%2C%20FL%2033037!5e0!3m2!1sen!2sus!4v1672345567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VoltCraft Pro Location - Key Largo, FL"
                  className="border-0"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-power-300 font-exo text-sm">
                  123 Electrical Way, Key Largo, FL 33037
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
