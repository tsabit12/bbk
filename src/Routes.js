import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { 
  RouteWithLayout,
  RouteBbkLayout,
  RouteBbkLoggedLayout
} from './components';

import { 
  Login as LoginLayout,
  Bbk as BbkLayout
} from './layouts';

import {
  Masuk as MasukView,
  SignIn as SignInView
} from "./absensi"

import {
  NotFound as NotFoundView
} from './views';


const Routes = () => {
  return (
    <Switch>
      <RouteBbkLayout
        component={MasukView}
        exact
        layout={BbkLayout}
        path="/"
      />
      <RouteBbkLoggedLayout
        component={SignInView}
        exact
        layout={LoginLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={LoginLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
