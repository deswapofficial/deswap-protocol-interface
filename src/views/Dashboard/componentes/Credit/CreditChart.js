import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function CreditChart({options}) {
    return (
        <div>
            <ReactApexChart options={options.options} series={options.series} type="radialBar" height={200} />
        </div>
    )
}
