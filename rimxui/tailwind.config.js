/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3758F9",
        secondary: "#13C296",
      },
      textColor: {
        primary: "#637381",
        secondary: "#8899A8",
      },
    },
  },
  plugins: [],
};
