const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "mobile-lg": "400px",
        "mobile-md": "360px",
        "mobile-sm": "280px",
      },
      colors: {
        "international-orange": {
          DEFAULT: "#FF530D",
          50: "#FFD5C5",
          100: "#FFC7B0",
          200: "#FFAA87",
          300: "#FF8D5F",
          400: "#FF7036",
          500: "#FF530D",
          600: "#D43D00",
          700: "#9C2D00",
          800: "#641D00",
          900: "#2C0D00",
        },
        "dodger-blue": {
          DEFAULT: "#0DB9FF",
          50: "#C5EEFF",
          100: "#B0E8FF",
          200: "#87DCFF",
          300: "#5FD1FF",
          400: "#36C5FF",
          500: "#0DB9FF",
          600: "#0097D4",
          700: "#006F9C",
          800: "#004764",
          900: "#001F2C",
        },
        gallery: {
          DEFAULT: "#EFEFEF",
          50: "#F9F9F9",
          100: "#EFEFEF",
          200: "#D3D3D3",
          300: "#B7B7B7",
          400: "#9B9B9B",
          500: "#7F7F7F",
          600: "#636363",
          700: "#474747",
          800: "#2B2B2B",
          900: "#0F0F0F",
        },
        ziggurat: {
          DEFAULT: "#BDD4DE",
          50: "#FFFFFF",
          100: "#F3F7F9",
          200: "#D8E6EC",
          300: "#BDD4DE",
          400: "#98BCCB",
          500: "#72A3B9",
          600: "#5189A2",
          700: "#3E6A7C",
          800: "#2C4A57",
          900: "#192A32",
        },
        fiord: {
          DEFAULT: "#3F5765",
          50: "#CDD9E0",
          100: "#C1CFD8",
          200: "#A8BCC8",
          300: "#8EA9B9",
          400: "#7596A9",
          500: "#5E8297",
          600: "#4F6D7E",
          700: "#3F5765",
          800: "#293942",
          900: "#141B20",
        },
        "outer-space": {
          DEFAULT: "#2B3A42",
          50: "#C5D3DA",
          100: "#B9C9D1",
          200: "#A0B6C1",
          300: "#88A3B1",
          400: "#6F90A1",
          500: "#5B7B8C",
          600: "#4B6573",
          700: "#3B505B",
          800: "#2B3A42",
          900: "#151C20",
        },
      },
    },
  },
  plugins: [],
};
