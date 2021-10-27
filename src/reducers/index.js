import { combineReducers } from 'redux';
import vault from "./vault";
import accounts from "./accounts";
import layout from "./layout";
import dashboard from './dashboard';
import prices from './prices'

const rootReducer = combineReducers({
    dashboard,
    layout,
    accounts,
    vault,
    prices
});

export default rootReducer;
