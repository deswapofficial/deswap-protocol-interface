import { Button, DialogContentText } from '@material-ui/core';
import { Avatar, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBorowValue, setRepayBorrowValue, setSupplyValue, setWithdrawSupply } from '../../../../actions/dashboard';

const useStyles = makeStyles((theme) => ({
    queryField: {
        padding:"0 2rem",
        "& .MuiInput-root . MuiInput-notchedOutline": {
            borderColor: "white",
            borderRadius: 15,
        },
        "& .MuiInput-input" : {
            color: 'white',  
            fontSize: "2rem",
            textAlign: "center"
        }
    },
    input: {
        fontSize: "2rem",
        textAlign: "center",
        "&::placeholder": {
            textOverflow: "ellipsis !important",
            color: "#999999"
        },
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        }
    },
    headertext:{
        padding:"2rem"
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: 12
      },
      dailogCenterAvatar:{
        margin: "auto"
      }, 
      center: {
          textAlign: "center"
      },
      centerDiv:{
        display: "flex",
        justifyItems: "center",
        alignItems: "center"
      }
  
  }));
  
export default function TabHeader({data}) {
    const {popupTabValue, isCoinEnabled, supplyAmount, supplyWithdrawAmount, borrowAmount, availableCredit, repayBorrowAmount, coinPriceList, yaiMinted} = useSelector(state => state.dashboard)
    const dispatch = useDispatch()
    const classes = useStyles();
    const handleSupllyMax = () => {
        let maxAmount = data.wallet/ data.exchangeRate
        dispatch(setSupplyValue(maxAmount))
    }
    const handleSupplywithdrawMax = () => {
        let minted = yaiMinted || 0
        dispatch(setWithdrawSupply(data.supplyBalance - data.borrowBalance - minted))
    }
    const handleRepayBorrowMax = () => {
        dispatch(setRepayBorrowValue(data.borrowBalance))
    }
    const handleBorrowMax = () => {
        let {apiId} = data;
        let {usd:usdPrice} = coinPriceList[apiId] || 1
        let borrowMax = availableCredit / usdPrice;
        dispatch(setBorowValue(borrowMax))
    }
    if(popupTabValue === "supply" && isCoinEnabled){
        return <>
            <Grid item xs={12}>
              <Avatar
                  className={classes.dailogCenterAvatar}
                  src={data.logo}
                />
            </Grid>
            <Grid item xs={12}>
              <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                <Grid container>
                    <Grid item xs={12}>
                        <span className={classes.center}>Provide amount to supply {data.name} to the Deswap</span>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            <Grid container>
                                <Grid item xs={10}>
                                    <TextField
                                        fullWidth
                                        className={classes.queryField}
                                        type="number"
                                        placeholder="Supply Amount"
                                        InputProps={{ inputProps: { min: 0} }}
                                        value={supplyAmount}
                                        onChange={e => {
                                        dispatch(setSupplyValue(e.currentTarget.value))}}
                                    />
                                </Grid>
                                <Grid item xs={2} className={classes.centerDiv}>
                                    <Button 
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={handleSupllyMax}
                                    >
                                        Max
                                    </Button>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
              </DialogContentText>
            </Grid>
        </>
    } else if(popupTabValue === "supply" && !isCoinEnabled) {
        return (
        <>
            <Grid item xs={12}>
              <Avatar
                  className={classes.dailogCenterAvatar}
                  src={data.logo}
                />
            </Grid>
            <Grid item xs={12}>
                <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                        To supply {data.name} to the Deswap, you need to approve it first
                        </Grid>
                    </Grid>
                </DialogContentText>
            </Grid>
        </>)
    } else if(popupTabValue === "supplyWithdraw"){
        return <>
           <Grid container>
                <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            <Grid container>
                                <Grid item xs={10}>
                                    <TextField
                                        fullWidth
                                        className={classes.queryField}
                                        type="number"
                                        placeholder="Withdraw Amount"
                                        value={supplyWithdrawAmount}
                                        InputProps={{ inputProps: { min: 0} }}
                                        disabled={!isCoinEnabled}
                                        sx={{marginBottom:"10px"}}
                                        onChange={e => {
                                            dispatch(setWithdrawSupply(e.currentTarget.value))
                                            }
                                        }
                                    />
                                </Grid>
                                <Grid item xs={2} className={classes.centerDiv}>
                                    <Button 
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={handleSupplywithdrawMax}
                                    >
                                        Max
                                    </Button>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{padding:"1.7rem", paddingBottom:0}}>
                        <span className={classes.center}>Your available withdraw amount = total Supply Amount - YAI amount minned - Borrow amount</span>
                    </Grid>
                </DialogContentText>
            </Grid>
        </>
    } else if(popupTabValue === "repayBorrow" && isCoinEnabled){
        // #TODO update the field vlaue to set in reducers
        return <>
            <Grid item xs={12}>
            <Avatar
                className={classes.dailogCenterAvatar}
                src={data.logo}
                />
            </Grid>
            <Grid item xs={12}>
            <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                <Grid container>
                    <Grid item xs={12}>
                        <span className={classes.center}>Provide amount to Repay Borrow {data.name} to the Deswap</span>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                        <Grid container>

                            <Grid item xs={10} className={classes.centerDiv}>
                                <TextField
                                    fullWidth
                                    className={classes.queryField}
                                    type="number"
                                    InputProps={{ inputProps: { min: 0} }}
                                    placeholder="Supply Amount"
                                    value={repayBorrowAmount}
                                    onChange={e => {
                                    dispatch(setRepayBorrowValue(e.currentTarget.value))}}
                                />
                            </Grid>
                            <Grid item xs={2} className={classes.centerDiv}>
                                <Button 
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    onClick={handleRepayBorrowMax}
                                >
                                    Max
                                </Button>
                            </Grid>
                        </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContentText>
            </Grid>
        </>
    } else if(popupTabValue === "repayBorrow" && !isCoinEnabled) {
        return (
        <>
            <Grid item xs={12}>
              <Avatar
                  className={classes.dailogCenterAvatar}
                  src={data.logo}
                />
            </Grid>
            <Grid item xs={12}>
                <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                    <Grid container>
                        <Grid item xs={12} className={classes.center}>
                        To Repay {data.name} to the Deswap, you need to approve it first
                        </Grid>
                    </Grid>
                </DialogContentText>
            </Grid>
        </>)
    } else if(popupTabValue === "borrow"){
        return <Grid container>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    className={classes.queryField}
                    type="number"
                    InputClassName={classes.headertext}
                    placeholder="Withdraw Amount"
                    value={borrowAmount}
                    InputProps={{ inputProps: { min: 0} }}
                    sx={{marginBottom:"10px"}}
                    onChange={e => {
                        dispatch(setBorowValue(e.currentTarget.value))
                        }
                    }
                />
            </Grid>
            <Grid item xs={2} className={classes.centerDiv}>
                <Button 
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={handleBorrowMax}
                >
                    Max
                </Button>
            </Grid>
        </Grid>
    }
    return null
}
