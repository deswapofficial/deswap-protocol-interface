import React from 'react'
import { Row } from 'reactstrap'
import PriceOverview from './PriceOverview'
import PriceTable from './PriceTable'

export default function Prices() {
    return (
        <Row>
            <PriceOverview />
            <div className="prices">
                  <div className="prices__head">
                     <div className="prices__title h5">YAI Staking APY: 8.15%</div>
                  </div>
                  <div className="prices__container">
                      <PriceTable />
                  </div>
            </div>
        </Row>
    )
}
