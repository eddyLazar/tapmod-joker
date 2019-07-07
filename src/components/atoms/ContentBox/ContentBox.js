import { Flex } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const ContentBox = styled(Flex)`
  width: 100%;
  max-width: ${theme.contentWidth}px;
`;

ContentBox.defaultProps = {
  flexDirection: 'column'
};

export default ContentBox;
