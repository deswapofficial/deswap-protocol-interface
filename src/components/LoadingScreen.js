import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3),
    backgroundColor: "#282C34bc",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1000000
  }
}));

function LoadingScreen() {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
