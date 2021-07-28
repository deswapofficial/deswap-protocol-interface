import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import btcImage from '@assets/images/img/logos/btc.png'
import EtheriumImage from '@assets/images/img/logos/Etherium.png'
import steemImage from '@assets/images/img/logos/steem.png'

export default function CreditTable() {
    let assets = [
        {
            image: btcImage,
            name: "Bitcoin",
            apy: "2.05%",
            wallet: "0 BTC"
        },
        {
            image: EtheriumImage,
            name: "Etherium",
            apy: "2.05%",
            wallet: "0 BTC"
        },
        {
            image: steemImage,
            name: "Chainlink",
            apy: "2.05%",
            wallet: "0 BTC"
        }
    ]

    const getBalanceCell = asset => {
        return (<div class="balances__row">
        <div class="balances__cell">
            <div class="balances__company">
                <div class="balances__logo">
                    <img src={asset.image} alt="logo" />
                </div>
                <div class="balances__text">{asset.name}</div>
            </div>
        </div>
        <div class="balances__cell">
            <div class="status positive">+{asset.apy}</div>
        </div>
        <div class="balances__cell">
            <div class="balances__text">{asset.wallet}</div>
        </div>
        <div class="balances__cell">
            <label class="switch switch_theme">
                <input class="switch__input" type="checkbox" checked />
                <span class="switch__in">
                    <span class="switch__box"></span>
                    <span class="switch__icon">
                        <svg class="icon icon-theme-dark" viewBox="0 0 24 24">
                            <path
                                d="M8 2.3c.4-.1.7 0 1 .3.3.3.4.7.3 1C9.1 4.4 9 5.2 9 6c0 5 4 9 9 9 .8 0 1.6-.1 2.4-.3.3-.1.7 0 .9.2.3.3.4.7.3 1C20.3 20.7 15.9 24 11 24 4.9 24 0 19.1 0 13 0 8.1 3.3 3.7 8 2.3zM21 6c.6 0 1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-1c-.6 0-1-.4-1-1s.4-1 1-1h1V7c0-.6.4-1 1-1zm-6-6c.6 0 1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v1c0 .6-.4 1-1 1s-1-.4-1-1V4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1V1c0-.6.4-1 1-1z">
                            </path>
                        </svg>
                        <svg class="icon icon-theme-light" viewBox="0 0 24 23">
                            <path
                                d="M12 5a7 7 0 0 1 7 7 6.993 6.993 0 0 1-3.932 6.286l-.068.031V22a1 1 0 0 1-.883.993L14 23h-4a1 1 0 0 1-1-1v-3.682l-.068-.032a6.994 6.994 0 0 1-3.927-6.016L5 12a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5 4.994 4.994 0 0 0 3.334 4.708 1 1 0 0 1 .666.943V21h2v-3.349a1 1 0 0 1 .551-.893l.116-.049A4.997 4.997 0 0 0 17 12a5 5 0 0 0-5-5zm-9 4a1 1 0 0 1 .117 1.993L3 13H1a1 1 0 0 1-.117-1.993L1 11h2zm20 0a1 1 0 0 1 .117 1.993L23 13h-2a1 1 0 0 1-.117-1.993L21 11h2zM4.835 3.432l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 0 1 1.32-1.497zm15.65.083a1 1 0 0 1 .083 1.32l-.083.094-1.414 1.414a1 1 0 0 1-1.497-1.32l.083-.094 1.414-1.414a1 1 0 0 1 1.414 0zM12 0a1 1 0 0 1 .993.883L13 1v2a1 1 0 0 1-1.993.117L11 3V1a1 1 0 0 1 1-1z">
                            </path>
                        </svg>
                    </span>
                </span>
            </label>
        </div>
    </div>)
    }

    return (
        <Card className="apptab card-transparent available-credit">
            <CardTitle className="card__head">
                <div class="card__title h6">Available Credit</div>
            </CardTitle>
            <div class="balances">
                <div class="balances__row balances__row_head">
                    <div class="balances__cell">ASSET</div>
                    <div class="balances__cell">APY</div>
                    <div class="balances__cell">Wallet</div>
                    <div class="balances__cell">Collateral</div>
                </div>
                {assets.map(asset => getBalanceCell(asset))}
            </div>
        </Card>
    )
}
