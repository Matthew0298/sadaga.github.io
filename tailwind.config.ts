/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#7C3AED',
        soft: '#EDE9FE',
        highlight: '#F59E0B',
      },
    },
  },
  plugins: [],
}