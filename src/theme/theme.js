// https://github.com/styled-system/styled-system/blob/master/docs/src/theme.js

import colors from './colors';
import breakpoints from './breakpoints';
import { onSmallOnly, onMedium } from './helpers';

const borderRadius = [25];

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const transition = 'all 0.2s cubic-bezier(0.25,0.1,0.25,1)';

export default {
  transition,
  space,
  colors,
  breakpoints,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  buttons: {
    primary: {
      paddingTop: space[3],
      paddingBottom: space[3],
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
  },
  contentWidth: 1040,
  headerHeight: 60,
  headerZindex: 9998,
  sidebarWidth: 80,
  colorRadius: 14,
  jokerHeight: 600,
  helpers: {
    onSmallOnly,
    onMedium
  }
};
