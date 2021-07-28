import React from 'react'
import Dropdown from '@components/Dropdown'
export default function HeaderLanguge() {

    // const svgComponent = (<></>)
    const headerBody = (
    <div className="header__lang">
        <div className="header__cell">
            <a className="header__link active" href="test">
                <span className="header__flag">🇺🇸</span> 
                English
            </a>
            <a className="header__link" href="test">
                <span className="header__flag">🇨🇳</span> 中文
            </a>
            <a className="header__link" href="test">
                <span className="header__flag">🇪🇸</span> Española
            </a>
            <a className="header__link" href="test">
                <span className="header__flag">🇫🇷</span> Français
            </a>
            <a className="header__link" href="test">
                <span className="header__flag">🇻🇳</span> Tiếng Việt
            </a>
        </div>
    <div className="header__cell">
        <a className="header__link active" href="test">
            USD
        </a>
        <a className="header__link" href="test">
            EUR
        </a>
        <a className="header__link" href="test">
            JPY
        </a>
        <a className="header__link" href="test">
            BTC
        </a>
    </div>
</div>)
    return (
        <Dropdown
            headerItemClass="header__item header__item_lang"
            headerBtnSvg="Eng/USD"
            headerBody={headerBody}
        />
    )
}