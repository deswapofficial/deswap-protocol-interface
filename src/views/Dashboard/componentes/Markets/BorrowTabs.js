import { Card, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPopupTabValue } from '../../../../actions/dashboard';
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: 24,
      borderRadius: 24,
      background: 'rgba(255, 255, 255, 0.02)',
      boxShadow: 'none',
      color: '#FFFFFF',
      width: '100%',
    },
    tableRow: {
      cursor: 'pointer'
    },
    tableCell: {
      color: 'white', 
      padding: '12px 0px', 
      border: 'none'
    },
    avatar: {
      width: 30,
      height: 30,
      marginRight: 12
    },
    label: {
      background: 'none',
      padding: 0,
      marginLeft: 0
    },
    tabs: {
        backgroundColor: '#222222'
    },
    dailogCenterAvatar:{
      margin: "auto"
    }
  }));

export default function BorrowTabs({data, values, handleClose}) {
    const classes = useStyles();
  
    const [value, setValue] = React.useState("borrow");
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setPopupTabValue("borrow"))
      return () => {
        dispatch(setPopupTabValue(""))
      }
    }, [])
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
      dispatch(setPopupTabValue(newValue))
    };
    return (
        <Card
        className={classes.root}
        >
            <Tabs 
            className={classes.tabs}
            textColor="primary" 
            indicatorColor="primary" 
            value={value} onChange={handleChange}>
            <Tab label="Borrow" value="borrow" />
            <Tab label="Repay Borrow" value="repayBorrow" />
            </Tabs>
        {value === "borrow" && 
            <TabPanel value="borrow" data={data} handleClose={handleClose}/>
        }
        {value === "repayBorrow" && 
            <TabPanel value="repayBorrow" data={data} handleClose={handleClose}/>
        }
        </Card>
    )
}
