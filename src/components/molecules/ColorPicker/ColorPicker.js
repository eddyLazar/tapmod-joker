import React from 'react';
import { Flex } from 'rebass';
import MaterialColor from 'components/atoms/MaterialColor';
import theme from 'theme';

export default ({ colors = ['yellow'], onChange }) => {
  return (
    <Flex
      width={theme.colorRadius * 2 * colors.length * 1.25}
      justifyContent="space-between"
    >
      {colors.map(color => (
        <MaterialColor
          key={color}
          color={color}
          onClick={() => onChange && onChange(color)}
        />
      ))}
    </Flex>
  );
};
