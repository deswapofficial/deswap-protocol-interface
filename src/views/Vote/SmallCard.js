import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Avatar
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
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
    fontWeight: '400',
    fontSize: 14,
    color: "rgba(153, 153, 153, 1)",
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34,
    paddingTop: 8
  },
  avatar: {
    width: 33.33,
    height: 33.33,
    marginBottom: 10
  }
}));

function SmallCard({title, amount}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Avatar
            className={classes.avatar}
            src="/static/group_fill.png"
        />
        <Typography className={classes.title}>
            {title}
        </Typography>
        <Typography className={classes.amount}>
            {amount}
        </Typography>
    </Card>
  );
}

export default SmallCard;
