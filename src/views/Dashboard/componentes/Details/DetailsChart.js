import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'


export default function DetailsChart({popupTabValue, coinGraphData}) {
    const [series, setSeries] = useState([])
    const [options, setOptions] = useState({})
    const optionsArea = {
        chart: {
          height: 350,
          type: 'area',
          toolbar:{
            show: false,
          },
          xaxis: {
            show: false,
            labels: {
              show: false
            }
          },
          yaxis: {
            labels: {
              show: false
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
            format: 'dd/MM/yy HH:mm'
          },
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#4caf50'], 
        xaxis: {
          show: false,
          labels:{
            formatter: function(value, timestamp, opts) {
              return ""
            }
          }
        },
        yaxis: {
          show: false,
        }
      }
    useEffect(() => {
      const graphData = popupTabValue === "supply" ? coinGraphData["supplyApy"] : coinGraphData["borrowApy"]
      setSeries([{data: graphData}])
      let color = popupTabValue === "supply"? "#4caf50" : "#e44757"
      setOptions({...optionsArea, colors: [color]})
    }, [popupTabValue, coinGraphData])
    return (
        <div id="chart-timeline">
            <ReactApexChart options={options} series={series} type="area" height={160} />
        </div>
    )
}
