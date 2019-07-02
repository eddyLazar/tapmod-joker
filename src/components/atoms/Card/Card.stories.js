import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import { Title } from 'components/atoms/Typography';
import { Box } from 'rebass';

storiesOf('atoms|Card', module)
  .add('basic', () => (
    <Box width={256} m={2}>
      <Card width="auto">
        <Title textAlign="center">hello i am card</Title>
      </Card>
    </Box>
  ))
  .add('hover card', () => (
    <Box width={256} m={2}>
      <Card width="auto" withHover>
        <Title textAlign="center">hello i am card</Title>
      </Card>
    </Box>
  ));
