import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const SidebarContainer = styled(Flex)`
  z-index: ${theme.headerZindex + 1};
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  flex-direction: column;
  height: '100%';
  display: none;
  ${theme.helpers.onMedium(`
    display: flex;
  `)}
`;

SidebarContainer.defaultProps = {
  bg: 'sidebar',
  width: theme.sidebarWidth
};

export default SidebarContainer;
