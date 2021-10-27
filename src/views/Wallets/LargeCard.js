import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Box,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        alignItems: "center",
        flexDirection: "column",
    }
  },
  part: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
        alignItems: "center",
        paddingBottom: 64
    }
  },
  title : {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: "rgba(153, 153, 153, 1)",
    [theme.breakpoints.down('md')]: {
        textAlign: "center"
    }
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 30,
    paddingTop: 8,
    [theme.breakpoints.down('md')]: {
        textAlign: "center"
    }
  }
}));

function LargeCard() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Grid
          container
          spacing={2}
        >
            <Grid
                item
                lg={3}
                sm={6}
                xs={6}
            >
                <Box
                    className={classes.part}
                >
                    <Typography className={classes.title}>
                        Total Eemission per day
                    </Typography>
                    <Typography className={classes.amount}>
                        790 DAW
                    </Typography>
                </Box>

          </Grid>
          <Grid
                item
                lg={3}
                sm={6}
                xs={6}
            >
                <Box
                    className={classes.part}
                >
                    <Typography className={classes.title}>
                        YAI Stacking APY
                    </Typography>
                    <Typography className={classes.amount}>
                        4.15%
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xs={6}
            >
                <Box
                    className={classes.part}
                >
                    <Typography className={classes.title}>
                        Total YAI Stacked
                    </Typography>
                    <Typography className={classes.amount}>
                        79,345.334 YAI
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xs={6}
            >
                <Box
                    className={classes.part}
                >
                    <Typography className={classes.title}>
                        YAI Vault Rewards Pool
                    </Typography>
                    <Typography className={classes.amount}>
                        790 DAW
                    </Typography>
                </Box>

            </Grid>
        </Grid>
    </Card>
  );
}

export default LargeCard;
