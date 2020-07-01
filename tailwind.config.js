const extend = require('./typographieTailwind.js');
const { theme } = require('tailwindcss/stubs/defaultConfig.stub');
module.exports = {
  target: 'ie11',
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  options: {
    prefix: '',
    important: false,
    separator: ':'
  },
  theme: {
    screens: {
      xs: { min: 'Opx', max: '500px' },
      sm: { min: '0px', max: '768px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      default: '#213142;',
      black: '#000',
      white: '#fff',
      contrasteWhite: '#e0e0e0',
      primary: '#c5d1df',
      bgDefault: '#f7fafc',
      restaurant: '#cb9274'
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
      xl: '1.8rem'
    },
    linearGradientColors: {
      'gradient-gray': ['#1f1f1fcc', '#15151500'],
      projet: ['#4e6483', '#a4d0cd'],
      ykari: ['#6b8d77', '#bdd1b5']
    },
    fontStyle: {
      italic: 'italic'
    },
    fontFamily: {
      title: ['"Cormorant Garamond"', 'serif'],
      portfolio: ['"Roboto"', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },

    inset: {
      '0': 0,
      '1.5': '1.5rem',
      '3': '3rem',
      '1/2': '50%',
      '1': '1em',
      n1: '-1em'
    },
    scale: {
      '0': '0',
      '50': '.5',
      '125': '1.25',
      '200': '2'
    },
    // load typographie
    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
      medium: ' 4vw',
      big: ' 5.619vw'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '40%': '40%',
      '16': '4rem'
    },
    textTransform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      'normal-case': 'normal-case'
    },
    tracking: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em'
    },
    zIndex: {
      '0': 0,
      '1': 1,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      auto: 'auto'
    },
    extend
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive', 'hover'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive', 'hover', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-animations'),
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: 'c-' // the prefix to use for text style classes
    }),
    require('tailwindcss-pseudo-elements'),
    function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''"
          },
          '.fill-none': {
            fill: 'none'
          },
          '.active': {
            opacity: 1,
            'z-index': 20
          },
          '.preserve3d': {
            'transform-style': 'preserve-3d'
          },
          '.clip-path': {
            'clip-path': 'circle(20px at 100% 0%)'
          }
        },
        ['before'],
        ['after']
      );
    }
  ]
};
