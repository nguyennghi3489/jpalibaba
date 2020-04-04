import React, { Component } from "react";
import { connect } from "react-redux";
import { recheckToken } from "actions/index";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  recheckToken: Function;
}

class App extends React.Component<Props & RouteComponentProps> {
  componentWillMount() {
    const { recheckToken, history } = this.props;
    const token = localStorage.getItem("token");

    if (token) {
      recheckToken(token, history.location);
    }
  }
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

const ConnectedLoginPage = connect(
  null,
  { recheckToken }
)(withRouter(App));

export default ConnectedLoginPage;
