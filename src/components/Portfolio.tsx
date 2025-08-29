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
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "emergency", name: "Emergency" },
    { id: "smart", name: "Smart Homes" },
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
    <section className="py-20 bg-gradient-to-b from-power-800 to-power-900 relative overflow-hidden">
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
            <Camera className="w-5 h-5 text-voltage-400" />
            <span className="text-voltage-300 font-rajdhani font-medium">
              Our Work
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-orbitron font-black mb-6"
          >
            <span className="bg-gradient-to-r from-voltage-400 to-electric-400 bg-clip-text text-transparent">
              Portfolio of
            </span>
            <br />
            <span className="text-white">Excellence</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-power-300 font-exo max-w-3xl mx-auto leading-relaxed"
          >
            Discover our premium electrical projects across the Florida Keys.
            <span className="text-electric-400 font-semibold">
              {" "}
              Every installation tells a story
            </span>{" "}
            of innovation, quality, and customer satisfaction.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-rajdhani font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-electric-500 text-power-900 shadow-glow-blue"
                  : "bg-power-700/50 text-power-300 border border-power-600 hover:border-electric-500/50 hover:text-electric-300"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)",
              }}
              className="group relative bg-power-800/50 border border-power-700/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-electric-500/30"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-power-900 via-transparent to-transparent opacity-80"></div>

                {/* Value Badge */}
                <div className="absolute top-4 right-4 bg-voltage-500/90 text-power-900 px-3 py-1 rounded-full font-exo font-bold text-sm">
                  {project.value}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-electric-500/90 text-white px-3 py-1 rounded-full font-rajdhani font-medium text-sm capitalize">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-voltage-400 text-voltage-400"
                    />
                  ))}
                  <span className="text-power-400 text-sm font-rajdhani ml-2">
                    Perfect Rating
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-electric-300 transition-colors">
                  {project.title}
                </h3>

                {/* Location & Date */}
                <div className="flex items-center gap-4 mb-3 text-power-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-power-300 font-exo mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-power-700/50 text-power-300 rounded-full text-xs font-rajdhani"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-xs font-rajdhani">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-electric-400 font-exo font-medium group-hover:text-voltage-400 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 via-voltage-500/5 to-electric-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
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
              boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-electric-400 to-electric-500 text-white font-exo font-bold text-lg rounded-full transition-all duration-300 hover:from-electric-300 hover:to-electric-400"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
