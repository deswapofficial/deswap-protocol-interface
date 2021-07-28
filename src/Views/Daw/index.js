import React from 'react'
import { Row } from 'reactstrap'
import DawOverview from './DawOverview'
import DawTable from './DawTable'

export default function Daw() {
    return (
        <div>
            <Row>
                <DawOverview />
                <DawTable />
            </Row>
        </div>
    )
}
