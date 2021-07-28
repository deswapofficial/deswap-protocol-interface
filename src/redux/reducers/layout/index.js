// ** ThemeConfig Import
import { HANDLE_MENU_COLLAPSED, HANDLE_LOADING} from '@redux/types'
// ** Returns Initial Menu Collapsed State
const initialMenuCollapsed = () => {
  const item = window.localStorage.getItem('menuCollapsed')
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : false
}

// ** Initial State
const initialState = {
  menuCollapsed: initialMenuCollapsed(),
  loading: false
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_MENU_COLLAPSED:
      window.localStorage.setItem('menuCollapsed', action.value)
      return { ...state, menuCollapsed: action.value }
    case HANDLE_LOADING:
      return { ...state, loading: action.value}
    default:
      return state
  }
}

export default layoutReducer
