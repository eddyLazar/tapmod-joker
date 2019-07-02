import React from 'react';
import { storiesOf } from '@storybook/react';
import GameCategoryList from './GameCategoryList';
import data from 'data';

storiesOf('organisms|GameCategoryList', module).add('basic', () => (
  <GameCategoryList categoryList={data.categoryList} />
));
