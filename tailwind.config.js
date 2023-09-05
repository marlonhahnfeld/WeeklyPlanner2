/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Faustina: 'Faustina',
        
      },
      colors: {
        GreyCustom: '#4D4D4D',
        BeigeCustom: '#FFF4E0',
        RedCustom: '#B46060',
        OrangeCustom: '#FFBF9B'
      },
    },
  },
  plugins: [],
}

