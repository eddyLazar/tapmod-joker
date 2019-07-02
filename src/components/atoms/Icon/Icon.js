import React from 'react';
import { Text } from 'rebass';

export default ({ type = '', className = '', ...props }) => (
  <Text color="white" className={`icon-${type} ${className}`} {...props}></Text>
);
