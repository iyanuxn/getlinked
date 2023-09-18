/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["ClashDisplay", "sans-serif"],
        regular: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#D434FE",
        secondary: "#903AFF",
      },
    },
  },
  plugins: [],
};
