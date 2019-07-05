import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const HeaderContainer = styled(Flex)`
  background-color: ${theme.colors.card};
  height: 60;
  width: calc(100% - ${theme.sidebarWidth}px);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: ${theme.sidebarWidth}px;
`;

HeaderContainer.defaultProps = {
  justifyContent: 'space-around'
};

export default HeaderContainer;
