import styled from 'styled-components';
import { Text } from 'components/atoms/Typography';
import theme from 'theme';

const Logo = styled(Text)`
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  padding: 4px 8px;
  display: flex;
  align-items: center;
`;

Logo.defaultProps = {
  children: 'Joker.Poker',
  fontSize: [3, 5]
};

export default Logo;
