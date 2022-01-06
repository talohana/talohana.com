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
        sm: '1100px',
        md: '1100px',
        lg: '1100px',
        xl: '1100px',
      },
    },
    extend: {
      colors: {
        primary: {
          900: '#03045e',
          800: '#023e8a',
          700: '#0077b6',
          600: '#0096c7',
          500: '#00b4d8',
          400: '#48cae4',
          300: '#90e0ef',
          200: '#ade8f4',
          DEFAULT: '#0096c7',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
