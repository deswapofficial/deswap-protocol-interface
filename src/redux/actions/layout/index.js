import {HANDLE_MENU_COLLAPSED, HANDLE_LOADING} from '@src/redux/types'

// ** Handles Menu Collapsed State (Bool)
export const handleMenuCollapsed = value => dispatch => {
    dispatch({ type: HANDLE_MENU_COLLAPSED, value })
}

export const handleLoading = value => dispatch => {
    dispatch({ type: HANDLE_LOADING, value });
}