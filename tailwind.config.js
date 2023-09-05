/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Faustina: "Faustina",

        SegoeUI: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",

      },
      colors: {
        GreyCustom: "#4D4D4D",
        BeigeCustom: "#FFF4E0",
        RedCustom: "#B46060",
        OrangeCustom: "#FFBF9B",
        SecondPrioCustom: "#3252AD",
        PrioCustom: "#6989D0",
      },
      fontSize: {
        h1: "3.5rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h5: "1.5rem",
        h6: "1rem",
      },
    },
  },
  plugins: [],
};
