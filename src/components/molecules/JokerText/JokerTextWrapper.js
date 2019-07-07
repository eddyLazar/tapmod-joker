import { Text } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const JokerTextWrapper = styled(Text)`
  position: absolute;
  z-index: 1;
  top: 60%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.500437675070028) 65%,
    rgba(254, 254, 254, 0) 100%
  );
  padding: 24px 0px;

  ${theme.helpers.onMedium(`
    padding: 0px;
    background: none;
    top: ${theme.jokerHeight / 2 - 24}px;
  `)}
`;

JokerTextWrapper.defaultProps = {
  width: ['100%', 'auto'],
  textAlign: ['center', 'left']
};

export default JokerTextWrapper;
