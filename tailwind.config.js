const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          ...colors.violet,
          DEFAULT: colors.violet['500'],
        },
        gray: {
          50: '#ffffff',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4c4c4c',
          800: '#333333',
          900: '#191919',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
