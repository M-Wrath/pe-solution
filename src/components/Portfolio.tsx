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
    { id: "smart", name: "Energieberater" },
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
    <section className="py-16 relative overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 rounded-full px-4 py-1.5 mb-4"
          >
            <Camera className="w-4 h-4 text-accent-400" />
            <span className="text-accent-300 font-pe-solutions-light font-medium text-sm">
              Unsere Referenzen
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-5xl font-pe-solutions font-black mb-4"
          >
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Erfolgreiche
            </span>
            <br />
            <span className="text-white">Projekte</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-lg text-secondary-300 font-pe-solutions-light max-w-2xl mx-auto leading-relaxed"
          >
            Entdecken Sie unsere hochwertigen Elektrotechnik-Projekte.
            <span className="text-primary-400 font-medium">
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
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-pe-solutions-light font-medium transition-all duration-300 text-sm ${
                selectedCategory === category.id
                  ? "bg-primary-500 text-secondary-900 shadow-glow-green"
                  : "bg-secondary-700/50 text-secondary-300 border border-secondary-600 hover:border-primary-500/50 hover:text-primary-300"
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
                y: -8,
                boxShadow: "0 15px 30px rgba(14, 165, 233, 0.2)",
              }}
              className="group relative bg-secondary-800/50 border border-secondary-700/50 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-primary-500/30"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-80"></div>

                {/* Value Badge */}
                <div className="absolute top-4 right-4 bg-accent-500/90 text-secondary-900 px-3 py-1 rounded-full font-pe-solutions font-bold text-sm">
                  {project.value}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary-500/90 text-white px-3 py-1 rounded-full font-pe-solutions-light font-medium text-sm capitalize">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-accent-400 text-accent-400"
                    />
                  ))}
                  <span className="text-secondary-400 text-xs font-pe-solutions-light ml-1">
                    Perfect Rating
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-pe-solutions font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>

                {/* Location & Date */}
                <div className="flex items-center gap-3 mb-2 text-secondary-400 text-xs font-pe-solutions-light">
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
                <p className="text-secondary-300 font-pe-solutions-light mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary-700/50 text-secondary-300 rounded-full text-xs font-pe-solutions-light"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-pe-solutions-light">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-primary-400 font-pe-solutions-light font-medium group-hover:text-accent-400 transition-colors text-sm"
                >
                  Details ansehen
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
