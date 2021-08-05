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
                            tokenAddress="0x33e02851D5A084137Dc69b1a02ab2EeB7b7fE2A5"
                            stackTokenAddress="0x61327Be74D7a417F1772aB0DC3038437709617Ff"
                        />
                        <StakeBlock
                            eventKey={2}
                            idx={idx}
                            setIdx={setIdx}
                            tag={"Staking"}
                            token="DAW"
                            tokenAddress="0x33e02851D5A084137Dc69b1a02ab2EeB7b7fE2A5"
                            stackTokenAddress="0xfdBCB36C5C2082bf26257ff38F8C95226E883fBE"
                        />
                        <StakeBlock
                            eventKey={3}
                            idx={idx}
                            setIdx={setIdx}
                            tag={"Staking"}
                            token="DWAP"
                            tokenAddress="0xAe07E7bF1FF10Da713AB5371A1B73869C8aA7A29"
                            stackTokenAddress="0x2E3df3d49112D8463F01FD79F9D0ca47Aa60f414"
                        />
                        <StakeBlock
                            eventKey={4}
                            idx={idx}
                            setIdx={setIdx}
                            tag={"Staking"}
                            token="DWAP"
                            tokenAddress="0xAe07E7bF1FF10Da713AB5371A1B73869C8aA7A29"
                            stackTokenAddress="0x9470a086964b970D2d3A2465166adeE822559A2A"
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
