import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Avatar,
  FormControl,
  NativeSelect
} from '@material-ui/core';
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addtokenMetamask, setCoinDetials } from '../../actions/dashboard';
import { currencyFormatter } from '../../utils/contractMethods/dashboard';
import DetailsChart from './componentes/Details/DetailsChart';
import _ from 'underscore';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF'
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
      alignItems: "start"
    }
  },
  avatar: {
    width: 23.33,
    height: 23.33,
    marginRight: 16
  },
  header: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 8
  },
  part: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
      alignItems: "start"
    }
  },
  detailName: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#999999'
  },
  detailValue: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // paddingBottom: 14
  }
}));

function Detail() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [defaultCoin, setdefaultCoin] = useState(null)
  const {coinList, coinDetails, popupTabValue, coinGraphData} = useSelector(state => state.dashboard)

  useEffect(() => {
    if(coinDetails){
      setdefaultCoin({
        logo: coinDetails.logo,
        name: coinDetails.name,
        address: coinDetails.address
      })
    }
    return () => {
      setdefaultCoin({})
    }
  }, [coinDetails])

  const hanldeCoinChange = (event) => {
    let coinDetail = coinList.find(coin => coin.name === event.target.value)
    if(coinDetail){
      let defaultCoinInfo = {
        logo: coinDetail.logo,
        name: coinDetail.name,
        symbol: coinDetail.symbol,
        address: coinDetail.address
      }
      setdefaultCoin(defaultCoinInfo)
      dispatch(setCoinDetials(coinDetail))

    }
  }
  
  const hanldeAddCoin = (isDaddress) => {
    let address = isDaddress ? coinDetails.underlyingAddress : coinDetails.address
    dispatch(addtokenMetamask(address, coinDetails.symbol, coinDetails.decimal, coinDetails.logo))
  }

  return (
    <Card
      className={classes.root}
    >
      {defaultCoin &&   
        <>
          <Box
            className={classes.content}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                className={classes.avatar}
                src={defaultCoin.logo}
              />
              <FormControl className={classes.formControl}>
                <NativeSelect style={{color: 'primary'}} disableUnderline={true} defaultValue={defaultCoin.name} onChange={hanldeCoinChange}>
                  {coinList.length > 0 ? 
                    coinList.map(coin => <option key={coin.name} value={coin.name}>{coin.name}</option>)
                  : null}
                </NativeSelect>
              </FormControl>
            </Box>
            <Box
              display="flex"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                onClick={() => hanldeAddCoin(false)}
              >
                <AddCircleOutlineOutlined style={{ width: 18 }} />
                <Typography className={classes.header}>
                  {coinDetails.symbol}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                paddingLeft="32px"
                onClick={() => hanldeAddCoin(true)}
              >
                <AddCircleOutlineOutlined style={{ width: 18 }} />
                <Typography className={classes.header}>
                  d{coinDetails.symbol}
                </Typography>
              </Box>
            </Box>
          </Box>
          {!_.isEmpty(coinGraphData) ? <DetailsChart popupTabValue={popupTabValue} coinGraphData={coinGraphData} /> : null}
          <Box
            display="flex"
            flexDirection="column"
            paddingTop="32px"
          >
          {/* <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Historical rates
            </Typography>
            <Typography className={classes.detailValue}>
              {coinDetails.supplyRateHistory}%
            </Typography>
          </Box> */}
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Supply APY Price
            </Typography>
            <Typography className={classes.detailValue}>
              {currencyFormatter(coinDetails.supplyApy)}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Market Liquidity
            </Typography>
            <Typography className={classes.detailValue}>
              {coinDetails.marketLiquidity} {coinDetails.symbol}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              # of Suppliers
            </Typography>
            <Typography className={classes.detailValue}>
              {coinDetails.noOfSupplier}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              # of Borrowers
            </Typography>
            <Typography className={classes.detailValue}>
            {coinDetails.noOfBorrower}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Reserves
            </Typography>
            <Typography className={classes.detailValue}>
              {coinDetails.totalReserves} {coinDetails.symbol}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Reserve Factor
            </Typography>
            <Typography className={classes.detailValue}>
            {coinDetails.reserveFactor}%
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Collateral Factor
            </Typography>
            <Typography className={classes.detailValue}>
            {coinDetails.collateralFactor}%
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Total Supply
            </Typography>
            <Typography className={classes.detailValue}>
              {currencyFormatter(coinDetails.totalSupplyUSD)}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Total Borrow
            </Typography>
            <Typography className={classes.detailValue}>
              {currencyFormatter(coinDetails.totalBorrowsUSD)}
            </Typography>
          </Box>
          <Box className={classes.part}>
            <Typography className={classes.detailName}>
              Exchange Rate
            </Typography>
            <Typography className={classes.detailValue}>
              1 {coinDetails.symbol} = {coinDetails.exchangeRate} d{coinDetails.symbol}
            </Typography>
          </Box>
        </Box>
        </>
      }
    </Card>
  );
}

export default Detail;
