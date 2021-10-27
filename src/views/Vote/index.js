import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import SmallCard from './SmallCard';
import ClaimCard from './ClaimCard';
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import Proposals from './Proposals';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: 57,
    paddingBottom: theme.spacing(3)
  }
}));

function VoteView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Vote"
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
            lg={3}
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
                    <SmallCard title="Deswap Balance" amount="400,522.20 DAW" />
                </Grid> 
              </Grid>
              <Grid
              container
              spacing={2}>
                 <Grid
                    item
                    lg={12}
                    xs={12}
                >
                    <SmallCard title="Available DAW" amount="582,142.12 DAW" />
                </Grid> 
              </Grid>
              <Grid
              container
              spacing={2}>
                 <Grid
                    item
                    lg={12}
                    xs={12}
                >
                    <ClaimCard avatar="group_fill" title="DAW Earned" amount="194.25 DAW" />
                </Grid> 
              </Grid>
              <Grid
              container
              spacing={2}>
                 <Grid
                    item
                    lg={12}
                    xs={12}
                >
                    <ClaimCard avatar="yai_fill" title="YAI mint Earned" amount="4.25 YAI" />
                </Grid> 
              </Grid>
          </Grid>
          <Grid
            item
            lg={9}
            xs={12}
          >
            <Grid
              container
              spacing={2}>
              <Grid
                item
                lg={5}
                xs={12}
              >
                <MediumCard />
              </Grid>
              <Grid
                item
                lg={7}
                xs={12}
              >
                <LargeCard />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}>
              <Grid
                item
                sm={12}
                xs={12}
              >
                <Proposals />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default VoteView;
