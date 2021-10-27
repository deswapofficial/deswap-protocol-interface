import BigNumber from 'bignumber.js';
import { callApi } from "../../utils/apiService";
import { tokenBalanceOfAddress } from "../../utils/contractMethods/stake";
import {HANDLE_LOADING, SET_COIN_LIST, SET_COIN_DETAILS, SET_COIN_WALLET_BALANCE, SET_IS_COIN_ENABLED, SET_POP_TAB_VALUE, SET_SUPPLY_VALUES, SET_SUPPLY_WITHDRAW_VALUE, SET_BORROW_VALUES, SET_BORROW_REPAY_VALUE, SET_COIN_SUPPLY_BALANCE, SET_COIN_PRICE_LIST, SET_COLLATERAL_VALUE, SET_COIN_BORROW_BALANCE, SET_GRAPH_DATA, SET_AVAILABLE_CREDIT, SET_AVAILABLE_CREDIT_PERCENTAGE, SET_AVAILABLE_YAI_LIMIT, SET_AVAILABLE_YAI_MINTED, SET_YAI_APPROVED} from "../../store/types";
import constants from "../../utils/CONSTANT";
import { borrowFunc, enableEPIToken, enterMarketFunc, exitMarketFunc, getTokenAllowance, redeemSupply, repayBorrow, supplyFunc, checkCollateral, getBorrowValue } from "../../utils/contractMethods/dashboard";
import _ from "underscore";
import { callMintYAI, callRepayYAI, getMintedYAI, getYaiLimit } from '../../utils/contractMethods/dashboard';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP });

const setCoinBalance = (coinList, walletAddress) => async dispatch =>  {
    try {
        let ids = _.pluck(coinList, "apiId")
        let {data} = await CoinGeckoClient.simple.price({
            ids,
            vs_currencies: ['usd'],
        });
        dispatch({
            type: SET_COIN_PRICE_LIST,
            value: data
        })
    } catch (error) {
        console.error('%c 🍹 error: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', error);
    }
    let collateralRes = await checkCollateral(walletAddress)
    coinList.forEach(async list => {
        let wallet = await tokenBalanceOfAddress(list.underlyingAddress, walletAddress)
        let supplyBalance = await tokenBalanceOfAddress(list.address, walletAddress)
        let borrowBalance = await getBorrowValue(list.address, walletAddress)
        wallet = new BigNumber(wallet).dividedBy(`1e${list.decimal}`).toString();
        supplyBalance = new BigNumber(supplyBalance).dividedBy(`1e${8}`).toNumber();
        borrowBalance = new BigNumber(borrowBalance).dividedBy(`1e${list.decimal}`).toNumber();
        let colletral = collateralRes.includes(list.address)
        dispatch({
            type: SET_COLLATERAL_VALUE,
            value:{
                symbol: list.symbol,
                value: colletral
            }
        }) 
        dispatch({
            type: SET_COIN_WALLET_BALANCE,
            value: {
                address: list.address,
                wallet
            }
        })
        dispatch({
            type: SET_COIN_SUPPLY_BALANCE,
            value: {
                address: list.address,
                supplyBalance
            }
        })
        dispatch({
            type: SET_COIN_BORROW_BALANCE,
            value: {
                address: list.address,
                borrowBalance
            }
        })
    })

}

export const getDashboardData = (walletAddress) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        let {data} = await callApi(`${constants.API_URL}api/tokenList`,"get", {}, {})
        dispatch({
            type: SET_COIN_LIST,
            value: data.data
        })
        dispatch(setCoinBalance(data.data, walletAddress))
        let defaultToken = data.data[0].address
        let {data:result} = await callApi(`${constants.API_URL}api/tokenDetail/${defaultToken}`, "get", {}, {})
        dispatch(setYaiLimit(walletAddress))
        dispatch(setYaiMinted(walletAddress))
        await callApi(`${constants.API_URL}api/apy-history/${defaultToken}`, "get", {}, {}).then(({data}) => {
            dispatch({
                type: SET_GRAPH_DATA,
                value: data.data
            })
        }).catch(error => {
            dispatch({
                type: SET_GRAPH_DATA,
                value: {}
            })
        })
        dispatch({
            type: SET_COIN_DETAILS,
            value: {...data.data[0], ...result.data}
        })
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    }

}

