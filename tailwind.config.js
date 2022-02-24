module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        verda:['Verdana,Geneva,sans-serif',],
        lora: ['Lora'],
        inter: ['Inter'],
        lato: ['Lato'],
        noto: ['Noto Serif JP'],
        noto_sans: ['Noto Sans JP']
      },
      zIndex: {
        '-10':'-10',
      },
      fontSize: {
        '13xl': '13rem',
        '10xl': '10rem',
      },
      textShadow: {
        'original' : '0 0 80px rgb(192 219 255 / 60%), 0 0 50px rgb(65 120 255 / 29%);',
      },
      backgroundImage: theme => ({
        'bg-image': "url('/main3.png')",
      })
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
