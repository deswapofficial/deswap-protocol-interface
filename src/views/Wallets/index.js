import React, { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs
} from '@material-ui/core';
import Page from '../../components/Page';
import SmallCard from './SmallCard';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVaultData, removeVaultData, approveYAI, vaultDeposit, vaultWithdraw } from '../../actions/vault';
import { useSnackbar } from 'notistack';
import constants from "../../utils/CONSTANT"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: 57,
    paddingBottom: theme.spacing(3),
    '&$selected': {
      backgroundColor: '#004C9B',
      color: 'white',
      fontWeight: theme.typography.fontWeightMedium,
    },
    gridChild: {
      display: "flex",
      flexflow: "column",
    }
  }
}));

function WalletsView() {
  let dispatch = useDispatch()
  let {selectedAddress} = useSelector(state => state.accounts);
  let {availableYai, allowanceYai, YAIVaultDawBalance, YAIAmount, YAIRewards, dswapBalance} = useSelector(state => state.vault)
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const [tab, setTab] = useState('available');
  const [btnText, setBtnText] = useState('Enable');
  const [deposit, setDeposit] = useState(availableYai.toNumber())
  const [withdraw, setWithdraw] = useState(YAIAmount.toNumber())

  
  useEffect(() => {
      dispatch(fetchVaultData(selectedAddress))
      return () => {
          dispatch(removeVaultData())
      }
  }, [selectedAddress])

  useEffect(() => {
    if(allowanceYai.isZero()) setBtnText("Enable")
    else setBtnText("Deposit")
  }, [allowanceYai])

  useEffect(() => {
    setDeposit(availableYai.toNumber())
  }, [availableYai])

  useEffect(() => {
      setWithdraw(YAIAmount.toNumber())
  }, [YAIAmount])
  
  const handleEnable = async () => {
      try {
          await dispatch(approveYAI(selectedAddress));
          enqueueSnackbar("Approved successfully", constants.DEFAULT_SNACKBAR_OPTIONS.SUCCESS)
      } catch (error) {
          enqueueSnackbar(error.message, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
      }
  }
  
  const handleDeposit = () => {
      try {
          if(!deposit){
            enqueueSnackbar(`Please Enter Deposit`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
          }
          if(deposit > availableYai){
              enqueueSnackbar(`Please enter below or equal to ${deposit}`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
              return false
          }
          dispatch(vaultDeposit(selectedAddress, deposit))
      } catch (error) {
        enqueueSnackbar( error.message, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
      }
  }
  
  const handleWithdraw = () => {
      try {
        if(!withdraw){
          enqueueSnackbar(`Please Enter Withdraw`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
          return false
        }
          if(withdraw > YAIAmount){
            enqueueSnackbar(`Please enter below or equal to ${YAIAmount}`, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
            return false
          }
          dispatch(vaultWithdraw(selectedAddress, withdraw))
      } catch (error) {
        enqueueSnackbar( error.message, constants.DEFAULT_SNACKBAR_OPTIONS.FAIL)
      }
  }

  return (
    <Page
      className={classes.root}
      title="Prices"
    >
      <Container
        maxWidth={false}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
          >
            <LargeCard />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Grid
              container
              className="match-height"
              spacing={2}
            >
              <Grid
                item
                sm={6}
                className={classes.gridChild + " gridChild"}
                // component={Card}
                xs={12}
              >
                <SmallCard avatar="yai_fill" title="Available DAW" amount="0 YAI" />
              </Grid>
              <Grid
                item
                sm={6}
                className={classes.gridChild + " gridChild"}
                // component={Card}
                xs={12}
              >
                <SmallCard avatar="yai_fill" title="YAI mint Earned" amount={`${availableYai.toNumber()} YAI`} /> 
              </Grid>
              <Grid
                item
                sm={6}
                className={classes.gridChild + " gridChild"}
                // component={Card}
                xs={12}
              >
                <SmallCard avatar="Group" title="DAW Earned" amount={YAIRewards ? `${YAIRewards.toString()} DAW` : "0 DAW"} />
              </Grid>
              <Grid
                item
                sm={6}
                className={classes.gridChild + " gridChild"}
                // component={Card}
                xs={12}
              >
                <SmallCard avatar="Group" title="Deswap Balance" amount={dswapBalance ? `${dswapBalance.toString()} DAW` : "0 DAW"}  />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Tabs 
              scrollButtons="auto" 
              textColor="primary" 
              indicatorColor="primary" 
              onChange={(e, value)=>{setTab(value);}} 
              value={tab} 
              variant="scrollable">
              <Tab label="YAI Available" value="available" />
              <Tab label="YAI Staked" value="staked" />
            </Tabs>
            {tab==="available" && (
              <MediumCard 
                title="YAI Available to Stake" 
                amountStr={`${availableYai.toString()} YAI`} 
                amount={parseFloat(deposit)}
                type={btnText} 
                clickMethod={btnText === "Enable" ? handleEnable : handleDeposit } 
                showfields={btnText !== "Enable"}
                placeHolder="Enter amount to Deposit"
                changeField={val => setDeposit(val)}
                />
            )}

            {tab === "staked" && (
              <MediumCard 
                title="YAI Staked" 
                amountStr={`${YAIAmount.toString()} YAI`} 
                amount={parseFloat(withdraw)}
                type="Withdraw" 
                showfields={true}
                clickMethod={handleWithdraw} 
                placeHolder="Enter amount to withdraw"
                changeField={val => setWithdraw(val)}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default WalletsView;
