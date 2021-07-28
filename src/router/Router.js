// ** React Imports
import { Suspense, lazy } from 'react'

// ** Utils

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Routes & Default Routes
import { Routes } from './routes'

// ** Layouts
// import BlankLayout from '@layouts/BlankLayout'
import MainLayout from  '@layouts/MainLayout';
const isUserLoggedIn = () => {
  return true;
}
const Router = () => {

  // ** All of the available layouts
  // const Layouts = { BlankLayout, MainLayout }
  const Layouts = { MainLayout }
  
  // ** Current Active Item
  // const currentActiveItem = null

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      Routes.forEach(route => {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || (route.layout === undefined )) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const NotAuthorized = lazy(() => import('@views/misc/NotAuthorized'))
  // 

  // ** Init Error Component
  const Error = lazy(() => import('@views/misc/Error'))

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const FinalRoute = props => {
    const route = props.route

    if (
      (!isUserLoggedIn() && route.meta === undefined) ||
      (!isUserLoggedIn() && route.meta && !route.meta.authRoute && !route.meta.publicRoute)
    ) {
      /**
       ** If user is not Logged in & route meta is undefined
       ** OR
       ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
       ** Then redirect user to login
       */
      return <Redirect to='/login' />
    } else {
      // ** If none of the above render component
      return <route.component {...props} />
    }
  }

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout]

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)
      const routerProps = {}

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={props => {
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta
                      })
                      return (
                        <Suspense fallback={null}>                          
                          <FinalRoute route={route} {...props} />
                        </Suspense>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* Not Auth Route */}
        <Route
          exact
          path='/misc/not-authorized'
          render={props => (
            <Layouts.BlankLayout>
              <NotAuthorized />
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}

        {/* NotFound Error page */}
        <Route path='*' component={Error} />
      </Switch>
    </AppRouter>
  )
}

export default Router
