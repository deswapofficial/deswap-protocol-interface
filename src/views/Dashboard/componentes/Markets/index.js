import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  FormControlLabel,
  Switch,
  Divider
} from '@material-ui/core';
import _ from "underscore";
import Label from '../../../../components/Label';
import ArrowUpwardOutlined from '@material-ui/icons/ArrowUpward';
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import DetailDailog from './DetailDailog';
import CollateralDailouge from './CollateralDailouge';
import { setBorowValue, setPopupTabValue, setRepayBorrowValue, setSupplyValue, setWithdrawSupply, enableCollateral, disableCollateral, } from '../../../../actions/dashboard';
import { currencyFormatter } from '../../../../utils/contractMethods/dashboard';
import WalletTab from './WalletTab';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    width: '100%',
  },
  tableRow: {
    cursor: 'pointer'
  },
  tableCell: {
    color: 'white', 
    padding: '12px 0px', 
    border: 'none'
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 12
  },
  label: {
    background: 'none',
    padding: 0,
    marginLeft: 0,
    width:"100%",
    justifyContent:"unset"
  },
  tabs: {
      backgroundColor: '#222222'
  },
  dailogCenterAvatar:{
    margin: "auto"
  },
  center:{
    display: "flex",
    justifyContent:"center",
    alignItems:"center"
  },
  lightColor:{
    color: "#747b80"
  }
}));

