import React from 'react';
import Card from 'components/atoms/Card';
import { Title } from 'components/atoms/Typography';
import JackpotDiamondIcon from './JackpotDiamondIcon';

export default () => (
  <Card>
    <JackpotDiamondIcon />
    <Title mb="10px" fontSize={5}>
      Casino Jackpot
    </Title>
    <Title fontSize={6}>€ 7 203 531</Title>
  </Card>
);
