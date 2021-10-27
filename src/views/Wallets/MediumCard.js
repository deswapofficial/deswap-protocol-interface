import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('xs')]: {
      alignItems: "center"
    },
    minHeight: 325
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
    paddingTop: 15,
    paddingBottom: 44
  },
  button: {
    color: 'white',
    background: 'rgba(228, 71, 87, 1)',
    borderRadius: 100,
    fontSize: 16,
    fontWeight: 700,
    padding: 16,
    [theme.breakpoints.down('xs')]: {
      width: "100%"
    }
  },
  button2: {
    color: 'rgba(228, 71, 87, 1)',
    background: 'rgba(228, 71, 87, 0.12)',
    borderRadius: 100,
    fontSize: 16,
    fontWeight: 700,
    padding: 16,
    [theme.breakpoints.down('xs')]: {
      width: "100%"
    }
  },
  queryField: {
    // width: 430,
    paddingBottom: 30,
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
        borderRadius: 15,
    },
    "& .MuiOutlinedInput-input" : {
        padding: 12.5,
        color: 'white'
    }
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#999999"
    }
  }

}));

function MediumCard({title, amount, amountStr, type, clickMethod, changeField, placeHolder}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Typography className={classes.title}>
            {title}
        </Typography>
        <Typography className={classes.amount}>
            {amountStr}
        </Typography>
        <TextField
              className={classes.queryField}
              type="number"
              placeholder={placeHolder}
              variant="outlined"
              value={amount}
              onChange={e => {
              changeField(e.currentTarget.value)}}
          />
        <Button 
          variant="contained" 
          className={type==="Enable" ? classes.button : classes.button2}
          onClick={clickMethod}
          >
            {type}
        </Button>
    </Card>
  );
}

export default MediumCard;
