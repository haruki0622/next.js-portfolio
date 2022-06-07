module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        mont:['Montserrat'],
        fonts:['apple-system','BlinkMacSystemFont',"Helvetica Neue","Segoe UI","Hiragino Kaku Gothic ProN","Hiragino Sans",'Arial','Meiryo','sans-serif']
      },
      gridTemplateColumns: {
        '3': '1fr 1fr 1fr',
        '1': '1fr',
        '2':'1fr 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow')
  ],
};
