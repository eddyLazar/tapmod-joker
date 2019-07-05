import React from 'react';
import { Flex, Box } from 'rebass';
import ContentBox from 'components/atoms/ContentBox';
import Header from 'components/organisms/Header';
import Sidebar from 'components/organisms/Sidebar';
import theme from 'theme';

export default ({ children }) => (
  <Flex flexDirection="column" alignItems="center" bg="layout">
    <Header />
    <Sidebar />
    <Box mb={theme.headerHeight}></Box>
    {children}
    <ContentBox>Footer</ContentBox>
  </Flex>
);
