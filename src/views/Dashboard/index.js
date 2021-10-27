import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Balance from './Balance';
import Credit from './Credit';
import SmallCard from './SmallCard';
import Detail from './Detail';
import Markets from './componentes/Markets';
import {getDashboardData, removeDashboardData} from "../../actions/dashboard"
import { useDispatch, useSelector } from 'react-redux';
import { DAW_CONTRACT_ADDREES, YAI_TOKEN_ADDRESS } from '../../utils/CONSTANT';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: 57,
    paddingBottom: theme.spacing(3)
  }
}));

function DashboardView() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {selectedAddress} = useSelector(state => state.accounts)

  useEffect(() => {
    if(selectedAddress){
      dispatch(getDashboardData(selectedAddress))
    }
    return () => {
      dispatch(removeDashboardData())
    }
  }, [selectedAddress])

  return (
    <Page
      className={classes.root}
      title="Dashboard"
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
            lg={6}
            xs={12}
          >
            <Balance />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
          >
            <Grid
              container
              spacing={2}>
              <Grid
                item
                lg={12}
                xs={12}
              >
                <Credit />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}>
              <Grid
                item
                lg={6}
                sm={6}
                xs={12}
              >
                <SmallCard title="DAW" address={DAW_CONTRACT_ADDREES} />
              </Grid>
              <Grid
                item
                lg={6}
                sm={6}
                xs={12}
              >
                <SmallCard title="YAI" address={YAI_TOKEN_ADDRESS} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={5}
            xs={12}
          >
            <Detail />
          </Grid>
          <Grid
            item
            lg={7}
            xs={12}
          >
            <Markets />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardView;
