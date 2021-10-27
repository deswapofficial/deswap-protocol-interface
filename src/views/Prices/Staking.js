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
import { currencyFormatter } from '../../utils/contractMethods/dashboard';
import Label from '../../components/Label';
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';

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
  },
  label: {
    background: 'none',
    padding: 0,
    marginLeft: 0,
    width:"100%",
    justifyContent:"unset"
  },
}));

function Staking({priceList}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
        <TableContainer component={Paper} style={{backgroundColor: '#ffffff00'}}>
            <Table className={classes.table} >
                <TableHead>
                <TableRow>
                    <TableCell className={classes.tableCell}>Token</TableCell>
                    <TableCell className={classes.tableCell}>Total Supply</TableCell>
                    <TableCell className={classes.tableCell}>Supply APY</TableCell>
                    <TableCell className={classes.tableCell}>Total Borrow</TableCell>
                    <TableCell className={classes.tableCell}>Borrow APY</TableCell>
                    <TableCell className={classes.tableCell}>Liquidity</TableCell>
                    <TableCell className={classes.tableCell}>Price</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {priceList.map((price) => (
                    <TableRow key={price.symbol}>
                    <TableCell className={classes.tableCell} component="th" scope="row">
                        <Box
                            display="flex"
                            alignItems="center"
                        >
                            <Avatar
                            className={classes.avatar}
                            src={price.logo}
                            />
                            {price.symbol}
                        </Box>
                    </TableCell>
                    <TableCell className={classes.tableCell}>{currencyFormatter(price.totalSupplyUSD)}</TableCell>
                    <TableCell className={classes.tableCell}>
                      <Label
                        color={price.supplyApy > 0 ? 'success' : 'error'}
                        className={classes.label}>
                            {price.supplyApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                          {currencyFormatter(price.supplyApy, false)}
                      </Label>
                    </TableCell>
                    <TableCell className={classes.tableCell}>{currencyFormatter(price.totalSupplyUSD)}</TableCell>
                    <TableCell className={classes.tableCell} color={price.borrowApy > 0 ? 'success' : 'error'}>
                      <Label
                        color={price.borrowApy > 0 ? 'success' : 'error'}
                        className={classes.label}>
                          {price.borrowApy > 0 ? <ArrowUpwardOutlined style={{paddingRight: 5}} /> : <ArrowDownwardOutlined style={{paddingRight: 5}} />}
                          {currencyFormatter(price.borrowApy, false)}
                      </Label>
                    </TableCell>
                    <TableCell className={classes.tableCell}>{currencyFormatter(price.marketLiquidity)}</TableCell>
                    <TableCell className={classes.tableCell}>{currencyFormatter(price.price)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
  );
}

export default Staking;
