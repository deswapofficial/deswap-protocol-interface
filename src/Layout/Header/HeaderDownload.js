import React from 'react'
import Dropdown from '@components/Dropdown'
import appStoreImg  from '@assets/images/icons/app-store.svg'
import googleStoreImg  from '@assets/images/icons/google-play.svg'
import qrImg  from '@assets/images/img/qr-code.png'

export default function HeaderDownload() {
    
    const svgComponent = (
        <svg className="icon icon-arrow-down-square" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.666 0h8.669C17.739 0 20 2.43 20 5.916v8.168C20 17.567 17.732 20 14.335 20H5.666C2.262 20 0 17.57 0 14.084V5.916C0 2.429 2.262 0 5.666 0zm8.669 1.5H5.666C3.116 1.5 1.5 3.235 1.5 5.916v8.168c0 2.681 1.615 4.416 4.166 4.416h8.669c2.544 0 4.165-1.739 4.165-4.416V5.916c0-2.681-1.615-4.416-4.165-4.416zM10 5.164a.75.75 0 0 1 .743.648l.007.102v6.355l2.466-2.476a.75.75 0 0 1 .977-.075l.084.073a.75.75 0 0 1 .075.976l-.072.085-3.748 3.764a.75.75 0 0 1-.98.072l-.002-.002a.754.754 0 0 1-.08-.069l-.001-.002-3.748-3.764a.75.75 0 0 1 .978-1.13l.084.072 2.467 2.478V5.914a.75.75 0 0 1 .75-.75z"></path>
        </svg>
    )
    const downloadsBody = (
        <div className="header__row">
            <div className="header__col">
                <div className="header__category">Downloads</div>
                <div className="header__downloads">
                    <a className="header__download" href="/app-store">
                        <img src={appStoreImg} alt="" />
                    </a>
                    <a className="header__download" href="/google-store">
                        <img src={googleStoreImg} alt="" />
                    </a>
                </div>
            </div>
            <div className="header__col">
                <div className="header__category">
                    Scan Code
                </div>
                <div className="header__code">
                    <img src={qrImg} alt="" />    
                </div>
            </div>
        </div>
    )
    return (
        <Dropdown
            headerItemClass="header__item header__item_download"
            headerBtnSvg={svgComponent}
            headerBody={downloadsBody}
        />
        // <div className={showItemDownload ? "header__item header__item_download active" : "header__item header__item_download"}>
        //     <button className="header__head" onClick={handletoogleItemDownload}>
            
        //     </button>
        //     <div className="header__body">
            
        //     </div>
        // </div>
    )
}
