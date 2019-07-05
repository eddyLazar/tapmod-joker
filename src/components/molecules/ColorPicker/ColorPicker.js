import React from 'react';
import { Flex } from 'rebass';
import MaterialColor from 'components/atoms/MaterialColor';
import theme from 'theme';
import { getColorPalette, albedoToHex } from './utils';

export default ({ albedoColor, onChange }) => {
  const hexColor = albedoToHex(albedoColor);
  console.log(hexColor);

  const colors = getColorPalette(hexColor);

  console.log(colors);

  return (
    <Flex
      width={theme.colorRadius * 2 * colors.length * 1.25}
      justifyContent="space-between"
    >
      {colors.map((color, i) => (
        <MaterialColor
          key={i}
          color={color}
          onClick={() => onChange && onChange(color)}
        />
      ))}
    </Flex>
  );
};
