import React from 'react';
import {
  Card,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Avatar
} from '@material-ui/core';

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
    paddingBottom: 44
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    color: 'white', 
    padding: '12px 0px', 
    border: 'none'
  },
  avatar: {
    width: 26.66,
    height: 26.66,
    marginRight: 12
  }
}));

function createData(token, daily, lend, borrow, path) {
    return { token, daily, lend, borrow, path };
}
  
const rows = [
    createData('BTC', '5,623,662.23', '52.66%', '32.44%', '/static/bitcoin.png'),
    createData('ETH', '47,236,262.28', '48.51%', '56.22%', '/static/ethereum.png'),
    createData('BNB', '80,412,582.95', '84.12%', '20.62%', '/static/binance.png'),
    createData('SNX', '8,291,124.78', '5.6%', '71.62%', '/static/snx.png'),
    createData('RUNE', '804,991.42', '40.02%', '10.73%', '/static/rune.png'),
    createData('COMP', '57,225.18', '10.55%', '2.62%', '/static/comp.png'),
    createData('YFI', '62,212.21', '11.02%', '8.55%', '/static/yfi.png'),
];

function Markets() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <Typography className={classes.title}>
            All Markets
        </Typography>
        <TableContainer component={Paper} style={{backgroundColor: '#ffffff00'}}>
            <Table className={classes.table} >
                <TableHead>
                <TableRow>
                    <TableCell className={classes.tableCell}>Token</TableCell>
                    <TableCell className={classes.tableCell}>Per Day</TableCell>
                    <TableCell className={classes.tableCell}>Lend</TableCell>
                    <TableCell className={classes.tableCell}>Borrow</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.token}>
                    <TableCell className={classes.tableCell} component="th" scope="row">
                        <Box
                            display="flex"
                            alignItems="center"
                        >
                            <Avatar
                            className={classes.avatar}
                            src={row.path}
                            />
                            {row.token}
                        </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>{row.daily}</TableCell>
                    <TableCell className={classes.tableCell}>{row.lend}</TableCell>
                    <TableCell className={classes.tableCell}>{row.borrow}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
  );
}

export default Markets;
