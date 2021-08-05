import React, { useCallback, useEffect, useState } from "react";
import imageSrc from "@assets/images/img/ava-header.png";
import constants from "@utility/CONSTANT";
import MetaMaskClass from "@utility/MetaMask";
import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "@redux/actions/accounts";
import { showToastMessage } from "@redux/actions/toastNotification";

let metamask = null;
let accounts = [];
let metamaskWatcher = null;

export default function HeaderConnect() {
    const { selectedAddress, latestBlockNumberState, walletType } = useSelector(
        (state) => state.accounts,
    );
    console.log(
        "selectedAddress, latestBlockNumberState, walletType: ",
        selectedAddress,
        latestBlockNumberState,
        walletType,
    );
    const dispatch = useDispatch();

    const [openConnect, setOpenConnect] = useState(false);
    const [web3, setWeb3] = useState(null);
    // const [awaiting, setAwaiting] = useState(false);
    const [error, setError] = useState("");

    // ---------------------------------Network Change connect-------------------------------------
    const checkNetwork = () => {
        let netId;
        if (walletType === "binance") {
            netId = +window.BinanceChain.chainId;
        } else {
            netId = window.ethereum.networkVersion
                ? +window.ethereum.networkVersion
                : +window.ethereum.chainId;
        }
        if (netId) {
            if (netId === 4 || netId === 137) {
                if (netId === 137 && process.env.REACT_APP_ENV === "prod") {
                    dispatch(
                        showToastMessage(
                            `You are currently visiting the Polygon Network. Please change your metamask to access the Polygon Network`,
                            "error",
                        ),
                    );
                } else if (netId === 4 && process.env.REACT_APP_ENV === "dev") {
                    dispatch(
                        showToastMessage(
                            `You are currently visiting the Rinkeby Testnet Network. Please change your metamask to access the Rinkeby Testnet Network`,
                            "error",
                        ),
                    );
                } else {
                    dispatch(
                        setSetting({
                            wrongNetwork: false,
                        }),
                    );
                    return;
                }
            } else {
                dispatch(
                    showToastMessage(
                        `Dswap is only supported on Etherium Network. Please confirm you installed Metamask and selected Etherium Network`,
                        "error",
                    ),
                );
            }
            dispatch(
                setSetting({
                    wrongNetwork: true,
                }),
            );
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            window.addEventListener("load", () => {
                checkNetwork();
            });
        }
    }, [window.ethereum]);

    // ---------------------------------MetaMask connect-------------------------------------
    const withTimeoutRejection = async (promise, timeout) => {
        const sleep = new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error(constants.TIMEOUT)), timeout),
        );
        return Promise.race([promise, sleep]);
    };

    const handleOpen = () => {
        setOpenConnect(!openConnect);
    };

    const handleWatch = useCallback(async () => {
        if (window.ethereum) {
            const accs = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (!accs[0]) {
                accounts = [];
                clearTimeout(metamaskWatcher);
                dispatch(setSetting({ selectedAddress: null }));
            }
        }
        if (metamaskWatcher) {
            clearTimeout(metamaskWatcher);
        }

        // if (!web3 || !accounts.length) {
        //   setAwaiting(true);
        // }

        try {
            const isLocked = error && error.message === constants.LOCKED;
            if (!metamask || isLocked) {
                metamask = await withTimeoutRejection(
                    MetaMaskClass.initialize(undefined), // if option is existed, add it
                    20 * 1000, // timeout
                );
            }

            let [tempWeb3, tempAccounts, latestBlockNumber] = await Promise.all(
                [
                    metamask.getWeb3(),
                    metamask.getAccounts(),
                    metamask.getLatestBlockNumber(),
                ],
            );
            accounts = tempAccounts;
            setWeb3(tempWeb3);
            setError(null);
            //   setAwaiting(false);
            if (
                selectedAddress !== tempAccounts[0] &&
                latestBlockNumber !== latestBlockNumberState
            ) {
                dispatch(
                    setSetting({
                        selectedAddress: tempAccounts[0],
                        latestBlockNumber,
                    }),
                );
            }
            metamaskWatcher = setTimeout(() => {
                clearTimeout(metamaskWatcher);
                handleWatch();
            }, 3000);
        } catch (err) {
            dispatch(setSetting({ selectedAddress: null }));
            accounts = [];
            setWeb3(null);
            setError(err);
            // setAwaiting(false);
        }
    }, [error, web3, latestBlockNumberState]);

    useEffect(() => {
        handleWatch();
    }, [window]);

    const handleMetaMask = () => {
        setSetting({ walletType: "metamask" });
        setError(
            MetaMaskClass.hasWeb3() ? "" : new Error(constants.NOT_INSTALLED),
        );
        handleWatch();
    };
    return (
        <div
            className={
                openConnect
                    ? "header__item header__item_notifications active"
                    : "header__item header__item_notifications"
            }
            style={{ marginLeft: "36px" }}
        >
            {/* <button
                className="header__head  pop-icon before-none"
                onClick={handleOpen}
            >
                <img src={imageSrc} width="100%" alt="" />
            </button> */}
            <div className="header__details">
                {selectedAddress ? (
                    <button className="btn address" disabled>
                        {selectedAddress}
                    </button>
                ) : (
                    <button
                        className="card__btn btn btn_blue"
                        onClick={handleMetaMask}
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
            {/* <div className="header__body header-body-2">
                <div className="header__notifications">
                <div className="header__notification">
                </div>
                </div>
            </div> */}
        </div>
    );
}
