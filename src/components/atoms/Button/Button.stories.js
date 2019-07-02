import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('atoms|Button', module).add('primary', () => (
  <Button onClick={action('clicked')} type="primary">
    Показать еще
  </Button>
));
