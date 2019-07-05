import tail from 'ramda/src/tail';
import map from 'ramda/src/map';
import compose from 'ramda/src/compose';
import join from 'ramda/src/join';
import ColorScheme from 'color-scheme';

// const takeColors = slice(1);
const toHtmlColors = map(color => `#${color}`);

export const getColorPalette = hexColor => {
  var scheme = new ColorScheme();

  scheme
    .from_hex(hexColor)
    .scheme('contrast')
    .web_safe(true);
  // .scheme('mono')
  // .variation('default')
  // .web_safe(true);

  var colors = scheme.colors();

  return toHtmlColors(tail(colors));
};

export const albedoNumberToRgb = x => parseInt(x * 255);

function rgbNumberToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export const albedoToHex = compose(
  join(''),
  map(rgbNumberToHex),
  map(albedoNumberToRgb)
);
