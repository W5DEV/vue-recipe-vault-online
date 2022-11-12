/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#17252A',
          muted: '#2B7A78',
          DEFAULT: '#3AAFA9',
          light: '#DEF2F1',
          white: '#FEFFFF',
        },
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        fredericka: ['Fredericka the Great', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
