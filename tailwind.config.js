module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#10002b',
          800: '#240046',
          700: '#3c096c',
          600: '#5a189a',
          500: '#7b2cbf',
          400: '#9d4edd',
          300: '#c77dff',
          200: '#e0aaff',
          DEFAULT: '#9d4edd',
          dark: '#5a189a',
          light: '#c77dff',
        },
        white: '#f6f6f8',
        black: '#18191a',
      },
    },
    fontFamily: {
      sans: [
        'Lora',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe\\ UI\\ Emoji',
        'Segoe\\ UI\\ Symbol',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