export const removeDashboardData = () => dispatch => {
    dispatch({
        type: SET_COIN_LIST,
        value: []
    })
}

export const setCoinDetials = (detials) => async dispatch => {

    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        let {data:result} = await callApi(`${constants.API_URL}api/tokenDetail/${detials.address}`, "get", {}, {})
        await callApi(`${constants.API_URL}api/apy-history/${detials.address}`, "get", {}, {}).then(({data}) => {
            dispatch({
                type: SET_GRAPH_DATA,
                value: data.data
            })
        }).catch(error => {
            dispatch({
                type: SET_GRAPH_DATA,
                value: {}
            })
        })
        dispatch({
            type: SET_COIN_DETAILS,
            value: {...detials, ...result.data}
        })
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    }
}

export const setPopupTabValue = value => dispatch => {
    dispatch({
        type: SET_POP_TAB_VALUE,
        value
    })
}

export const enableToken = (address, daddress, userAddress) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING, 
            value: true
        })
        let data = await enableEPIToken(address, daddress, userAddress);
        dispatch({
            type: SET_IS_COIN_ENABLED,
            value: true
        })
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
            type: SET_IS_COIN_ENABLED,
            value: false
        })
        
    }
}

export const isEnabledCoin = (address, daddress, userAddress) => async (dispatch) => {
    try {
        if(daddress && userAddress){
            dispatch({
                type: HANDLE_LOADING, 
                value: true
            })
            let data = await getTokenAllowance(address, daddress, userAddress)
            if(data){
                dispatch({
                    type: SET_IS_COIN_ENABLED,
                    value: true
                })
            } else {
                dispatch({
                    type: SET_IS_COIN_ENABLED,
                    value: false
                })
            }
            dispatch({
                type: HANDLE_LOADING, 
                value: false
            })
        }
    } catch (error) {
        dispatch({
            type: SET_IS_COIN_ENABLED,
            value: false
        })
        dispatch({
            type: HANDLE_LOADING, 
            value: false
        })
    }
}

// Supply Methods
export const setSupplyValue = value => dispatch =>{
    dispatch({
        type: SET_SUPPLY_VALUES,
        value
    })
}

export const setWithdrawSupply = value => dispatch => {
    dispatch({
        type: SET_SUPPLY_WITHDRAW_VALUE,
        value
    })
}

export const suplyCoin = (address, userAddress, amount, decimal) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await supplyFunc(address, userAddress, amount, decimal)
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
        let {data:result} = await callApi(`${constants.API_URL}api/addSupplier/${address}`, "post", {}, {})
        dispatch(getDashboardData(userAddress))   
    } catch (error) {
        console.error('%c 🍹 error: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', error);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    }
}

export const updateWithdrawAmount = value => dispatch => {
    dispatch({
        type: SET_SUPPLY_WITHDRAW_VALUE,
        value
    })
}

export const redeemSupplyCoin = (address, userAddress, amount, decimal) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await redeemSupply(address, userAddress, amount, decimal);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    }
}

export const applyEnableCollateral = (symbol, value) => dispatch => {
    return dispatch({
        type: SET_COLLATERAL_VALUE,
        value: {
            symbol,
            value
        }
    })
}

export const enableCollateral = (address, userAddress) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await enterMarketFunc(address, userAddress)
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    } catch (error) {
        console.error('%c 🥔 error: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', error);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    }
}

export const disableCollateral = (address, daddress, userAddress) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await exitMarketFunc(address, daddress, userAddress)
        console.error('%c 🥥 data: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', data);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    } catch (error) {
        dispatch({
            type: HANDLE_LOADING,
            value: false
        })
    }
}

// Borrow Methods
export const setBorowValue = value => dispatch => {
    dispatch({
        type: SET_BORROW_VALUES,
        value
    })
}

