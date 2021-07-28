import React from 'react';
import PropTypes from 'prop-types';
import Header from '@layouts/Header/index';
import Sidebar from '@layouts/Sidebar/index';
import Spinner from "@components/Spinner"
import { useSelector } from 'react-redux'

function MainLayout({children }) {
  const {menuCollapsed, loading} = useSelector(state => state.layout)
  return (
      <div className="dark">        
          <Spinner loading={loading} /> : 
          <div className={menuCollapsed ? "page wide" : "page"}>
            <Sidebar />
            <div className="page__content">
              <Header />
              <div className="page__container">
                {children}
              </div>
            </div>
          </div>
      </div>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  isHeader: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

MainLayout.defaultProps = {
  title: '',
  isHeader: true,
  children: null
};

export default MainLayout;