function Markets() {
  const classes = useStyles();

  const [value, setValue] = React.useState("supply");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      className={classes.root}
    >
        <Tabs 
          className={classes.tabs}
          textColor="primary" 
          indicatorColor="primary" 
          value={value} onChange={handleChange}>
          <Tab label="Supply" value="supply" />
          <Tab label="Borrow" value="borrow" />
          <Tab label="Wallet" value="wallet" />
        </Tabs>
      {value === "borrow" && 
        <TabPanel value="borrow" />
      }
      {value === "supply" && 
        <TabPanel value="supply" />
      }
      {value === "wallet" &&     
        <WalletTab />
      }
    </Card>
  );
}
function TabPanel(props) {
  const { children, value, ...other } = props;
  const [open, setOpen] = useState(false)
  const [coinListData, setCoinListData] = useState({});
  const [collateralSymbol, setCollateralSymbol] = useState("");
  const [collaterModalOpen, setColletraModalOpen] = useState(false)
  const classes = useStyles();
  const {coinList, coinDetails, coinPriceList, coinSuppplied, coinBorrowed} = useSelector((state) => state.dashboard);
  const {selectedAddress} = useSelector((state) => state.accounts);
  const dispatch = useDispatch()
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setSupplyValue(0))
    dispatch(setWithdrawSupply(0))
    dispatch(setPopupTabValue("supply"))
    dispatch(setBorowValue(0))
    dispatch(setRepayBorrowValue(0))
  };
  
  const IOSSwitch = (({ ...props }) => {
    return (
      <Switch
        disableRipple
        color="primary"
        {...props}
      />
    );
  });

  const handleCoinListClick = data => {
      setCoinListData(data);
      handleClickOpen()
  }

  const changeIoSwitch = event => {
    // dispatch(applyEnableCollateral(event.target.name, event.target.checked))
    // setCollateralSymbol(event.target.name)
    // setColletraModalOpen(true)
    let isChecked = event.target.checked
    let symbol = event.target.name
    let {address, underlyingAddress:daddress} = coinList.find(coin => coin.symbol === symbol);
    if(isChecked){
      dispatch(enableCollateral(address, selectedAddress))
    } else {
      dispatch(disableCollateral(address, daddress, selectedAddress))
    }
  }

  return (
    <div
      {...other}
    >
      {value &&  coinList.length && (
        <Box p={3}>
          {((value === "supply" && coinSuppplied) || (value === "borrow" && coinBorrowed)) ? 
            <>
              <Typography style={{padding: "8px 0"}}>
                {value === "supply"? "Supply" : "Borrowing"}  
              </Typography>
              <TableContainer  style={{backgroundColor: '#ffffff00'}}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableCell}>Asset</TableCell>
                      <TableCell className={classes.tableCell}>APY</TableCell>
                      <TableCell className={classes.tableCell}>Balance</TableCell>
                      {
                        value === "supply" &&
                        <TableCell className={classes.tableCell}>Collacteral</TableCell>
                      }
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { coinList.length && coinList.map((row) => 
                      {
                        return ((value === "supply" && row.supplyBalance) || value === "borrow" && row.borrowBalance) 
                        ? 
                        
                        <TableRow key={row.name} className={classes.tableRow} >
                          <TableCell className={classes.tableCell} component="th" scope="row" onClick={e => handleCoinListClick(row)}>
                            <Box
                              display="flex"
                              alignItems="center"
                            >
                              <Avatar
                                className={classes.avatar}
                                src={row.logo}
                              />
                              {row.name}
                            </Box>
                          </TableCell>
                          <TableCell className={classes.tableCell} onClick={e => handleCoinListClick(row)}>
                            <Label
                              className={classes.label}
                              color={(value === "borrow") ? row.borrowApy > 0 ? 'success' : 'error': row.supplyApy > 0 ? 'success' : 'error'}
                            >
                              {
                                value === "borrow" ? 
                                  <>
                                    {row.borrowApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                                    {row.borrowApy > 0 ? `${row.borrowApy.toPrecision("2")}%` : `${-row.borrowApy.toPrecision("2")}%`}
                                  </>
                                : 
                                  <>
                                    <p className={classes.center}>
                                      {row.supplyApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                                      {row.supplyApy > 0 ? `${row.supplyApy.toPrecision("2")}%` : `${-row.supplyApy.toPrecision("2")}%`}
                                    </p>
                                  </>
                              }
                            </Label>
                          </TableCell>
                          <TableCell className={classes.tableCell} onClick={e => handleCoinListClick(row)}>
                            <Label
                              className={classes.label}
                              color="white"
                            >
                              {
                                value === "borrow" ? 
                                  currencyFormatter(row.borrowBalance * coinPriceList[row.apiId].usd)
                                : currencyFormatter((row.supplyBalance / row.exchangeRate) * coinPriceList[row.apiId].usd)
                              }
                            </Label>
                            <Label
                              className={classes.label}
                            >
                              {
                                value === "borrow" ? 
                                <p className={classes.lightColor}>
                                  {currencyFormatter(row.borrowBalance)} {row.symbol}
                                </p>
                                :
                                  <p className={classes.lightColor}>
                                    {currencyFormatter(row.supplyBalance/ row.exchangeRate)} {row.symbol}
                                  </p>
                              }
                            </Label>
                          </TableCell>
                          {
                            (value === "supply" && row.isCollateral) &&
                            <TableCell className={classes.tableCell}>
                              <FormControlLabel
                                control={<IOSSwitch checked={row.collateral} name={row.symbol} onChange={changeIoSwitch}/>}
                              />
                            </TableCell>
                          }
                        </TableRow>
                        :null
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider />
            </>
          : null}

          <Typography style={{padding: "8px 0"}}>All Markets</Typography>
          <TableContainer  style={{backgroundColor: '#ffffff00'}}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell}>Asset</TableCell>
                  <TableCell className={classes.tableCell}>APY</TableCell>
                  <TableCell className={classes.tableCell}>Wallet</TableCell>
                  {
                    value === "supply" &&
                    <TableCell className={classes.tableCell}>Collacteral</TableCell>
                   }
                </TableRow>
              </TableHead>
              <TableBody>
                { coinList.length && coinList.map((row) => {
                  return ((value === "supply" && !row.supplyBalance) || value === "borrow" && !row.borrowBalance) ?
                  <TableRow key={row.name} className={classes.tableRow} >
                    <TableCell className={classes.tableCell} component="th" scope="row" onClick={e => handleCoinListClick(row)}>
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          className={classes.avatar}
                          src={row.logo}
                        />
                        {row.name}
                      </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell} onClick={e => handleCoinListClick(row)}>
                      <Label
                        className={classes.label}
                        color={(value === "borrow") ? row.borrowApy > 0 ? 'success' : 'error': row.supplyApy > 0 ? 'success' : 'error'}
                      >
                        {
                          value === "borrow" ? 
                            <>
                              {row.borrowApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                              {row.borrowApy > 0 ? row.borrowApy.toPrecision("2") : -row.borrowApy.toPrecision("2")}
                            </>
                          : 
                            <>
                            {row.supplyApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                            {row.supplyApy > 0 ? row.supplyApy.toPrecision("2") : -row.supplyApy.toPrecision("2")}
                            </>
                        }
                        %
                      </Label>
                    </TableCell>
                    <TableCell className={classes.tableCell} onClick={e => handleCoinListClick(row)}>
                      {row.wallet} {row.symbol}
                    </TableCell>
                    {
                      value === "supply" &&
                      <TableCell className={classes.tableCell}>
                        <FormControlLabel
                          control={<IOSSwitch checked={row.collateral} name={row.symbol} onChange={changeIoSwitch}/>}
                        />
                      </TableCell>
                    }
                  </TableRow>
                
                  :
                    null
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {
            !_.isEmpty(coinDetails) &&
            <DetailDailog data={coinListData} open={open} handleClose={handleClose} value={value} />
          }
          {
            collateralSymbol && <CollateralDailouge symbol="collateralSymbol" setColletraModalOpen={setColletraModalOpen} collaterModalOpen={collaterModalOpen} />
          }
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
};

export default Markets;
