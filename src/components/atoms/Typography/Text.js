import React from 'react';
import { Text } from 'rebass';

export default ({ children, ...props }) => (
  <Text fontSize={2} color="text" {...props}>
    {children}
  </Text>
);
