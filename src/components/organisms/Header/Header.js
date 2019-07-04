import React from 'react';
import { Box, Flex } from 'rebass';
import Logo from 'components/atoms/Logo';
import theme from 'theme';

export default () => (
  <Flex
    bg="card"
    style={{ height: 60, width: '100%', position: 'fixed', zIndex: 9999 }}
    alignItems="center"
    justifyContent="space-around"
  >
    <Box width="100%" style={{ maxWidth: theme.contentWidth }}>
      <Logo />
    </Box>
  </Flex>
);
