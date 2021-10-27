import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Chip,
  Collapse,
  Grid,
  ListItem,
  makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },
  buttonLeaf: {
    color: 'white',
    padding: '20px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 14,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 12,
    paddingRight: 2
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: '#E44757',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: '#E44757'
    }
  }
}));

function NavItem({
  title,
  isComing,
  href,
  depth,
  children,
  icon: Icon,
  className,
  open: openProp,
  info: Info,
  ...rest
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={style}
        >
          {Icon && (
            <Icon
              className={classes.icon}
              size="20"
            />
          )}
          <span className={classes.title}>
            {title}
          </span>
          {open ? (
            <ExpandLessIcon
              size="small"
              color="inherit"
            />
          ) : (
            <ExpandMoreIcon
              size="small"
              color="inherit"
            />
          )}
        </Button>
        <Collapse in={open}>
          {children}
        </Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={!isComing ? href: ""}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          <Grid container>
            <Grid item xs={6}>
              {title}
            </Grid>
            {(isComing) &&
              <Grid item xs={6}>
                <Chip
                  variant="outlined"
                  size="small"
                  label="Coming Soon"
                  color="primary"
                />
              </Grid>
            }
          </Grid>
          {/* {(isComing === "true") && } */}
        </span>
        {Info && <Info className={classes.info} />}
      </Button>
    </ListItem>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;
