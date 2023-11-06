import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

import { App } from 'components/App';

const theme = {
  colors: {
    white: '#fff',
    gray: '#a3a3a3',
    black: '#000',
    accent: '#f8eb62',
    error: '#ff6060',
    inputField: '#363b54',
    bgBtn: '#1764d4e3',
    bgPage: '#181818',
  },
  transition: '500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
