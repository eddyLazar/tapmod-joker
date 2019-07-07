import React from 'react';
import Button from 'components/atoms/Button';
import { Box } from 'rebass';
import { Title, Text } from 'components/atoms/Typography';
import styled from 'styled-components';
import theme from 'theme';

const ColoredText = styled.span`
  color: ${theme.colors.primary};
`;

export default props => (
  <Box {...props}>
    <Title color="primary" fontSize={50} fontWeight={900} mb={30}>
      Cashback
    </Title>
    <Text fontWight="bold" fontSize={24} mb={16} fontWeight="bold">
      <ColoredText>Every Friday</ColoredText> get <ColoredText>10%</ColoredText>{' '}
      <br></br>
      of your money back
    </Text>
    <Button type="primary" width={270}>
      Join now
    </Button>
  </Box>
);