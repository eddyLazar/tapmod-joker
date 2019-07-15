import React from 'react';
import { Flex } from 'rebass';
import MaterialColor from 'components/atoms/MaterialColor';
import theme from 'theme';

export default ({ colors = [], onChange, x = 0, y = 0 }) => {
  const offsetX = x - theme.colorPicker.getPickerWidth(colors.length) / 2;
  const offsetY = y;
  return (
    <div
      style={{
        position: 'absolute',
        left: offsetX,
        top: offsetY
      }}
    >
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
    </div>
  );
};
