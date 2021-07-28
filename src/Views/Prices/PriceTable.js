import React from 'react'
import btcImage from '@assets/images/img/logos/btc.png'
import EtheriumImage from '@assets/images/img/logos/Etherium.png'
import logoT from '@assets/images/img/logos/logo-t.png'
import steemImage from '@assets/images/img/logos/steem.png'
import TBXImage from '@assets/images/img/logos/TBX.png'
import XRPImage from '@assets/images/img/logos/XRP.png'

export default function PriceTable() {
    const assets = [
        {
            image: btcImage,
            name: "Bitcoin",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        },
        {
            image: EtheriumImage,
            name: "Etherium",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        },
        {
            image: steemImage,
            name: "Chainlink",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        },
        {
            image: XRPImage,
            name: "Ripple",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        },
        {
            image: logoT,
            name: "TEther",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        },
        {
            image: TBXImage,
            name: "Atom",
            totalSupply: "$19,266 M",
            totalBorrow: "$19,266 M",
            borrowApy: 12.5,
            liquidity: "$19,266 M",
            price: "$19,266 M"
        }
    ]

    const getAssetPriceRow = asset => {
        return (
            <div class="prices__row">
                <div class="prices__cell">
                <div class="prices__company">
                    <div class="prices__logo"><img src={asset.image} alt="logo" /></div>
                    <div class="prices__text">{asset.name}</div>
                </div>
                </div>
                <div class="prices__cell">{asset.totalSupply}</div>
                <div class="prices__cell">
                    <div class="positive">{asset.borrowApy}%</div>
                </div>
                <div class="prices__cell">{asset.totalBorrow}</div>
                <div class="prices__cell">
                    <div class="positive">{asset.borrowApy}%</div>
                </div>
                <div class="prices__cell">{asset.liquidity}</div>
                <div class="prices__cell">{asset.price}</div>
            </div>
        )
    }
    return (
        <div class="prices__table">
            <div class="prices__row prices__row_head">
                <div class="prices__cell">token</div>
                <div class="prices__cell">Total supply</div>
                <div class="prices__cell">Supply APY</div>
                <div class="prices__cell">Total Borrow</div>
                <div class="prices__cell">Borrow APY</div>
                <div class="prices__cell">Liquidity</div>
                <div class="prices__cell">Price</div>
            </div>
            {assets.map(asset => getAssetPriceRow(asset))}
        </div>
    )
}
