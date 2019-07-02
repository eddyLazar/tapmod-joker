import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';
import Title from './Title';

storiesOf('atoms|Typography', module)
  .add('Text', () => <Text p={2}>this is text</Text>)
  .add('Title', () => <Title p={2}>this is text</Title>);
