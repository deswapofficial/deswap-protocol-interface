module.exports = {
    "NOT_INSTALLED": 'MetaMask not installed',
    "MISSING_PROVIDER": 'Missing provider',
    "LOCKED": 'MetaMask is locked',
    "TIMEOUT": 'Timeout',
    "FAILED_TO_GET_WC_URI": 'Failed to get wallet connect uri',
    "FAILED_TO_INIT_WC": 'Failed to initialize wallet connect',
    "NOT_EXIST_WC": 'Wallet Connect doesn`t exist',
    "INVALID_ADDRESS": 'Wallet address is not valid',
    "DEFAULT_SNACKBAR_OPTIONS": {
        "SUCCESS": {
            "anchorOrigin": {
                "horizontal": 'right',
                "vertical": 'top'
            },
            "variant": 'success'
        },
        "FAIL": {
            "anchorOrigin": {
                "horizontal": 'right',
                "vertical": 'top'
            },
            "variant": 'error'
        }
    },
    "MATCH_HEIGHT_CSS": {
        "gridChild": {
            "display": "flex",
            "flexflow": "column",
        },
        "gridCard": {
          "flex": "1 1 auto"
        }
        
    },
    "API_URL": process.env.REACT_APP_API_URL || "http://localhost:4000/",
    "YAI_CONTROLLER_ADDRESS": process.env.REACT_APP_YAI_CONTROLLER_ADDRESS || "0x956562424538ae5a23CE2D0D066FBB983Cf98e8c",
    
    "YAI_TOKEN_ADDRESS": process.env.REACT_APP_YAI_TOKEN_ADDRESS || "0xf7037CaF76117a831446E49b28c782e86257A069",
    "COMPTROLLER_CONTRACT_ADDRESS": process.env.REACT_APP_COMPTROLLER_CONTRACT_ADDRESS || "0x75d0bbeB5C74C2b29792f3c351726921381D972A",
    "DAW_CONTRACT_ADDREES": process.env.REACT_APP_DAW_CONTRACT_ADDREES || "0x5a21F2DAdf0b55bAe3f9Fa9231F2dBB45e07A561",
    "ENVIORMENT": process.env.REACT_APP_ENVIORMENT || "dev",
    "SCAN_DEV_URL": process.env.REACT_APP_SCAN_DEV_URL || "https://rinkeby.etherscan.io/address/",
    "SCAN_PROD_URL": process.env.REACT_APP_SCAN_PROD_URL || "https://rinkeby.etherscan.io/address/",
    "REACT_APP_YaiVaultProxyAddress": process.env.REACT_APP_YaiVaultProxyAddress || "0xD9FA5f27165f5E2ea6bc47bbF9A274F8763DD154",
    "REACT_APP_YAIAddress": process.env.REACT_APP_YAIAddress || "0xA7E855A8856E0F86Cc48Dd40949cDadA1Cbf3EaF",
    "REACT_APP_DAWAddress": process.env.REACT_APP_DAWAddress || "0x86faa515F259C28239FFD65FE9d1a2960C6d1A17"
}