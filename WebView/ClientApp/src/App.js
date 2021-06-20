import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Oath } from './components/Oath';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import './custom.css'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#CE1126"
    },
    secondary: {
      main: "#003F87"
    }
  }
});

export default function App() {
    return (
      <ThemeProvider theme={theme}>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Oath' component={Oath} />
      </Layout>
      </ThemeProvider>
    );
  }
