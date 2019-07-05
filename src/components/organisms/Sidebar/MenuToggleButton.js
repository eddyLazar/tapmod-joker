import React, { useState } from 'react';
import styled from 'styled-components';
// import IconButton from 'components/molecules/IconButton';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import theme from 'theme';

const MenuToggleButton = styled(Button)`
  width: ${theme.sidebarWidth}px;
  height: ${theme.headerHeight}px;
  /* background-color: ${theme.colors.primary}; */
  color: ${theme.colors.white};
  border-radius: 0px;
  margin-bottom: 25px;
  box-shadow: 0 7px 14px 0 rgba(240, 146, 53, 0.39);
`;

MenuToggleButton.defaultProps = {
  children: <Icon type="burger" />,
  type: 'primary'
};

export default MenuToggleButton;
