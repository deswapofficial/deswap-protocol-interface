import React, { useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import { AppBar, Box, Hidden, IconButton, Toolbar, makeStyles, SvgIcon, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from '../../components/Logo';
import { THEMES } from '../../constants';
import Language from './Language';
import { useDispatch, useSelector } from 'react-redux';
import {setSetting, setWalletType, setSelectedAddress} from '../../actions/accounts';
import constants from '../../utils/CONSTANT';
import MetaMaskClass from '../../utils/MetaMask';
import { getDisplayAddress } from '../../utils';

let metamask = null;
let accounts = [];
let metamaskWatcher = null;


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 100,
        ...theme.name === THEMES.LIGHT ? {
            boxShadow: 'none',
            backgroundColor: '#1f1f1f00'
        } : {},
        ...theme.name === THEMES.ONE_DARK ? {
            backgroundColor: theme.palette.background.default
        } : {}
    },
    toolbar: {
        minHeight: 80,
    },
    queryField: {
        width: 430,
        paddingLeft: 108,
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
    },
    id: {
        paddingTop: 5, 
        paddingBottom: 5, 
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 16,
        background: '#e447571f',
        borderRadius: 100,
        color: '#e44757'
    },
    button: {
        color: "white",
        background: "rgba(228, 71, 87, 1)",
        "font-weight": "700",
        "border-radius": "100px",
        "font-size": "10px",
        "margin-right": "10px",
        [theme.breakpoints.down('xs')]: {
          width: "100%"
        }
      }
}));

function TopBar({
    className,
    onMobileNavOpen,
    ...rest
}) {
    const {selectedAddress, latestBlockNumberState, walletType} = useSelector(state => state.accounts)
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();


    const [openConnect, setOpenConnect] = useState(false);
    const [web3, setWeb3] = useState(null);
    // const [awaiting, setAwaiting] = useState(false);
    const [error, setError] = useState('');
    
    // ---------------------------------Network Change connect-------------------------------------
    const checkNetwork = () => {
        let netId;
        if (walletType === 'binance') {
            netId = +window.BinanceChain.chainId;
        } else {
            netId = window.ethereum.networkVersion
            ? +window.ethereum.networkVersion
            : +window.ethereum.chainId;
        }
        if (netId) {
            if (netId === 4 || netId === 137) {
                if (netId === 137 && constants.REACT_APP_ENV === 'prod') {
                    enqueueSnackbar(`You are currently visiting the Ethereum Mainnet Network. Please change your metamask to access the Ethereum Mainnet Network`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
                } else if (netId === 4 && constants.REACT_APP_ENV === 'dev') {
                    enqueueSnackbar(`You are currently visiting the Rinkeyby Tesetnet Network. Please change your metamask to access the Rinkeby Testnet Network`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
                } else {
                    dispatch(
                        setSetting({
                        wrongNetwork: false
                        })
                    )
                    return;
                }
            } else {
                enqueueSnackbar(`Dswap is only supported on Ethereum Network. Please confirm you installed Metamask and selected Ethereum Network`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            }
            dispatch(
                setSetting({
                    wrongNetwork: true
                })
            )
        }
    };
    
    useEffect(() => {
        if (window.ethereum) {
            window.addEventListener('load', () => {
            checkNetwork();
            });
    }
    }, [window.ethereum]);
    
    // ---------------------------------MetaMask connect-------------------------------------
    const withTimeoutRejection = async (promise, timeout) => {
        const sleep = new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error(constants.TIMEOUT)), timeout)
        );
        return Promise.race([promise, sleep]);
    };

    const handleOpen = () => {
        setOpenConnect(!openConnect)
    }

    const handleWatch = async () => {
        if (window.ethereum) {
          const accs = await window.ethereum.request({ method: 'eth_accounts' });
          if (!accs[0]) {
            accounts = [];
            clearTimeout(metamaskWatcher);
            dispatch(setSelectedAddress(null))
          }
        }
        if (metamaskWatcher) {
          clearTimeout(metamaskWatcher);
        }

        try {
          const isLocked = error && error.message === constants.LOCKED;
          if (!metamask || isLocked) {
            metamask = await withTimeoutRejection(
              MetaMaskClass.initialize(undefined), // if option is existed, add it
              20 * 1000 // timeout
            );
          }
    
          let [tempWeb3, tempAccounts, latestBlockNumber] = await Promise.all([
            metamask.getWeb3(),
            metamask.getAccounts(),
            metamask.getLatestBlockNumber(),
          ]);
          accounts = tempAccounts;
          setWeb3(tempWeb3);
          setError(null);
        //   setAwaiting(false);
        if( selectedAddress !== tempAccounts[0] &&  latestBlockNumber !== latestBlockNumberState){
            dispatch(setSelectedAddress(tempAccounts[0]))
            // dispatch(setLatestBlockNumber(latestBlockNumber))
          }
          metamaskWatcher = setTimeout(() => {
            clearTimeout(metamaskWatcher);
            handleWatch();
          }, 3000);
        } catch (err) {
            dispatch(setSelectedAddress(null))
            // dispatch(setLatestBlockNumber(null))
            accounts = [];
            setWeb3(null);
            setError(err);
            // setAwaiting(false);
        }
    }
    
    useEffect(() => {
        handleWatch();
      }, [window]);

    const handleMetaMask = () => {
        dispatch(setWalletType('metamask'))
        setError(MetaMaskClass.hasWeb3() ? '' : new Error(constants.NOT_INSTALLED));
        handleWatch();
    };
    const classes = useStyles();
    const getAddessView = address => {
        // 0xAbsdfa...5345
        return `${address.slice(0,8)}...${address.slice(-4)}`
    }
    return (
        <AppBar
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Toolbar className={classes.toolbar}>
                <Hidden lgUp>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        onClick={onMobileNavOpen}
                    >
                        <SvgIcon fontSize="small">
                            <MenuIcon style={{color: '#E44757'}} />
                        </SvgIcon>
                    </IconButton>
                </Hidden>
                <Hidden mdDown>
                    <RouterLink to="/">
                        <Logo />
                    </RouterLink>
                </Hidden>
                {/* <Hidden mdDown>
                    <TextField
                        className={classes.queryField}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SvgIcon
                                        fontSize="small"
                                        style={{color: 'white'}}
                                    >
                                        <SearchIcon />
                                    </SvgIcon>
                                </InputAdornment>
                            ),
                            classes: {
                                input: classes.input
                            }
                        }}
                        placeholder="Search..."
                        variant="outlined"
                    />
                </Hidden> */}
                <Box
                    ml={2}
                    flexGrow={1}
                />
                {!selectedAddress ? 
                    <Button variant="contained" className={classes.button}>Connect Metask</Button>
                    :
                    <Typography className={classes.id}>
                        {getDisplayAddress(selectedAddress)}
                    </Typography>
                }
                <Hidden mdDown>
                    {/* <Mode /> */}
                    <Language />
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

TopBar.propTypes = {
    className: PropTypes.string,
    onMobileNavOpen: PropTypes.func
};

export default TopBar;
