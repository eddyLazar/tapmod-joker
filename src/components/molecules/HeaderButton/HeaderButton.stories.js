import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderButton from './HeaderButton';

storiesOf('molecules|RegButton', module).add('basic', () => (
  <HeaderButton>sign up</HeaderButton>
));
