import React from "react";
import { connect } from "react-redux";
import { recheckToken } from "provider/actions/authentication";
import { ModalType } from "provider/actions/modal";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppState } from "provider/reducer";
import SharingModal from "components/SharingModal";

interface Props {
  children: React.ReactNode;
  recheckToken: Function;
  isOpen: boolean;
  text: string;
  type: ModalType;
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
  { recheckToken }
)(withRouter(App));

export default ConnectedLoginPage;
