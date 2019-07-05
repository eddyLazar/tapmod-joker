import React from 'react';
import ContentBox from 'components/atoms/ContentBox';
import Header from 'components/organisms/Header';
import Sidebar from 'components/organisms/Sidebar';
import PageLayoutContainer, { Overlay } from './PageLayoutContainer';
import Footer from 'components/organisms/Footer';

export default ({ children }) => (
  <PageLayoutContainer>
    <Overlay></Overlay>
    {/* <img
      style={{ position: 'absolute', top: 0 }}
      src="https://sol1.casino/images/main-banner/bg-overlay.svg"
      alt=""
    /> */}
    <Header />
    <Sidebar />
    {children}
    <ContentBox mt={60} mb={60}>
      <Footer />
    </ContentBox>
  </PageLayoutContainer>
);
