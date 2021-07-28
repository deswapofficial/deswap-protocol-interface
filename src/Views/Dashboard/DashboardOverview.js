import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'
import thunderIcon from '@assets/images/icons/thunder-icon.svg'
import DashboardBalance from './DashboardBalance'
import DashboardCreditAvailable from './DashboardCreditAvailable'

export default function DashboardOverview() {
    const [openDaw, setOpenDaw] = useState('')
    const [openYai, setOpenYai] = useState('')

    const handleOpenDaw = () => {
        setOpenDaw(!openDaw)
    }

    const handleOpenYai = () => {
        setOpenYai(!openYai)
    }

    return (
        <Row className="match-height">
            <Col md={6}>
                <Row>
                    <Col md={6}>
                        <Card className="card_widget card-widget-2 address-card vote-card">
                            <CardTitle className="card__head position-relative">
                                <span className="icon icon-thunder">
                                    <img src={thunderIcon} alt="logo" />
                                </span>
                                <div className="card__title title-width h6">0 DAW</div>
                                <div className={openDaw ? "dropdown plus-abo active" : "dropdown plus-abo" }>
                                    <button className="dropdown__head icon-plus" onClick={handleOpenDaw}>
                                        <svg className="icon icon-document-plus">
                                            <path d="M2.77348 7.1001H4.22306V4.63028H6.69287V3.18071H4.22306V0.710893H2.77348V3.18071H0.303667V4.63028H2.77348V7.1001Z" fill="#ECECEC"/>
                                        </svg>
                                    </button>
                                    <div className="dropdown__body">
                                        <a className="dropdown__link selected" href="/test">Latest Activities</a>
                                        <a className="dropdown__link" href="/test">New Activities</a>
                                        <a className="dropdown__link" href="/test">Old Activities</a>
                                        <a className="dropdown__link" href="/test">All Activities</a>
                                    </div>
                                </div>
                            </CardTitle>
                            <CardBody className="p-0 text-center">
                                <div class="link-it">
                                 <span>0xAbsd...c4a7</span>
                                 <a href="/copy" class="icon icon-arrow-45">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M9.5 1.15869L0.5 10.1587" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M3.5 1.15869H9.5V7.15869" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </a>
                              </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="card_widget card-widget-2 address-card vote-card">
                            <CardTitle className="card__head position-relative">
                                <span className="icon icon-thunder">
                                    <img src={thunderIcon} alt="logo" />
                                </span>
                                <div className="card__title title-width h6">0 YAI</div>
                                <div className={openYai ? "dropdown plus-abo active" : "dropdown plus-abo" }>
                                    <button className="dropdown__head icon-plus" onClick={handleOpenYai}>
                                        <svg className="icon icon-document-plus">
                                            <path d="M2.77348 7.1001H4.22306V4.63028H6.69287V3.18071H4.22306V0.710893H2.77348V3.18071H0.303667V4.63028H2.77348V7.1001Z" fill="#ECECEC"/>
                                        </svg>
                                    </button>
                                    <div className="dropdown__body">
                                        <a className="dropdown__link selected" href="/test">Latest Activities</a>
                                        <a className="dropdown__link" href="/test">New Activities</a>
                                        <a className="dropdown__link" href="/test">Old Activities</a>
                                        <a className="dropdown__link" href="/test">All Activities</a>
                                    </div>
                                </div>
                            </CardTitle>
                            <CardBody className="p-0 text-center">
                                <div class="link-it">
                                 <span>0xAbsd...c4a7</span>
                                 <a href="/copy" class="icon icon-arrow-45">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M9.5 1.15869L0.5 10.1587" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                       <path d="M3.5 1.15869H9.5V7.15869" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                 </a>
                              </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <DashboardCreditAvailable />
                    </Col>
                </Row>
            </Col>
            <Col md={6}>
                <DashboardBalance />
            </Col>  
        </Row>
    )
}
