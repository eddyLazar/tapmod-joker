import styled from 'styled-components';
import theme from 'theme';

const Color = styled.div`
  width: ${theme.colorPicker.radius * 2}px;
  height: ${theme.colorPicker.radius * 2}px;
  border-radius: ${theme.colorPicker.radius}px;
  transition: ${theme.transition};
  background-color: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Color;
