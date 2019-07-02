import React from 'react';
import { storiesOf } from '@storybook/react';
import GamesList from './GamesList';
import data from 'data.json';
import { Box } from 'rebass';

storiesOf('organisms|GamesList', module).add('basic', () => (
  <Box bg="page">
    <GamesList games={data.games} />
  </Box>
));
