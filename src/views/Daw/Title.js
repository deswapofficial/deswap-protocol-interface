import React from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Avatar,
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
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  avatar: {
    width: 23.33,
    height: 15.22,
    marginRight: 16
  },
  title : {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34
  },
  detail: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
  }
}));

function Title() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <Box 
        display="flex"
        justifyContent="start"
        alignItems="center"
        paddingBottom="24px"
      >
          <Avatar
            className={classes.avatar}
            src="/static/Group.png"
          />
          <Typography className={classes.title}>
            0 DAW
          </Typography>
      </Box>
      <Typography className={classes.detail}>
            oxDr24...24aD
      </Typography>
    </Card>
  );
}

export default Title;
