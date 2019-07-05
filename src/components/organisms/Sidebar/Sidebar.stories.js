import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from './Sidebar';
import SidebarButton from './SidebarButton';
import MenuToggleButton from './MenuToggleButton';

storiesOf('organisms|Sidebar', module)
  .add('sidebar', () => <Sidebar />)
  .add('sidebar button', () => <SidebarButton type="gift" />)
  .add('sidebar button active', () => <SidebarButton isActive type="gift" />)
  .add('MenuToggleButton', () => <MenuToggleButton />);
