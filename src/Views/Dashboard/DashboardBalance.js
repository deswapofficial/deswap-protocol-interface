import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ChartTotalBalance from './ChartTotalBalance'

export default function DashboardBalance() {
    return (
        <Card className="card_widget card-widget-2 text-center col-pad-vet">
            <button class="card__next">
                <svg class="icon icon-arrow-up-right">
                    {/* <use xlink:href="img/sprite.svg#icon-arrow-up-right"></use> */}
                </svg>
            </button>
            <Row>
                <Col md="12">
                    <div class="card__chart card__chart_total-balance">
                            <ChartTotalBalance />
                        <div class="card__title h6 m-t-20">🔥 APY with DAW</div>
                    </div>
                </Col>
                <Col md="6">
                    <div class="card-balance-1">
                        <h3>Supply Balance</h3>
                        <span>$124</span>
                    </div>
                </Col>
                <Col md="6">
                    <div class="card-balance-1">
                        <h3>Borrow Balance</h3>
                        <span>$2,334</span>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}
