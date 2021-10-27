import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import LoadingScreen from '../components/LoadingScreen';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1f1f1f',
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    backgroundImage: 'url(/static/bg.png)',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 80,
    position:"relative",
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 290
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

function Layout({ children }) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const {loading} = useSelector((state) => state.layout)

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        {loading && <LoadingScreen />}
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
