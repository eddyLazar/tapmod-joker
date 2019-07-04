import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  overflow-y: visible;
  overflow-x: scroll;
  max-width: 100%;
`;

export default ({ children }) => (
  <StyledBox>
    <Flex>{children}</Flex>
  </StyledBox>
);
