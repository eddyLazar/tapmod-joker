import React, { useState } from 'react';
import SidebarContainer from './SidebarContainer';
import SidebarButton from './SidebarButton';
import theme from 'theme';
import MenuToggleButton from './MenuToggleButton';

const links = ['joystick', 'gift', 'calendar', 'help'];

export default () => {
  const [activeLink, setActiveLink] = useState();
  return (
    <SidebarContainer>
      <MenuToggleButton />
      {links.map(icon => (
        <SidebarButton
          key={icon}
          isActive={activeLink === icon}
          type={icon}
          width={`${theme.sidebarWidth}px`}
          height={`${theme.sidebarWidth}px`}
          onClick={() => setActiveLink(icon)}
        />
      ))}
    </SidebarContainer>
  );
};
