/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#fafafa",
        aqua: "#00f0ff",
        aurelion: "#f8ef00",
        coolred: "#ff003c",
        neutral400: "#bbbbbb",
      },

      fontSize: {
        main_title: "40px",
        title: "20px",
        text: "16px",
      },
      width: {
        button: "350px",
        title: "400px",
      },
      letterSpacing: {
        title: "8px",
      },
      gridTemplateColumns: {
        main: "60% 40%",
      },
    },
  },
  plugins: [],
};
