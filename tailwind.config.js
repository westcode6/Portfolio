/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  "files.associations": { "*.scss": "postcss" },

  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      background: {
          "dark": "#222327",
          "darker": "#171717",
          "darkest": "#222222",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/heroMain.jpg')",
      },
    },
  },
  plugins: [],
};