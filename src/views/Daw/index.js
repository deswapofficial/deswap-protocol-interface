import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Title from './Title';
import Amount from './Amount';
import Markets from './Markets';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: 57,
    paddingBottom: theme.spacing(3)
  }
}));

function DawView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Daw"
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
            sm={12}
            xs={12}
          >
              <Title />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xs={12}
          >
              <Amount />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
          >
            <Markets />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DawView;
