import React from 'react'
import { Row } from 'reactstrap'
import DashboardDetails from './DashboardDetails'
import DashboardOverview from './DashboardOverview'

export default function index() {
    return (
        <div>
            <Row>
                <DashboardOverview />
                <DashboardDetails />
            </Row>
        </div>
    )
}
