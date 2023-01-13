/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['dark'],
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),
  ],
}
