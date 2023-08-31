const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // use colors only specified
        bgBlack: "#252c41",
        baseGray: "#dddfe6",
        warningRed: "#f1404b",
        baseWhite: "#f4f5f9",

        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        darkOrange: "#FF8C00",
        orange: "#FFA500",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",
      },
      backgroundImage: {
        rain: "url('/img/rain-1920.jpg')",
        church: "url('/img/church-1280.jpg')",
        imgBlack: "url('/img/black-1280.jpg')",
        bricks: "url('/img/brick2-640.jpg')",
        imgWhite: "url('/img/whiteBg.jpg')",
      },
      minHeight: {
        "1/2": "50%",
      },
      width: {
        "98%": "98%",
      },
    },
  },
  plugins: [],
};
