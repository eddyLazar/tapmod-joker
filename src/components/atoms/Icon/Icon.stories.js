import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import { Flex, Text, Card } from 'rebass';

const IconCard = ({ children }) => (
  <Card border="1px solid white" m={1} py={4} width="10%">
    <Text textAlign="center">{children}</Text>
  </Card>
);

const iconNames = ['calendar', 'joystick', 'gift', 'help', 'more-vert'];

storiesOf('atoms|Icon', module).add('basic', () => (
  <React.Fragment>
    <Flex flexWrap="wrap">
      {iconNames.map(iconName => (
        <IconCard key={iconName}>
          <Icon type={iconName}></Icon>
        </IconCard>
      ))}
    </Flex>
  </React.Fragment>
));
