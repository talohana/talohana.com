module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1100px',
        xl: '1100px',
      },
    },
    extend: {
      colors: {
        primary: {
          900: '#6247aa',
          800: '#7251b5',
          700: '#815ac0',
          600: '#9163cb',
          500: '#a06cd5',
          400: '#b185db',
          300: '#c19ee0',
          200: '#d2b7e5',
          100: '#dac3e8',
          DEFAULT: '#9163cb',
        },
        gray: {
          900: '#212529',
          800: '#343A40',
          700: '#495057',
          600: '#6C757D',
          500: '#ADB5BD',
          400: '#CED4DA',
          300: '#DEE2E6',
          200: '#E9ECEF',
          100: '#F8F9FA',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
