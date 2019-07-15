import React from 'react';
import { Flex } from 'rebass';
import MaterialColor from 'components/atoms/MaterialColor';
import theme from 'theme';

export default ({ colors = [], onChange }) => {
  return (
    <Flex
      width={theme.colorPicker.getPickerWidth(colors.length)}
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
