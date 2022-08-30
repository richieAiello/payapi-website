/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: { container: false },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'dark-pink': '#BA4270',
        pink: '#DA6D97',
        'water-white': '#FBFCFE',
        blue: '#36536B',
        'light-blue': '#6C8294',
        'dark-blue': '#1B262F',
        'blue-white': '#edf3f8',
      },
    },
  },
  plugins: [],
};
