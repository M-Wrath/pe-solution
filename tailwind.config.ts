/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        voltage: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        power: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        exo: ["Exo 2", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        spark: "spark 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "electric-pulse": "electricPulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        spark: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.7, transform: "scale(1.1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #fde047" },
          "100%": { boxShadow: "0 0 20px #fde047, 0 0 30px #facc15" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        electricPulse: {
          "0%, 100%": {
            boxShadow: "0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9",
            borderColor: "#0ea5e9",
          },
          "50%": {
            boxShadow: "0 0 20px #facc15, 0 0 30px #facc15, 0 0 40px #facc15",
            borderColor: "#facc15",
          },
        },
      },
      backgroundImage: {
        "electric-gradient":
          "linear-gradient(135deg, #0ea5e9 0%, #facc15 100%)",
        "power-gradient": "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        "voltage-gradient": "linear-gradient(135deg, #fde047 0%, #facc15 100%)",
      },
      boxShadow: {
        electric: "0 0 20px rgba(14, 165, 233, 0.3)",
        voltage: "0 0 20px rgba(253, 224, 71, 0.3)",
        "glow-blue": "0 0 30px rgba(14, 165, 233, 0.5)",
        "glow-yellow": "0 0 30px rgba(253, 224, 71, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [],
};
