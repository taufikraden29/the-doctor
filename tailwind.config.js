/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      spacing: {
        big: "48rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px",
        },
      },
    },
  },
  plugins: [],
};
