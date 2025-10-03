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
      details: ["+43 664 142 6563"],
      color: "electric",
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: ["office@pe-solutions.at"],
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
      details: ["Mo-Fr: 8:00-17:00", "Sa nach Vereinbarung"],
      color: "voltage",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-2 mb-6">
            <Send className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-inter font-medium">
              Kontakt aufnehmen
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-pe-solutions font-black mb-6 text-black leading-tight">
            Bereit für Ihr <span className="text-green-600">Projekt</span>?
          </h2>

          <p className="text-base sm:text-lg text-black font-inter font-medium max-w-3xl mx-auto leading-relaxed">
            Kontaktieren Sie PE Solutions heute für eine{" "}
            <span className="text-green-600 font-semibold">
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
            <div className="relative bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm hover:border-green-600 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                  <Send className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-inter font-medium text-sm">
                    Kontaktformular
                  </span>
                </div>
                <h3 className="text-xl font-pe-solutions font-black text-black mb-2">
                  Lassen Sie uns sprechen
                </h3>
                <p className="text-black font-inter font-medium text-sm">
                  Erzählen Sie uns von Ihrem Elektrotechnik-Projekt
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-black font-inter font-medium mb-2 text-sm">
                      Vollständiger Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-green-600 focus:outline-none transition-all duration-200 font-inter"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-black font-inter font-medium mb-2 text-sm">
                      E-Mail-Adresse *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-green-600 focus:outline-none transition-all duration-200 font-inter"
                        placeholder="ihre@email.at"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-black font-inter font-medium mb-2 text-sm">
                      Telefonnummer
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-green-600 focus:outline-none transition-all duration-200 font-inter"
                        placeholder="+43 664 123 4567"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-black font-inter font-medium mb-2 text-sm">
                      Benötigter Service
                    </label>
                    <div className="relative">
                      <select
                        title="Service auswählen"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black focus:border-green-600 focus:outline-none transition-all duration-200 font-inter appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-white">
                          Service auswählen
                        </option>
                        <option value="technical-drawing" className="bg-white">
                          Technischer Zeichner
                        </option>
                        <option
                          value="construction-supervision"
                          className="bg-white"
                        >
                          Örtliche Bauaufsicht
                        </option>
                        <option value="project-management" className="bg-white">
                          Projektaufsicht
                        </option>
                        <option value="energy-consulting" className="bg-white">
                          Energieberatung
                        </option>
                        <option value="planning" className="bg-white">
                          Elektrotechnik-Planung
                        </option>
                        <option value="consulting" className="bg-white">
                          Beratung
                        </option>
                        <option value="other" className="bg-white">
                          Sonstiges
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-black font-inter font-medium mb-2 text-sm">
                    Projekt Details
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-green-600 focus:outline-none transition-all duration-200 font-inter resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Elektrotechnik-Projekt, Zeitrahmen und spezifischen Anforderungen..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50 transition-all duration-200">
                  <input
                    type="checkbox"
                    name="emergency"
                    id="emergency"
                    checked={formData.emergency}
                    onChange={handleChange}
                    className="w-5 h-5 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-0.5 cursor-pointer"
                  />
                  <div>
                    <label
                      htmlFor="emergency"
                      className="text-black font-inter font-medium cursor-pointer"
                    >
                      🚨 Dringende Anfrage
                    </label>
                    <p className="text-black text-sm font-inter mt-1">
                      Ankreuzen für schnelle Prioritätsbearbeitung
                    </p>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                  disabled={isSubmitted}
                  className={`relative w-full py-3 rounded-lg font-inter font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : formData.emergency
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  <span className="relative z-10">
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
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-black">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-inter">
                      Kostenlose Beratung
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-inter">
                      Schnelle Antwort
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-black">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-inter">
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
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-xl border-2 border-gray-200 bg-white hover:border-green-600 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-50">
                      <info.icon className="w-5 h-5 text-green-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-pe-solutions font-bold text-black mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-black font-inter font-medium text-sm leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-black font-pe-solutions font-bold text-lg">
                  Ihr Ansprechpartner
                </h3>
              </div>

              <div className="space-y-6">
                {/* Geschäftsführung */}
                <div className="pb-6 border-b border-gray-200">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-inter font-semibold rounded-full mb-3 border border-green-200">
                      Geschäftsführung
                    </span>
                    <h4 className="text-black font-pe-solutions font-bold text-lg">
                      Ing. Mijo Petrovic
                    </h4>
                    <p className="text-black font-inter font-medium text-sm">
                      Geschäftsführer
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-black flex-shrink-0" />
                      <a
                        href="tel:+436641426563"
                        className="text-black font-inter font-medium hover:text-green-600 transition-colors"
                      >
                        +43 664 142 6563
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-black flex-shrink-0" />
                      <a
                        href="mailto:mijo.petrovic@pe-solutions.at"
                        className="text-black font-inter font-medium hover:text-green-600 transition-colors"
                      >
                        mijo.petrovic@pe-solutions.at
                      </a>
                    </div>
                  </div>
                </div>

                {/* Assistenz */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-inter font-semibold rounded-full mb-3 border border-green-200">
                      Sekretariat
                    </span>
                    <h4 className="text-black font-pe-solutions font-bold text-lg">
                      Magdalena Petrovic
                    </h4>
                    <p className="text-black font-inter font-medium text-sm">
                      Assistenz der Geschäftsführung
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-black flex-shrink-0" />
                      <a
                        href="tel:+4326227400270"
                        className="text-black font-inter font-medium hover:text-green-600 transition-colors"
                      >
                        +43 2622 74 00 270
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-black flex-shrink-0" />
                      <a
                        href="mailto:magdalena.petrovic@pe-solutions.at"
                        className="text-black font-inter font-medium hover:text-green-600 transition-colors"
                      >
                        magdalena.petrovic@pe-solutions.at
                      </a>
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
