import React from 'react'
import {  
    Dialog,
    DialogActions,
    DialogContentText,
    IconButton,
    Slide,
    Typography,
    Avatar,
    Grid
  } from '@material-ui/core';
  import { useSelector } from 'react-redux';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/styles';
import BorrowTabs from './BorrowTabs';
import SupplyTabs from './SupplyTabs';
import TabHeader from './TabHeader';


const useStyles = makeStyles((theme) => ({
    avatar: {
      width: 30,
      height: 30,
      marginRight: 12
    },
    dailogCenterAvatar:{
      margin: "auto"
    }, 
    center: {
        textAlign: "center"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  
const styles = (theme) => ({
root: {
    margin: 0,
    padding: theme.spacing(2),
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

export default function DetailDailog({data, open, handleClose, value}) {
  const classes = useStyles();
  const {coinDetails, isCoinEnabled} = useSelector(state => state.dashboard)
  return (<div>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullWidth={true}
      maxWidth="xs"
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" onClose={handleClose}>
        <Grid
            alignItems="center"
            container
            spacing={2}
        >
          <Grid item>
            <Avatar
                className={classes.avatar}
                src={data.logo}
              />
          </Grid>
          <Grid item>
            {data.name}
          </Grid>
        </Grid>
      </DialogTitle>
      <MuiDialogContent>
        <Grid 
          alignItems="center"
          container
          justify="center"
          spacing={2}>
            <TabHeader data={data} />
            <Grid item xs={12}>
                { value === "borrow" ? <BorrowTabs data={data} values={value} handleClose={handleClose} /> : <SupplyTabs data={data} values={value} handleClose={handleClose} />}
            </Grid>
        </Grid>
      </MuiDialogContent>
    </Dialog>
  </div>)
}
