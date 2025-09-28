import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, MapPin, User } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Müller",
      location: "Hamburg, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "PE Solutions hat unser gesamtes Elektrosystem modernisiert. Die Smart-Home-Integration ist unglaublich - wir können alles über unsere Smartphones steuern!",
      project: "Smart Home Modernisierung",
      date: "2024",
    },
    {
      id: 2,
      name: "Michael Schmidt",
      location: "Berlin, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Nach einem Stromausfall hat das Notfallteam von PE Solutions unsere Stromversorgung in Rekordzeit wiederhergestellt. Professionell, effizient und über alle Erwartungen hinaus.",
      project: "Notfall-Wiederherstellung",
      date: "2024",
    },
    {
      id: 3,
      name: "Anna Weber",
      location: "München, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Das LED-Beleuchtungssystem, das sie für unser Restaurant installiert haben, hat unsere Energiekosten drastisch reduziert und perfekte Atmosphäre geschaffen. Sehr empfehlenswert!",
      project: "Gewerbliche LED-Installation",
      date: "2024",
    },
    {
      id: 4,
      name: "Thomas Becker",
      location: "Köln, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Die Liebe zum Detail von PE Solutions ist unübertroffen. Sie haben unser historisches Haus neu verkabelt und dabei seinen Charakter bewahrt. Wahre Handwerker mit Stolz auf ihre Arbeit.",
      project: "Historische Gebäude-Sanierung",
      date: "2024",
    },
    {
      id: 5,
      name: "Lisa Hoffmann",
      location: "Frankfurt, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Von der Beratung bis zur Fertigstellung hat PE Solutions alle Erwartungen übertroffen. Ihr Team ist kompetent, pünktlich und unglaublich professionell.",
      project: "Wohnhaus-Modernisierung",
      date: "2024",
    },
    {
      id: 6,
      name: "Robert Klein",
      location: "Stuttgart, Deutschland",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Die Industrieanlage-Installation war komplex, aber PE Solutions hat sie perfekt gemeistert. Wetterfest, normenkonform und für die Ewigkeit gebaut.",
      project: "Industrieanlage-Elektrik",
      date: "2024",
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
    <section className="py-20 relative overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-voltage-500/10 border border-voltage-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-5 h-5 text-voltage-400" />
            <span className="text-voltage-300 font-pe-solutions-light font-medium">
              Bewertungen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-pe-solutions font-black mb-6"
          >
            <span className="bg-gradient-to-r from-voltage-400 to-electric-400 bg-clip-text text-transparent">
              Was unsere Kunden
            </span>
            <br />
            <span className="text-white">über uns sagen</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-power-300 font-pe-solutions-light max-w-3xl mx-auto leading-relaxed"
          >
            Vertrauen Sie nicht nur unserem Wort - hören Sie von{" "}
            <span className="text-electric-400 font-semibold">
              zufriedenen Kunden
            </span>{" "}
            die unsere erstklassigen Elektrotechnik-Dienstleistungen erfahren
            haben.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)",
              }}
              className="relative group bg-power-800/50 border border-power-700/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-electric-500/30"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-voltage-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-voltage-400 text-voltage-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-power-300 font-pe-solutions-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Project Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-sm font-pe-solutions-light font-medium mb-6">
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-electric-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-power-800"></div>
                </div>

                <div>
                  <h4 className="text-white font-pe-solutions font-bold">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-power-400 text-sm">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>

                <div className="ml-auto text-power-500 text-sm font-pe-solutions-light">
                  {testimonial.date}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-voltage-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

              {/* Spark Effect */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-voltage-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Summary */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-pe-solutions font-black text-voltage-400 mb-2">
              500+
            </div>
            <div className="text-power-400 font-pe-solutions-light">
              Zufriedene Kunden
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-4xl font-pe-solutions font-black text-voltage-400">
                5.0
              </span>
              <Star className="w-8 h-8 fill-voltage-400 text-voltage-400" />
            </div>
            <div className="text-power-400 font-pe-solutions-light">
              Durchschnittliche Bewertung
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-pe-solutions font-black text-voltage-400 mb-2">
              100%
            </div>
            <div className="text-power-400 font-pe-solutions-light">
              Kundenzufriedenheit
            </div>
          </div>
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
            className="px-8 py-4 bg-gradient-to-r from-voltage-400 to-voltage-500 text-power-900 font-pe-solutions font-bold text-lg rounded-full transition-all duration-300 hover:from-voltage-300 hover:to-voltage-400"
          >
            Werden Sie unser nächster zufriedener Kunde
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
