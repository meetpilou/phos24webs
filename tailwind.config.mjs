import timingFunctions from './tailwind/timingFunctions.js'

export default {
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',

        // Generate color shades with: https://uicolors.app/create
        gold: {
          DEFAULT: '#917f56',
          50: '#f6f5f0',
          100: '#e9e6d8',
          200: '#d4ceb4',
          300: '#bbb089',
          400: '#a79668',
          500: '#917f56', // <-- Primary
          600: '#826e4c',
          700: '#69553f',
          800: '#5a4839',
          900: '#4e3f35',
          950: '#2c221c',
        },
        error: '#CB2C24',
      },

      fontFamily: {
        title: 'DIN2014',
        text: 'Noto Serif',
      },

      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
        light: 300,
        regular: 400,
        demi: 600,
        bold: 700,
      },

      screens: {},

      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridRowStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridRowEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
    purge: {
      options: {
        safelist: ['container-text-center', 'container-text-left', 'container-text-right'],
      },
    },
    content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  },
  variants: {
    // all the following default to ['responsive']
    imageRendering: ['responsive'],
  },

  plugins: [timingFunctions, require('tailwindcss-image-rendering')()],
}
