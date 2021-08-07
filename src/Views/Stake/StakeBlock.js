import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {
    CaretUp,
    CaretDown,
    InfoCircle,
    Plus,
    Dash,
} from "react-bootstrap-icons";
import thunderIcon from "@assets/images/icons/thunder-icon.svg";
import { useDispatch, useSelector } from "react-redux";

import {
    tokenAllowance,
    tokenBalanceOfAddress,
    tokenApprove,
    stakeContractDeposit,
    userStackBalance,
    userStackPendingBalance,
    stackedAPRRate,
    stakeContractWithdraw,
    stakeContractClaim,
    stackedTokenEarn,
} from "@contractMethods/stake.js";
import BigNumber from "bignumber.js";
import { showToastMessage } from "@redux/actions/toastNotification";

const StakeBlock = (props) => {
    const { tokenAddress, stackTokenAddress, token } = props;
    let dispatch = useDispatch();
    const { selectedAddress } = useSelector((state) => state.accounts);

    const [depositValue, setDepositValue] = useState(0);
    const [WithdrawValue, setWithdrawValue] = useState(0);
    const [depositDisable, setDepositDisable] = useState(false);
    const [withdrawDisable, setWithdrawDisable] = useState(false);
    const [claimDisable, setClaimDisable] = useState(false);

    // define state
    const [tokenBalance, setTokenBalance] = useState(0);
    const [allowToken, setAllowToken] = useState(0);
    const [stakeTokenBalance, setStakeTokenBalance] = useState(0);
    const [pendingBalance, setPendingBalance] = useState(0);
    const [setStakingAPR, setSetStakingAPR] = useState(0);
    const [earnedToken, setEarnedToken] = useState(0);
    const [stakeContractTokenBalance, setStakeContractTokenBalance] =
        useState(0);
    const [changeState, setChangeState] = useState(false);

    useEffect(() => {
        if (selectedAddress && tokenAddress && stackTokenAddress) {
            const getUserAllowBalance = async () => {
                const allowanceRes = await tokenAllowance(
                    stackTokenAddress,
                    tokenAddress,
                    selectedAddress,
                );
                setAllowToken(new BigNumber(allowanceRes).div(1e18));
            };
            getUserAllowBalance();
        }
    }, [selectedAddress, changeState]);

    useEffect(() => {
        if (selectedAddress && tokenAddress) {
            const getUserBalance = async () => {
                const userBalance = await tokenBalanceOfAddress(
                    tokenAddress,
                    selectedAddress,
                );
                setTokenBalance((userBalance / 10 ** 18).toFixed(3));
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    useEffect(() => {
        if (stackTokenAddress && tokenAddress) {
            const getUserBalance = async () => {
                const userBalance = await tokenBalanceOfAddress(
                    tokenAddress,
                    stackTokenAddress,
                );
                setStakeContractTokenBalance(
                    (userBalance / 10 ** 18).toFixed(3),
                );
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    const addDeposit = async () => {
        try {
            if (depositValue > 0) {
                setDepositDisable(true);
                if (depositValue > allowToken) {
                    const calAllowToken = await tokenApprove(
                        stackTokenAddress,
                        tokenAddress,
                        selectedAddress,
                    );
                    if (calAllowToken.status === true) {
                        dispatch(
                            showToastMessage("approved Success", "success"),
                        );
                    } else {
                        dispatch(
                            showToastMessage(
                                calAllowToken.error.message,
                                "error",
                            ),
                        );
                    }
                }
                const depositToken = await stakeContractDeposit(
                    stackTokenAddress,
                    selectedAddress,
                    depositValue,
                );
                if (depositToken.status === true) {
                    dispatch(showToastMessage("Token Deposited", "success"));
                    setDepositValue(0);
                } else {
                    dispatch(
                        showToastMessage(depositToken.error.message, "error"),
                    );
                }
                setChangeState(!changeState);
                setDepositDisable(false);
            } else {
                dispatch(
                    showToastMessage("Value Must be Greater Then 0", "error"),
                );
            }
        } catch (error) {
            dispatch(showToastMessage(error.message, "error"));
            setDepositDisable(false);
        }
    };

    useEffect(() => {
        if (selectedAddress && stackTokenAddress) {
            const getUserBalance = async () => {
                const userStackTokenBalance = await userStackBalance(
                    stackTokenAddress,
                    selectedAddress,
                );
                setStakeTokenBalance(
                    (userStackTokenBalance / 10 ** 18).toFixed(3),
                );
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    useEffect(() => {
        if (selectedAddress && stackTokenAddress) {
            const getUserBalance = async () => {
                const userStackTokenBalance = await userStackBalance(
                    stackTokenAddress,
                    selectedAddress,
                );
                setStakeTokenBalance(
                    (userStackTokenBalance / 10 ** 18).toFixed(3),
                );
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    useEffect(() => {
        if (selectedAddress && stackTokenAddress) {
            const getUserBalance = async () => {
                const userStackPending = await userStackPendingBalance(
                    stackTokenAddress,
                    selectedAddress,
                );
                setPendingBalance((userStackPending / 10 ** 18).toFixed(3));
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    useEffect(() => {
        if (selectedAddress && stackTokenAddress) {
            const getUserBalance = async () => {
                const stackedAPR = await stackedAPRRate(stackTokenAddress);
                setSetStakingAPR(stackedAPR / 100);
            };
            getUserBalance();
        }
    }, [selectedAddress, changeState]);

    const withdrawToken = async () => {
        try {
            setWithdrawDisable(true);
            if (WithdrawValue > stakeTokenBalance) {
                dispatch(
                    showToastMessage(
                        "Amount Is greater then you stacked",
                        "error",
                    ),
                );
                setWithdrawDisable(false);
            } else {
                const withdrawToken = await stakeContractWithdraw(
                    stackTokenAddress,
                    selectedAddress,
                    WithdrawValue,
                );
                if (withdrawToken.status === true) {
                    dispatch(showToastMessage("Token Withdraw", "success"));
                    setWithdrawValue(0);
                } else {
                    dispatch(
                        showToastMessage(withdrawToken.error.message, "error"),
                    );
                }
                setWithdrawDisable(false);
                setChangeState(!changeState);
            }
        } catch (error) {
            setWithdrawDisable(false);

            dispatch(showToastMessage(error.message, "error"));
        }
    };

    const claimToken = async () => {
        try {
            setClaimDisable(true);
            const claimPendingToken = await stakeContractClaim(
                stackTokenAddress,
                selectedAddress,
            );
            if (claimPendingToken.status === true) {
                dispatch(showToastMessage("Token Withdraw", "success"));
                setWithdrawValue(0);
            } else {
                dispatch(
                    showToastMessage(claimPendingToken.error.message, "error"),
                );
            }
            setClaimDisable(false);
            setChangeState(!changeState);
        } catch (error) {
            setClaimDisable(false);
            dispatch(showToastMessage(error.message, "error"));
        }
    };

    useEffect(() => {
        if (selectedAddress && stackTokenAddress) {
            const getUserEarned = async () => {
                const earnedToken = await stackedTokenEarn(
                    stackTokenAddress,
                    selectedAddress,
                );
                setEarnedToken((earnedToken / 10 ** 18).toFixed(3));
            };
            getUserEarned();
        }
    }, [selectedAddress, changeState]);

    return (
        <Card>
            <Card.Header className="row">
                <div className="col-12 col-sm-3">
                    <img src={thunderIcon} />
                    <span className=" tag">{props.tag}</span>
                </div>
                <div className="staked-div col-12 col-sm-2">
                    <span className="block-title">STAKED</span>
                    <span className="token">
                        {stakeTokenBalance ? stakeTokenBalance : 0}
                    </span>
                    <lable className="amount">{token}</lable>
                </div>
                <div className="staked-div col-12 col-sm-2">
                    <span className="block-title">Earned</span>
                    <span className="token">
                        {earnedToken ? earnedToken : 0}{" "}
                    </span>
                    <lable className="amount">DWAP</lable>
                </div>
                <div className="staked-div col-12 col-sm-2">
                    <span className="block-title">APY</span>
                    <span className="token">
                        {setStakingAPR ? setStakingAPR : 0}%
                    </span>
                    <lable className="percentage">
                        <InfoCircle />
                    </lable>
                </div>
                <div className="staked-div col-12 col-sm-2">
                    <span className="block-title">TOTAL STAKED</span>
                    <span className="token">
                        {stakeContractTokenBalance
                            ? stakeContractTokenBalance
                            : 0}
                    </span>
                    <lable className="percentage">{props.token}</lable>
                </div>
                <div className=" col-12 col-sm-1">
                    <Accordion.Toggle
                        className="toggle-button"
                        as={Button}
                        variant="icon"
                        eventKey={props.eventKey}
                        onClick={() => {
                            if (props.idx === props.eventKey)
                                props.setIdx(null);
                            else props.setIdx(props.eventKey);
                        }}
                    >
                        {props.idx === props.eventKey ? (
                            <CaretUp />
                        ) : (
                            <CaretDown />
                        )}
                    </Accordion.Toggle>
                </div>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <div className="wallet-div b-right">
                                {" "}
                                <div className="staked-div">
                                    <span className="block-title">
                                        YOUR WALLET BALANCE
                                    </span>
                                    <span className="token">
                                        {tokenBalance ? tokenBalance : 0}{" "}
                                    </span>
                                    <lable className="amount">{token}</lable>
                                </div>
                                <div className="row  ">
                                    <div className="input-box col-12 col-sm-12 col-md-7 p-1">
                                        <InputGroup className="">
                                            <FormControl
                                                type="number"
                                                id="addStaked"
                                                min="0"
                                                value={depositValue}
                                                // onKeyPress={(e)=>e.charCode >= 48}
                                                aria-label="Amount (to the nearest dollar)"
                                                onChange={(e) => {
                                                    setDepositValue(
                                                        e.target.value,
                                                    );
                                                }}
                                                disabled={depositDisable}
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text
                                                    onClick={(e) => {
                                                        setDepositValue(
                                                            tokenBalance,
                                                        );
                                                    }}
                                                >
                                                    Max
                                                </InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        {/* <input value="0" className="form-control" />
                      Max */}
                                    </div>{" "}
                                    <div className="col-12 col-sm-12 col-md-5 p-1">
                                        <button
                                            className="stk-btn btn-primary btn"
                                            onClick={addDeposit}
                                            disabled={depositDisable}
                                        >
                                            <Plus className="btn-icon" /> Stack
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="wallet-div b-right">
                                {" "}
                                <div className="staked-div">
                                    <span className="block-title">STAKED</span>
                                    <span className="token">
                                        {stakeTokenBalance
                                            ? stakeTokenBalance
                                            : 0}
                                    </span>
                                    <lable className="amount">{token}</lable>
                                </div>
                                <div>
                                    <div className="row  ">
                                        <div className="input-box col-12 col-sm-12 col-md-7 p-1 ">
                                            <InputGroup className="">
                                                <FormControl
                                                    value={WithdrawValue}
                                                    id="addUnstak"
                                                    type="number"
                                                    min="0"
                                                    aria-label="Amount (to the nearest dollar)"
                                                    onChange={(e) => {
                                                        setWithdrawValue(
                                                            e.target.value,
                                                        );
                                                    }}
                                                    disabled={withdrawDisable}
                                                />
                                                <InputGroup.Append>
                                                    <InputGroup.Text
                                                        disabled={
                                                            withdrawDisable
                                                        }
                                                        onClick={(e) => {
                                                            setWithdrawValue(
                                                                stakeTokenBalance,
                                                            );
                                                        }}
                                                    >
                                                        Max
                                                    </InputGroup.Text>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </div>{" "}
                                        <div className="col-12 col-sm-12 col-md-5 p-1">
                                            <button
                                                className="stk-btn btn-primary btn"
                                                onClick={withdrawToken}
                                            >
                                                <Dash className="btn-icon" />{" "}
                                                Unstack
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="wallet-div row">
                                {" "}
                                <div className="staked-div">
                                    <span className="block-title">
                                        DWAP Earned
                                    </span>
                                    <span className="token">
                                        {pendingBalance ? pendingBalance : 0}
                                    </span>
                                    <lable className="amount">DWAP</lable>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 pl-0">
                                    <button
                                        className="stk-btn btn-primary btn"
                                        onClick={claimToken}
                                        disabled={claimDisable}
                                    >
                                        <>Collect</>
                                    </button>
                                </div>
                                {/* {
                                    <div className="col-12 col-sm-12 col-md-6 pl-0">
                                        <button className="stk-btn btn-primary btn">
                                            <>Reinvest</>
                                        </button>
                                    </div>
                                } */}
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};
export default StakeBlock;
