import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { Box } from 'rebass';
import 'normalize.css';
import '../src/index.css';
import '../src/components/atoms/Icon/iconfont.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <React.Fragment>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </React.Fragment>
));

addDecorator(storyFn => (
  <Box p={[1, 4]} backgroundColor="#211e1c">
    {storyFn()}
  </Box>
));

configure(loadStories, module);
