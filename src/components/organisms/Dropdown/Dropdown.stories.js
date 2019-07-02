import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from './Dropdown';
import { Box } from 'rebass';

const DropdownBox = ({ children }) => (
  <Box bg="card" p={2}>
    {children}
  </Box>
);

storiesOf('organisms|Dropdown', module)
  .add('basic', () => (
    <DropdownBox>
      <Dropdown />
    </DropdownBox>
  ))
  .add('large', () => (
    <DropdownBox>
      <Dropdown size="large" />
    </DropdownBox>
  ));
