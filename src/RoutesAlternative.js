import React, {
  lazy,
  Suspense
} from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthRoute from './components/AuthRoute';
import GuestRoute from './components/GuestRoute';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect
          exact
          from="/"
          to="/home"
        />
        <Route
          exact
          path="/404"
          component={lazy(() => import('./views/pages/Error404View'))}
        />
        <GuestRoute
          exact
          path="/login"
          component={lazy(() => import('./views/auth/LoginView'))}
        />
        <Route
          exact
          path="/login-unprotected"
          component={lazy(() => import('./views/auth/LoginView'))}
        />
        <GuestRoute
          exact
          path="/register"
          component={lazy(() => import('./views/auth/RegisterView'))}
        />
        <Route
          exact
          path="/register-unprotected"
          component={lazy(() => import('./views/auth/RegisterView'))}
        />
        <AuthRoute
          path="/app"
          render={(props) => (
            <DashboardLayout {...props}>
              <Suspense fallback={<LoadingScreen />}>
                <Switch>
                  <Redirect
                    exact
                    from="/app"
                    to="/app/reports/dashboard"
                  />
                  <Route
                    exact
                    path="/app/account"
                    component={lazy(() => import('./views/pages/AccountView'))}
                  />
                  <Route
                    exact
                    path="/app/reports/dashboard"
                    component={lazy(() => import('./views/reports/DashboardView'))}
                  />
                  <Route
                    exact
                    path="/app/reports/dashboard-alternative"
                    component={lazy(() => import('./views/reports/DashboardAlternativeView'))}
                  />
                  <Redirect
                    exact
                    from="app/reports"
                    to="/app/reports/dashboard"
                  />
                  <Route
                    exact
                    path="/app/management/customers"
                    component={lazy(() => import('./views/management/CustomerListView'))}
                  />
                  <Route
                    exact
                    path="/app/management/customers/:id"
                    component={lazy(() => import('./views/management/CustomerDetailsView'))}
                  />
                  <Route
                    exact
                    path="/app/management/customers/:id/edit"
                    component={lazy(() => import('./views/management/CustomerEditView'))}
                  />
                  <Route
                    exact
                    path="/app/management/products"
                    component={lazy(() => import('./views/management/ProductListView'))}
                  />
                  <Route
                    exact
                    path="/app/management/products/create"
                    component={lazy(() => import('./views/management/ProductCreateView'))}
                  />
                  <Route
                    exact
                    path="/app/management/orders"
                    component={lazy(() => import('./views/management/OrderListView'))}
                  />
                  <Route
                    exact
                    path="/app/management/orders/:id"
                    component={lazy(() => import('./views/management/OrderDetailsView'))}
                  />
                  <Route
                    exact
                    path="/app/management/invoices"
                    component={lazy(() => import('./views/management/InvoiceListView'))}
                  />
                  <Route
                    exact
                    path="/app/management/invoices/:id"
                    component={lazy(() => import('./views/management/InvoiceDetailsView'))}
                  />
                  <Route
                    exact
                    path="/app/calendar"
                    component={lazy(() => import('./views/calendar/CalendarView'))}
                  />
                  <Route
                    exact
                    path="/app/kanban"
                    component={lazy(() => import('./views/kanban/KanbanView'))}
                  />
                  <Route
                    path={[
                      '/app/chat/new',
                      '/app/chat/:threadKey'
                    ]}
                    component={lazy(() => import('./views/chat/ChatView'))}
                  />
                  <Route
                    path={[
                      '/app/mail/label/:customLabel/:mailId?',
                      '/app/mail/:systemLabel/:mailId?'
                    ]}
                    component={lazy(() => import('./views/mail/MailView'))}
                  />
                  <Route
                    exact
                    path="/app/projects/overview"
                    component={lazy(() => import('./views/projects/OverviewView'))}
                  />
                  <Route
                    exact
                    path="/app/projects/browse"
                    component={lazy(() => import('./views/projects/ProjectBrowseView'))}
                  />
                  <Route
                    exact
                    path="/app/projects/create"
                    component={lazy(() => import('./views/projects/ProjectCreateView'))}
                  />
                  <Route
                    exact
                    path="/app/projects/:id"
                    component={lazy(() => import('./views/projects/ProjectDetailsView'))}
                  />
                  <Route
                    exact
                    path="/app/social/feed"
                    component={lazy(() => import('./views/social/FeedView'))}
                  />
                  <Route
                    exact
                    path="/app/social/profile"
                    component={lazy(() => import('./views/social/ProfileView'))}
                  />
                  <Route
                    exact
                    path="/app/extra/charts/apex"
                    component={lazy(() => import('./views/extra/charts/ApexChartsView'))}
                  />
                  <Route
                    exact
                    path="/app/extra/forms/formik"
                    component={lazy(() => import('./views/extra/forms/FormikView'))}
                  />
                  <Route
                    exact
                    path="/app/extra/forms/redux"
                    component={lazy(() => import('./views/extra/forms/ReduxFormView'))}
                  />
                  <Route
                    exact
                    path="/app/extra/editors/draft-js"
                    component={lazy(() => import('./views/extra/editors/DraftEditorView'))}
                  />
                  <Route
                    exact
                    path="/app/extra/editors/quill"
                    component={lazy(() => import('./views/extra/editors/QuillEditorView'))}
                  />
                  <Redirect to="/404" />
                </Switch>
              </Suspense>
            </DashboardLayout>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
