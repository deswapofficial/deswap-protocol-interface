// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import layout from './layout'
import accounts from './accounts';
import toastNotification from './toastNotification'
import vault from './vault'

const rootReducer = combineReducers({
  layout,
  accounts,
  toastNotification,
  vault
})

export default rootReducer
