import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from '@redux/storeConfig/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@assets/css/app.scss';

import Spinner from "@components/Spinner"

const LazyApp = lazy(() => import('./App'))


ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
        <ToastContainer 
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
      </Suspense>
    </Provider>,
  document.getElementById('root')
);
