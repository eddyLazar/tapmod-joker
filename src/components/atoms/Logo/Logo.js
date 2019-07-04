import styled from 'styled-components';
import theme from 'theme';

const Logo = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[2]};
  text-transform: uppercase;
  font-weight: bold;
`;

Logo.defaultProps = {
  children: 'Joker.Poker'
};

export default Logo;
