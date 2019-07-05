import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './IconButton';

storiesOf('molecules|IconButton', module).add('basic', () => (
  <IconButton type="user" />
));
