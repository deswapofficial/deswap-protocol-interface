import React from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import CallMadeOutlined from '@material-ui/icons/CallMade';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      alignItems: "center"
    }
  },
  avatar: {
    width: 23.33,
    height: 15.22,
    marginRight: 16
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
    paddingTop: 10,
    paddingBottom: 16
  },
  detail: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
  },
  arrowIcon: {
    paddingLeft: 8,
    paddingBottom: 3
  }
}));

function MediumCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Box
          display="flex"
          alignItems="center"
        >
          <Avatar
            className={classes.avatar}
            src="/static/group_fill.png"
          />
          <Typography className={classes.title}>
            DAW
          </Typography>
        </Box>
        <Typography className={classes.amount}>
            0.00
        </Typography>
        <Box
            display="flex"
        >
            <Typography className={classes.detail}>
                oxDr24...24aD
            </Typography>
            <CallMadeOutlined className={classes.arrowIcon} />
        </Box>
    </Card>
  );
}

export default MediumCard;
