import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HeaderSearch from './HeaderSearch'
import HeaderNotification from './HeaderNotification'
import HeaderDownload from './HeaderDownload'
import HeaderLanguge from './HeaderLanguge'
import HeaderConnect from './HeaderConnect'
import {handleMenuCollapsed} from '@redux/actions/layout';
import {sideBarToggle} from '../Sidebar/sidebarIcons'

import logoPath from '@assets/images/img/Thunder-move.png'

export default function Header() {
  const {menuCollapsed} = useSelector(state => state.layout)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(handleMenuCollapsed(!menuCollapsed));
  }

  return (
    <div className="header">
        <HeaderSearch />
        <a className="header__logo" href="index.html">
          <img src={logoPath} alt="" />
        </a>
        <div className="header__group">
//           <HeaderNotification />
//           <HeaderDownload />
//           <HeaderLanguge />
          <HeaderConnect />
        </div>
        <button className="header__toggle" onClick={handleToggle}>
          {sideBarToggle}
        </button>
    </div>
  )
}
