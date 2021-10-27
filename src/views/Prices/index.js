import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Amount from './Amount';
import Staking from './Staking';
import { useDispatch, useSelector } from 'react-redux';
import {removePriceList, setPriceList} from "../../actions/prices"
import _ from 'underscore';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: 57,
    paddingBottom: theme.spacing(3)
  }
}));

function PricesView() {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  const [totalSupply, setTotalSupply] = useState(0)
  const [totalBorrow, setTotalBorrow] = useState(0)
  const [availableLiquidity, setAvailableLiquidity] = useState(0)

  const {priceList} = useSelector(state => state.prices)
  
  useEffect(() => {
    dispatch(setPriceList())
    return () => {
      dispatch(removePriceList())
    }
  }, [])

  useEffect(() => {
    if(!_.isEmpty(priceList)){
      let supplyAmount=0, borrowAmount=0, liquidity=0
      for(let price of priceList){
        supplyAmount += price.totalSupplyUSD
        borrowAmount += price.totalBorrowsUSD
        liquidity += price.marketLiquidity
      }
      setTotalSupply(supplyAmount)
      setTotalBorrow(borrowAmount)
      setAvailableLiquidity(liquidity)
    }
    return () => {
      setTotalSupply(0)
      setTotalBorrow(0)
      setAvailableLiquidity(0)
    }
  }, [priceList])
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
            lg={4}
            sm={12}
            xs={12}
          >
            <Amount label="Total Supply" amount={totalSupply} />
          </Grid>
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
          >
            <Amount label="Total Borrow" amount={totalBorrow} />
          </Grid>
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
          >
            <Amount label="Available Liquidity" amount={availableLiquidity} />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
          >
            {(!_.isEmpty(priceList)) ? <Staking priceList={priceList} /> : null}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default PricesView;
