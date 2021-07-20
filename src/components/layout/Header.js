import React from 'react';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Logo from 'assets/logo.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 21px 0 rgba(0, 0, 0, 0.07)',
  },
  title: {
    padding: '0 8px',
  },
});

function Header() {
  const classes = useStyles();

  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.root} elevation={0}>
          <Toolbar>
            <img src={Logo} width="48" height="48" alt="Logo" />

            <Typography className={classes.title} variant="h6" color="primary">
              Gymondo
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* This is a workaround to compensate for the AppBar
       height while it is on top of the page */}
      <Toolbar />
    </>
  );
}

export default Header;
