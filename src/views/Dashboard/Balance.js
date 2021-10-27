import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    Typography,
    makeStyles
} from '@material-ui/core';

import ReactApexChart from "react-apexcharts";
import { useSelector } from 'react-redux';
import { currencyFormatter } from '../../utils/contractMethods/dashboard';
import _ from 'underscore';
import { useField } from 'formik';
import { TrendingUpTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 24,
        background: 'rgba(255, 255, 255, 0.02)',
        boxShadow: 'none',
        color: '#FFFFFF',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        }
    },
    layout: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    details: {
        [theme.breakpoints.down('md')]: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
        }
    },
    balancePart: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 40,
        [theme.breakpoints.down('md')]: {
            paddingTop: 0,
            alignItems: "center"
        }
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 24,
    },
    balanceName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16
    },
    balance: {
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 48
    }
}));
const data = {
    series: [0],
    options: {
        chart: {
            height: 300,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '78%',
                },
                track: {
                    background: 'rgba(71, 71, 71, 1)'
                },
                dataLabels: {
                    showOn: "always",
                    name: {
                      offsetY: -10,
                      show: true,
                      color: "rgba(153, 153, 153, 1)",
                      fontSize: "18px"
                    },
                    value: {
                        color: "white",
                        fontSize: "34px",
                        show: true
                    }
                }
            },
        },
        stroke: {
            lineCap: "round"
        },
        fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["rgba(228, 71, 87, 1)"],
              stops: [0, 0]
            }
        },
        labels: ['Net APY'],
    },
};

function Balance() {
    const classes = useStyles();
    const {coinList, coinPriceList} = useSelector(state => state.dashboard);
    const [chartData, setChartData] = useState(data)
    const [totalSupplybal, setTotalSupplybal] = useState(0)
    const [totalBorrowbal, setTotalBorrowbal] = useState(0)
    const [netApy, setNetApy] = useState(0)

    useEffect(() => {
        if(!_.isEmpty(coinList) && !_.isEmpty(coinPriceList)){
            let totalSupply = 0;
            let totalBorrow = 0;
            let netSupplyApy = 0;
            let netBorrowApy = 0;
            let netApyCal = 0;
            coinList.forEach(coin => {
                totalSupply += (coin.supplyBalance / coin.exchangeRate) * coinPriceList[coin.apiId].usd;
                totalBorrow += coin.borrowBalance * coinPriceList[coin.apiId].usd;
                netSupplyApy += coin.supplyBalance > 0 ? coin.supplyApy : 0
                netBorrowApy += coin.borrowBalance >0  ? coin.borrowApy : 0

            })
            netApyCal = (netSupplyApy + netBorrowApy)
            setTotalSupplybal(totalSupply)
            setTotalBorrowbal(totalBorrow)
            setNetApy(netApyCal.toPrecision("2"))
        }
        return () => {
            setTotalSupplybal(0)
        }
    }, [coinList])

    useEffect(() => {
        if(netApy){
            chartData["series"] = [netApy]
            setChartData(chartData)
        }
    }, [netApy])

    return (
        <Card className={classes.root}>
            <Typography component="span" className={classes.title}>
                APY with DAW
            </Typography>
            <Box
                className={classes.layout}
            >
                <Typography>
                    <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={300} />
                </Typography>
                <Box
                    className={classes.details}
                >
                    <Box
                        className={classes.balancePart}
                    >
                        <Typography component="span" className={classes.balanceName}>
                            Supply Balance
                        </Typography>
                        <Typography className={classes.balance}>
                            {currencyFormatter(totalSupplybal)}
                        </Typography>
                    </Box>
                    <Box
                        className={classes.balancePart}
                    >
                        <Typography component="span" className={classes.balanceName}>
                            Borrow Balance
                        </Typography>
                        <Typography className={classes.balance}>
                            {currencyFormatter(totalBorrowbal)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default Balance;
