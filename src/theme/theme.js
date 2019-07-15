// https://github.com/styled-system/styled-system/blob/master/docs/src/theme.js

import colors from './colors';
import breakpoints from './breakpoints';
import { onSmallOnly, onMedium } from './helpers';

const borderRadius = [25];

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const transition = 'all 0.2s cubic-bezier(0.25,0.1,0.25,1)';
const colorPickerRadius = 12;

const colorPicker = {
  radius: colorPickerRadius,
  getPickerWidth: (colorsNumber = 0) =>
    colorPickerRadius * 2 * colorsNumber * 1.25
};

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
    outline: {}
  },
  contentWidth: 1040,
  headerZindex: 9998,
  headerHeight: [50, 60],
  sidebarWidth: [50, 80],
  colorPicker,
  jokerHeight: 700,
  helpers: {
    onSmallOnly,
    onMedium
  }
};
