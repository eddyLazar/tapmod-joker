import styled from 'styled-components';
import theme from 'theme';

const Color = styled.div`
  width: ${theme.colorRadius * 2}px;
  height: ${theme.colorRadius * 2}px;
  border-radius: ${theme.colorRadius}px;
  transition: ${theme.transition};
  background-color: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Color;
