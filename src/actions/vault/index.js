import {SET_AVAILABLE_YAI, SET_ALLOWANCE_YAI, SET_YAI_VAULT_DAW_BALANCE, SET_YAI_AMOUNT, SET_YAI_REWARDS, HANDLE_LOADING, SET_DSWAP_BALANCE} from '../../store/types';
import BigNumber from 'bignumber.js';
import {YAIVaultDawBalance, YAIVaultUserInfo, YAIAllowance, YAIApprove, YAIBalanceOfAddress, YAIVaultDeposit, YAIVaultWithdraw, PendingRewards} from '../../utils/contractMethods/Vault'

export const fetchVaultData = (address) => async dispatch => {
    try {
        if(address){
            dispatch({
                type: HANDLE_LOADING, 
                value: true
            })
            // allowance call to get the allowance details
            let allowanceRes = await YAIAllowance(address);
            dispatch({
                type: SET_ALLOWANCE_YAI,
                value: new BigNumber(allowanceRes).div(1e18)
            })

            // settings available to stakedYai
            let availableBalRes = await YAIBalanceOfAddress(address);
            dispatch({
                type: SET_AVAILABLE_YAI,
                value: new BigNumber(availableBalRes).div(1e18)
            })
            let dswapBalRes = await YAIBalanceOfAddress();
            dispatch({
                type: SET_DSWAP_BALANCE,
                value: new BigNumber(dswapBalRes).div(1e18)
            })

            let YAIVaultDawBalanceRes = await PendingRewards();
            dispatch({
                type: SET_YAI_VAULT_DAW_BALANCE,
                value: new BigNumber(YAIVaultDawBalanceRes).div(1e18)
            })


            // settings users stake and rewards
            let {amount, rewardDebt} = await YAIVaultUserInfo(address);

            if(amount){
                dispatch({
                    type: SET_YAI_AMOUNT,
                    value: new BigNumber(amount).div(1e18)
                })
            }
            if(rewardDebt){
                dispatch({
                    type: SET_YAI_REWARDS,
                    value: new BigNumber(rewardDebt).div(1e18)
                })
            }
            dispatch({
                type: HANDLE_LOADING, 
                value: false
            })
        }
    } catch (error) {
        console.error('error: ', error);
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    }
}

export const removeVaultData = () => dispatch => {
    dispatch({ 
        type: SET_AVAILABLE_YAI,
        value: new BigNumber(0).div(1e18)
    })
    dispatch({
        type: SET_ALLOWANCE_YAI,
        value: new BigNumber(0).div(1e18)
    })
    dispatch({
        type: SET_YAI_VAULT_DAW_BALANCE,
        value: new BigNumber(0).div(1e18)
    })
    dispatch({
        type: SET_YAI_AMOUNT,
        value: new BigNumber(0).div(1e18)
    })
    dispatch({
        type: SET_YAI_REWARDS,
        value: new BigNumber(0).div(1e18)
    })
}

export const approveYAI = (address) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        let approveRes = await YAIApprove(address);
        if(approveRes){

            let allowanceRes = await YAIAllowance(address);
            dispatch({
                type: SET_ALLOWANCE_YAI,
                value: new BigNumber(allowanceRes).div(1e18)
            })
            dispatch({
                type: HANDLE_LOADING, 
                value: false
            })
            return true
        } else {
            dispatch({
                type: HANDLE_LOADING, 
                value: false
            })
            throw new Error("Approve Failed")
        }
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
        throw error;
    }
}

export const vaultDeposit = (address, amount) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        amount = new BigNumber(amount).multipliedBy(1e18) 
        let result = await YAIVaultDeposit(address, amount)
        dispatch(fetchVaultData(address))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    } catch (error) {
        // dispatch(showToastMessage(error.message, 'error'))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
        throw error
    }
}

export const vaultWithdraw = (address, amount) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        amount = new BigNumber(amount).multipliedBy(1e18) 
        let result = await YAIVaultWithdraw(address, amount)
        dispatch(fetchVaultData(address))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    } catch (error) {
        // dispatch(showToastMessage(error.message, 'error'))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
        throw error
    }
}

export const YAIVaultClaim = (address) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        let result = await YAIVaultClaim(address)
        dispatch(fetchVaultData(address))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    } catch (error) {
        // dispatch(showToastMessage(error.message, 'error'))
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
        throw error
    }
}