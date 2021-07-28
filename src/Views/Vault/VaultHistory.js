import React from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import thunderIcon from '@assets/images/icons/thunder-icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import {YAIVaultClaim} from '@redux/actions/vault'

export default function VaultHistory() {
    let {YAIRewards, YAIAmount, dswapBalance, availableYai} = useSelector(state => state.vault);
    let {selectedAddress} = useSelector(state => state.accounts);
    let dispatch = useDispatch();
    const handleClaim = () => {
        try {
            dispatch(YAIVaultClaim(selectedAddress))
        } catch (error) {
            
        }
    }
    return (
        <Col md="4">
            <Card className="card_widget card-widget-2">
                <div className="box-st-2">
                    <h3>Available YAI  to stake</h3>
                    <div className="box-st-inner position-relative">
                        <span className="icon icon-thunder">
                            <img src={thunderIcon} alt="logo" />
                        </span>
                        <span className="text-span">{availableYai ? availableYai.toString() : 0} YAI</span>
                    </div>
                </div>
                <div className="box-st-2">
                    <h3>YAI Staked</h3>
                    <div className="box-st-inner position-relative">
                        <span className="icon icon-thunder">
                            <img src={thunderIcon} alt="logo" />
                        </span>
                        <span className="text-span">{YAIAmount ? YAIAmount.toString() : 0} YAI</span>
                    </div>
                </div>
                <div className="box-st-2">
                    <Col md="12">
                        <h3>Available YAI rewards</h3>
                    </Col>
                    <div className="box-st-inner position-relative">
                        <Row>
                            <Col md="8">
                                <span className="icon icon-thunder">
                                    <img src={thunderIcon} alt="logo" />
                                </span>
                                <span className="text-span">{YAIRewards ? YAIRewards.toString() : 0} YAI</span>
                            </Col>
                            <Col md="4">
                                <Button color="primary" className="btn_transparent" onClick={handleClaim}>Claim</Button>
                            </Col>

                        </Row>
                    </div>
                </div>
                <div className="box-st-2">
                    <h3>Deswap Balance</h3>
                    <div className="box-st-inner position-relative">
                        <span className="icon icon-thunder">
                            <img src={thunderIcon} alt="logo" />
                        </span>
                        <span className="text-span">{dswapBalance ? dswapBalance.toString() : 0} YAI</span>
                    </div>
                </div>
            </Card>
        </Col>
    )
}
