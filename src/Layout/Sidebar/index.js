import React from "react"
import logoWhite from '@assets/images/icons/logo-white.svg';
import {sideBarToggle, sideBarToggleClose} from './sidebarIcons';
import { useSelector, useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import {handleMenuCollapsed} from '@redux/actions/layout';
import Routes from '@layouts/navigation';
import { Badge } from 'reactstrap';
const SideBar = () => {
   const {menuCollapsed} = useSelector(state => state.layout)
   const dispatch = useDispatch()
   const location = useLocation();
   
   const handleToggle = () => {
      dispatch(handleMenuCollapsed(!menuCollapsed));
   }
   
   const getNavItems = () => {
      return Routes ? Routes.map(route => {
         let title = route.title; 
         let showBadge = title !== "Stake"
         return (
         <a 
            className={location.pathname === route.navLink ? "sidebar__item active w-100" : "sidebar__item w-100"} 
            href={route.navLink} >
            <div className="sidebar__icon">
               <img src={route.icon} alt="home" />
            </div>
            <div className="sidebar__text">{title} {showBadge && <Badge color="warning" className="coming-soon-badge" pill>Coming Soon</Badge>}</div>
         </a>)
      }) : null
   }
   return (
      <div className={menuCollapsed ? "sidebar active": "sidebar" }>
         <div className="sidebar__head">
            <span className="sidebar__logo">
               <img src={logoWhite} alt="logo" />
            </span>
            <button className="sidebar__toggle" onClick={handleToggle}>
               {sideBarToggle}
            </button>
            <button className="sidebar__close">
               {sideBarToggleClose}
            </button>
            {/* <span className="">{sideBarToggleClose}</span> */}
         </div>
         <div className="sidebar__body">
               <nav className="sidebar__nav">
                  {getNavItems()}
               </nav>
         </div>
      </div>
   );
};

export default SideBar;