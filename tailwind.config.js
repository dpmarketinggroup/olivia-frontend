/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#087168",
        green2: "#476761",
        bgLight: "#F9F7F2",
        yellow: "#FFA100",
      },
      backgroundImage: {
        "primary-pattern":
          "linear-gradient(90deg, #476761 3.72%, #89A6A2 96.46%)",
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 14%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 69%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%)",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
