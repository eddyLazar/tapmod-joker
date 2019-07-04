import React from 'react';
import { storiesOf } from '@storybook/react';
import MaterialColor from './MaterialColor';

storiesOf('atoms|MaterialColor', module).add('basic', () => (
  <MaterialColor color="yellow" />
));
