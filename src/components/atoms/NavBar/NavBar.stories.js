import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './NavBar';
import NavLink from './NavLink';

storiesOf('atoms|NavBar', module).add('basic', () => (
  <NavBar>
    <NavLink>hello</NavLink>
    <NavLink isActive>world</NavLink>
    <NavLink>hello</NavLink>
  </NavBar>
));
