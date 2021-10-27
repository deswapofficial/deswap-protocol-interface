import {EIPAbi} from "../contracts/EIP20Interface"
import {Dbep20} from "../contracts/DBep20Delegator"
import {Compltroller} from "../contracts/Comptroller"
import {YAIController} from "../contracts/YAIController"
import Web3 from "web3"
import BigNumber from 'bignumber.js';
import CONSTANT from "../CONSTANT";
import { getFomatedAmount } from "../index"
const commaNumber = require('comma-number');

BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP });
const web3 = new Web3(window.ethereum);
const format = commaNumber.bindWith(',', '.');

export const currencyFormatter = (labelValue, isCurrnecy=true) => {
    let suffix = '';
    let unit = 1;
    const abs = Math.abs(Number(labelValue));
    if (abs >= 1.0e9) {
        // Nine Zeroes for Billions
        suffix = 'B';
        unit = 1.0e9;
    } else if (abs >= 1.0e6) {
        // Six Zeroes for Millions
        suffix = 'M';
        unit = 1.0e6;
    } else if (abs >= 1.0e3) {
        // Three Zeroes for Thousands
        suffix = 'K';
        unit = 1.0e3;
    }
    let res = `${format(new BigNumber(`${abs / unit}`).dp(2, 1))}${suffix}`
    return isCurrnecy ? `$${res}`: res;
};

export const enableEPIToken = (address, daddress, userAddress) => {
    const amount = "100000000000000000000000000"; //"115792089237316195423570985008687907853";
    const tokenContract = new web3.eth.Contract(EIPAbi, daddress);

    return new Promise((resolve,reject) => {
        try {
            tokenContract.methods
            .approve(address, amount)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
        }
    })
}

export const getTokenAllowance  = (address, daddress, userAddress) => {
    const tokenContract = new web3.eth.Contract(EIPAbi, daddress);
    return new Promise((resolve, reject) => {
        try {
            tokenContract.methods
            .allowance(userAddress, address)
            .call()
            .then(data => {
                data = new BigNumber(data)
                resolve(!data.eq(new BigNumber(0)))
            })
            .catch(error => {
                reject(error)
            })
            
        } catch (error) {
            reject(error)
        }
    })
}

export const supplyFunc = (address, userAddress, amount, decimal) => {
    return new Promise((resolve, reject)=>{
        amount = getFomatedAmount(amount, decimal)
        const delegatorContract = new web3.eth.Contract(Dbep20, address);
        try {
            delegatorContract.methods
            .mint(amount)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            console.log('%c 🥡 error: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', error);
            reject(error)
        }
    })
}

export const redeemSupply = (address, userAddress, amount, decimal) => {
    return new Promise((resolve, reject) => {
        try {
            amount = getFomatedAmount(amount, decimal)
            const delegatorContract = new web3.eth.Contract(Dbep20, address);
            delegatorContract.methods
            .redeemUnderlying(amount)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
            
        }
    })
}

export const borrowFunc = (address, daddress, userAddress, amount, decimal) => {
    return new Promise((resolve, reject) => {
        try {
            amount = getFomatedAmount(amount, decimal)
            const delegatorContract = new web3.eth.Contract(Dbep20, daddress);
            delegatorContract.methods
            .borrow(amount)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
            
        }
    })
}

export const repayBorrow = (address, daddress, userAddress, amount, decimal) => {
    return new Promise((resolve, reject) => {
        try {
            amount = getFomatedAmount(amount, decimal)
            const delegatorContract = new web3.eth.Contract(Dbep20, daddress);
            delegatorContract.methods
            .repayBorrow(amount)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
            
        }
    })
}

export const enterMarketFunc = (address, userAddress) => {
    return new Promise((resolve, reject) => {
        try {
            const delegatorContract = new web3.eth.Contract(Compltroller, CONSTANT.COMPTROLLER_CONTRACT_ADDRESS);
            delegatorContract.methods
            .enterMarkets([address])
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
            
        }
    }) 
}

export const exitMarketFunc = (address, daddress, userAddress) => {
    return new Promise((resolve, reject) => {
        try {
            const delegatorContract = new web3.eth.Contract(Compltroller, CONSTANT.COMPTROLLER_CONTRACT_ADDRESS);
            delegatorContract.methods
            .exitMarket(daddress)
            .send({from: userAddress})
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
            
        }
    }) 
}

export const checkCollateral = (userAddress) => {
    return new Promise((resolve, reject) => {
        try {
            const delegatorContract = new web3.eth.Contract(Compltroller, CONSTANT.COMPTROLLER_CONTRACT_ADDRESS);
            delegatorContract.methods
            .getAssetsIn(userAddress)
            .call()
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            console.error('%c 🥐 error: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', error);
            reject(error)
            
        }
    })
}

export const getBorrowValue = ( address, userAddress ) => {
    return new Promise((resolve, reject)=>{
        const delegatorContract = new web3.eth.Contract(Dbep20, address);
        try {
            delegatorContract.methods
            .borrowBalanceStored(userAddress)
            .call()
            .then(data => resolve(data))
            .catch(error => reject(error))
        } catch (error) {
            reject(error)
        }
    })
}

export const getContractBalance = (address,userAddres) => {
    return new Promise((resolve, reject)=>{
    const tokenContract = new web3.eth.Contract(EIPAbi, address);
    tokenContract.methods
    .balanceOf(userAddres)
    .call()
    .then(data => {
        data = new BigNumber(data).dividedBy(1e18)
        resolve(data)
    })
    .catch(error => reject(error))
    })
}

export const getYaiLimit = (userAddres) => {
    return new Promise((resolve, reject)=>{
        const YAIControllerContract = new web3.eth.Contract(YAIController, CONSTANT.YAI_CONTROLLER_ADDRESS);
        YAIControllerContract.methods
        .getMintableYAI(userAddres)
        .call()
        .then(data => {
            data = new BigNumber(data[1]).dividedBy(1e18)
            resolve(data.toNumber())
        })
        .catch(error => reject(error))
    })
}

export const getMintedYAI = (userAddres) => {
    return new Promise((resolve, reject)=>{
        const delegatorContract = new web3.eth.Contract(Compltroller, CONSTANT.COMPTROLLER_CONTRACT_ADDRESS);
        delegatorContract.methods
        .mintedYAIs(userAddres)
        .call()
        .then(data => {
            data = new BigNumber(data).dividedBy(1e18)
            resolve(data.toNumber())
        })
        .catch(error => reject(error))
    })
}

export const callMintYAI = (userAddres, amount) => {
    return new Promise((resolve, reject)=>{
        const YAIControllerContract = new web3.eth.Contract(YAIController, CONSTANT.YAI_CONTROLLER_ADDRESS);
        amount = getFomatedAmount(amount, 18)
        YAIControllerContract.methods
        .mintYAI(amount)
        .send({from: userAddres})
        .then(data => {
            resolve(data)
        })
        .catch(error => reject(error))
    })
}

export const callRepayYAI = (userAddres, amount) => {
    return new Promise((resolve, reject)=>{
        const YAIControllerContract = new web3.eth.Contract(YAIController, CONSTANT.YAI_CONTROLLER_ADDRESS);
        amount = getFomatedAmount(amount, 18)
        YAIControllerContract.methods
        .repayYAI(amount)
        .send({from: userAddres})
        .then(data => {
            resolve(data)
        })
        .catch(error => reject(error))
    })
}