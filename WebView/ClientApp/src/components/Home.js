import React, { Component } from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Scouts!</h1>
        <p>This website was built with the intention of helping scouts young and old memorize the many things that we Scouts need to learn.
          you will find many fun games to help you memorize the various sayings. They include the Scout Oath, Scout Law, Outdoor Code, and Leave No Trace.
        </p>

        <br />

        <p>
          Select one of the options below to get started. 
        </p>

        {/* <div className={useStyles().root}>
          <Paper elevation={3}>Scout Oath</Paper>
          <Paper elevation={3}>Scout Law</Paper>
          <Paper elevation={3}>Outdoor Code</Paper>
          <Paper elevation={3}>Leave No Trace</Paper>

        </div> */}

      </div>
    );
  }
}
