import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  // props means variables passed by the parent component.
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/Login" />
    }
  />
);

export default PrivateRoute;