export const setRepayBorrowValue = value => dispatch => {
    dispatch({
        type: SET_BORROW_REPAY_VALUE,
        value
    })
}

export const borrowCoin = (address, daddress, userAddress, amount, decimal) => async dispatch => {
        try {
            dispatch({
                type: HANDLE_LOADING,
                value: true
            })
            let data = await borrowFunc(address, daddress, userAddress, amount, decimal);
            dispatch({
                type: HANDLE_LOADING,
                value: false
            }) 
            let {data:result} = await callApi(`${constants.API_URL}api/addBorrower/${address}`, "post", {}, {})
            dispatch(getDashboardData(userAddress))
        } catch (error) {
            console.error('%c 🍯 error: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', error);
            dispatch({
                type: HANDLE_LOADING,
                value: false
            }) 
        }
}

export const repayBorrowCoin =  (address, daddress, userAddress, amount, decimal) => async dispatch => {
        try {
            dispatch({
                type: HANDLE_LOADING,
                value: true
            })
            let data = await repayBorrow(address, daddress, userAddress, amount, decimal);
            dispatch({
                type: HANDLE_LOADING,
                value: false
            }) 
        } catch (error) {
            console.error('%c 🥖 error: ', 'font-size:20px;background-color: #B03734;color:#fff;', error);
            dispatch({
                type: HANDLE_LOADING,
                value: false
            }) 
        }
}

export const setCrediValue = (value) => dispatch => {
    dispatch({
        type: SET_AVAILABLE_CREDIT,
        value
    })
}

export const setCrediPerValue = (value) => dispatch => {
    dispatch({
        type: SET_AVAILABLE_CREDIT_PERCENTAGE,
        value
    })
}

export const addtokenMetamask = (tokenAddress, tokenSymbol, tokenDecimals, tokenImage) => async dispatch => {
    dispatch({
        type: HANDLE_LOADING,
        value: true
    })
    try {
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20', // Initially only supports ERC20, but eventually more!
              options: {
                address: tokenAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
                image: tokenImage, // A string url of the token logo
              },
            },
          });
        
          if (wasAdded) {
            console.log('Thanks for your interest!');
          } else {
            console.log('Your loss!');
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
    }
}

// Wallet Methods
export const setYaiLimit = (userAddress) => async dispatch => {
    try {
        let data = await getYaiLimit(userAddress);
        dispatch({
            type: SET_AVAILABLE_YAI_LIMIT,
            value: data
        })
        let result = await getTokenAllowance(constants.YAI_TOKEN_ADDRESS, constants.YAI_CONTROLLER_ADDRESS, userAddress)
        if(result){
            dispatch({
                type: SET_YAI_APPROVED,
                value: true
            })
        } else {
            dispatch({
                type: SET_YAI_APPROVED,
                value: false
            })
        }
    } catch (error) {
        console.error('%c 🥠 error: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', error);
    }
}

export const setYaiMinted = userAddress => async dispatch =>{
    try {
        let data = await getMintedYAI(userAddress);
        dispatch({
            type: SET_AVAILABLE_YAI_MINTED,
            value: data
        })
    } catch (error) {
        console.error('%c 🥗 error: ', 'font-size:20px;background-color: #FCA650;color:#fff;', error);
        dispatch({
            type: SET_AVAILABLE_YAI_MINTED,
            value: 0
        })
    }
}

export const callMintYAIMethod = (userAddress, amount) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await callMintYAI(userAddress, amount);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        }) 
    } catch (error) {
        console.error('%c 🥘 error: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', error);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        }) 
    }
}

export const callRepayYAIMethod = (userAddress, amount) => async dispatch => {
    try {
        dispatch({
            type: HANDLE_LOADING,
            value: true
        })
        let data = await callRepayYAI(userAddress, amount);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        }) 
    } catch (error) {
        console.error('%c 🍻 error: ', 'font-size:20px;background-color: #465975;color:#fff;', error);
        dispatch({
            type: HANDLE_LOADING,
            value: false
        }) 
    }
}