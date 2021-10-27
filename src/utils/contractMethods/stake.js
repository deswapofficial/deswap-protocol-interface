import { stackAbi } from "../contracts/stake";
import {EIPAbi} from "../contracts/EIP20Interface"
import { YAIabi } from "../contracts/YAIabi";
import Web3 from "web3";
import BigNumber from "bignumber.js";
BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_UP });
const web3 = new Web3(window.ethereum);

/*
 * Enable click action of vault
 * Allowance == 0 approve.
 */
export const tokenApprove = (stackContractAddress, tokenAddress, myAddress) => {
    const amount = "100000000000000000000000000"; //"115792089237316195423570985008687907853";
    return new Promise((resolve, reject) => {
        const tokenContract = new web3.eth.Contract(YAIabi, tokenAddress);
        if (web3 && web3.currentProvider) {
            tokenContract.methods
                .approve(stackContractAddress, amount)
                .send({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

export const tokenAllowance = (
    stackContractAddress,
    tokenAddress,
    myAddress,
) => {
    return new Promise((resolve, reject) => {
        const tokenContract = new web3.eth.Contract(YAIabi, tokenAddress);
        if (web3 && web3.currentProvider) {
            tokenContract.methods
                .allowance(myAddress, stackContractAddress)
                .call({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * make the above field as input and call for deposit
 */
export const stakeContractDeposit = (
    stackContractAddress,
    myAddress,
    amount,
) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .deposit(amount)
                .send({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * need to call on withdraw btn.
 */
export const stakeContractWithdraw = (
    stackContractAddress,
    myAddress,
    amount,
) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .withdraw(amount)
                .send({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * need to call on claim click first add clim btn
 */
export const stakeContractClaim = (stackContractAddress, myAddress) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .claimDivs()
                .send({ from: myAddress })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * function to get the address user or contract based on address
 */
export const tokenBalanceOfAddress = (tokenAddress, myAddress) => {
    return new Promise((resolve, reject) => {
        const tokenContract = new web3.eth.Contract(EIPAbi, tokenAddress);
        if (web3 && web3.currentProvider && myAddress) {
            tokenContract.methods
                .balanceOf(myAddress)
                .call()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * function to get the staked token
 */
export const userStackBalance = (stackContractAddress, myAddress) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .depositedTokens(myAddress)
                .call()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

/*
 * function to get the pending staked token
 */
export const userStackPendingBalance = (stackContractAddress, myAddress) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .getPendingDivs(myAddress)
                .call()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

export const stackedAPRRate = (stackContractAddress) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .rewardRate()
                .call()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};

export const stackedTokenEarn = (stackContractAddress, myAddress) => {
    return new Promise((resolve, reject) => {
        const stakeContract = new web3.eth.Contract(
            stackAbi,
            stackContractAddress,
        );
        if (web3 && web3.currentProvider) {
            stakeContract.methods
                .totalEarnedTokens(myAddress)
                .call()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => reject(error));
        } else {
            resolve();
        }
    });
};
