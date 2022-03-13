const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shape-primary": "#1E293B",
        primary: "#0284c7",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme("fontSize.2xl"), fontWeight: theme("fontWeight.bold") },
        h2: { fontSize: theme("fontSize.xl"), fontWeight: theme("fontWeight.bold") },
        h3: { fontSize: theme("fontSize.lg"), fontWeight: theme("fontWeight.bold") },
      });
    }),
  ],
};
