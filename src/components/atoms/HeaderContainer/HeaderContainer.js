import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const HeaderContainer = styled(Flex)`
  background-color: ${theme.colors.card};
  height: 60;
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
`;

HeaderContainer.defaultProps = {
  justifyContent: 'space-around'
};

export default HeaderContainer;
