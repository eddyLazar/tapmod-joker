import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const SidebarContainer = styled(Flex)`
  z-index: ${theme.headerZindex + 1};
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  height: '100%';
  width: ${theme.sidebarWidth}px;
  flex-direction: column;
`;

SidebarContainer.defaultProps = {
  bg: 'sidebar'
};

export default SidebarContainer;
