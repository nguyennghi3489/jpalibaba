import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

function RouteWithAuth({ path, component, token }) {
  if (!token) return null;
  return <Route path={path} component={component} />;
}

const mapStateToProps = state => ({
  role: state.role,
  token: state.token
});

export default connect(
  mapStateToProps,
  null
)(RouteWithAuth);
