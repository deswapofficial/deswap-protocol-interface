import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'

export default function DashboardCreditAvailable() {
    const series = [70];
    const options = {
        plotOptions: {
        radialBar: {
            hollow: {
            size: '60%',
            },
            track: {
                background: '#E4E4E4',
                strokeWidth: '100%',
                margin: 0 // margin is in pixels
            },
            dataLabels: {
            name: {
                fontSize: '0px',
                color: '#858585',
            },
            value: {
                fontSize: '30px',
                color: '#fff',
                offsetY: -5,
            },
            total: {
                show: false
            }
            }
        }
        },
        stroke: {
        lineCap: 'round'
        },
        colors: ['#EB5757']
    };
    return (
        <Card className="card_widget card-widget-2 card-avail-credit">
            <Row>
                <Col md={6}>
                    <div class="card__head pos-rel">
                        <div class="card__title h6 light-title">Available Credit</div>
                        </div>
                        <div class="card__body">
                        <h2>0.2134353</h2>
                        <span>+ 3,897.98 USD</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div class="card__chart card__chart_total-balance">
                      <Chart options={options} series={series} type='radialBar' height={200} />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}