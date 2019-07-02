import React from 'react';
import JackpotCard from './JackpotCard';
import JackpotDiamond from 'components/molecules/JackpotDiamond';
import { Text } from 'components/atoms/Typography';

export default () => (
  <JackpotCard>
    <JackpotDiamond />
    <Text fontSize={[18, 24]} fontWeight="bold">
      Casino Jackpot
    </Text>
    <Text fontSize={[26, 48]} fontWeight="bold">
      € 7 368 984
    </Text>
  </JackpotCard>
);
