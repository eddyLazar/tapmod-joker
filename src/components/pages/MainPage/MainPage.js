import React from 'react';
import GamesContainer from 'components/organisms/GamesContainer';
import JokerContainer from 'components/organisms/JokerContainer';
import PageLayout from 'components/templates/PageLayout';

export default () => (
  <PageLayout>
    <JokerContainer />
    <GamesContainer />
  </PageLayout>
);
