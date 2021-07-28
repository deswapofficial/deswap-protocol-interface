import React from 'react'
import { Card, CardBody, CardTitle, Col, Row, Progress } from 'reactstrap'
import thunderIcon from '@assets/images/icons/thunder-icon.svg'

export default function DawOverview() {
    return (
        <>
            <Col md={6}>
                <Card className="card-transparent card-daw-1 vote-card">
                    <CardTitle className="card__head postion-relative">
                        <span className="icon icon-thunder">
                            <img src={thunderIcon} alt="logo" />
                        </span>
                        <div className="card__title title-width h6">0 DAW</div>
                    </CardTitle>
                    <CardBody>
                        <div className="link-it">
                                <span>0xAbsdfasabgf758sxshgr67c4a7sd45345</span>
                        </div>
                    </CardBody>
                </Card>
            </Col>  
            <Col md={6}>
                <Card className="card-transparent card-daw-1 vote-card">
                    <div className="wallets__box">
                        <Row>
                            <Col md="6">
                                <div className="wallets__info">Daily Distribution</div>
                                <div className="h6 m-b-16">4,456.23</div>
                            </Col>
                            <Col md="6">
                                <div className="wallets__info">Remaining</div>
                                <div className="h6 m-b-16">68,999,995.98</div>
                            </Col>
                            <Col md={12}>
                                <div className="progress-cont">
                                 {/* <div className="wallets__progress bg-red" style={{width: "65%"}}></div> */}
                                 <Progress className="wallets__progress" value={65}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>  
        </>
    )
}
