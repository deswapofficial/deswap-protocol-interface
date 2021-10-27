import React from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  LinearProgress,
  withStyles
} from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 8,
      width: "100%",
      borderRadius: 100,
    },
    colorPrimary: {
      backgroundColor: '#262626',
    },
    bar: {
      borderRadius: 100,
      backgroundColor: 'white',
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF'
  },
  avatar: {
    width: 23.33,
    height: 15.22,
    marginRight: 16
  },
  title : {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: "rgba(153, 153, 153, 1)",
    paddingRight: 64,
    [theme.breakpoints.down('md')]: {
      paddingRight: 0
    }
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34,
    paddingTop: 8
  },
  detail: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
  },
  layout: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingBottom: 24,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 0,
    }
  },
  part : {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      paddingBottom: 40
    }
  }
}));

function Amount() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <Box
        className={classes.layout}
      >
          <Box
            className={classes.part}
          >
            <Typography className={classes.title}>
                Daily Distribution
            </Typography>
            <Typography className={classes.amount}>
                4,515.23
            </Typography>
          </Box>
          <Box
            className={classes.part}
          >
            <Typography className={classes.title}>
                Remainning
            </Typography>
            <Typography className={classes.amount}>
                2,225,862.22
            </Typography>
          </Box>
      </Box>
      <BorderLinearProgress variant="determinate" value={52} />
    </Card>
  );
}

export default Amount;
