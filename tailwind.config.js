/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#000000",
      blue: "#377dff",
      green: "#38cb89",
      orange: "#FFAB00",
      red: "#FF5630",
      "neutral-100": "#FEFEFE",
      "neutral-200": "#F3F5F7",
      "neutral-300": "#E8ECEF",
      "neutral-400": "#6C7275",
      "neutral-500": "#343839",
      "neutral-600": "#232627",
      "neutral-700": "#141718",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "26px",
      "4.5xl": "40px",
    },
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
    extend: {},
  },

  plugins: [],
};
