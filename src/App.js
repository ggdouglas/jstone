import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import AppBar from './components/AppBar';
import Main from './components/Main';
import ModalContainer from './components/modals/ModalContainer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Main />
        <ModalContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
