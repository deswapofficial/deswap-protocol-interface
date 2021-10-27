import { SET_COIN_PRICE_DATA} from '../../store/types'

const initialState = {
  priceList: []
}
const priceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COIN_PRICE_DATA:
        return { 
            ...state, 
            priceList: action.value
        }

    default:
      return state
  }
}

export default priceListReducer