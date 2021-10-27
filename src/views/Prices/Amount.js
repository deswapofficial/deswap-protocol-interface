import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { currencyFormatter } from '../../utils/contractMethods/dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 40,
    paddingBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  title : {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: "rgba(153, 153, 153, 1)",
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34,
    paddingTop: 8
  }
}));

function Amount({label, amount}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Typography className={classes.title}>
            {label}
        </Typography>
        <Typography className={classes.amount}>
            {currencyFormatter(amount)}
        </Typography>
    </Card>
  );
}

export default Amount;
