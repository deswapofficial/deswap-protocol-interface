import { Avatar, Box, Button, Card, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { callMintYAIMethod, callRepayYAIMethod, enableToken } from '../../../../actions/dashboard';
import { currencyFormatter } from '../../../../utils/contractMethods/dashboard';
import constants from '../../../../utils/CONSTANT'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 14,
        borderRadius: 14,
        background: 'rgba(255, 255, 255, 0.02)',
        boxShadow: 'none',
        color: '#FFFFFF',
        width: '100%',
        marginTop: "1.5rem",
        fontSize: "0.7rem"
    },    
    queryField: {
        padding:"0 0.5rem 0 1rem",
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
    carBox:{
        minHeight: "350px"
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
    avatarSec: {
        width: 23.33,
        height: 15.22,
        marginRight: 16
    },
    dailogCenterAvatar:{
        margin: "auto"
    },
    textColor: {
        color: "#fff"
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

export default function WalletTab() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const {selectedAddress} = useSelector(state => state.accounts)
    const [feePer, setFeePer] = useState(0)
    const [mintAmount, setMintAmount] = useState(0)
    const [repayAmount, setRepayAmount] = useState(0)
    const {availableYaiLimit, yaiMinted, yaiApproved} = useSelector(state => state.dashboard)
    
    useEffect(() => {
        if(mintAmount){
            setFeePer((mintAmount*0.001)/100)
        }
        return () => {
            setFeePer(0)
        }
    }, [mintAmount])
    
    const handleMintBtn = () => {
        if(mintAmount < 0){
            enqueueSnackbar("please provide mint amount", constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        dispatch(callMintYAIMethod(selectedAddress, mintAmount))
    }

    const handleMintRepayBtn = () => {
        if(repayAmount < 0){
            enqueueSnackbar("please provide repay mint amount", constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        dispatch(callRepayYAIMethod(selectedAddress, repayAmount))
    }
    const handleAppoveBtn = () => {
        dispatch(enableToken(constants.YAI_TOKEN_ADDRESS, constants.YAI_CONTROLLER_ADDRESS, selectedAddress))
    }
    return (
        <Box p={3}>
            <Grid container spacing={3}>
                <Grid item xs={6} className={classes.carBox}>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                className={classes.queryField}
                                type="number"
                                placeholder="0"
                                InputProps={{ inputProps: { min: 0} }}
                                value={mintAmount}
                                disabled={availableYaiLimit<=0}
                                onChange={e => {
                                setMintAmount(e.currentTarget.value)}}
                            />
                        </Grid>
                        <Grid item xs={2} className={classes.centerDiv}>
                            <Button 
                                color="primary"
                                fullWidth
                                disabled={availableYaiLimit<=0}
                                onClick={() => setMintAmount(availableYaiLimit)}
                            >
                                Max
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Card
                                className={classes.root}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={8}>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            className={classes.textColor}
                                        >
                                            <Avatar
                                            className={classes.avatarSec}
                                            src="/static/Yai.png"
                                            />
                                            Available YAI Limit
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                            {availableYaiLimit? `${currencyFormatter(availableYaiLimit,false)} YAI` : "0 YAI"}
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            className={classes.textColor}
                                        >
                                            <Avatar
                                            className={classes.avatarSec}
                                            src="/static/Yai.png"
                                            />
                                            Mint Fee
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {feePer}YAI (0.001%)
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disabled={availableYaiLimit<=0}
                                            onClick={handleMintBtn}
                                        >
                                            Mint YAI
                                        </Button>
                                    </Grid>
                                    <Grid item xs={8}>
                                        YAI Balance
                                    </Grid>
                                    <Grid item xs={4}>
                                        {yaiMinted? `${currencyFormatter(yaiMinted, false)} YAI` : "0 YAI"}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.carBox}>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                fullWidth
                                className={classes.queryField}
                                type="number"
                                placeholder="0"
                                InputProps={{ inputProps: { min: 0} }}
                                value={repayAmount}
                                disabled={!yaiApproved}
                                onChange={e => {
                                setRepayAmount(e.currentTarget.value)}}
                            />
                        </Grid>
                        <Grid item xs={2} className={classes.centerDiv}>
                            <Button 
                                color="primary"
                                fullWidth
                                disabled={!yaiApproved}
                                onClick={() => setRepayAmount(yaiMinted)}
                            >
                                Max
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Card
                                className={classes.root}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={8}>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            className={classes.textColor}
                                        >
                                            <Avatar
                                            className={classes.avatarSec}
                                            src="/static/Yai.png"
                                            />
                                            Repay YAI Balance
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {yaiMinted? `${currencyFormatter(yaiMinted, false)} YAI` : "0 YAI"}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {
                                            yaiApproved ? 
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth
                                                    style={{marginTop:40}}
                                                    onClick={handleMintRepayBtn}
                                                >
                                                    Repay YAI
                                                </Button>
                                            :
                                                <Button
                                                    color="primary"
                                                    fullWidth
                                                    style={{marginTop:40}}
                                                    onClick={handleAppoveBtn}
                                                >
                                                    Approve
                                                </Button>
                                        }
                                    </Grid>
                                    <Grid item xs={8}>
                                        YAI Balance
                                    </Grid>
                                    <Grid item xs={4}>
                                        0
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
