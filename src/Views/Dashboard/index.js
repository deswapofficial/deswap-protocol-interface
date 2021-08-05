import React from 'react'
import { Row } from 'reactstrap'
import DashboardDetails from './DashboardDetails'
import DashboardOverview from './DashboardOverview'

export default function index() {
    return (
        <div>
            {
                true ? 
                    <h1> Coming Soon...</h1>
                :
                    <Row>
                        <DashboardOverview />
                        <DashboardDetails />
                    </Row>
            }
        </div>
    )
}
