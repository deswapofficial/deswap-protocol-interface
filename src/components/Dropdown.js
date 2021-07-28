import React, { useState } from 'react'

export default function Dropdown({headerItemClass, headerBtnSvg, headerBody}) {
    const [showItem, setShowItem] = useState(false)

    const handletoogleItem = () => {
        setShowItem(!showItem)
    }
    return (
        <div className={showItem? `${headerItemClass} active`: headerItemClass}>
            <button className="header__head active" onClick={handletoogleItem}>
                {headerBtnSvg}
            </button>
            <div className="header__body">
                {headerBody}
            </div>
        </div>
    )
}
