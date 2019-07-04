import React from 'react';
import SketchfabModel from './SketchfabModel';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const uid = 'f6a17ff915374ac0a068370ea2fbde89';

storiesOf('atoms|SketchfabModel', module).add('basic', () => (
  <SketchfabModel uid={uid} onClick={action('click on material')}>
    {isLoading => (isLoading ? <h1>loading...</h1> : null)}
  </SketchfabModel>
));
