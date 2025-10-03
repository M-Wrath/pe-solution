import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Camera, ArrowRight, Star, MapPin, Calendar } from "lucide-react";

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alle Projekte" },
    { id: "residential", name: "Technischer Zeichner" },
    { id: "commercial", name: "Örtliche Bauaufsicht" },
    { id: "emergency", name: "Projektaufsicht" },
    { id: "smart", name: "Energieberatung" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Oceanfront Villa Rewiring",
      category: "residential",
      location: "Key Largo, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description:
        "Complete electrical renovation of 8,000 sq ft luxury home with smart automation",
      rating: 5,
      features: [
        "Smart Home Integration",
        "LED Lighting",
        "Emergency Backup",
        "Security Systems",
      ],
      value: "$45,000",
    },
    {
      id: 2,
      title: "Commercial Resort Electrical Upgrade",
      category: "commercial",
      location: "Islamorada, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      description:
        "Massive electrical infrastructure upgrade for 200-room resort",
      rating: 5,
      features: [
        "Power Distribution",
        "Emergency Systems",
        "Pool Lighting",
        "HVAC Integration",
      ],
      value: "$120,000",
    },
    {
      id: 3,
      title: "Hurricane Emergency Restoration",
      category: "emergency",
      location: "Key West, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description:
        "24-hour emergency electrical restoration after Hurricane damage",
      rating: 5,
      features: [
        "Emergency Response",
        "Power Restoration",
        "Safety Inspection",
        "Code Compliance",
      ],
      value: "$25,000",
    },
    {
      id: 4,
      title: "Smart Beach House Automation",
      category: "smart",
      location: "Marathon, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      description:
        "Cutting-edge smart home electrical system with IoT integration",
      rating: 5,
      features: [
        "Voice Control",
        "App Integration",
        "Energy Monitoring",
        "Automated Lighting",
      ],
      value: "$35,000",
    },
    {
      id: 5,
      title: "Marina Electrical Infrastructure",
      category: "commercial",
      location: "Big Pine Key, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1582484423210-a947cf8d3c18?w=800&h=600&fit=crop",
      description:
        "Complete marina electrical system with weatherproof installations",
      rating: 5,
      features: [
        "Marine Grade",
        "Dock Power",
        "Security Lighting",
        "Storm Protection",
      ],
      value: "$80,000",
    },
    {
      id: 6,
      title: "Historic Home Preservation",
      category: "residential",
      location: "Key West, FL",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Careful electrical upgrade preserving historic character",
      rating: 5,
      features: [
        "Historic Preservation",
        "Hidden Wiring",
        "Period Fixtures",
        "Code Updates",
      ],
      value: "$28,000",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4"
          >
            <Camera className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-inter font-medium text-sm">
              Unsere Referenzen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-pe-solutions font-black mb-6 text-black leading-tight"
          >
            Erfolgreiche <span className="text-green-600">Projekte</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg text-black font-inter font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Entdecken Sie unsere{" "}
            <span className="text-green-600 font-semibold">
              hochwertigen Elektrotechnik-Projekte
            </span>
            .
            <span className="text-black font-semibold">
              {" "}
              Jedes Projekt erzählt eine Geschichte
            </span>{" "}
            von Innovation und Qualität.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-200 text-sm ${
                selectedCategory === category.id
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-black border-2 border-gray-300 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
              }}
              transition={{ duration: 0.2 }}
              className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-green-600 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Value Badge */}
                <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-inter font-semibold text-xs shadow-lg">
                  {project.value}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-lg font-inter font-medium text-xs capitalize shadow-md">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-green-600 text-green-600"
                    />
                  ))}
                  <span className="text-black text-xs font-semibold ml-1">
                    Perfect Rating
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-pe-solutions font-bold text-black mb-2 group-hover:text-green-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Location & Date */}
                <div className="flex items-center gap-3 mb-3 text-black text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-black font-inter font-medium mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-black rounded-lg text-xs font-medium border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="px-3 py-1 bg-gray-100 text-black border border-gray-300 rounded-lg text-xs font-medium">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-black font-inter font-medium hover:text-green-600 transition-colors duration-200 text-sm"
                >
                  Details ansehen
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
