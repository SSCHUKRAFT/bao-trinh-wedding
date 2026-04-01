import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';

const muiTheme = createTheme({
  palette: {
    background: {
      default: '#000000',
      paper: '#101010',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        colorScheme: 'light',
        fontFamily: 'Overpass, sans-serif',
        headings: { fontFamily: 'Cormorant Garamond, serif' },
        primaryColor: 'orange',
      }}
    >
      <App />
    </MantineProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
