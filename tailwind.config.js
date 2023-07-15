/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../img/hero.svg')",
      },
      colors: {
        primary: "#c30a17",
      },
    },
  },
  plugins: [],
};
