import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const StyledBox = styled(Box)`
  overflow: visible;
  max-width: 100%;

  ${theme.helpers.onSmallOnly(`
    overflow-x: scroll;
  `)}
`;

export default ({ children }) => (
  <StyledBox>
    <Flex>{children}</Flex>
  </StyledBox>
);
