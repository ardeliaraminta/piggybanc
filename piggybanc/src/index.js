import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './pages/landing';
import { createTheme, ThemeProvider } from "@material-ui/core";
import reportWebVitals from './reportWebVitals';
import Inter from './assets/Inter/Inter-Regular.ttf';

const theme = createTheme({
  palette: {
    primary: {
      main: "#273250",
    },
    secondary: {
      main: '#08143D',
    },
  },

  typography: {
    fontFamily: 'Inter, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), url(${Inter}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}><Landing /></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
