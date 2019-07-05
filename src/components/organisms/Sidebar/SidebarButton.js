import React from 'react';
import IconButton from 'components/molecules/IconButton';
import styled from 'styled-components';

const SidebarButton = styled(IconButton)`
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    box-sizing: border-box;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #f09235;
    display: ${({ isActive = false }) => (isActive ? 'block' : 'none')};
    transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;

export default SidebarButton;
