import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Dialog, Slide, Typography, IconButton, Card } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/styles';


export default function CollateralDailouge({collateralSymbol, setColletraModalOpen, collaterModalOpen}) {
    const {coinList} =  useSelector(state => state.dashboard)
    
    const handleClose = () => {
        setColletraModalOpen(false);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            color: "#fff"
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });
        
    const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
                </IconButton>
            ) : null}
            </MuiDialogTitle>
        );
    });
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            color: "#fff"
        },
        center:{
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }
      }));
    const classes = useStyles();
    return (
        <div>
           <Dialog
                open={collaterModalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"
                className={classes.root}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <Card>
                    <DialogTitle id="alert-dialog-slide-title" onClose={handleClose}>
                        <Typography variant="h3">Enable as Collateral</Typography>
                    </DialogTitle>

                    <MuiDialogContent>
                        <Typography variant="subtitle1">
                            Each asset used as collateral increases your borrowing limit. 
                        </Typography>
                        <Typography variant="subtitle1">
                            Be careful, this can subject the asset to being seized in liquidation. 
                        </Typography>
                    </MuiDialogContent>
                </Card>
            </Dialog> 
        </div>
    )
}
