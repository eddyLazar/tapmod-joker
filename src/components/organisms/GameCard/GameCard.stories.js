import React from 'react';
import { storiesOf } from '@storybook/react';
import GameCard from './GameCard';
import { Box } from 'rebass';

storiesOf('organisms|GameCard', module).add('basic', () => (
  <Box width={256} m={3}>
    <GameCard
      name="Starburst"
      imgPath="https://sol1.casino/images/games/netent/starburst_not_mobile_sw.png"
      href="http://google.com"
    />
  </Box>
));
