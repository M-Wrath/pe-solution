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
      name: "Martin Gruber",
      location: "Wiener Neustadt, Österreich",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professionelle Beratung und saubere Ausführung. Die Elektroplanung für unser Projekt wurde termingerecht umgesetzt.",
      project: "Elektrotechnik-Planung",
      date: "2024",
    },
    {
      id: 2,
      name: "Elisabeth Steiner",
      location: "Theresienfeld, Österreich",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Kompetente Beratung und zuverlässige Arbeit. Herr Petrovic hat sich viel Zeit genommen, alles zu erklären.",
      project: "Wohnhaus-Installation",
      date: "2024",
    },
    {
      id: 3,
      name: "Andreas Huber",
      location: "Baden, Österreich",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Gute Arbeit bei der örtlichen Bauaufsicht. Zuverlässig und gewissenhaft durchgeführt.",
      project: "Örtliche Bauaufsicht",
      date: "2024",
    },
    {
      id: 4,
      name: "Sabine Wagner",
      location: "Neunkirchen, Österreich",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Die technischen Zeichnungen waren präzise und haben uns bei der Planung sehr geholfen.",
      project: "Technischer Zeichner",
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
    <section className="py-20 relative overflow-hidden bg-white">
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
            className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-pe-solutions-light font-medium">
              Bewertungen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-pe-solutions font-black mb-6 text-black"
          >
            Kundenmeinungen
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 font-pe-solutions-light max-w-3xl mx-auto leading-relaxed"
          >
            Erfahrungen unserer Kunden mit PE Solutions
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
              }}
              className="relative group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:border-gray-400 shadow-md hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-gray-700" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gray-700 text-gray-700"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 font-pe-solutions-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Project Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm font-pe-solutions-light font-medium mb-6">
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 grayscale"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                </div>

                <div>
                  <h4 className="text-black font-pe-solutions font-bold">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>

                <div className="ml-auto text-gray-500 text-sm font-pe-solutions-light">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Simple */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-gray-600 font-pe-solutions-light mb-6">
            Haben Sie Fragen zu unseren Dienstleistungen?
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white font-pe-solutions font-bold text-lg rounded-full transition-all duration-300 hover:bg-gray-800 shadow-md"
          >
            Jetzt Kontakt aufnehmen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
