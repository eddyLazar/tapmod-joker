import { Box } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const ContentBox = styled(Box)`
  width: 100%;
  max-width: ${theme.contentWidth}px;
`;

export default ContentBox;
