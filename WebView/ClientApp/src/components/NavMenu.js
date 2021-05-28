import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
({
  typo: {
    flex: 1
  },
  navButton: {
    color: 'white'
  }
}))


export default function NavMenu() {

  const classes = useStyles();
    return (
      <div>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Typography className={classes.typo} varient="h3">Hello World</Typography>
            <div>
            <Button className={classes.navButton} component={Link} to="/">Home</Button>
            <Button className={classes.navButton} component={Link} to="/counter">Counter</Button>
            <Button className={classes.navButton} component={Link} to="/fetch-data">Fetch date</Button>
            </div>
          </Toolbar>

        </AppBar>
      </div>
    );
}
