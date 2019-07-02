import React from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  overflow-x: scroll;
`;

export default ({ children }) => (
  <StyledBox>
    <Flex>{children}</Flex>
  </StyledBox>
);
