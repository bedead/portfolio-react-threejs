/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#f6f6f6",
      secondary: "#373737",
      tertiary: "#fcd4d4",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      // "hero-pattern": "url('/src/assets/herobg.webp')",
    },
  },
};
export const plugins = [];