import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "reduxStore";

import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={history}>
      <Switch>
        <Route path="/rtl" component={RtlLayout} />
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Redirect from="/" to="/auth/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
