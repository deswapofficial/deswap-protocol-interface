/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
// import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
    Box,
    Drawer,
    Hidden,
    List,
    ListSubheader,
    makeStyles,
    SvgIcon,
    TextField,
    InputAdornment,
    Avatar,
    Typography
} from '@material-ui/core';
import {
    Search as SearchIcon
} from 'react-feather';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NavItem from './NavItem';
import Language from '../TopBar/Language';
import Mode from '../TopBar/Mode';

const navConfig = [
    {
        items: [
            {
                title: 'Dashboard',
                icon: BrokenImageOutlinedIcon,
                href: '/dashboard',
                isComing: false
            },
            {
                title: 'DAW',
                icon: FilterTiltShiftOutlinedIcon,
                href: '/daw',
                isComing: true
            },
            {
                title: 'Prices',
                icon: ListAltOutlinedIcon,
                href: '/prices',
                isComing: false
            },
            {
                title: 'Vault',
                icon: WorkOutlineOutlinedIcon,
                href: '/wallets',
                isComing: false
            },
            {
                title: 'Vote',
                icon: GroupWorkOutlinedIcon,
                href: '/vote',
                isComing: true
            }
        ]
    },
];

function renderNavItems({ items, ...rest }) {
    return (
        <List disablePadding>
            {items.reduce(
                (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
                []
            )}
        </List>
    );
}

function reduceChildRoutes({
    acc,
    pathname,
    item,
    depth = 0
}) {
    const key = item.title + depth;

    if (item.items) {
        const open = matchPath(pathname, {
            path: item.href,
            exact: false
        });

        acc.push(
            <NavItem
                depth={depth}
                icon={item.icon}
                key={key}
                info={item.info}
                open={Boolean(open)}
                title={item.title}
            >
                {renderNavItems({
                    depth: depth + 1,
                    pathname,
                    items: item.items
                })}
            </NavItem>
        );
    } else {
        acc.push(
            <NavItem
                depth={depth}
                href={item.href}
                icon={item.icon}
                key={key}
                info={item.info}
                title={item.title}
                isComing={item.isComing}
                style={item.title === "Notification" ? { paddingTop: "50px" } : {paddingTop: "0px"}}
            />
        );
    }

    return acc;
}

const useStyles = makeStyles(() => ({
    mobileDrawer: {
        width: 290,
        background: '#ffffff05',
        backdropFilter: 'blur(16px)'
    },
    desktopDrawer: {
        width: 290,
        top: 64,
        height: 'calc(100% - 64px)',
        background: '#ffffff05',
        borderRight: 'none'
    },
    avatar: {
        cursor: 'pointer',
        width: 24,
        height: 24,
        marginLeft: 10,
        marginRight: 5
    },
    username: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        paddingLeft: 7,
        color: "white"
    },
    queryField: {
        width: 200,
        paddingLeft: 10,
        marginBottom: 20,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            borderRadius: 15,
        },
        "& .MuiOutlinedInput-input" : {
            padding: 10,
            color: 'white'
        }
    },
    input: {
        "&::placeholder": {
          textOverflow: "ellipsis !important",
          color: "#999999"
        }
    },
}));

function NavBar({ openMobile, onMobileClose, }) {
    const classes = useStyles();
    const location = useLocation();
    // const { user } = useSelector((state) => state.account);

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    const content = (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <PerfectScrollbar options={{ suppressScrollX: true }}>
                <Box padding="50px 24px">
                    <Hidden lgUp>
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
                    </Hidden>
                    {navConfig.map((config) => (
                        <List
                            key={config.title}
                            subheader={(
                                <ListSubheader
                                    disableGutters
                                    disableSticky
                                >
                                    {config.subheader}
                                </ListSubheader>
                            )}
                        >
                            {renderNavItems({ items: config.items, pathname: location.pathname })}
                        </List>
                    ))}
                    <Hidden lgUp>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            padding="20px 10px"
                        >
                            <Language />
                            <Mode />
                        </Box>
                    </Hidden>
                </Box>
            </PerfectScrollbar>
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.mobileDrawer }}
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer }}
                    open
                    variant="persistent"
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
}

NavBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

export default NavBar;
