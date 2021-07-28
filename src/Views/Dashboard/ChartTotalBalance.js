import React from 'react'
import Chart from 'react-apexcharts'

export default function ChartTotalBalance() {
    const series = [40];
    const options = {
        plotOptions: {
            radialBar: {
                hollow: {
                size: '80%',
                },
                track: {
                    background: '#E4E4E4',
                    strokeWidth: '100%',
                    margin: 0 // margin is in pixels
                },
                dataLabels: {
                name: {
                    fontSize: '18px',
                    color: '#858585',
                    offsetY: 35,
                },
                value: {
                    fontSize: '30px',
                    color: '#4FBF67',
                    offsetY: -15,
                },
                total: {
                    show: false
                }
                }
            }
        },
        colors: ['#EB5757'],
        labels: ['Net APY']
    }
    return (
        <div id="chart-total-balance">
            <Chart options={options} series={series} type='radialBar' height="210px" />
        </div>
    )
}
