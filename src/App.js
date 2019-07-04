import React from 'react';
import MainPage from 'components/pages/MainPage';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <MainPage />
  </ThemeProvider>
);

export default App;
