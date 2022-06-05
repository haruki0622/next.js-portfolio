module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        font:['Montserrat','Noto Sans JP']
      },
      gridTemplateColumns: {
        '3': 'repeat(3,350px)',
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
