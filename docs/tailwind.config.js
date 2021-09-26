const colors = require('tailwindcss/colors');
module.exports = {
  mode: '',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
      },
      height: {
        10: '10px',
        20: '20px',
        30: '30px',
        40: '40px',
        50: '50px',
        55: '55px',
        60: '60px',
        70: '70px',
      },
      margin: {
        10: '10px',
        20: '20px',
      },
      maxWidth: {
        1376: '1376px',
      },
      width: {
        5: '5px',
        10: '10px',
        16: '16px',
        20: '20px',
        30: '30px',
        40: '40px',
        240: '240px',
      },
      lineHeight: {
        30: '30px',
        40: '40px',
      },
      colors: {
        ...colors,
      },
      backgroundImage: () => ({
        arrow: "url('/images/arrow.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
