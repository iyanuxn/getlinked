/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["ClashDisplay", "sans-serif"],
        regular: ["Montserrat", "sans-serif"],
        time: ["Unica One", "sans-serif"],
      },
      colors: {
        primary: "#D434FE",
        secondary: "#903AFF",
        dark: "#150E28",
        darkAlt: "#100B20"
      },
    },
  },
  plugins: [],
};
