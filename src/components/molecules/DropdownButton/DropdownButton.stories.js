import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownButton from './DropdownButton';
import { Box } from 'rebass';

const DropdownBox = ({ children }) => (
  <Box bg="card" p={1}>
    {children}
  </Box>
);

storiesOf('molecules|DropdownButton', module)
  .add('basic', () => <DropdownButton />)
  .add('large', () => <DropdownButton size="large" />)
  .add('active', () => (
    <DropdownBox>
      <DropdownButton isActive />
    </DropdownBox>
  ));
