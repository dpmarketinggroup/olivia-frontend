/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E3F3B',
        'green2': '#476761'
      },
      backgroundImage: {
        'primary-pattern': "linear-gradient(90deg, #476761 3.72%, #89A6A2 96.46%)"
      }
    },
  },
  plugins: [],
}
