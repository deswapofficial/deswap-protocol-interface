import React, { useEffect, useState } from 'react'
import { Card, Col, Input, Row } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import BigNumber from 'bignumber.js';
import { Button } from 'reactstrap';
import {approveYAI, vaultDeposit, vaultWithdraw} from '@redux/actions/vault'
import {showToastMessage} from '@redux/actions/toastNotification';


export default function VaultStake() {
    let {availableYai, YAIAmount, allowanceYai} = useSelector(state => state.vault);
    const dispatch = useDispatch();
    let {selectedAddress} = useSelector(state => state.accounts);
    const [deposit, setDeposit] = useState(availableYai.toNumber())
    const [withdraw, setWithdraw] = useState(YAIAmount.toNumber())

    useEffect(() => {
        setDeposit(availableYai.toNumber())
    }, [availableYai])
    useEffect(() => {
        setWithdraw(YAIAmount.toNumber())
    }, [YAIAmount])
    const handleEnable = async () => {
        try {
            await dispatch(approveYAI(selectedAddress));
            dispatch(showToastMessage("Approved successfully", "success"))
        } catch (error) {
            dispatch(showToastMessage(error.message, "error"))
        }
    }
    const handleDeposit = () => {
        try {
            if(deposit > availableYai){
                dispatch(showToastMessage(`Please enter below or equal to ${deposit}`, 'error'))
                return false
            }
            dispatch(vaultDeposit(selectedAddress, deposit))
        } catch (error) {
            dispatch(showToastMessage(error.message, 'error'))
        }
    }
    const handleWithdraw = () => {
        try {
            if(withdraw > YAIAmount){
                dispatch(showToastMessage(`Please enter below or equal to ${YAIAmount}`, 'error'))
                return false
            }
            dispatch(vaultWithdraw(selectedAddress, withdraw))
        } catch (error) {
            dispatch(showToastMessage(error.message, 'error'))
        }
    }

    return (
        <Card className="card_widget card-widget-2 p-0 double-card">
            <Row className="match-height">
                <Col md="6">
                    <Card className="card_widget card-widget-2 card-widget-black text-center card-widget-btn card-widget-extend">
                        <h3>YAI Available to Stake </h3>
                        { 
                            allowanceYai.isZero() ? 
                            <>
                                <h2>{availableYai ? availableYai.toString() : 0} YAI</h2>
                                <Button className="des-btn des-btn-1" onClick={handleEnable}>Enable</Button>
                            </>
                            :
                            <>
                                 <form className="header__search w-100">
                                    <h2>
                                        {availableYai ? availableYai.toString() : 0} YAI
                                        <input 
                                            className="header__input text-center deposit-input mt-3" 
                                            type="number" 
                                            placeholder="Deposit" 
                                            value={deposit} 
                                            onChange={e => setDeposit(e.currentTarget.value)}
                                            />
                                    </h2>
                                    <Button className="des-btn des-btn-1" onClick={handleDeposit}>Deposit</Button>
                                </form>
                            </>
                        }
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="card_widget card-widget-2 card-widget-black text-center card-widget-btn card-widget-extend">
                        <h3>YAI Staked</h3>
                        { 
                            allowanceYai.isZero() ? 
                                <>
                                    <h2>{YAIAmount ? YAIAmount.toString() : 0} YAI</h2>
                                    <Button className="des-btn des-btn-2" onClick={handleWithdraw}>Withdraw</Button>
                                </>
                            :
                                <>
                                    <form className="header__search w-100">
                                        <h2>
                                            {YAIAmount ? YAIAmount.toString() : 0} YAI
                                            <input className="header__input text-center deposit-input mt-3" 
                                            type="number" 
                                            placeholder="Withdraw" 
                                            value={withdraw} 
                                            onChange={e => setWithdraw(e.currentTarget.value)} />
                                        </h2>
                                        <Button className="des-btn des-btn-2" onClick={handleWithdraw}>Withdraw</Button>
                                    </form>
                                </>
                        }
                        
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}
