/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#a49d8c',
        'primary-hover': '#b3ad9d',
        red: '#ff2a21',
        orange: '#ffb331',
        green: '#00e375',
        grey: '#e1e1e1',
        'light-grey': '#EFEFEF',
        'dark-grey': '#888888',
      },
      width: {
        '90': '90px',
        '120': '120px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      opacity: {
        '60': '.6',
      },
    },
  },
  variants: {},
  plugins: [],
};
