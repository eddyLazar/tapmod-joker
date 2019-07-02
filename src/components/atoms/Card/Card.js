import { Card as Base } from 'rebass';
import styled from 'styled-components';
import theme from 'theme';

const hoverStyle = `
  box-shadow: 0 6px 17px -7px ${theme.colors.primary};
  transform: translate3d(0, -5px, 0);
  cursor: pointer;
`;

const Card = styled(Base)`
  overflow: hidden;
  position: relative;
  transition: ${theme.transition};
  cursor: ${({ withHover }) => (withHover ? 'pointer' : 'initial')};
  &:hover {
    ${({ withHover = false }) => (withHover ? hoverStyle : '')};
  }
`;

Card.defaultProps = {
  borderRadius: 8,
  bg: 'card',
  color: 'cardText',
  p: 3
};

export default Card;
