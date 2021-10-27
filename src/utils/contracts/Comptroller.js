export const Compltroller = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pauseState",
          "type": "bool"
        }
      ],
      "name": "ActionPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pauseState",
          "type": "bool"
        }
      ],
      "name": "ActionPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "ActionProtocolPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newSpeed",
          "type": "uint256"
        }
      ],
      "name": "DeswapSpeedUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapBorrowIndex",
          "type": "uint256"
        }
      ],
      "name": "DistributedBorrowerDeswap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "supplier",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapSupplyIndex",
          "type": "uint256"
        }
      ],
      "name": "DistributedSupplierDeswap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "yaiMinter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deswapYAIMintIndex",
          "type": "uint256"
        }
      ],
      "name": "DistributedYAIMinterDeswap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DistributedYAIVaultDeswap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "error",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "info",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "detail",
          "type": "uint256"
        }
      ],
      "name": "Failure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketEntered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketExited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        }
      ],
      "name": "MarketListed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBorrowCap",
          "type": "uint256"
        }
      ],
      "name": "NewBorrowCap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldBorrowCapGuardian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newBorrowCapGuardian",
          "type": "address"
        }
      ],
      "name": "NewBorrowCapGuardian",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldCloseFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCloseFactor",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldCollateralFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newCollateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCollateralFactor",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldDeswapYAIRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDeswapYAIRate",
          "type": "uint256"
        }
      ],
      "name": "NewDeswapYAIRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldDeswapYAIVaultRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDeswapYAIVaultRate",
          "type": "uint256"
        }
      ],
      "name": "NewDeswapYAIVaultRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldLiquidationIncentiveMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewLiquidationIncentive",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldPauseGuardian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newPauseGuardian",
          "type": "address"
        }
      ],
      "name": "NewPauseGuardian",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract PriceOracle",
          "name": "oldPriceOracle",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "contract PriceOracle",
          "name": "newPriceOracle",
          "type": "address"
        }
      ],
      "name": "NewPriceOracle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldTreasuryAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newTreasuryAddress",
          "type": "address"
        }
      ],
      "name": "NewTreasuryAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldTreasuryGuardian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newTreasuryGuardian",
          "type": "address"
        }
      ],
      "name": "NewTreasuryGuardian",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldTreasuryPercent",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTreasuryPercent",
          "type": "uint256"
        }
      ],
      "name": "NewTreasuryPercent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract YAIControllerInterface",
          "name": "oldYAIController",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "contract YAIControllerInterface",
          "name": "newYAIController",
          "type": "address"
        }
      ],
      "name": "NewYAIController",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldYAIMintRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newYAIMintRate",
          "type": "uint256"
        }
      ],
      "name": "NewYAIMintRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "vault_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "releaseStartBlock_",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "releaseInterval_",
          "type": "uint256"
        }
      ],
      "name": "NewYAIVaultInfo",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract Unitroller",
          "name": "unitroller",
          "type": "address"
        }
      ],
      "name": "_become",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "_borrowGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "_mintGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newBorrowCapGuardian",
          "type": "address"
        }
      ],
      "name": "_setBorrowCapGuardian",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setCloseFactor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newCollateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setCollateralFactor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deswapSpeed",
          "type": "uint256"
        }
      ],
      "name": "_setDeswapSpeed",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "deswapYAIRate_",
          "type": "uint256"
        }
      ],
      "name": "_setDeswapYAIRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "deswapYAIVaultRate_",
          "type": "uint256"
        }
      ],
      "name": "_setDeswapYAIVaultRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setLiquidationIncentive",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract DToken[]",
          "name": "dTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "newBorrowCaps",
          "type": "uint256[]"
        }
      ],
      "name": "_setMarketBorrowCaps",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newPauseGuardian",
          "type": "address"
        }
      ],
      "name": "_setPauseGuardian",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract PriceOracle",
          "name": "newOracle",
          "type": "address"
        }
      ],
      "name": "_setPriceOracle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "_setProtocolPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newTreasuryGuardian",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newTreasuryAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newTreasuryPercent",
          "type": "uint256"
        }
      ],
      "name": "_setTreasuryData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract YAIControllerInterface",
          "name": "yaiController_",
          "type": "address"
        }
      ],
      "name": "_setYAIController",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newYAIMintRate",
          "type": "uint256"
        }
      ],
      "name": "_setYAIMintRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "vault_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "releaseStartBlock_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minReleaseAmount_",
          "type": "uint256"
        }
      ],
      "name": "_setYAIVaultInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        }
      ],
      "name": "_supportMarket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accountAssets",
      "outputs": [
        {
          "internalType": "contract DToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allMarkets",
      "outputs": [
        {
          "internalType": "contract DToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowCapGuardian",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "borrowCaps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "borrowGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "contract DToken",
          "name": "dToken",
          "type": "address"
        }
      ],
      "name": "checkMembership",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address[]",
          "name": "holders",
          "type": "address[]"
        },
        {
          "internalType": "contract DToken[]",
          "name": "dTokens",
          "type": "address[]"
        },
        {
          "internalType": "bool",
          "name": "borrowers",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "suppliers",
          "type": "bool"
        }
      ],
      "name": "claimDeswap",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "claimDeswap",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "contract DToken[]",
          "name": "dTokens",
          "type": "address[]"
        }
      ],
      "name": "claimDeswap",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "closeFactorMantissa",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "comptrollerImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapAccrued",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapBorrowState",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "index",
          "type": "uint224"
        },
        {
          "internalType": "uint32",
          "name": "block",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapBorrowerIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deswapInitialIndex",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "",
          "type": "uint224"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deswapRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapSpeeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapSupplierIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "deswapSupplyState",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "index",
          "type": "uint224"
        },
        {
          "internalType": "uint32",
          "name": "block",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deswapYAIRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deswapYAIVaultRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "yaiMinter",
          "type": "address"
        }
      ],
      "name": "distributeYAIMinterDeswap",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address[]",
          "name": "dTokens",
          "type": "address[]"
        }
      ],
      "name": "enterMarkets",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenAddress",
          "type": "address"
        }
      ],
      "name": "exitMarket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllMarkets",
      "outputs": [
        {
          "internalType": "contract DToken[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAssetsIn",
      "outputs": [
        {
          "internalType": "contract DToken[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBlockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDAWAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenModify",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "getHypotheticalAccountLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isComptroller",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateCalculateSeizeTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateYAICalculateSeizeTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "liquidationIncentiveMantissa",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "markets",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isListed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "collateralFactorMantissa",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isDeswap",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxAssets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minReleaseAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mintAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "mintGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualMintAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mintTokens",
          "type": "uint256"
        }
      ],
      "name": "mintVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "mintYAIGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "mintedYAIs",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "oracle",
      "outputs": [
        {
          "internalType": "contract PriceOracle",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pauseGuardian",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingComptrollerImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "protocolPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "redeemer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "redeemer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "releaseStartBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "releaseToVault",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowerIndex",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "repayYAIGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "seizeGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setMintedYAIOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "src",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "transferTokens",
          "type": "uint256"
        }
      ],
      "name": "transferAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "transferGuardianPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "dToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "src",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "transferTokens",
          "type": "uint256"
        }
      ],
      "name": "transferVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "treasuryAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "treasuryGuardian",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "treasuryPercent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "yaiController",
      "outputs": [
        {
          "internalType": "contract YAIControllerInterface",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "yaiMintRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "yaiVaultAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]