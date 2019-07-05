import styled from 'styled-components';
import theme from 'theme';

const Logo = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[5]}px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 4px 8px;
`;

Logo.defaultProps = {
  children: 'Joker.Poker'
};

export default Logo;
