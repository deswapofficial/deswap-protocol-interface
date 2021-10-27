// ** ThemeConfig Import
import { SET_SETTING_REQUEST,SET_SELECTED_ADDRESS, SET_LATEST_BLOCK_NUMBER, SET_WALET_TYPE} from '../../store/types'

const initialState = {
  selectedAddress:"",
  latestBlockNumber:"",
  walletType:"metamask"
}
const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING_REQUEST:
      return { ...state, ...action.payload }
    
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload
      }
    case SET_LATEST_BLOCK_NUMBER:
      return {
        ...state,
        latestBlockNumber: action.payload
      }
    
    case SET_WALET_TYPE:
      return {
        ...state,
        walletType: action.payload
      }

    default:
      return state
  }
}

export default accountsReducer