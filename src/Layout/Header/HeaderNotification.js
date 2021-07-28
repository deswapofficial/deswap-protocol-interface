import React from 'react'
import Dropdown from '@components/Dropdown'
import svgPaper from '@assets/images/icons/paper.svg'

export default function HeaderNotification() {
    const notificationBody = (
        <div className="header__notifications">
            <div className="header__notification">
                <div className="header__icon">
                    <img src={svgPaper} alt="" />
                </div>
                <div className="header__details">
                    <div className="header__info">
                        Your Loan is successfully processed
                    </div>
                    <div className="header__line" >
                        <div className="header__time">24m ago</div>
                        <div className="header__status"></div>
                    </div>
                </div>
            </div>
        </div>
    )

    const svgComponent = (
        <svg className="icon icon-notification" viewBox="0 0 20 22">
            <path d="M12.837 19.268a.75.75 0 0 1 .114 1.055 3.59 3.59 0 0 1-.649.627 3.84 3.84 0 0 1-2.798.774 3.81 3.81 0 0 1-2.536-1.404.75.75 0 0 1 1.173-.935 2.31 2.31 0 0 0 1.538.849 2.345 2.345 0 0 0 1.715-.479 2.14 2.14 0 0 0 .388-.374.75.75 0 0 1 1.055-.114zM10.039.25c3.664 0 7.027 2.626 7.364 6.112l.01.131.014.264.006.301v.723l.005.332.01.211.048.201c.153.56.422 1.084.791 1.539l.164.191.067.085a4.28 4.28 0 0 1 .73 2.23l-.001.434a4.355 4.355 0 0 1-1.05 2.683 5.242 5.242 0 0 1-3.315 1.599 45.8 45.8 0 0 1-9.766.001 5.328 5.328 0 0 1-3.359-1.639A4.34 4.34 0 0 1 .75 12.789l.001-.256a4.35 4.35 0 0 1 .726-2.197l.073-.093a4.12 4.12 0 0 0 1.01-1.957l-.016.065.003-.563.013-.652.046-.778C2.933 2.878 6.295.25 9.961.25zm0 1.5h-.078c-2.936 0-5.612 2.091-5.86 4.742l-.031.454-.017.502-.007.988-.016.152a5.62 5.62 0 0 1-1.377 2.67l.044-.051.009-.01-.096.157c-.18.32-.295.667-.341 1.01l-.019.205v.235a2.827 2.827 0 0 0 .625 1.844 3.81 3.81 0 0 0 2.392 1.145 44.36 44.36 0 0 0 9.467-.001 3.737 3.737 0 0 0 2.347-1.108 2.83 2.83 0 0 0 .667-1.906l.001-.176a2.76 2.76 0 0 0-.473-1.422l.017.027-.15-.174a5.702 5.702 0 0 1-1.102-2.147l-.071-.296-.014-.1-.007-.107-.013-.324-.003-.972-.002-.172-.012-.286-.01-.131c-.257-2.658-2.935-4.749-5.87-4.749z"></path>
        </svg>
    )
    
    return (
        <Dropdown
            headerItemClass="header__item header__item_notifications"
            headerBtnSvg={svgComponent}
            headerBody={notificationBody}
        />
    )
}
