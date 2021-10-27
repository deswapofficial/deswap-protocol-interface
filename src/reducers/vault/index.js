import {SET_AVAILABLE_YAI, SET_ALLOWANCE_YAI, SET_YAI_VAULT_DAW_BALANCE, SET_YAI_AMOUNT, SET_YAI_REWARDS, SET_DSWAP_BALANCE} from '../../store/types';
import BigNumber from 'bignumber.js';


// ** Initial State
const initialState = {
    availableYai: new BigNumber(0),
    allowanceYai: new BigNumber(0),
    YAIVaultDawBalance: new BigNumber(0), // use this for the footer sections
    YAIAmount: new BigNumber(0),
    YAIRewards: new BigNumber(0),
    dswapBalance: new BigNumber(0),
    loading: false
  }
  
  const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AVAILABLE_YAI:
            return { 
                ...state, 
                availableYai: new BigNumber(action.value) 
            }
        case SET_ALLOWANCE_YAI:
            return {
                ...state, 
                allowanceYai: new BigNumber(action.value)
            }
        case SET_YAI_VAULT_DAW_BALANCE:
            return {
                ...state, 
                YAIVaultDawBalance: new BigNumber(action.value)
            }
        case SET_YAI_AMOUNT:
            return {
                ...state, 
                YAIAmount: new BigNumber(action.value)
            }
        case SET_YAI_REWARDS:
            return {
                ...state, 
                YAIRewards: new BigNumber(action.value)
            }

        case SET_DSWAP_BALANCE:
            return {
                ...state,
                dswapBalance: new BigNumber(action.value)
            }
        default:
            return state
    }
  }
  
  export default layoutReducer