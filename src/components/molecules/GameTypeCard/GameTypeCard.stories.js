import React from 'react';
import { storiesOf } from '@storybook/react';
import GameTypeCard from './GameTypeCard';
import { Flex } from 'rebass';

storiesOf('molecules|GameType', module).add('basic', () => (
  <Flex height="200px">
    <GameTypeCard>hello</GameTypeCard>
    <GameTypeCard>hello</GameTypeCard>
    <GameTypeCard isActive>hello</GameTypeCard>
  </Flex>
));
