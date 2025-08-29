import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  Zap,
  AlertTriangle,
  Shield,
  CheckCircle,
} from "lucide-react";

const Emergency = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [responseTime, setResponseTime] = useState("< 30 minutes");
  const [onlineTeams, setOnlineTeams] = useState(3);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setOnlineTeams(Math.floor(Math.random() * 3) + 2); // 2-4 teams
      const times = ["< 15 minutes", "< 30 minutes", "< 45 minutes"];
      setResponseTime(times[Math.floor(Math.random() * times.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: "Power Outages",
      description: "Immediate diagnosis and restoration of electrical power",
      responseTime: "15 min",
    },
    {
      icon: Zap,
      title: "Electrical Fires",
      description: "Emergency response for electrical fire hazards",
      responseTime: "10 min",
    },
    {
      icon: Shield,
      title: "Safety Hazards",
      description: "Dangerous wiring and electrical safety issues",
      responseTime: "20 min",
    },
    {
      icon: Clock,
      title: "Storm Damage",
      description: "Hurricane and storm electrical system repairs",
      responseTime: "30 min",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-red-900/20 via-power-900 to-power-800 overflow-hidden">
      {/* Emergency Alert Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent animate-pulse"></div>
        {/* Emergency Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Emergency Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6 mb-12 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-rajdhani font-bold">
                  EMERGENCY READY
                </span>
              </div>
              <div className="h-4 w-px bg-power-600"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-electric-400" />
                <span className="text-power-300 font-exo">
                  Response Time: {responseTime}
                </span>
              </div>
              <div className="h-4 w-px bg-power-600"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-voltage-400" />
                <span className="text-power-300 font-exo">
                  {onlineTeams} Teams Online
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEmergency(!isEmergency)}
              className={`px-6 py-3 rounded-xl font-exo font-bold transition-all duration-300 ${
                isEmergency
                  ? "bg-red-600 text-white animate-pulse"
                  : "bg-red-600/20 border border-red-500/50 text-red-400 hover:bg-red-600/30"
              }`}
            >
              {isEmergency ? "EMERGENCY ACTIVE" : "TEST EMERGENCY ALERT"}
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Emergency Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-rajdhani font-medium">
                24/7 Emergency Service
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 leading-tight">
              <span className="text-red-400">EMERGENCY</span>
              <br />
              <span className="bg-gradient-to-r from-electric-400 to-voltage-400 bg-clip-text text-transparent">
                ELECTRICAL
              </span>
              <br />
              <span className="text-white">RESPONSE</span>
            </h2>

            <p className="text-xl text-power-300 font-exo mb-8 leading-relaxed">
              Electrical emergencies don't wait for business hours. Our{" "}
              <span className="text-electric-400 font-semibold">
                rapid response team
              </span>{" "}
              is standing by 24/7 to handle critical electrical situations
              across the Florida Keys.
            </p>

            {/* Emergency Features */}
            <div className="space-y-4 mb-8">
              {[
                "Lightning-fast response times",
                "Fully equipped emergency vehicles",
                "Licensed emergency electricians",
                "Insurance claim assistance",
                "Temporary power solutions",
                "Safety-first protocols",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-power-300 font-exo">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-orbitron font-bold text-xl">
                    Emergency Hotline
                  </h3>
                  <p className="text-red-200 font-exo text-lg">
                    (305) 911-VOLT
                  </p>
                </div>
                <div className="ml-auto">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Emergency Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
                }}
                className="relative group bg-power-800/50 border border-red-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-red-500/40 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                  <service.icon className="w-6 h-6 text-red-400" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-power-300 font-exo mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Response Time */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-voltage-400" />
                  <span className="text-voltage-400 font-rajdhani font-medium">
                    ≤ {service.responseTime}
                  </span>
                </div>

                {/* Emergency Pulse Effect */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-900/30 via-power-800/50 to-red-900/30 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Don't Wait - Every Second Counts
            </h3>
            <p className="text-power-300 font-exo mb-6 max-w-2xl mx-auto">
              Electrical emergencies can be dangerous and costly. Our emergency
              response team is equipped and ready to handle any electrical
              crisis, day or night.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-exo font-bold text-lg rounded-full transition-all duration-300 hover:from-red-500 hover:to-red-600"
            >
              Call Emergency Line Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Emergency;
