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
        // PRIMARY GREEN-WHITE PALETTE - Austrian Professional
        primary: {
          50: "#f0fdf4", // Lightest green-white
          100: "#dcfce7", // Very light green-white
          200: "#bbf7d0", // Light green-white
          300: "#86efac", // Soft green
          400: "#4ade80", // Fresh green
          500: "#22c55e", // Main professional green
          600: "#16a34a", // Deep professional green
          700: "#15803d", // Austrian forest green
          800: "#166534", // Dark Austrian green
          900: "#14532d", // Deepest green
        },
        // SECONDARY WHITES & GRAYS
        secondary: {
          50: "#ffffff", // Pure white
          100: "#f8fafc", // Off-white
          200: "#f1f5f9", // Light gray-white
          300: "#e2e8f0", // Soft gray
          400: "#cbd5e1", // Medium gray
          500: "#94a3b8", // Neutral gray
          600: "#64748b", // Dark gray
          700: "#475569", // Darker gray
          800: "#334155", // Very dark gray
          900: "#1e293b", // Almost black
        },
        // ACCENT ELECTRIC LIME
        accent: {
          50: "#f7fee7", // Lightest lime-white
          100: "#ecfccb", // Very light lime
          200: "#d9f99d", // Light lime
          300: "#bef264", // Soft lime
          400: "#a3e635", // Fresh lime
          500: "#84cc16", // Main electric lime
          600: "#65a30d", // Deep lime
          700: "#4d7c0f", // Forest lime
          800: "#365314", // Dark lime
          900: "#1a2e05", // Deepest lime
        },
        // Legacy support - gradually replace these
        electric: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        voltage: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#365314",
          900: "#1a2e05",
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
        // Primary pe solutions fonts
        "pe-solutions": ["PE Solutions", "Arial Black", "sans-serif"],
        "pe-solutions-light": [
          "PE Solutions Light",
          "Century Gothic",
          "sans-serif",
        ],
        // Existing fonts
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
          "0%": { boxShadow: "0 0 5px #4ade80" },
          "100%": { boxShadow: "0 0 20px #4ade80, 0 0 30px #22c55e" },
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
            boxShadow: "0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e",
            borderColor: "#22c55e",
          },
          "50%": {
            boxShadow: "0 0 20px #84cc16, 0 0 30px #84cc16, 0 0 40px #84cc16",
            borderColor: "#84cc16",
          },
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
        "secondary-gradient":
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        "accent-gradient": "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
        "green-white-gradient":
          "linear-gradient(135deg, #22c55e 0%, #ffffff 100%)",
        "white-green-gradient":
          "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
        "dark-green-gradient":
          "linear-gradient(135deg, #166534 0%, #14532d 100%)",
        // Legacy gradients (gradually replace)
        "electric-gradient":
          "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
        "power-gradient": "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        "voltage-gradient": "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
      },
      boxShadow: {
        primary: "0 0 20px rgba(34, 197, 94, 0.3)",
        accent: "0 0 20px rgba(132, 204, 22, 0.3)",
        "glow-green": "0 0 30px rgba(34, 197, 94, 0.5)",
        "glow-accent": "0 0 30px rgba(132, 204, 22, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(34, 197, 94, 0.2)",
        // Legacy support (gradually replace)
        electric: "0 0 20px rgba(34, 197, 94, 0.3)",
        voltage: "0 0 20px rgba(132, 204, 22, 0.3)",
        "glow-blue": "0 0 30px rgba(34, 197, 94, 0.5)",
        "glow-yellow": "0 0 30px rgba(132, 204, 22, 0.5)",
      },
    },
  },
  plugins: [],
};
