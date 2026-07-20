/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e8783a",
        "primary-dark": "#d46528",
        sidebar: "#fff8f3",
        surface: "#ffffff",
        ink: "#1a1512",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "Georgia", "serif"],
        quicksand: ['"Quicksand"', "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(232, 120, 58, 0.45)",
        "glow-lg": "0 0 32px rgba(232, 120, 58, 0.55)",
      },
    },
  },
  plugins: [],
};
