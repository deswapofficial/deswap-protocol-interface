import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export default function VaultHeader() {
    return (
        <Card className="card_widget card-widget-2">
            <Row>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            Total Eemission per day
                        </div>
                    </div>
                    <h3>790 DAW</h3>
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            YAI Stacking APY
                        </div>
                    </div>
                    <h3>4.15%</h3>
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    <div className="card__head pos-rel">
                        <div className="card__title h6 light-title">
                            Total YAI Stacked
                        </div>
                    </div>
                    <h3>79,345,356.334 YAI</h3>
                </Col>
            </Row>
        </Card>
    )
}
