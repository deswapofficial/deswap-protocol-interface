import BigNumber from 'bignumber.js';
import { callApi } from "../../utils/apiService";
import {HANDLE_LOADING, SET_COIN_PRICE_DATA} from "../../store/types";
import constants from "../../utils/CONSTANT";
import _ from "underscore";
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP });

export const setPriceList = () => async dispatch =>  {
    dispatch({
        type: HANDLE_LOADING, 
        value: true
    })
    try {
        let {data} = await callApi(`${constants.API_URL}api/all-price`,"get", {}, {})
        if(data.status){
            let {data: result} = await CoinGeckoClient.simple.price({
                ids: _.pluck(data.data, "apiId"),
                vs_currencies: ['usd'],
            });
            
            let value = data.data.map(d => {
                return {
                    ...d,
                    price: result[d.apiId].usd
                }
            })
            dispatch({
                type:SET_COIN_PRICE_DATA,
                value
            })
        }else {
            dispatch({
                type:SET_COIN_PRICE_DATA,
                value: []
            })
        }
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })  
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
        dispatch({
            type:SET_COIN_PRICE_DATA,
            value: []
        })
    }
}

export const removePriceList = () => dispatch => {
    dispatch({
        type:SET_COIN_PRICE_DATA,
        value: []
    })
}
