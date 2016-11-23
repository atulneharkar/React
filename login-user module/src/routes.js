import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingPage from './components/landingPage';
import DisplayUsers from './components/admin/displayUsers';
import Login from './components/auth/login';
import Register from './components/admin/register';
import EditUser from './components/admin/editUser';
import RegisterSuccessful from './components/admin/registerSuccessful';
import Logout from './components/auth/logout';
import RequireAuth from './components/auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />

    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="editUser/:userId" component={EditUser} />
    <Route path="registerSuccessful" component={RegisterSuccessful} />
    <Route path="logout" component={Logout} />
    <Route path="displayUsers" components={RequireAuth(DisplayUsers)} />
  </Route>
);
