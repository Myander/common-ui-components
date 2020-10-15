import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        Setup Storybook, styled-components, and then start building components!!
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
