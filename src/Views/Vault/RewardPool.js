import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'reactstrap'

export default function RewardPool() {
    let {YAIVaultDawBalance} = useSelector(state => state.vault);
    console.log('YAIVaultDawBalance: ', YAIVaultDawBalance);

    return (
        <Card className="card_widget card-widget-2">
            <div className="card__head pos-rel">
                <div className="card__title h6 light-title">
                    YAI Vault Rewards Pool
                </div>
            </div>
            <h3>{YAIVaultDawBalance ? YAIVaultDawBalance.toString() : 0} DAW</h3>
        </Card>
    )
}
