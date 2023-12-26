const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // use colors only specified
        bgBlack: '#252c41',
        baseGray: '#dddfe6',
        warningRed: '#f1404b',
        baseWhite: '#f4f5f9',

        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        darkOrange: '#FF8C00',
        orange: '#FFA500',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',
      },
      minHeight: {
        '1/2': '50%',
      },
      width: {
        '98%': '98%',
      },
      borderWidth: {
        1: '1px',
      },
      keyframes: {
        slideY: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideY: 'slide 0.5s',
      },
    },
  },
  plugins: [],
};
