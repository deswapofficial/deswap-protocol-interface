import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 72,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      alignItems: "center"
    }
  },
  title : {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 48,
    paddingTop: 24,
  },
}));

function LargeCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Typography className={classes.title}>
            Weight of Acceptence
          </Typography>
        <Typography className={classes.amount}>
            0.00
        </Typography>
    </Card>
  );
}

export default LargeCard;
