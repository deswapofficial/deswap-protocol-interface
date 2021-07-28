import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'

import RewardPool from './RewardPool'
import VaultHeader from './VaultHeader'
import VaultHistory from './VaultHistory'
import VaultStake from './VaultStake'
import {fetchVaultData, removeVaultData} from '@redux/actions/vault'

export default function Vault() {
    let dispatch = useDispatch()
    let {selectedAddress} = useSelector(state => state.accounts);

    useEffect(() => {
        dispatch(fetchVaultData(selectedAddress))
        return () => {
            dispatch(removeVaultData())
        }
    }, [selectedAddress])
    return (
        <>
            <VaultHeader />
            <Row className="match-height">
                <VaultHistory />
                <Col md="8">
                    <Row>
                        <Col md="12">
                            <VaultStake />
                        </Col>
                        <Col md="12">
                            <RewardPool />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
