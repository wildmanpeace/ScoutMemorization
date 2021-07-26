import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Oath } from './components/Oath';
import { Law } from './components/Law';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import './custom.css'
import { Register } from './components/Register/Register';


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
        <Route path='/Law' component={Law} />
        <Route path='/Register' component={Register} />
      </Layout>
      </ThemeProvider>
    );
  }
