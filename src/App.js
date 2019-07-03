import React from 'react';
import MainPage from 'components/pages/MainPage';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
// import SketchfabWrapper from 'sketchfab-api-wrapper';

// console.log(SketchfabWrapper);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
