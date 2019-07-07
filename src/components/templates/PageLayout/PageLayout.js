import React from 'react';
import ContentBox from 'components/atoms/ContentBox';
import Header from 'components/organisms/Header';
import Sidebar from 'components/organisms/Sidebar';
import PageLayoutContainer, { Overlay } from './PageLayoutContainer';
import Footer from 'components/organisms/Footer';

export default ({ children }) => (
  <PageLayoutContainer>
    <Overlay></Overlay>
    <Header />
    <Sidebar />
    {children}
    <ContentBox mt={60} mb={60}>
      <Footer />
    </ContentBox>
  </PageLayoutContainer>
);
