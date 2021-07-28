import React from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap'

export default function GovernanceProposala() {
    const data = [
        {
            index:1,
            status: "Executed",
            exeDate: "MAY 27th, 2021",
            exeResp: "Passed",
            exeResDate: "June 01,2021",
            rate: "12.5",
            noVote: "No vote"
        },
        {
            index:1,
            status: "Executed",
            exeDate: "MAY 27th, 2021",
            exeResp: "Passed",
            exeResDate: "June 01,2021",
            rate: "12.5",
            noVote: "No vote"
        },
        {
            index:1,
            status: "Executed",
            exeDate: "MAY 27th, 2021",
            exeResp: "Passed",
            exeResDate: "June 01,2021",
            rate: "12.5",
            noVote: "No vote"
        }
    ]
    const getTableContent = (data) => {
        return (<>
                <Col md="12" className="balances">
                    <Row className="balances__table">
                        {/* <div className="balances__row"> */}
                            <Col className="balances__cell">
                                    <div className="balances__text">{data.index}</div>
                            </Col>
                            <Col className="balances__cell">
                                    <div className="balances__text">{data.status}</div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text">{data.exeDate}</div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text positive">{data.exeResp}</div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text">{data.exeResDate}</div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text">{data.rate}%</div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text"><div className="icon-minus">-</div></div>
                            </Col>
                            <Col className="balances__cell">
                                <div className="balances__text danger-color">{data.noVote}</div>
                            </Col>
                        {/* </div> */}
                    </Row>
                    </Col>
        </>)
    }
    return (
        <Col md="8">
            <Card className="card_widget card-widget-2">
                <CardTitle className="card__head governance-head">
                    <div className="card__title h6">
                        Governance Proposals
                    </div>
                    <a href="/create-proposal" className="des-btn des-btn-3">Create a Proposal</a>
                </CardTitle>
                <CardBody className="card__body">
                    <Row>
                        {data.map(d => getTableContent(d))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
