import React from 'react';
import { Box } from 'rebass';
import ContentBox from 'components/atoms/ContentBox';
import Header from 'components/organisms/Header';
import Sidebar from 'components/organisms/Sidebar';
import theme from 'theme';
import PageLayoutContainer from './PageLayoutContainer';
import Footer from 'components/organisms/Footer';

export default ({ children }) => (
  <PageLayoutContainer>
    <img
      style={{ position: 'absolute', top: 0 }}
      src="https://sol1.casino/images/main-banner/bg-overlay.svg"
      alt=""
    />
    <Header />
    <Sidebar />
    <Box mb={theme.headerHeight}></Box>
    {children}
    <Box mb={60} />
    <ContentBox>
      <Footer />
    </ContentBox>
  </PageLayoutContainer>
);
