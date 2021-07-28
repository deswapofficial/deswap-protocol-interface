import React from 'react'
import { Col, Row } from 'reactstrap'
import DashboardHistory from './DashboardHistory'
import DashboardTabs from './DashboardTabs'

export default function DashboardDetails() {
    return (
        <Row className="match-height">
            <Col md={6}>
                <DashboardHistory />
            </Col>
            <Col md={6}>
                <DashboardTabs />
            </Col>  
        </Row>
    )
}
