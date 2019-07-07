import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const HeaderContainer = styled(Flex)`
  background-color: ${theme.colors.card};
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0px;
  left: 0px;
  height: ${theme.headerHeight[0]}px;
  ${theme.helpers.onMedium(`
    height: ${theme.headerHeight[1]}px;
  `)}
`;

export default HeaderContainer;
