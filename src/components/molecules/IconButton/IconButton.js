import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass';
import Icon from 'components/atoms/Icon';
import theme from 'theme';

const StyledLink = styled(Link)`
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ width = '60px' }) => width};
  height: ${({ height = '60px' }) => height};
  transition: ${theme.transition};
  cursor: pointer;
  [class^='icon-'],
  [class*=' icon-'] {
    transition: ${theme.transition};
  }

  &:hover {
    ${theme.helpers.onMedium(`
      [class^='icon-'],
      [class*=' icon-'] {
        color: ${theme.colors.primary};
      }
    `)}
  }
`;

export default ({ type = '', ...props }) => (
  <StyledLink {...props}>
    <Icon type={type} color="iconButton"></Icon>
  </StyledLink>
);
