/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    extend: {
      colors: {
        primary: "#5570F1",
        lightPrimary: "#DBDEEE96",
        secondary: "#F8B32E",
        lightSecondary: "#FFF2E2",
        textYellow: "#FFAD33",
        lightDanger: "#FEEAEC",
        danger: "#F55667",
        star: "#FF8A00",
        lightBlack: "#1C1D22",
        footerPink: "#FFF2E2",
      },
    },
  },
  plugins: [],
};
