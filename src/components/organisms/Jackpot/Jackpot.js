import React from 'react';
import JackpotCard from './JackpotCard';
import JackpotDiamond from 'components/molecules/JackpotDiamond';
import { Text } from 'components/atoms/Typography';

export default () => (
  <JackpotCard>
    <JackpotDiamond />
    <Text fontSize={[18, 24]} fontWeight="bold" color="white">
      Casino Jackpot
    </Text>
    <Text fontSize={[26, 48]} fontWeight="bold" color="white">
      € 7 368 984
    </Text>
  </JackpotCard>
);
