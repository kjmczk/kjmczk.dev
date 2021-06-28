module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'screen/2': '50vh',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: '400',
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
        xl: {
          css: {
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
