const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // "cyber-yellow": {
        //   DEFAULT: "#FBD33A",
        //   50: "#FFFBEE",
        //   100: "#FEF7DA",
        //   200: "#FDEEB2",
        //   300: "#FDE58A",
        //   400: "#FCDC62",
        //   500: "#FBD33A",
        //   600: "#E9BA05",
        //   700: "#A38203",
        //   800: "#5D4A02",
        //   900: "#171200",
        // },
        // "dodger-blue": {
        //   DEFAULT: "#3AC2FB",
        //   50: "#EEFAFF",
        //   100: "#DAF4FE",
        //   200: "#B2E7FD",
        //   300: "#8ADBFD",
        //   400: "#62CEFC",
        //   500: "#3AC2FB",
        //   600: "#05A5E9",
        //   700: "#0374A3",
        //   800: "#02425D",
        //   900: "#001017",
        // },
        // "electric-violet": {
        //   DEFAULT: "#733AFB",
        //   50: "#F3EEFF",
        //   100: "#E5DAFE",
        //   200: "#C8B2FD",
        //   300: "#AC8AFD",
        //   400: "#8F62FC",
        //   500: "#733AFB",
        //   600: "#4805E9",
        //   700: "#3203A3",
        //   800: "#1D025D",
        //   900: "#070017",
        // },
        "milano-red": {
          DEFAULT: "#BD0A0A",
          50: "#FDDDDD",
          100: "#FCC0C0",
          200: "#F98686",
          300: "#F64C4C",
          400: "#F21212",
          500: "#BD0A0A",
          600: "#960808",
          700: "#6F0606",
          800: "#490404",
          900: "#220202",
        },
        "robin-s-egg-blue": {
          DEFAULT: "#0ABDBD",
          50: "#DDFDFD",
          100: "#C0FCFC",
          200: "#86F9F9",
          300: "#4CF6F6",
          400: "#12F2F2",
          500: "#0ABDBD",
          600: "#089696",
          700: "#067070",
          800: "#044949",
          900: "#022222",
        },
        sirocco: {
          DEFAULT: "#778585",
          50: "#FCFCFC",
          100: "#EDEFEF",
          200: "#D0D5D5",
          300: "#B2BABA",
          400: "#94A0A0",
          500: "#778585",
          600: "#5D6767",
          700: "#424A4A",
          800: "#282C2C",
          900: "#0D0F0F",
        },
        gigas: {
          DEFAULT: "#4A41AF",
          50: "#F3F2FA",
          100: "#DFDDF3",
          200: "#B8B5E3",
          300: "#928CD4",
          400: "#6B63C5",
          500: "#4A41AF",
          600: "#393286",
          700: "#27225D",
          800: "#161334",
          900: "#05040B",
        },
        "bright-turquoise": {
          DEFAULT: "#00EBC3",
          50: "#E8FFFB",
          100: "#CCFFF6",
          200: "#94FFED",
          300: "#5CFFE3",
          400: "#24FFDA",
          500: "#00EBC3",
          600: "#00B394",
          700: "#007B66",
          800: "#004337",
          900: "#000B09",
        },
        trinidad: {
          DEFAULT: "#EB4D00",
          50: "#FFF0E8",
          100: "#FFDDCC",
          200: "#FFB794",
          300: "#FF925C",
          400: "#FF6C24",
          500: "#EB4D00",
          600: "#B33B00",
          700: "#7B2800",
          800: "#431600",
          900: "#0B0300",
        },
        dolphin: {
          DEFAULT: "#6F6980",
          50: "#F2F2F4",
          100: "#E3E2E7",
          200: "#C6C3CE",
          300: "#A9A4B5",
          400: "#8B869B",
          500: "#6F6980",
          600: "#545061",
          700: "#3A3642",
          800: "#1F1D24",
          900: "#040405",
        },
        "scarpa-flow": {
          DEFAULT: "#5A576A",
          50: "#C4C2CD",
          100: "#B8B6C3",
          200: "#9F9DAE",
          300: "#878399",
          400: "#6F6C83",
          500: "#5A576A",
          600: "#454251",
          700: "#2F2E38",
          800: "#1A191E",
          900: "#040405",
        },
      },
    },
  },
  plugins: [],
};
