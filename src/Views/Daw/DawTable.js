import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'
import btcImage from '@assets/images/img/logos/btc.png'
import EtheriumImage from '@assets/images/img/logos/Etherium.png'
import logoT from '@assets/images/img/logos/logo-t.png'
import steemImage from '@assets/images/img/logos/steem.png'
import TBXImage from '@assets/images/img/logos/TBX.png'
import XRPImage from '@assets/images/img/logos/XRP.png'

export default function DawTable() {
    const assets = [
        {
            image: btcImage,
            name: "Bitcoin",
            perDay: "0",
            lend: "12.5",
            borrow: "12.5"
        },
        {
            image: EtheriumImage,
            name: "Etherium",
            perDay: 0,
            lend: 12.5,
            borrow: 12.5
        },
        {
            image: steemImage,
            name: "Chainlink",
            perDay: 0,
            lend: 12.5,
            borrow: 12.5
        },
        {
            image: XRPImage,
            name: "Ripple",
            perDay: 0,
            lend: 12.5,
            borrow: 12.5
        },
        {
            image: logoT,
            name: "TEther",
            perDay: 0,
            lend: 12.5,
            borrow: 12.5
        },
        {
            image: TBXImage,
            name: "Atom",
            perDay: 0,
            lend: 12.5,
            borrow: 12.5
        }
    ]
    const genrateAssetrow = asset => {
        return (
            <div className="balances__row">
                <div className="balances__cell">
                    <div className="balances__company">
                    <div className="balances__logo">
                        <img src={asset.image} alt="logo" />
                    </div>
                    <div className="balances__text">{asset.name}</div>
                    </div>
                </div>
                <div className="balances__cell">
                    <div className="balances__text">{asset.perDay} BTC</div>
                </div>
                <div className="balances__cell">
                    <div className="balances__text">{asset.lend} %</div>
                </div>
                <div className="balances__cell">
                    <div className="balances__text">{asset.borrow} %</div>
                </div>
            </div>)
    }
    return (
        <>
            <Col md={12}>
                <Card className="card_widget card-tabs card-table-2" >
                    <CardTitle className="card__head position-relative">
                        <div className="card__title h6">All Markets</div>
                    </CardTitle>
                    <CardBody>
                        <div className="balances">
                            <div className="balances__table">
                                <div className="balances__row balances__row_head">
                                    <div className="balances__cell">Asset</div>
                                    <div className="balances__cell">Per Day</div>
                                    <div className="balances__cell">Lend</div>
                                    <div className="balances__cell">Borrow</div>
                                </div>
                                {assets.map(asset => genrateAssetrow(asset))}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}
