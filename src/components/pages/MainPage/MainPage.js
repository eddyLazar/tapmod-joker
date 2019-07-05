import React from 'react';
import GamesContainer from 'components/organisms/GamesContainer';
import JokerContainer from 'components/organisms/JokerContainer';
import PageLayout from 'components/templates/PageLayout';
import ContentBox from 'components/atoms/ContentBox';

export default () => (
  <PageLayout>
    <ContentBox px={[1, 0]}>
      <JokerContainer />
      <GamesContainer />
    </ContentBox>
  </PageLayout>
);
