/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        snow: "#FAFAFA",
        darkGrey: "#787878",
        lineGrey: "#E8E8E8",
        darkLineGrey: "#BFBFBF",
        charcoal: "#333333",
      },
      transitionProperty: {
        toc: "font-weight, color, transform",
      },
    },
  },
  plugins: [],
};
