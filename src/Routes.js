/* eslint-disable react/no-array-index-key */
import React, {
    lazy,
    Suspense,
    Fragment
} from 'react';
import {
    Switch,
    Redirect,
    Route,
    HashRouter
} from 'react-router-dom';
import Layout from './layouts';
import LoadingScreen from './components/LoadingScreen';

const routesConfig = [
    {
        exact: true,
        path: '/',
        component: () => <Redirect to="/dashboard" />
    },
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('./views/pages/Error404View'))
    },
    {
        exact: true,
        path: '/dashboard',
        layout: Layout,
        component: lazy(() => import('./views/Dashboard'))
    },
    {
        exact: true,
        path: '/daw',
        layout: Layout,
        component: lazy(() => import('./views/Daw'))
    },
    {
        exact: true,
        path: '/prices',
        layout: Layout,
        component: lazy(() => import('./views/Prices'))
    },
    {
        exact: true,
        path: '/wallets',
        layout: Layout,
        component: lazy(() => import('./views/Wallets'))
    },
    {
        exact: true,
        path: '/vote',
        layout: Layout,
        component: lazy(() => import('./views/Vote'))
    },
];

const renderRoutes = (routes) => (routes ? (
    <Suspense fallback={<LoadingScreen />}>
        <HashRouter>
            <Switch>
                {routes.map((route, i) => {
                    const Guard = route.guard || Fragment;
                    const Layout = route.layout || Fragment;
                    const Component = route.component;

                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Guard>
                                    <Layout>
                                        {route.routes
                                            ? renderRoutes(route.routes)
                                            : <Component {...props} />}
                                    </Layout>
                                </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </HashRouter>
    </Suspense>
) : null);

function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;
