import { SET_SETTING_REQUEST, SET_SELECTED_ADDRESS, SET_LATEST_BLOCK_NUMBER, SET_WALET_TYPE} from '../../store/types'
import {store} from "../../store"
export const setSetting = settings => dispatch => {
    dispatch({ 
        type: SET_SETTING_REQUEST,
        payload: settings
    })
}

export const setSelectedAddress = address => dispatch => {
    let {selectedAddress} = store.getState().accounts;
    if(selectedAddress !== address) {
        dispatch({
            type: SET_SELECTED_ADDRESS,
            payload: address
        })
    }
}

export const setLatestBlockNumber = blockNumebr => dispatch => {
    let {latestBlockNumber} = store.getState().accounts;
    if(latestBlockNumber !== blockNumebr) {
        dispatch({
            type: SET_LATEST_BLOCK_NUMBER,
            payload: blockNumebr
        })
    }
}

export const setWalletType = walletType => dispatch => {
    let {walletType:storeWalletType} = store.getState().accounts;
    if(storeWalletType !== walletType) {
        dispatch({
            type: SET_WALET_TYPE,
            payload: walletType
        })
    }
}