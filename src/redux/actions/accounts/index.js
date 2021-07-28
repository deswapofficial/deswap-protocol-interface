import { SET_SETTING_REQUEST} from '@redux/types'

export const setSetting = settings => dispatch => {
    dispatch({ 
        type: SET_SETTING_REQUEST,
        payload: settings
    })
}