import React, { useEffect, useState } from 'react'
import _ from "underscore";
import { Box, Button, Card, CardContent, Divider, Grid, Avatar } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import {enableToken, isEnabledCoin, redeemSupplyCoin, suplyCoin, borrowCoin, repayBorrowCoin} from "../../../../actions/dashboard"
import { useSnackbar } from 'notistack';
import constants from '../../../../utils/CONSTANT';
import { currencyFormatter } from '../../../../utils/contractMethods/dashboard';

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: 30,
      height: 30,
      marginRight: 12
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
    }
  }));
  
export default function TabPanel({value, data, handleClose}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {selectedAddress} = useSelector(state => state.accounts)
    const {isCoinEnabled, supplyAmount, supplyWithdrawAmount, borrowAmount, repayBorrowAmount, availableCredit, availableCreditPercentage, yaiMinted} = useSelector(state => state.dashboard)
    const { enqueueSnackbar } = useSnackbar();
    
    // states for the for tabs
    const [firstLable, setFirstLable] = useState("")
    const [secondLable, setSecondLable] = useState("")
    const [thirdLable, setThirdLable] = useState("")
    
    useEffect(() => {
        const {underlyingAddress, address} = data
        if(underlyingAddress, address, selectedAddress){
            dispatch(isEnabledCoin(address, underlyingAddress, selectedAddress))
        }
    },[data, selectedAddress])
    useEffect(() => {
        if(value === "supply" || value === "supplyWithdraw"){
            setFirstLable("Supply Apy")
            setSecondLable("Distributor Apy")
            setThirdLable("Available Apy")
        }
        if(value === "borrow" || value === "repayBorrow"){
            setFirstLable("Supply Apy")
            setSecondLable("Distributor Apy")
            setThirdLable("Repay Yai Balance")
        }
        return () => {
            setFirstLable("")
            setSecondLable("")
            setThirdLable("")
        }
    }, [value])
    
    const handleSupplyEnable = () => {
        const {underlyingAddress, address} = data
        if(address && underlyingAddress && selectedAddress){
            dispatch(enableToken(address, underlyingAddress, selectedAddress))
            handleClose()
        }
    }

    const handleSupplyAmount = () => {
        const {underlyingAddress, address, decimal, wallet} = data;
        if(supplyAmount <= 0){
            enqueueSnackbar(`Please provide supply amount.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(supplyAmount > wallet){
            enqueueSnackbar(`Provided supply amount is more than we have in wallet.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false

        }
        if(underlyingAddress && address && selectedAddress && supplyAmount){
            dispatch(suplyCoin(address, selectedAddress, supplyAmount, decimal))
            enqueueSnackbar(`You supply is initiated.`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
            handleClose()
        }
    }

    const handleWithdrawSupply = () => {
        const {address, decimal, supplyBalance, borrowBalance, collateralFactor, exchangeRate} = data;
        let maxVal = collateralFactor ? (supplyBalance * (collateralFactor/100)) / parseFloat(exchangeRate) :(supplyBalance / parseFloat(exchangeRate))
        let minted = yaiMinted || 0
        if(supplyWithdrawAmount <= 0){
            enqueueSnackbar(`Please provide supply withdraw amount.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(supplyWithdrawAmount > (maxVal - borrowBalance - minted)){
            enqueueSnackbar("Withdraw amount is more than the amount we have in credit", constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(address && selectedAddress && supplyWithdrawAmount){
            dispatch(redeemSupplyCoin(address, selectedAddress, supplyWithdrawAmount, decimal))
            enqueueSnackbar(`You withdrawal is initiated.`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
            handleClose()
        }
    }

    const handleBorrow = () => {
        const {underlyingAddress, address, decimal, supplyBalance, exchangeRate, collateralFactor, borrowBalance} = data;
        let maxVal = collateralFactor ? (supplyBalance * (collateralFactor/100)) / parseFloat(exchangeRate) :(supplyBalance / parseFloat(exchangeRate))
        maxVal = maxVal - borrowBalance
        
        if(borrowAmount <= 0){
            enqueueSnackbar(`Please provide borrow amount.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(borrowAmount > maxVal){
            enqueueSnackbar("Borrow amount is more than we can borrow", constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(underlyingAddress && address && selectedAddress && borrowAmount){
            dispatch(borrowCoin(underlyingAddress, address, selectedAddress, borrowAmount, decimal))
            handleClose()
            enqueueSnackbar(`You borrow is initiated.`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
        }
    }

    const handleRepayBorrow = () => {
        const {underlyingAddress, address, decimal, borrowBalance} = data;
        if(repayBorrowAmount <= 0){
            enqueueSnackbar(`Please provide repay borrow amount.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(repayBorrowAmount > borrowBalance){
            enqueueSnackbar(`Repay amount more than borrow.`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
        }
        if(underlyingAddress && address && selectedAddress && repayBorrowAmount){
            dispatch(repayBorrowCoin(underlyingAddress, address, selectedAddress, repayBorrowAmount, decimal))
            handleClose()
            enqueueSnackbar(`You repay borrow is initiated.`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
        }
    }
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}> 
                    <Grid item xs={8}>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.textColor}
                        >
                            <Avatar
                            className={classes.avatar}
                            src={data.logo}
                            />
                            {firstLable}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        {(value === "supply" || value === "supplyWithdraw") ?  data.supplyApy ? data.supplyApy.toPrecision("2") : "0" : (data.borrowApy) ? data.borrowApy.toPrecision("2") : "0"}%
                    </Grid>
                    {/* <Grid item xs={8}>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.textColor}
                        >
                            <Avatar
                            className={classes.avatarSec}
                            src="/static/Group.png"
                            />
                            {secondLable}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        0%
                    </Grid> */}
                    {/* <Grid item xs={8}>
                        <Box
                            display="flex"
                            alignItems="center"
                            className={classes.textColor}
                        >
                            <Avatar
                            className={classes.avatarSec}
                            src="/static/Yai.png"
                            />
                            {thirdLable}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        0YAI
                    </Grid> */}
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    {
                        (value === "supplyWithdraw" || value === "borrow") &&
                        <>
                            <Grid item xs={8} className={classes.textColor} sx={{padding:"5px"}} >Borrow Limit</Grid>
                            <Grid item xs={4}>{currencyFormatter(availableCredit)}</Grid>
                            <Grid item xs={8} className={classes.textColor} sx={{padding:"5px"}} >Borrow Limit Used</Grid>
                            <Grid item xs={4}>{availableCreditPercentage.toPrecision("2")}%</Grid>
                            <Grid item item xs={12}>
                                <Divider />
                            </Grid>
                        </>
                    }
                    <Grid item xs={12}>
                        {
                            
                            value === "supply" ?
                                !isCoinEnabled ? 
                                <Button 
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSupplyEnable}
                                >Enable</Button>:
                                <Button 
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={handleSupplyAmount}
                                >Supply</Button>
                            : null
                        }
                        {
                            value === "supplyWithdraw" && 
                            <Button 
                                variant="outlined"
                                color="primary"
                                fullWidth
                                onClick={handleWithdrawSupply}
                            >Withdraw</Button>
                        }
                        {
                            value === "borrow" && 
                            <Button 
                                variant="outlined"
                                color="primary"
                                fullWidth
                                onClick={handleBorrow}
                            >Borrow</Button>
                        }
                        {    
                            value === "repayBorrow" ?
                                !isCoinEnabled ? 
                                <Button 
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSupplyEnable}
                                >Enable</Button>:
                                <Button 
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    onClick={handleRepayBorrow}
                                >Repay Borrow</Button>
                            : null
                        }
                    </Grid>
                    {(value === "supply")?
                        <>
                            <Grid item xs={8} className={classes.textColor} sx={{padding:"5px"}}>
                                Wallet
                            </Grid>
                            <Grid item xs={4}>
                                {data.wallet} {data.symbol}
                            </Grid>
                        </>
                    : null}
                    {(value === "supplyWithdraw")?
                        <>
                            <Grid item xs={8} className={classes.textColor} sx={{padding:"5px"}}>
                                Supply Balance 
                            </Grid>
                            <Grid item xs={4}>
                                {data.supplyBalance / data.exchangeRate} {data.symbol}
                            </Grid>
                        </>
                    : null}
                    {(value === "borrow" || value === "repayBorrow")?
                        <>
                            <Grid item xs={8} className={classes.textColor} sx={{padding:"5px"}}>
                                Borrow Balance 
                            </Grid>
                            <Grid item xs={4}>
                                {data.borrowBalance} {data.symbol}
                            </Grid>
                        </>
                    : null}
                </Grid>
            </CardContent>
        </Card>
    )
}