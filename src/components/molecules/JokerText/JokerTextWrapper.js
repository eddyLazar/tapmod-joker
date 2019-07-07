import { Text } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const JokerTextWrapper = styled(Text)`
  position: absolute;
  z-index: 1;
  top: ${theme.jokerHeight / 1.5}px;
  ${theme.helpers.onMedium(`
    top: ${theme.jokerHeight / 2}px;
  `)}
`;

JokerTextWrapper.defaultProps = {
  width: ['100%', 'auto'],
  textAlign: ['center', 'left']
};

export default JokerTextWrapper;
