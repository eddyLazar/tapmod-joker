import React from 'react';
import { storiesOf } from '@storybook/react';
import GameCategoryIcon from './GameCategoryIcon';
import GameCategoryCard from './GameCategoryCard';
import GameCategoryName from './GameCategoryName';

storiesOf('molecules|GameCategory/Card', module)
  .add('basic', () => (
    <GameCategoryCard>
      <GameCategoryIcon type="cards-lg" />
      <GameCategoryName>World</GameCategoryName>
    </GameCategoryCard>
  ))
  .add('active', () => (
    <GameCategoryCard isActive>
      <GameCategoryIcon type="cards-lg" />
      <GameCategoryName>World</GameCategoryName>
    </GameCategoryCard>
  ));

storiesOf('molecules|GameCategory/Icon', module).add('icon', () => (
  <GameCategoryIcon type="cards-lg" />
));
