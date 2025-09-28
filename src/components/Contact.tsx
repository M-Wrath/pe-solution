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
      title: "Telefon",
      details: ["+43 664 142 6563", "Geschäftszeiten"],
      color: "electric",
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: ["office@pe-solutions.at", "Schnelle Antwortzeit"],
      color: "voltage",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["2604 Theresienfeld", "Bahnstraße 31"],
      color: "electric",
    },
    {
      icon: Clock,
      title: "Geschäftszeiten",
      details: ["Mo-Fr: 8:00-17:00", "Termine nach Vereinbarung"],
      color: "voltage",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-6 py-2 mb-6">
            <Send className="w-5 h-5 text-electric-400" />
            <span className="text-electric-300 font-pe-solutions-light font-medium">
              Kontakt aufnehmen
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-pe-solutions font-black mb-4">
            <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
              Bereit für Ihr
            </span>
            <br />
            <span className="text-white">Projekt?</span>
          </h2>

          <p className="text-lg text-power-300 font-pe-solutions-light max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie PE Solutions heute für eine{" "}
            <span className="text-voltage-400 font-semibold">
              kostenlose Beratung
            </span>{" "}
            und erfahren Sie, wie wir Ihre Elektrotechnik-Projekte realisieren
            können.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-400/20 via-voltage-400/20 to-electric-400/20 rounded-2xl blur-xl opacity-50"></div>

            <div className="relative bg-gradient-to-br from-power-800/60 to-power-900/60 border border-electric-500/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/30 rounded-full px-4 py-2 mb-3">
                  <Send className="w-4 h-4 text-electric-400" />
                  <span className="text-electric-300 font-pe-solutions-light font-medium text-sm">
                    Kontaktformular
                  </span>
                </div>
                <h3 className="text-xl font-pe-solutions font-black text-white mb-2">
                  Lassen Sie uns{" "}
                  <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
                    sprechen
                  </span>
                </h3>
                <p className="text-power-300 font-pe-solutions-light text-sm">
                  Erzählen Sie uns von Ihrem Elektrotechnik-Projekt
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-power-200 font-pe-solutions font-semibold mb-3 text-sm uppercase tracking-wide">
                      Vollständiger Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-pe-solutions-light group-hover:border-power-500/70"
                        placeholder="Ihr vollständiger Name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-power-200 font-pe-solutions font-semibold mb-3 text-sm uppercase tracking-wide">
                      E-Mail-Adresse *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-pe-solutions-light group-hover:border-power-500/70"
                        placeholder="ihre@email.at"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-power-200 font-pe-solutions font-semibold mb-3 text-sm uppercase tracking-wide">
                      Telefonnummer
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-pe-solutions-light group-hover:border-power-500/70"
                        placeholder="+43 664 123 4567"
                      />
                      <div className="absolute inset-0 rounded-xl bg-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-power-200 font-pe-solutions font-semibold mb-3 text-sm uppercase tracking-wide">
                      Benötigter Service
                    </label>
                    <div className="relative">
                      <select
                        title="Service auswählen"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-pe-solutions-light appearance-none cursor-pointer group-hover:border-power-500/70"
                      >
                        <option value="" className="bg-power-800">
                          Service auswählen
                        </option>
                        <option
                          value="technical-drawing"
                          className="bg-power-800"
                        >
                          Technischer Zeichner
                        </option>
                        <option
                          value="construction-supervision"
                          className="bg-power-800"
                        >
                          Örtliche Bauaufsicht
                        </option>
                        <option
                          value="project-management"
                          className="bg-power-800"
                        >
                          Projektaufsicht
                        </option>
                        <option
                          value="energy-consulting"
                          className="bg-power-800"
                        >
                          Energieberater
                        </option>
                        <option value="planning" className="bg-power-800">
                          Elektrotechnik-Planung
                        </option>
                        <option value="consulting" className="bg-power-800">
                          Beratung
                        </option>
                        <option value="other" className="bg-power-800">
                          Sonstiges
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
                  <label className="block text-power-200 font-pe-solutions font-semibold mb-3 text-sm uppercase tracking-wide">
                    Projekt Details
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-power-700/30 border-2 border-power-600/50 rounded-xl text-white placeholder-power-400 focus:border-electric-500 focus:bg-power-700/50 focus:outline-none transition-all duration-300 font-pe-solutions-light resize-none group-hover:border-power-500/70"
                      placeholder="Erzählen Sie uns von Ihrem Elektrotechnik-Projekt, Zeitrahmen und spezifischen Anforderungen..."
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
                      className="text-red-300 font-pe-solutions-light font-medium cursor-pointer"
                    >
                      🚨 Dringende Anfrage
                    </label>
                    <p className="text-red-400/80 text-sm font-pe-solutions-light mt-1">
                      Ankreuzen für schnelle Prioritätsbearbeitung
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
                      : "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-500 hover:to-primary-600 shadow-primary-600/20"
                  }`}
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  <span className="relative z-10 font-pe-solutions">
                    {isSubmitted ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Nachricht erfolgreich gesendet!
                      </div>
                    ) : formData.emergency ? (
                      <div className="flex items-center justify-center gap-2">
                        <span>🚨 Dringende Anfrage senden</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        <span>Nachricht senden</span>
                      </div>
                    )}
                  </span>
                </motion.button>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-power-600/30">
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-pe-solutions-light">
                      Kostenlose Beratung
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-pe-solutions-light">
                      Schnelle Antwort
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-power-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-pe-solutions-light">
                      Zertifiziert & Versichert
                    </span>
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
            className="space-y-6"
          >
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl border-2 backdrop-blur-sm transition-all duration-300 ${
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
                      <h3 className="text-base font-pe-solutions font-bold text-white mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-power-300 font-pe-solutions-light text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-power-800/40 to-power-900/40 border border-electric-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-electric-500/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-electric-400" />
                <h3 className="text-white font-pe-solutions font-bold text-lg">
                  Unternehmensinformationen
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-electric-300 font-pe-solutions font-semibold text-sm mb-1">
                      Firmenwortlaut
                    </h4>
                    <p className="text-white font-pe-solutions-light text-lg">
                      PE Solutions e.U.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-voltage-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-voltage-300 font-pe-solutions font-semibold text-sm mb-1">
                      Adresse
                    </h4>
                    <p className="text-white font-pe-solutions-light">
                      2604 Theresienfeld, Bahnstraße 31
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-electric-300 font-pe-solutions font-semibold text-sm mb-1">
                        Telefon
                      </h4>
                      <a
                        href="tel:+436641426563"
                        className="text-white font-pe-solutions-light hover:text-electric-300 transition-colors cursor-pointer"
                      >
                        +43 664 142 6563
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-voltage-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-voltage-300 font-pe-solutions font-semibold text-sm mb-1">
                        E-Mail
                      </h4>
                      <a
                        href="mailto:office@pe-solutions.at"
                        className="text-white font-pe-solutions-light hover:text-voltage-300 transition-colors cursor-pointer"
                      >
                        office@pe-solutions.at
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-electric-300 font-pe-solutions font-semibold text-sm mb-1">
                      Geschäftsführer
                    </h4>
                    <p className="text-white font-pe-solutions-light">
                      Ing. Mijo Petrovic
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-power-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-voltage-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-voltage-300 font-pe-solutions font-semibold text-sm mb-1">
                        UID
                      </h4>
                      <p className="text-power-300 font-pe-solutions-light text-sm">
                        ATU78204006
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-electric-300 font-pe-solutions font-semibold text-sm mb-1">
                        Firmenbuchnummer
                      </h4>
                      <p className="text-power-300 font-pe-solutions-light text-sm">
                        582554y
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
