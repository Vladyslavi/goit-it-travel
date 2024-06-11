/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        gray: '#939393'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}