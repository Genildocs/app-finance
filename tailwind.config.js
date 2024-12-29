/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      colors: {
        primary: {
          beige: {
            500: "#989088",
            100: "#F8F4F0",
          },
          grey: {
            900: "#201F24",
            500: "#696868",
            300: "#B3B3B3",
          },
        },
        secondary: {
          green: "#277C78",
          yellow: "#F2CDAC",
          cyan: "#82C9D7",
          navy: "#626070",
          red: "#C94736",
          purple: "#826C8D",
        },
        tertiary: {
          purple: "#AF81BA",
          turquoise: "#597C7C",
          brown: "#93674F",
          magenta: "#934F6F",
          blue: "#3F82B2",
          navyGrey: "#7A7A7C",
          armyGreen: "#7F9161",
          gold: "#CAB361",
          orange: "#BEBC49",
        },
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
