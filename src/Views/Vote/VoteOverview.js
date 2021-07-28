import React from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import thunderIcon from '@assets/images/icons/thunder-icon.svg'

export default function VoteOverview() {
    return (
        <Row>
            <Col md="6">
                <Card className="card-daw-1 card_widget card-widget-2 vote-card">
                    <CardTitle className="card__head postion-relative">
                        <span className="icon icon-thunder">
                            <img src={thunderIcon} alt="logo" />
                        </span>
                        <div className="card__title title-width h6">0.0000000000000 &nbsp;&nbsp;&nbsp;DAW</div>
                    </CardTitle>
                    <CardBody>
                        <div className="link-it">
                            <span>0xAbsdfasabgf758sxshgr67c4a7sd45345</span>
                            <a href="copy" className="icon icon-arrow-45">
                                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 1.15869L0.5 10.1587" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M3.5 1.15869H9.5V7.15869" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6">
                <Card className="card card_widget card-red card-widget-2">
                    <CardTitle>
                        <div className="card__title h5">Weight of Acceptence</div>
                    </CardTitle>
                    <CardBody>
                        <div className="link-it">
                            <span className="h6">0.00000000000000</span>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
