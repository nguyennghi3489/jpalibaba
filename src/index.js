import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "reduxStore";

import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";
import App from "layouts/App";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/rtl" component={RtlLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={AuthLayout} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
