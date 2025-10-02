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
        // Simple black and white theme - no colors
        // Using default Tailwind gray scale which is already perfect
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
        "slide-up": "slideUp 0.8s ease-out",
        "fade-in": "fadeIn 1s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        // Simple shadows for black/white theme
      },
    },
  },
  plugins: [],
};
