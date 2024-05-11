import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Appbar from './components/Appbar';
import Intro from './components/Intro';
import Works from './components/Works';
import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Jersey 10"',
      fontSize: '5rem',
    },
    fontFamily: 'Figtree',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#282c34",
        }
      }
    }
  }
});

const App = () => {
  
  return (
    <ThemeProvider theme = {theme}>
      <Appbar />
      <div className="main">
        <Intro />
        <Works />
      </div>
    </ThemeProvider>
  );
}

export default App;
