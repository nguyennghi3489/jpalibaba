import { roleSelector, tokenSelector } from "provider/selectors/authentication";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

function RouteWithAuth({ path, component, token }) {
  if (!token) return null;
  return <Route path={path} component={component} />;
}

const mapStateToProps = (state) => ({
  role: roleSelector(state),
  token: tokenSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(RouteWithAuth);
