import {SHOW_TOAST_NOFITICATION, REMOVE_TOAST_NOFITICATION} from '@redux/types'

const initialState = {
    toater: false
}

const acccountsReducer =  (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SHOW_TOAST_NOFITICATION:
        case REMOVE_TOAST_NOFITICATION:
            return {
                ...state,
                toater: payload
            }
        default:
            return state
    }
}

export default acccountsReducer