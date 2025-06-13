/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6a0dad", // A deep, elegant purple
        secondary: "#f3e5f5", // A very light lavender
        accent: "#d4af37", // Gold for highlights
        "text-main": "#333333",
        "text-light": "#555555",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"], // A beautiful, classic serif
        body: ["Lato", "sans-serif"], // A clean, readable sans-serif
      },
    },
  },
  plugins: [],
};
