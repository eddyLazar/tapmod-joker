import React from 'react';
import { storiesOf } from '@storybook/react';
import GameTypeSelect from './GameTypeSelect';

storiesOf('organisms|GameTypeSelect', module).add('basic', () => (
  <GameTypeSelect />
));
