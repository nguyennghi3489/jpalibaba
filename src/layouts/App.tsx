import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle";
import SharingModal from "components/SharingModal";
import { parseJwt, verifyToken } from "helpers";
import { useGetNotification } from "hooks/useGetNotification";
import moment from "moment";
import { recheckToken } from "provider/actions/authentication";
import { ModalType } from "provider/actions/modal";
import { notificationSlice } from "provider/actions/slice/notification";
import { AppState } from "provider/reducer";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  recheckToken: Function;
  isOpen: boolean;
  text: string;
  type: ModalType;
  updateNotification: Function;
}

const App = ({
  children,
  isOpen,
  recheckToken,
  history,
  updateNotification,
}: Props & RouteComponentProps) => {
  const { value } = useGetNotification();

  useEffect(() => {
    updateNotification(value);
  }, [value]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (verifyToken(token)) {
      recheckToken(token, history.location);
    } else {
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <>
      {children}
      {isOpen && <SharingModal />}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isOpen: state.modal.isOpen,
});

const ConnectedLoginPage = connect(
  mapStateToProps,
  {
    recheckToken,
    updateNotification: notificationSlice.actions.updateNotification,
  }
)(withRouter(App));

export default ConnectedLoginPage;
