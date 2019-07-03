import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './Spinner';
import { Box } from 'rebass';

storiesOf('molecules|Spinner', module).add('basic', () => (
  <Box style={{ position: 'relative', height: 200 }}>
    <Spinner />
  </Box>
));
