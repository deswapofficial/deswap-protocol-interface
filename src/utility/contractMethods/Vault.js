import {YaiVaultAbi} from '../contracts/YaiVaultAbi'
import {YAIabi} from '../contracts/YAIabi'
import Web3 from "web3";
import BigNumber from 'bignumber.js';
BigNumber.config({ DECIMAL_PLACES: 5 })
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP })
const web3 = new Web3(window.ethereum);

const vaultContract = new web3.eth.Contract(YaiVaultAbi, process.env.REACT_APP_YaiVaultProxyAddress);
const YAIContract = new web3.eth.Contract(YAIabi, process.env.REACT_APP_YAIAddress);
const DawContract = new web3.eth.Contract(YAIabi, process.env.REACT_APP_DAWAddress);

/* 
    * Enable click action of vault
    * Allowance == 0 approve.
*/
export const YAIApprove = (myAddress) => {
    const amount = "11579208923731619542357098500868790785326998466";
    return new Promise((resolve, reject) => {
        
        if(web3 && web3.currentProvider){
            YAIContract.methods
                .approve(process.env.REACT_APP_YaiVaultProxyAddress, amount)
                .send({from : myAddress})
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

export const YAIAllowance = (myAddress) => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            YAIContract.methods
                .allowance(myAddress, process.env.REACT_APP_YaiVaultProxyAddress)
                .call({from : myAddress})
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 
    * make the above field as input and call for deposit
*/
export const YAIVaultDeposit = (myAddress, amount) => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .deposit(amount)
                .send({from : myAddress})
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 
    * need to call on withdraw btn.
*/
export const YAIVaultWithdraw = (myAddress, amount) => {
    console.log('amount: ', amount.toString());
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .withdraw(amount)
                .send({from : myAddress})
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 
    * need to call on claim click first add clim btn
*/
export const YAIVaultClaim = (myAddress) => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .claim()
                .send({from : myAddress})
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 

*/
export const YAIVaultGetAdmin = () => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .getAdmin()
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 
    * for user info
*/
export const YAIVaultUserInfo = (address) => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .userInfo(address)
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

export const YAIVaultDawBalance = () => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .dawBalance()
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/*
    * To check user pending = availableYAIBalance field
*/ 
export const YAIVaultPendingDawBalance = (address) => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            vaultContract.methods
                .pendingDAW(address)
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }    
    })
}

/* 
    * function to get the address user or contract based on address
*/
export const YAIBalanceOfAddress = myAddress => {
    if(!myAddress) myAddress = process.env.REACT_APP_YaiVaultProxyAddress
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            YAIContract.methods
                .balanceOf(myAddress)
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }
    })
}

export const PendingRewards = () => {
    return new Promise((resolve, reject) => {
        if(web3 && web3.currentProvider){
            DawContract.methods
                .balanceOf(process.env.REACT_APP_YaiVaultProxyAddress)
                .call()
                .then((data) => {
                    resolve(data)
                }).catch(error => reject(error));
        } else {
            resolve()
        }
    })
}