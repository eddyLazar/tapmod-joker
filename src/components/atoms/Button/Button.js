import React from 'react';
import { Button as BaseButton } from 'rebass';
import styled from 'styled-components';
import theme from '../../../theme';

const Button = ({ children, type = 'default', ...props }) => (
  <BaseButton fontSize={2} variant={type} {...props}>
    {children}
  </BaseButton>
);

export default styled(Button)({
  transition: theme.transition,
  '&:focus': {
    outline: 0
  },
  '&:hover': {
    cursor: 'pointer'
  }
});
