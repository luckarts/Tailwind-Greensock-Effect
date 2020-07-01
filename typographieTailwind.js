module.exports = {
  transitionDuration: {
    '2000': '2000ms'
  },
  transitionDelay: {
    '2000': '2000ms',
    '5000': '5000ms'
  },
  height: {
    'h-150': '150vh'
  },
  textIndent: {
    // defaults to {}
    '1': '0.25rem',
    '2': '0.5rem'
  },
  textShadow: {
    // defaults to {}
    default: '0 2px 5px rgba(0, 0, 0, 0.5)',
    lg: '0 2px 10px rgba(0, 0, 0, 0.5)'
  },

  textDecorationStyle: {
    // defaults to these values
    solid: 'solid',
    double: 'double',
    dotted: 'dotted',
    dashed: 'dashed',
    wavy: 'wavy'
  },
  textDecorationColor: {
    // defaults to theme => theme('colors')
    red: '#f00',
    green: '#0f0',
    blue: '#00f'
  },
  fontVariantCaps: {
    // defaults to these values
    normal: 'normal',
    small: 'small-caps',
    'all-small': 'all-small-caps',
    petite: 'petite-caps',
    unicase: 'unicase',
    titling: 'titling-caps'
  },
  fontVariantNumeric: {
    // defaults to these values
    normal: 'normal',
    ordinal: 'ordinal',
    'slashed-zero': 'slashed-zero',
    lining: 'lining-nums',
    oldstyle: 'oldstyle-nums',
    proportional: 'proportional-nums',
    tabular: 'tabular-nums',
    'diagonal-fractions': 'diagonal-fractions',
    'stacked-fractions': 'stacked-fractions'
  },
  fontVariantLigatures: {
    // defaults to these values
    normal: 'normal',
    none: 'none',
    common: 'common-ligatures',
    'no-common': 'no-common-ligatures',
    discretionary: 'discretionary-ligatures',
    'no-discretionary': 'no-discretionary-ligatures',
    historical: 'historical-ligatures',
    'no-historical': 'no-historical-ligatures',
    contextual: 'contextual',
    'no-contextual': 'no-contextual'
  },
  textRendering: {
    // defaults to these values
    'rendering-auto': 'auto',
    'optimize-legibility': 'optimizeLegibility',
    'optimize-speed': 'optimizeSpeed',
    'geometric-precision': 'geometricPrecision'
  },
  textStyles: (theme) => ({
    // defaults to {}
    heading: {
      output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
      fontFamily: theme('fontFamily.title')
    },
    h1: {
      extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
      fontSize: theme('fontSize.5xl'),
      '@screen sm': {
        fontSize: theme('fontSize.6xl')
      }
    },
    h2: {
      extends: 'heading',
      fontSize: theme('fontSize.6xl'),
      fontWeight: theme('fontWeight.light'),
      lineHeight: theme('leading.big'),
      textTransform: theme('textTransform.capitalize'),
      letterSpacing: theme('tracking.tight')
    },
    h3: {
      fontFamily: theme('fontFamily.portfolio'),
      fontWeight: theme('fontWeight.bold'),
      textTransform: theme('textTransform.capitalize'),
      fontSize: theme('fontSize.6xl')
    },
    h4: {
      fontFamily: theme('fontFamily.portfolio'),
      fontWeight: theme('fontWeight.bold'),
      textTransform: theme('textTransform.capitalize'),
      fontSize: theme('fontSize.3xl')
    },
    h5: {
      extends: 'heading',
      fontSize: theme('fontSize.2xl')
    },
    h6: {
      extends: 'heading',
      fontSize: theme('fontSize.xl')
    },
    link: {
      extends: 'heading',
      lineHeight: theme('leading.medium'),
      fontSize: theme('fontSize.5xl'),
      fontWeight: theme('fontWeight.light'),
      '&:hover': {
        fontStyle: theme('fontStyle.italic'),
        color: theme('colors.restaurant')
      }
    },
    restaurant: {
      fontFamily: theme('fontFamily.title'),
      fontSize: theme('fontSize.3xl'),
      fontWeight: theme('fontWeight.light'),

      letterSpacing: theme('tracking.tight')
    },
    richText: {
      fontWeight: theme('fontWeight.normal'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.relaxed'),
      '> * + *': {
        marginTop: '1em'
      },
      h1: {
        extends: 'h1'
      },
      h2: {
        extends: 'h2'
      },
      h3: {
        extends: 'h3'
      },
      h4: {
        extends: 'h4'
      },
      h5: {
        extends: 'h5'
      },
      h6: {
        extends: 'h6'
      },
      ul: {
        listStyleType: 'disc'
      },
      ol: {
        listStyleType: 'decimal'
      },
      a: {
        extends: 'link'
      },
      'b, strong': {
        fontWeight: theme('fontWeight.bold')
      },
      'i, em': {
        fontStyle: 'italic'
      }
    }
  })
};
