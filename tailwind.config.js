/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'mainFont':['Inter']
    },
    colors:{
      orange:'hsla(var(--soft-orange))',
      red:'hsla(var(--soft-red))',
      offWhite:'hsla(var(--off-white))',
      grayBlue:'hsla(var(--grayish-blue))',
      darkGray:'hsla(var(--dark-grayish-blue))',
      darkBlue:'hsla(var(--very-dark-blue))',
    },
    extend: {},
    
  },
  plugins: [],
}

