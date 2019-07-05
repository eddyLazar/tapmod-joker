import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import theme from 'theme';

const PageLayoutContainer = styled(Flex)`
  background-image: url('https://sol1.casino/images/main-banner/cashback-bg.jpg');
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: '';
    display: 'block';
    background-image: url('https://sol1.casino/images/main-banner/bg-overlay.svg');
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Overlay = styled.div`
  background-image: url('https://sol1.casino/images/main-banner/bg-overlay.svg');
  background-repeat: no-repeat;
`;

PageLayoutContainer.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'layout',
  width: [1, `calc(100% - ${theme.sidebarWidth}px)`],
  ml: [0, theme.sidebarWidth],
  mt: theme.headerHeight
};
export default PageLayoutContainer;
// export default ({ children }) => (
//   <PageLayoutContainer>
//     <Overlay>{children}</Overlay>
//   </PageLayoutContainer>
// );
