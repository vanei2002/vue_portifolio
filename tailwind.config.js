/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors:{
          "bgImg": "#DADADA54",
          "navBar": "#27272A",

          "borderPg": "#9D4B00",
      }
    },

    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
    },

    container:{
      padding: "2rem",
      center: true,
    },

    screens: {
      sm: '640px',
      md: "768px",
    }
  },
  plugins: [],
}

