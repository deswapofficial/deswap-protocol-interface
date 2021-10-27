const {HANDLE_LOADING} = require("../../store/types")

// ** Initial State
const initialState = {
    loading: false
}

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_LOADING:
            return { 
                ...state, 
                loading: action.value 
            }
        default:
            return state
    }
}
export default layoutReducer