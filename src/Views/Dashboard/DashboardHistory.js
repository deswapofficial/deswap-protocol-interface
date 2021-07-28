import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Dropdown from '@components/Dropdown'

export default function DashboardHistory() {
    const headerBody = (
            <div className="header__cell">
                <a className="header__link active" href="test">
                    USDT
                </a>
                <a className="header__link" href="test">
                    A - Z
                </a>
                <a className="header__link" href="test">
                    Volumes
                </a>
                <a className="header__link" href="test">
                    Last 24h
                </a>
                <a className="header__link" href="test">
                    Price
                </a>
            </div>
        )
    const plusSvg =(<svg className="icon icon-document-plus" width="8" height="9" viewBox="0 0 8 9">
    <path d="M2.77348 7.1001H4.22306V4.63028H6.69287V3.18071H4.22306V0.710893H2.77348V3.18071H0.303667V4.63028H2.77348V7.1001Z" fill="#ECECEC"></path>
</svg>)
    return (
        <Card className="card_widget card-list-one">
            <CardTitle className="card__head">
                <div className="widgets__sorting">
                    <Dropdown 
                        headerItemClass="header__item header__item_lang"
                        headerBtnSvg="USDT"
                        headerBody={headerBody}
                    />
                    <span className="ml-1">
                        USDT 
                        <button className="dropdown__head icon-plus">
                            {plusSvg}
                        </button>
                        
                    </span>
                    <span className="ml-1">
                        yUSDT 
                        <button className="dropdown__head icon-plus">
                            {plusSvg}
                        </button>
                        
                    </span>
                </div>
            </CardTitle>
            <CardBody>
                <div className="card__list">
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Historical rates</div>
                            <div className="card__date">16.05%</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Supply APY Price</div>
                            <div className="card__date">$1</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Market Liquidity</div>
                            <div className="card__date">2,526,081.62781911 USDC</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category"># of Suppliers </div>
                            <div className="card__date">242</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category"># of Borrowers</div>
                            <div className="card__date">124</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Reserves</div>
                            <div className="card__date">2383.41894279 USDC</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Reserve Factor</div>
                            <div className="card__date">10%</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Collateral Factor</div>
                            <div className="card__date">60%</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Total Supply</div>
                            <div className="card__date">$4,621,334.42</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Total Borrow</div>
                            <div className="card__date">$2,097,636.88</div>
                        </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__details">
                        <div className="card__line">
                            <div className="card__category">Exchange Rate</div>
                            <div className="card__date">1 USDC = 49.724868 fUSDC</div>
                        </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
