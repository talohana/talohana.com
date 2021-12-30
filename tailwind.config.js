module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
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
        dark: '#161e26',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
