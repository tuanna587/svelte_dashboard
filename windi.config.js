import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
  darkMode: 'class', // or 'media'
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/**/*.{svelte,html,jsx,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
  content: ['./src/**/*.{html,js,svelte}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    inset: {
      '-100': '-100%',
      '-225-px': '-225px',
      '-160-px': '-160px',
      '-150-px': '-150px',
      '-94-px': '-94px',
      '-50-px': '-50px',
      '-29-px': '-29px',
      '-20-px': '-20px',
      '25-px': '25px',
      '40-px': '40px',
      '95-px': '95px',
      '145-px': '145px',
      '195-px': '195px',
      '210-px': '210px',
      '260-px': '260px',
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        55: '55rem',
      },
      opacity: {
        80: '.8',
      },
      zIndex: {
        "-1": "-1",
        2: 2,
        3: 3,
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      transitionProperty: {
        backgroundSize: {
          css: {
            'transition-property': 'background-size',
            'transition-timing-function': 'cubic-bezier(.4,0,.2,1)',
            'transition-duration': '.15s',
          },
        },
      },
      typography: {
        base: {
          css: {
            fontSize: '16px',
            lineHeight: '1.75',
            maxWidth: '75rem',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
        '.-left-20-px': {
          left: '-20px',
        },
        '.-left-50-px': {
          left: '-50px',
        },
      };

      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };
      addUtilities(newUtilities);
      addComponents(buttons);
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      // Turns text color to light, when dark mode enabled. Default = false
      dark: true,
      // Right-to-left mode (e.g. for Arabic, Uyghur languages). Default = false
      rtl: true,
      // Classname for typography plugin. Default = 'prose'
      className: 'prose',
      // Additional modifiers
      modifiers: ['base', 'sm', 'lg', 'red'],
    }),
  ],
});
