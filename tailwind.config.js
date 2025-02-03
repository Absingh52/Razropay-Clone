const { root } = require('postcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./**/*.html"],
  theme: {
    extend: {
      // <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 200 to 1000

 
  fontFamily:
  {
    mullish:["Mulish","sans-serif"],
  },
  backgroundImage: {
    'hero-pattern': "url('./images/feature-section-2BG.svg')",
    // 'footer-texture': "url('/img/footer-texture.png')",
  },
      colors:{
        deepblue:"#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        grey:"#f5f8fe",
      },
    },
  },
  plugins: [],
}
