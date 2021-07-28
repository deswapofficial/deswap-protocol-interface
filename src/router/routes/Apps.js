import { lazy } from 'react'
// import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../../Views/Dashboard'))
  },
  {
    path: "/daw",
    exact: true,
    component: lazy(() => import('../../Views/Daw'))
  },
  {
    path: "/prices",
    exact: true,
    component: lazy(() => import('../../Views/Prices'))
  },
  {
    path: '/vault',
    exact: true,
    component: lazy(() => import('../../Views/Vault'))
  },
  {
    path: '/vote',
    exact: true,
    component: lazy(() => import('../../Views/Vote'))
  }
]

export default AppRoutes
