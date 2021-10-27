import React from 'react';
import {
    Avatar,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 26.67,
        height: 13.33,
        marginRight: 16
    },
}));

function Language() {
    const classes = useStyles();

    return (
        <Avatar
            className={classes.avatar}
            src="/static/uk.png"
        />
    );
}

export default Language;
