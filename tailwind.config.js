/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  lightMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      cursor: {
        fancy: "url(/assets/arrow-pointer-solid.svg), pointer",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-65%);" },
          "100%": { transform: "translateX(-50%);" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in ",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.54)",
      },
    },
  },
};
