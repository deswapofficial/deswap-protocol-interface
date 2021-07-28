import React from 'react'
import { Card, Col, Row } from 'reactstrap'


export default function PriceOverview() {
    return (
        <Card className="card_widget card-widget-2">
            <Row>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            Total Supply
                        </div>
                    </div>
                    <h3>$3,445,322,5657.32</h3>
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            Total Borrow
                        </div>
                    </div>
                    <h3>$2,454,566,565.343</h3>
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            Available Liquidity
                        </div>
                    </div>
                    <h3>$1,545,343,654.542</h3>
                </Col>
            </Row>
        </Card>
    )
}
