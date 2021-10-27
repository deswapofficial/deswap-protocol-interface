import React from 'react';
import {
  Box,
  Card,
  Typography,
  makeStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@material-ui/core';
import Label from '../../components/Label';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 24,
    background: 'rgba(255, 255, 255, 0.02)',
    boxShadow: 'none',
    color: '#FFFFFF'
  },
  title : {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 20
    }
  },
  button: {
    color: 'white',
    background: 'rgba(228, 71, 87, 1)',
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 700,
    padding: 16
  },
  normalText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: 'white', 
    padding: '12px 0px', 
    border: 'none'
  },
  // statusSuccess: {
  //   background: "rgba(75, 210, 134, 0.16)",
  //   color: 'rgba(64, 221, 62, 1)',
  //   fontStyle: 'normal',
  //   fontWeight: '400',
  //   fontSize: 14,
  //   paddingTop: 4,
  //   paddingBottom: 4,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   borderRadius: 100,
  //   color: 'white', 
  //   padding: '12px 0px', 
  //   border: 'none'
  // },
  // statusFaild: {
  //   background: "rgba(255, 99, 112, 0.16)",
  //   color: 'rgba(237, 64, 61, 1)',
  //   fontStyle: 'normal',
  //   fontWeight: '400',
  //   fontSize: 14,
  //   paddingTop: 4,
  //   paddingBottom: 4,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   borderRadius: 100,
  //   color: 'white', 
  //   padding: '12px 0px', 
  //   border: 'none'
  // },
  vote: {
      color: 'rgba(237, 64, 61, 1)',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      padding: '12px 0px', 
      border: 'none'
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    color: 'white', 
    padding: '12px 0px', 
    border: 'none'
  },
  label: {
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    width: 98
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "30px",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
      alignItems: "start"
    }
  }
}));

function createData(name, execute, date1, status, date2, vote) {
    return { name, execute, date1, status, date2, vote };
}
  
const rows = [
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', false, 'June 01,2021', '-'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
    createData('VVIP-2 Collateral Adjust ...', 'Executed', 'MAY 27th, 2021', true, 'June 01,2021', 'No Vote'),
];

function Proposals() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Box
            className={classes.header}
        >
            <Typography className={classes.title}>
                Governance Proposals
            </Typography>
            <Button 
                variant="contained" 
                className={classes.button}
                startIcon={<AddOutlinedIcon />}
            >
                Create a Proposal
            </Button>
        </Box>
        <TableContainer component={Paper} style={{backgroundColor: '#ffffff00'}}>
            <Table className={classes.table}>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" className={classes.tableCell}>
                        <RemoveOutlinedIcon />
                      </TableCell>
                      <TableCell className={classes.normalText}>{row.name}</TableCell>
                      <TableCell className={classes.normalText}>{row.execute}</TableCell>
                      <TableCell className={classes.normalText}>{row.date1}</TableCell>
                      <TableCell className={classes.tableCell}>
                        <Label
                          className={classes.label}
                          color={row.status ? 'success' : 'error'}
                        >
                          {row.status > 0 ? 'Passed' : 'Not passed'}
                        </Label>
                      </TableCell>
                      
                      <TableCell className={classes.normalText}>{row.date1}</TableCell>
                      <TableCell className={classes.vote}>{row.vote}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
  );
}

export default Proposals;
