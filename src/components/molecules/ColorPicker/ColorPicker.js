import React from 'react';
import { Flex } from 'rebass';
import MaterialColor from 'components/atoms/MaterialColor';
import theme from 'theme';

export default ({ colors = ['yellow'], onChange }) => (
  <Flex
    width={theme.colorRadius * 2 * colors.length * 1.25}
    justifyContent="space-between"
  >
    {colors.map(color => (
      <MaterialColor color={color} onClick={() => onChange(color)} />
    ))}
  </Flex>
);
