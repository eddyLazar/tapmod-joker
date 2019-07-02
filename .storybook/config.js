import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { IconFont } from '../src/components/atoms/Icon';
import { Box } from 'rebass';
import 'normalize.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <React.Fragment>
    <IconFont></IconFont>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </React.Fragment>
));

addDecorator(storyFn => (
  <Box p="8px" backgroundColor="#211e1c">
    {storyFn()}
  </Box>
));

configure(loadStories, module);
