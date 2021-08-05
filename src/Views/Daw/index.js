import React from 'react'
import { Row } from 'reactstrap'
import DawOverview from './DawOverview'
import DawTable from './DawTable'

export default function Daw() {
    return (
        <div>
            {
                true ? 
                    <h1> Coming Soon...</h1>
                :
                    <Row>
                        <DawOverview />
                        <DawTable />
                    </Row>
            }
        </div>
    )
}
