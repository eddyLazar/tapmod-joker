// https://github.com/styled-system/styled-system/blob/master/docs/src/theme.js

import colors from './colors';

const borderRadius = [25];

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const transition = 'all 0.2s cubic-bezier(0.25,0.1,0.25,1)';

export default {
  transition,
  space,
  colors,
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  buttons: {
    primary: {
      paddingTop: space[3],
      paddingBottom: space[3],
      width: 270,
      borderRadius: borderRadius[0],
      color: colors.modes.orange.text,
      backgroundColor: colors.modes.orange.primary,
      '&:hover': {
        backgroundColor: colors.modes.orange.secondary
      }
    },
    outline: {
      // color: blue,
      // backgroundColor: 'transparent',
      // boxShadow: 'inset 0 0 0 2px'
    }
  }
  // colors: {
  //   blue: '#07c',
  //   lightgray: '#f6f6ff'
  // },
  // space: [0, 4, 8, 16, 32, 64, 128, 256],
  // fonts: {
  //   sans: 'system-ui, sans-serif',
  //   mono: 'Menlo, monospace'
  // },
  // shadows: {
  //   small: '0 0 4px rgba(0, 0, 0, .125)',
  //   large: '0 0 24px rgba(0, 0, 0, .125)'
  // }
};