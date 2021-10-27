const { SET_COIN_LIST, SET_COIN_DETAILS, SET_COIN_DETAILS_CACHE, SET_COIN_WALLET_BALANCE,SET_IS_COIN_ENABLED, SET_POP_TAB_VALUE, SET_SUPPLY_VALUES, SET_SUPPLY_WITHDRAW_VALUE, SET_BORROW_VALUES, SET_BORROW_REPAY_VALUE, SET_COIN_SUPPLY_BALANCE, SET_COIN_PRICE_LIST, SET_COLLATERAL_VALUE, SET_COIN_BORROW_BALANCE, SET_GRAPH_DATA, SET_AVAILABLE_CREDIT, SET_AVAILABLE_CREDIT_PERCENTAGE, SET_AVAILABLE_YAI_LIMIT, SET_AVAILABLE_YAI_MINTED, SET_YAI_APPROVED } = require("../../store/types")

// ** Initial State
const initialState = {
    coinDetailsCache: [],
    coinList: [],
    coinPriceList: {},
    coinGraphData: {},
    coinDetails: {},
    coinSuppplied: false,
    isCoinEnabled: false,
    popupTabValue: "",
    supplyAmount: 0,
    supplyWithdrawAmount: 0,
    borrowAmount: 0,
    repayBorrowAmount: 0,
    supplyBalance: 0,
    borrowBalance: 0,
    availableCredit: 0,
    availableCreditPercentage: 0,
    availableYaiLimit: 0,
    yaiMinted: 0,
    yaiApproved: false
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COIN_LIST:
            return { 
                ...state, 
                coinList: action.value 
            }
        case SET_COIN_DETAILS:
            return {
                ...state,
                coinDetails: action.value 
            }
        case SET_COIN_DETAILS_CACHE:
            return {
                ...state,
                coinDetailsCache: state.coinDetailsCache.push(action.value)
            }
        case SET_COIN_WALLET_BALANCE:
            return {
                ...state,
                coinList: state.coinList.map(list => {
                    if(list.address === action.value.address){
                        list['wallet'] = action.value.wallet;
                    }
                    return list
                })
            }
        case SET_COIN_SUPPLY_BALANCE:
            return {
                ...state,
                coinSuppplied: (action.value.supplyBalance || state.coinSuppplied) ,
                coinList: state.coinList.map(list => {
                    if(list.address === action.value.address){
                        list['supplyBalance'] = action.value.supplyBalance;
                    }
                    return list
                })
            }
        case SET_COIN_BORROW_BALANCE:
            return {
                ...state,
                coinBorrowed: (action.value.supplyBalance || state.coinSuppplied) ,
                coinList: state.coinList.map(list => {
                    if(list.address === action.value.address){
                        list['borrowBalance'] = action.value.borrowBalance;
                    }
                    return list
                })
            }
        case SET_COIN_PRICE_LIST:
            return {
                ...state,
                coinPriceList: action.value
            }
        case SET_IS_COIN_ENABLED:
            return {
                ...state,
                isCoinEnabled: action.value
            }
        case SET_POP_TAB_VALUE:
            return {
                ...state,
                popupTabValue: action.value
            }
        case SET_SUPPLY_VALUES:
            return {
                ...state,
                supplyAmount: parseFloat(action.value)
            }
        case SET_SUPPLY_WITHDRAW_VALUE:
            return {
                ...state,
                supplyWithdrawAmount: parseFloat(action.value)
            }
        case SET_BORROW_VALUES:
            return {
                ...state,
                borrowAmount: parseFloat(action.value)
            }
        case SET_BORROW_REPAY_VALUE:
            return {
                ...state,
                repayBorrowAmount: parseFloat(action.value)
            }
        case SET_COLLATERAL_VALUE:
            return {
                ...state,
                coinList: state.coinList.map(list => {
                    if(list.symbol === action.value.symbol){
                        if(action.value.value !== list['collateral']) list['collateral'] = action.value.value;
                    }
                    return list
                })
            }
        case SET_GRAPH_DATA:
            return {
                ...state,
                coinGraphData: action.value
            }
        case SET_AVAILABLE_CREDIT:
            return {
                ...state,
                availableCredit: action.value
            }
        case SET_AVAILABLE_CREDIT_PERCENTAGE:
            return {
                ...state,
                availableCreditPercentage: action.value
            }
        case SET_AVAILABLE_YAI_LIMIT:
            return {
                ...state,
                availableYaiLimit: action.value
            }
        case SET_AVAILABLE_YAI_MINTED:
            return {
                ...state,
                yaiMinted: action.value
            }
        case SET_YAI_APPROVED:
            return {
                ...state,
                yaiApproved: action.value
            }
        default:
            return state
    }
}
export default dashboardReducer