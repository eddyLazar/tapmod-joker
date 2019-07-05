import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorPicker from './ColorPicker';
import { action } from '@storybook/addon-actions';

storiesOf('molecules|ColorPicker', module).add('basic', () => (
  <ColorPicker onChange={action('pick color')} albedoColor={[1, 0.5, 0.2]} />
));
