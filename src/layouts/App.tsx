import React, { Component } from "react";
import { connect } from "react-redux";
import { recheckToken } from "actions/authentication";
import { showModal, ModalType } from "actions/modal";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppState } from "reducer";
import SharingModal from "components/SharingModal";

interface Props {
  children: React.ReactNode;
  recheckToken: Function;
  isOpen: boolean;
  text: string;
  type: ModalType;
  showModal: Function;
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
    const { children, isOpen } = this.props;
    return (
      <>
        {children}
        {isOpen && <SharingModal />}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isOpen: state.modal.isOpen,
});

const ConnectedLoginPage = connect(
  mapStateToProps,
  { recheckToken, showModal }
)(withRouter(App));

export default ConnectedLoginPage;
