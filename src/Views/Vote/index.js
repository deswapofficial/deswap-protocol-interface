import React from 'react'
import { Row } from 'reactstrap'
import VoteOverview from './VoteOverview'
import VaultHistory from '../Vault/VaultHistory'
import GovernanceProposala from './GovernanceProposala'
export default function Vote() {
    return (
        <>
        {
                true ? 
                    <h1> Coming Soon...</h1>
                :
                <>
                    <VoteOverview />
                    <Row className="match-height">
                        <VaultHistory />
                        <GovernanceProposala />
                    </Row>  
                </>
        }
        </>
    )
}
