import { Box } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const ContentBox = styled(Box)`
  width: 100%;
  max-width: ${theme.contentWidth}px;
  @media screen and (max-width: ${theme.breakpoints[0]}) {
    padding: ${theme.space[0]};
  }
`;

export default ContentBox;
