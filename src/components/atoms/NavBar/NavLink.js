import Link from 'components/atoms/Link';
import styled from 'styled-components';
import theme from 'theme';

const NavLink = styled(Link)`
  margin-right: 30px;
  position: relative;
  font-weight: bold;
  color: ${theme.colors.text};
  padding: 15px 5px 15px;
  &:hover {
    color: ${theme.colors.primary};
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    background-color: #f09235;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }
`;

export default NavLink;
