import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import OpenInBrowserOutlined from '@material-ui/icons/OpenInBrowser';
import CallMadeOutlined from '@material-ui/icons/CallMade';
import { getDisplayAddress } from '../../utils';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';
import constants from "../../utils/CONSTANT"
import { currencyFormatter, getContractBalance } from '../../utils/contractMethods/dashboard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      alignItems: "center"
    }
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      width: "100%"
    }
  },
  avatar: {
    width: 23.33,
    height: 15.22,
    marginRight: 16
  },
  title : {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16
  },
  amount: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 34,
    paddingTop: 16,
    paddingBottom: 24
  },
  detail: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    cursor: 'pointer'

  },
  whiteColor: {
    color: '#FFFFFF',
  },
  arrowIcon: {
    paddingLeft: 8,
    paddingBottom: 3,
    cursor: 'pointer'
  }
}));

function SmallCard({title, address:providedAddress}) {
  const classes = useStyles();
  const [address, setAddress] = useState(providedAddress)
  const [url, setUrl] = useState("")
  const [balance, setBalance] = useState(0)
  const [displayAddress, setdisplayAddress] = useState("")
  const { enqueueSnackbar } = useSnackbar();
  const {selectedAddress} = useSelector(state => state.accounts)

  useEffect(() => {
    setdisplayAddress(getDisplayAddress(address))
    if(constants.ENVIORMENT === "dev"){
      setUrl(`${constants.SCAN_DEV_URL}${address}`)
    } else {
      setUrl(`${constants.SCAN_PROD_URL}${address}`)
    }
    getContractBalance(address, selectedAddress).then(data => {
      setBalance(data)
    }).catch(error => {
      setBalance(0)
    })
  }, [address, selectedAddress])

  return (
    <Card
      className={classes.root}
    >
      <Box
        className={classes.header}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Avatar
            className={classes.avatar}
            src={title==='DAW' ? "/static/Group.png" : "/static/Yai.png"}
          />
          <Typography className={classes.title}>
            {title}
          </Typography>
        </Box>
        <a href={url} className={classes.whiteColor} target="_blank">
          <OpenInBrowserOutlined />
        </a>
      </Box>
      <Typography className={classes.amount}>
          {currencyFormatter(balance, false)}
      </Typography>
      <Box
        display="flex"
      >
        <CopyToClipboard text={address}
          onCopy={() => {
            enqueueSnackbar(`Address Copied`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
          }}>
            <Typography className={classes.detail}>
                {displayAddress}
            </Typography>
          </CopyToClipboard>
        <CopyToClipboard text={address}
          onCopy={() => {
            enqueueSnackbar(`Address Copied`, constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
          }}>
              <CallMadeOutlined className={classes.arrowIcon} />
          </CopyToClipboard>
      </Box>
    </Card>
  );
}

export default SmallCard;
