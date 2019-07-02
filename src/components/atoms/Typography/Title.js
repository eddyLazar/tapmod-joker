import React from 'react';
import { Text } from 'rebass';

export default ({ children, ...props }) => (
  <Text fontSize={4} fontWeight="bold" {...props}>
    {children}
  </Text>
);
