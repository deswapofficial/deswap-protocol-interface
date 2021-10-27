import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    Typography,
    makeStyles
} from '@material-ui/core';
import ReactApexChart from "react-apexcharts";
import { currencyFormatter } from '../../utils/contractMethods/dashboard'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'underscore';
import CreditChart from './componentes/Credit/CreditChart';
import { setCrediValue, setCrediPerValue } from '../../actions/dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 24,
        background: 'rgba(255, 255, 255, 0.02)',
        boxShadow: 'none',
        color: '#FFFFFF',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        }
    },
    content: {
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    part: {
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 24,
    },
    amount: {
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: 48,
        paddingTop: 16
    },
    changeAmount: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 4
    }
}));

const data = {
    series: [0],
    options: {
        chart: {
            height: 200,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
                track: {
                    background: 'rgba(71, 71, 71, 1)'
                },
                dataLabels: {
                    showOn: "always",
                    name: {
                      offsetY: 8,
                      show: true,
                      color: "white",
                      fontSize: "18px"
                    },
                    value: {
                      show: false
                    }
                }
            }
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
        labels: [''],
    },
};

function Credit() {
    const classes = useStyles();
    const [options, setOptions] = useState(data)
    const [availableCredits, setAvailableCredits] = useState(0);
    const [availableCreditsPercentage, setAvailableCreditsPercentage] = useState(null);
    const {coinList, coinPriceList} = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!_.isEmpty(coinList) && !_.isEmpty(coinPriceList)){
            let totalSupply = 0;
            let totalBorrow = 0;
            coinList.forEach(coin => {
                totalSupply += ((coin.supplyBalance * (coin.collateralFactor/100)) / coin.exchangeRate) * coinPriceList[coin.apiId].usd;
                totalBorrow += (coin.borrowBalance) * coinPriceList[coin.apiId].usd;

            })
            setAvailableCredits(totalSupply - totalBorrow)
            dispatch(setCrediValue(totalSupply-totalBorrow))
            let tempOps = options;
            let temper = ((totalSupply - totalBorrow) / totalSupply) * 100;
            tempOps.series = [temper]
            tempOps.options.labels = [`${temper.toFixed("2").toString()}%`]
            setOptions(tempOps)
            setAvailableCreditsPercentage(temper)
            dispatch(setCrediPerValue(temper))
        }
        
    }, [coinList])
        
    return (
        <Card
            className={classes.root}
        >
            <Box className={classes.content}>
                <Typography className={classes.title}>
                    Available credit
                </Typography>
                <Box className={classes.part}>
                    <Typography className={classes.amount}>
                        {currencyFormatter(availableCredits)}
                    </Typography>
                </Box>
            </Box>
            <Typography>
                { availableCreditsPercentage >=0 ? <CreditChart  options={options} /> : null }
            </Typography>
        </Card>
    );
}

export default Credit;
