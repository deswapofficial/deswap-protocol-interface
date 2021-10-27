import React from 'react';
import {
    Avatar,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mode: {
        width: 24,
        height: 24,
        marginRight: 16
    },
}));

function Mode() {
    const classes = useStyles();

    return (
        <Avatar
            alt="User"
            className={classes.mode}
            src="/static/moon-darkmode.png"
        />
    );
}

export default Mode;
