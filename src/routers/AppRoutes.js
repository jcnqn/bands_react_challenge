import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { DashboardRoutes } from './DashboardRoutes';
import { Login } from '../components/Login';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
  const isLogged = useSelector(state => state.auth.isLogged) || false;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={Login} isAuthenticated={isLogged} />

          <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={isLogged} />
        </Switch>
      </div>
    </Router>
  );
};
