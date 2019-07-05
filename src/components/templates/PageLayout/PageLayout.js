import React from 'react';
import { Flex, Box, Card } from 'rebass';
import ContentBox from 'components/atoms/ContentBox';
import Header from 'components/organisms/Header';
import Sidebar from 'components/organisms/Sidebar';
import theme from 'theme';
import PageLayoutContainer from './PageLayoutContainer';

export default ({ children }) => (
  <PageLayoutContainer>
    <Header />
    <Sidebar />
    <Box mb={theme.headerHeight}></Box>
    {children}
    <ContentBox>Footer</ContentBox>
  </PageLayoutContainer>
);
