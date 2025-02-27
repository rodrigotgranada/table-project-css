const theme = require("./src/styles/theme.json"); // ✅ Importamos o JSON corretamente

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,

      fontFamily: {
        roboto: theme.typography.fontFamily,
      },

      fontSize: {
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: theme.typography.h3,
        xg: theme.typography.xg,
      },

      fontWeight: theme.fontWeight,

      spacing: theme.spacing,

      boxShadow: theme.shadows,
    },
  },
  plugins: [],
};
