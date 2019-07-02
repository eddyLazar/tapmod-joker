import React from 'react';
import { storiesOf } from '@storybook/react';
// import JackpotCard from './JackpotCard';
import JackpotDiamond from './JackpotDiamond';
import Card from 'components/atoms/Card';

storiesOf('molecules|JackpotDiamond', module).add('basic', () => (
  <Card border="1px solid black" style={{ height: 250 }}>
    <JackpotDiamond />
  </Card>
));

// storiesOf('molecules|JackpotCard/Icon', module).add('basic', () => (
//   <JackpotDiamondIcon />
// ));
