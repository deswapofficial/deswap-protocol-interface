import { Card, makeStyles, Tab, Tabs } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

export default function SupplyTabs({data, values, handleClose}) {
    const classes = useStyles();
    const {popupTabValue} = useSelector(state => state.dashboard)
    const tabVal = popupTabValue ? popupTabValue : "supply"
    const [value, setValue] = React.useState(tabVal);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setPopupTabValue("supply"))
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
              <Tab label="Supply" value="supply" />
              <Tab label="WithDraw" value="supplyWithdraw" />
            </Tabs>
            {value === "supply" && 
              <TabPanel value="supply" data={data} handleClose={handleClose}/>
            }
            {value === "supplyWithdraw" && 
              <TabPanel value="supplyWithdraw" data={data} handleClose={handleClose} />
            }
        </Card>
    )
}
