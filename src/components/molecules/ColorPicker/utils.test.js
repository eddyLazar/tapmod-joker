import { getColorPalette, albedoToHex, albedoNumberToRgb } from './utils';

describe('getColorPaletter()', () => {
  test('given color should return color palette', () => {
    const palette = getColorPalette('12ff45');

    expect(palette).toHaveLength(7);
  });

  test('should return colors with #', () => {
    const palette = getColorPalette('12ff45');

    expect(palette[1].indexOf('#')).toBe(0);
  });
});

describe('albedoNumberToRgb()', () => {
  test('should return proper rgb number', () => {
    expect(albedoNumberToRgb(1)).toBe(255);
  });
  test('should return integer', () => {
    expect(albedoNumberToRgb(0.1)).toBe(25);
  });
});

describe('albedoToHex()', () => {
  test('should return hex color', () => {
    const expected = 'ff0000';
    const actual = albedoToHex([1, 0, 0]);
    expect(actual).toBe(expected);
  });
});
