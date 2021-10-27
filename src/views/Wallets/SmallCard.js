import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Avatar,
  Grid
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
    [theme.breakpoints.down('xs')]: {
      alignItems: "center"
    },
    flex: "1 1 auto"
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
  avatarTitle: {
    marginBottom: 27
  },
  avatarTitleGroup: {
    marginBottom: 40,
  },
  avatarYai: {
    width: 33.33,
    height: 33.33
  },
  avatarGroup: {
    width: 23.33,
    height: 15.22,
    
    // marginTop: 10
  }
}));

function SmallCard({avatar, title, amount}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <Grid
          alignItems="center"
          container
          // justify="space-between"
          spacing={3}
          className={avatar === "yai_fill" ? classes.avatarTitle : classes.avatarTitleGroup}
      >
        <Grid item>
          <Avatar
              className={avatar==="yai_fill" ? classes.avatarYai : classes.avatarGroup}
              src={`/static/${avatar}.png`}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.title}>
              {title}
          </Typography>
        </Grid>
      </Grid>
        <Typography className={classes.amount}>
            {amount}
        </Typography>
    </Card>
  );
}

export default SmallCard;
