import Accordion from "react-bootstrap/Accordion";
import StakeBlock from "./StakeBlock";
import React, { useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "@assets/images/img/Thunder-move.png";

export default function Stake() {
    const { selectedAddress, wrongNetwork } = useSelector(
        (state) => state.accounts,
    );
    const [idx, setIdx] = useState(null);

    return (
        <>
            <h3 className="color-light">Deswap Staking</h3>
            {selectedAddress && wrongNetwork === false ? (
                <div className="staking-div">
                    <Accordion>
                        <StakeBlock
                            eventKey={1}
                            idx={idx}
                            setIdx={setIdx}
                            tag={"Staking"}
                            token="DAW"
                            tokenAddress="0x86faa515F259C28239FFD65FE9d1a2960C6d1A17"
                            stackTokenAddress="0x799C7ffB51775b59c8971fa9d048755744442B36"
                        />
                        {/* <StakeBlock
                            eventKey={2}
                            idx={idx}
                            setIdx={setIdx}
                            tag={"Staking"}
                            token="DAW"
                            tokenAddress="0x86faa515F259C28239FFD65FE9d1a2960C6d1A17"
                            stackTokenAddress="0x380B02D24a14bd7a790D8c6F6eB3977F45cecF0d"
                        /> */}
                    </Accordion>
                </div>
            ) : (
                <>
                    {/* {wrongNetwork === false ? (
                            <h3 className="color-light">
                                Wallet Is Not Connected
                            </h3>
                        ) : (
                            <h3 className="color-light">Wrong Network</h3>
                        )} */}
                    <img className="fallback-logo" src={logo} alt="logo" />
                    <div className="loading">
                        <div className="effect-1 effects"></div>
                        <div className="effect-2 effects"></div>
                        <div className="effect-3 effects"></div>
                    </div>
                </>
            )}
        </>
    );
}
