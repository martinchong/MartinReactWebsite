import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Appbar from './components/Appbar';
import Intro from './components/Intro';
import Works from './components/Works';
import Footer from './components/Footer';
import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Figtree',
      fontSize: '5rem',
      fontWeight: '600',
    },
    fontFamily: 'Figtree',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FFFFFF",
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
